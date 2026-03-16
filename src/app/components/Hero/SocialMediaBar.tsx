/**
 * @name SocialmediaBar.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import SocialMedia from "../SocialMedia.tsx";

import githubIcon from "../../../img/social_media/github-icon.svg";
import linkedinIcon from "../../../img/social_media/linkedin-icon.svg";
import mailIcon from "../../../img/social_media/mail-icon.svg";
import texts from "../../../data/data-texts.tsx";

type Props = {
  speed: number;
};

/**
 * @SocialMediaBar
 * @description a social media interface that will contain links to access it,
 * with a bar just below that follows the mouse cursor, and text describing the hover effect,
 * in its own parallax layer
 * @param speed: Speed to pass to the parallax layer
 */
function SocialMediaBar({ speed }: Props) {
  /**
   * Will implement the tracking bar below the badges
   * as well as the text that describes where the mouse cursor is pointing
   */
  function headerSetup() {
    // Retrieving the bar, text below bar, and table containing social media icons
    const selector = document.getElementById("social-media-selector");
    const selectorText = document.getElementById("social-media-selector-text",);
    const allSocialMedia = document.getElementsByClassName("p-social-media-badge",);

    // We iterate over each badge
    for (const socialMedia of Array.from(allSocialMedia) as HTMLElement[]) {
      // When entering a hover state
      socialMedia.addEventListener("mouseenter", () => {
        const num = parseInt(socialMedia.dataset.num ?? "0");
        const offset = socialMedia?.offsetLeft ?? 0;
        const offset_first = document.getElementById(`social-media-badge-${1}`)?.offsetLeft ?? 0;

        // Adjusting the bar below the relevant badge
        if (selector) {
          selector.style.width = `${socialMedia.clientWidth}px`;
          selector.style.left = `${offset - offset_first}px`;
        }

        // Adjusting the text with the appropriate content
        if (selectorText) {
          switch (num) {
            case 1:
              selectorText.textContent = texts.social.git;
              break;
            case 2:
              selectorText.textContent = texts.social.linkedin;
              break;
            case 3:
              selectorText.textContent = texts.social.mail;
              break;
          }
        }
      });

      // When exiting the hover state
      socialMedia.addEventListener("mouseleave", () => {
        // The bar returns to its normal state
        if (selector) {
          selector.style.width = `100%`;
          selector.style.left = `0`;
        }
        if (selectorText) {
          selectorText.textContent = " ";
        }
      });
    }
  }

  // Execute only at the beginning
  useEffect(() => {
    headerSetup();
  });

  return (
    <ParallaxLayer
      id="social-media-layer"
      offset={0}
      speed={speed}
      className="flex justify-start sm:ml-0 sm:justify-center"
    >
      <div id="social-media-outer" className="flex flex-col gap-2 p-3">
        <div className="flex flex-row gap-7 sm:gap-10">
          {/* Badge Github */}
          <SocialMedia
            svgSrc={githubIcon}
            num="1"
            href="https://github.com/BigBodyDan"
            alt={texts.hero.social.altGit}
          />

          {/* Badge Linkedin */}
          <SocialMedia
            svgSrc={linkedinIcon}
            num="2"
            href="https://www.linkedin.com/in/daniel-sarzynski"
            alt={texts.hero.social.altLinkedin}
          />

          {/* Badge Mail */}
          <SocialMedia
            svgSrc={mailIcon}
            num="3"
            href="mailto:dsarzynski13116@gmail.com"
            alt={texts.hero.social.altMail}
          />
        </div>

        {/* Bar that follows the selected badge */}
        <div
          id="social-media-selector"
          className="flex flex-col items-center rounded-full bg-white/50"
        >
          {/* Text */}
          <div
            id="social-media-selector-text"
            className="mt-2 text-nowrap text-center text-sm text-white/70"
          ></div>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default SocialMediaBar;
