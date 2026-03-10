/**
 * @name ScrollDownArrow.tsx
 * @type Component
 */

import {type IParallax, ParallaxLayer } from "@react-spring/parallax";
import {type RefObject, useEffect, useState } from "react";
import {cn} from "../../../lib/utils.ts";

import chevronImg from "../../../img/arrow/chevron.svg";
import "../../style/scrollDownArrow.css"

type Props = {
  margin_bottom?: number;
  margin_side?: number;
  scrollThreshold?: number;
  parallaxRef: RefObject<IParallax | null>;
};

type PropsAgain = {
  className?: string;
};

/**
 * @Chevron
 * @description Simple chevron.
 * @param className Additional class to apply to the button
 */
function Chevron({ className = " " }: PropsAgain) {
  return (
    <img
      src={chevronImg}
      alt=""
      className={cn(className, "rotate-90 w-7 h-7")}
      
    />
  );
}

/**
 * @ThreeChevron
 * @description Three chevrons one above another
 * @param className Additional class to apply to the button
 */
function ThreeChevron({ className = " " }: PropsAgain) {
  return (
    <div
      className={cn(
        "p-fluid-anim absolute bottom-0 px-7 py-5 sm:px-12 sm:py-7",
        className,
      )}
    >
      <Chevron className="chevron-1" />
      <Chevron className="chevron-2" />
      <Chevron className="chevron-3" />
    </div>
  );
}

/**
 * @ScrollDownArrow
 * @description On the right and left sides of the bottom of the screen, animated chevrons indicate to the user that they can scroll down
 * @param scrollThreshold Threshold before the chevrons disappear
 * @param parallaxRef Reference to the global parallax element
 */
function ScrollDownArrow({ scrollThreshold = 30, parallaxRef }: Props) {

  // Defines whether the threshold should be visible or not
  const [isVisible, setIsVisible] = useState(true);

  // Executed only at the beginning
  useEffect(() => {
    /**
     * Check the scroll position and set visible to true only if the threshold is not exceeded
     */
    const checkScrollPosition = () => {
      if (parallaxRef.current) {
        const currentScrollPos = parallaxRef.current.current;
        setIsVisible(currentScrollPos < scrollThreshold);
      }
    };

    // Call this function every second
    const intervalId = setInterval(checkScrollPosition, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [scrollThreshold, parallaxRef]);

  return (
    <ParallaxLayer className="pointer-events-none">
      <div
        className={cn(
          "p-fluid-anim relative h-dvh",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <ThreeChevron className="left-0" />
        <ThreeChevron className="right-0" />
      </div>
    </ParallaxLayer>
  );
}

export default ScrollDownArrow;
