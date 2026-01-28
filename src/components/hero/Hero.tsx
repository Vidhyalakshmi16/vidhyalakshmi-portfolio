import HeroText from "./HeroText";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0B0D10]">
      <HeroScene />
      <HeroText />
    </section>
  );
}
