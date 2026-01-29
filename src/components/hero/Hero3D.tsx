export default function Hero3D() {
  return (
    <div className="relative flex justify-center md:justify-end md:pl-16 overflow-visible">

      {/* Subtle depth glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
            w-[220px] h-[220px]
            sm:w-[260px] sm:h-[260px]
            md:w-[580px] md:h-[580px]
            rounded-full bg-white/5 blur-3xl
          "
        />
      </div>

      {/* Robot */}
      <div
        className="
          relative z-10
          overflow-visible
          w-[180px] h-[180px]
          sm:w-[220px] sm:h-[220px]
          md:w-[620px] md:h-[620px]
        "
      >
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-DXztYuNxq29vLgASz6yZFinp/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

    </div>
  );
}
