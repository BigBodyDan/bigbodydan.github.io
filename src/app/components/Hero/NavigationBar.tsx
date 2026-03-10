/**
 * @name NavigationBar.tsx
 * @type Component
 */

import {type IParallax, ParallaxLayer } from "@react-spring/parallax";
import type {RefObject} from "react";
import {cn} from "../../../lib/utils.ts";

import texts from "../../../data/data-texts.tsx";
import "../../style/navigationBar.css";

type Props = {
  speed: number;
  parallaxRef: RefObject<IParallax | null>;
};

type PropsAgain = {
  text: string;
  className?: string;
  onClick?: () => void;
};

/**
 * @NavigationBarText
 * @description Text that will serve as a clickable link to redirect to other sections
 * @param text Text that will be displayed
 * @param className Additional class to apply to the button
 * @param onClick Function that will be executed when the text is clicked
 */
function NavigationBarText({ text, className = "", onClick = () => {},}:PropsAgain) {
  return (
      <span
          onClick={onClick}
          className={cn(
              "p-navigation-bar-text px-4 py-1 text-end text-3xl text-white/90 lg:px-12 lg:text-4xl",
              className,
          )}
      >
      {text}
    </span>
  );
}

/**
 * @NavigationBar
 * @description Navigation bar containing links to go to other sections of the portfolio, on its own parallax layer
 * @param speed Speed to pass to the parallax layer
 * @param parallaxRef Reference of the global parallax element
 */
function NavigationBar({ speed, parallaxRef }: Props) {
  const scrollToSection = (sectionOffset: number) => {
    parallaxRef.current?.scrollTo(sectionOffset);
  };

  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-end"
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex flex-col pt-4 lg:pt-8"
      >
        {/* About */}
        <NavigationBarText
          text={texts.hero.nav.about}
          onClick={() => scrollToSection(1)}
        ></NavigationBarText>

        {/* Projects */}
        <NavigationBarText
          text={texts.hero.nav.projects}
          onClick={() => scrollToSection(2)}
        ></NavigationBarText>

        {/* Skills */}
        <NavigationBarText
          text={texts.hero.nav.skills}
          onClick={() => scrollToSection(3)}
        ></NavigationBarText>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
