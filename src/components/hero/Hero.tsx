import HeroText from "./HeroText";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
<section
  id="top"
  className="min-h-screen bg-[#0B0D10] flex items-center"
>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Robot — FIRST on mobile */}
    <div className="order-1 md:order-2">
      <Hero3D />
    </div>

    {/* Text — SECOND on mobile */}
    <div className="order-2 md:order-1">
      <HeroText />
    </div>

  </div>
</section>

  );
}

