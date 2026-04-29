"use client";

import { useEffect, useState } from "react";

const LOAD_DURATION = 2200;
const EXIT_DURATION = 500;
type LoaderWindow = typeof window & { __corelabsLoaderComplete?: boolean };

export default function LoadingScreen() {
  const [progress, setProgress] = useState(1);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let frameId = 0;
    let exitTimer: ReturnType<typeof setTimeout>;
    const startedAt = performance.now();

    const tick = (time: number) => {
      const elapsed = time - startedAt;
      const nextProgress = Math.min(
        100,
        Math.max(1, Math.round((elapsed / LOAD_DURATION) * 100)),
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      setIsLeaving(true);
      exitTimer = setTimeout(() => {
        (window as LoaderWindow).__corelabsLoaderComplete = true;
        window.dispatchEvent(new Event("corelabs-loader-complete"));
        setIsVisible(false);
      }, EXIT_DURATION);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(exitTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed left-0 top-0 z-[2147483647] flex h-[100dvh] min-h-screen w-screen items-center justify-center bg-[#030303] text-[#d7d7d7] transition-opacity duration-500 ${
        isLeaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="flex w-full max-w-[280px] flex-col items-center px-6 text-center">
        <div className="font-mono text-5xl font-semibold tabular-nums text-[#eeeeee]">
          {progress}
        </div>
        <div className="mt-6 h-px w-full overflow-hidden bg-white/14">
          <div
            className="h-full bg-[#d7d7d7] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.32em] text-[#bdbdbd]">
          Loading
        </p>
      </div>
    </div>
  );
}
