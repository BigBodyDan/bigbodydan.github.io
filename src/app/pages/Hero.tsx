/**
 * @name Hero.tsx
 * @type Page
 */

import type {IParallax} from "@react-spring/parallax";
import type {RefObject} from "react";

import BackgroundLayer from "../components/Hero/BackgroundLayer.tsx";
import BackgroundColor from "../components/Hero/BackgroundColor.tsx";
import SocialMediaBar from "../components/Hero/SocialMediaBar.tsx";
import NavigationBar from "../components/Hero/NavigationBar.tsx";
import Name from "../components/Hero/Name.tsx";
import ScrollDownArrow from "../components/Hero/ScrollDownArrow.tsx";

import img4_Background from "@/img/background_layer/4_Background.webp";
import img3_Ground from "@/img/background_layer/3_Ground.webp";
import img2_Ground from "@/img/background_layer/2_Ground.webp";
import img1_Tree from "@/img/background_layer/1_Trees.webp";
import texts from "../../data/data-texts.tsx";

type Props = {
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * @Hero
 * @description Hero Page
 * @param parallaxRef Global parallax element reference
 */
function Hero({ parallaxRef }: Props) {

  return (
    <div>
      {/* Layers for the background */}
      <BackgroundColor color="#1A0B2E" offset={0} />

      <BackgroundLayer speed={-0.9} path={img4_Background} />
      <BackgroundLayer speed={-0.55} path={img3_Ground} />
      <BackgroundLayer speed={-0.2} path={img2_Ground} />
      <BackgroundLayer speed={-1} path={img1_Tree} />

      <SocialMediaBar speed={-1} />

      <NavigationBar speed={-0.95} parallaxRef={parallaxRef} />

      {/* Hi */}
      <Name
        speed={-5}
        text={texts.hero.greeting}
        className="-translate-y-15 text-4xl text-white/70 lg:-translate-x-57.5 lg:-translate-y-20"
      />

      {/* Name */}
      <Name
        speed={-0.625}
        text={texts.hero.name}
        className="-translate-y-5 text-6xl text-white/70 lg:-translate-y-7.5 lg:text-8xl"
      />

      {/* Arrows to entice scrolling */}
      <ScrollDownArrow parallaxRef={parallaxRef} />
    </div>
  );
}

export default Hero;
