/**
 * @name SocialMedia.tsx
 * @type Component
 */

import {cn} from "../../lib/utils.ts";
import "../style/socialMedia.css";

type Props = {
  svgSrc: string;
  className?: string;
  num?: string;
  href?: string;
  alt?: string;
};

/**
 * @SocialMedia
 * @description Icon redirecting to a link one of my social medias
 * @param svgSrc Static image
 * @param className Additional class to apply to the button
 * @param num Badge number for identification
 * @param href Corresponding link
 * @param alt Corresponding alt text
 */
function SocialMedia({
  svgSrc,
  className = "",
  num = "0",
  href = "#",
  alt = "Social media icon",
}: Props) {
  return (
    <a href={href} target={href === "#" ? "" : "_blank"}>
      <button
        className={cn(
          "p-social-media-badge animate-shimmer bg-white/50 bg-size-[200%_100%] transition-colors",
          className,
        )}
        data-num={parseInt(num)}
        id={`social-media-badge-${num}`}
      >
        <img src={svgSrc} alt={alt} />
      </button>
    </a>
  );
}

export default SocialMedia;
