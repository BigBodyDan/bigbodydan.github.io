/**
 * @name BackgroundColor.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  color: string;
  offset: number;
};

/**
 * @BackgroundColor
 * @description A solid background color that will cover the entire page
 * @param color Color to apply to the background
 * @param offset Offset to apply to the parallax layer
 */
function BackgroundColor({ color, offset }: Props) {
  return (
    <ParallaxLayer
      offset={offset}
      className="min-h-150 w-full"
      style={{ backgroundColor: color }}
    ></ParallaxLayer>
  );
}

export default BackgroundColor;
