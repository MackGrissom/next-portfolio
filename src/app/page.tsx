import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/marquee";
import { SelectedWork } from "@/components/sections/selected-work";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee text="Selected Work" />
      <SelectedWork />
      <Marquee text="About Me" />
      <About />
      <Services />
      <Marquee text="Testimonials" />
      <Testimonials />
      <Contact />
    </>
  );
}
