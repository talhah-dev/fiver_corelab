const ticks = Array.from({ length: 72 }, (_, index) => index);

export default function CorelabsStepLine() {
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden bg-white pb-14 sm:pt-12 pt-1 sm:pb-18"
    >
      <div className="relative flex h-12 items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="corelabs-step-line-track flex w-max">
          {[0, 1].map((groupIndex) => (
            <div
              className="flex shrink-0 items-center gap-4 pr-5 sm:gap-5 sm:pr-7"
              key={groupIndex}
            >
              {ticks.map((tick) => {
                const isStrong = tick % 2 === 0;

                return (
                  <span
                    className={`block w-px rounded-full ${
                      isStrong
                        ? "h-7 bg-[#0F2D0F]"
                        : "h-4 bg-[#0F2D0F]/10"
                    }`}
                    key={`${groupIndex}-${tick}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
