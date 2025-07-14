import Content from "@/components/Content";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />

      <HeroSlider />

      <Content />
    </div>
  );
}
