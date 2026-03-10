/**
 * @name BackgroundLayer.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  speed: number;
  path: string;
};

/**
 * @BackgroundColor
 * @description A solid background color that will cover the entire page
 * @param speed relative speed that layer should scroll
 * @param path file path to image
 */
function BackgroundLayer({ speed, path }: Props) {
  return (
    <ParallaxLayer
      className="pointer-events-none flex flex-col items-center"
      offset={0}
      speed={speed}
    >
      <div className="relative h-screen w-full">
        <img
          src={path}
          alt=""
          className="object-cotain"
        />
      </div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
