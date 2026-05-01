"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const LOAD_DURATION = 2200;
const EXIT_DURATION = 500;
type LoaderWindow = typeof window & { __corelabsLoaderComplete?: boolean };

function subscribeToClientMount(onStoreChange: () => void) {
  const frameId = requestAnimationFrame(onStoreChange);

  return () => {
    cancelAnimationFrame(frameId);
  };
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function LoadingScreen() {
  const hasMounted = useSyncExternalStore(
    subscribeToClientMount,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [progress, setProgress] = useState(1);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

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
  }, [hasMounted]);

  if (!hasMounted || !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed left-0 top-0 z-[2147483647] flex h-[100dvh] min-h-screen w-screen items-center justify-center bg-[#071607] text-[#D9FF8A] transition-opacity duration-500 ${
        isLeaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="flex w-full max-w-[220px] flex-col items-center px-6 text-center">
        <div className="font-mono text-5xl font-semibold tabular-nums text-[#f7f9f2]">
          {progress}
        </div>
        <div className="mt-3 h-px w-full overflow-hidden bg-[#D9FF8A]/18">
          <div
            className="h-full bg-[#D9FF8A]/30 transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs font-normal uppercase tracking-[0.08em] text-[#D9FF8A]/80">
          Loading
        </p>
      </div>
    </div>
  );
}
