/**
 * @name Name.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";
import {cn} from "../../../lib/utils.ts";

type Props = {
  speed: number;
  text: string;
  className?: string;
};

/**
 * @Name
 * @description Displays text in the center of the screen on a parallax layer
 * @param speed Speed to pass to the parallax layer
 * @param text Text to display
 * @param className Additional class to apply to the button
 * 
 */
function Name({ speed, text, className = "" }: Props) {
  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-center"
    >
      <p
        className={cn(
          "flex items-center transition-all duration-200 ease-in-out",
          className,
        )}
      >
        <span className="pointer-events-auto">{text}</span>
      </p>
    </ParallaxLayer>
  );
}

export default Name;
