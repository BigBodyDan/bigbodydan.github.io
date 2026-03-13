/**
 * @name About.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { useOnScreen } from "../hooks/useOnScreen.tsx";
import { cn } from "../../lib/utils.ts";

import Timeline from "../components/About/Timeline.tsx";
import Button from "../components/Button.tsx";
import SocialMedia from "../components/SocialMedia.tsx";

import profilePicture from "../../img/profile-picture.webp";
import githubIcon from "../../img/social_media/github-icon.svg";
import linkedinIcon from "../../img/social_media/linkedin-icon.svg";
import mailIcon from "../../img/social_media/mail-icon.svg";
import texts from "../../data/data-texts.tsx";

import "../style/about.css";

/**
 * @About
 * @description About Page
 */
function About() {
  // References for scroll
  const [aboutRef, aboutVisible] = useOnScreen<HTMLDivElement>();
  const [imgRef, imgVisible] = useOnScreen<HTMLImageElement>();
  const [descRef, descVisible] = useOnScreen<HTMLDivElement>();
  const [cvRef, cvVisible] = useOnScreen<HTMLButtonElement>();
  const [contactRef, contactVisible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="relative flex min-h-150 flex-col items-center justify-evenly bg-midnight lg:flex-row"
    >
      {/* Frame Outline */}
      <div
        ref={aboutRef}
        className={cn(
          "mx-4 flex flex-col items-center justify-center rounded-2xl bg-linear-to-b from-lavender/65 to-cyan/45 transition-all duration-500 ease-in-out lg:mx-0 lg:h-160.5",
          aboutVisible ? "" : "opacity-0",
        )}
      >
        {/* Frame containing the main information */}
        <div className="lg:gap0 m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-midnight/50 py-8 lg:h-full lg:py-0">
          {/* Profile picture */}
          <img
            ref={imgRef}
            id="profile-picture"
            src={profilePicture}
            alt={texts.about.altPicture}
            className={cn(
              "w-40 rounded-full transition-all duration-500 ease-in-out lg:w-64",
              imgVisible ? "" : "translate-x-40 opacity-0",
            )}
          />

          {/* Description */}
          <div
            ref={descRef}
            className={cn(
              "mx-12 max-w-100 text-sm transition-all duration-500 ease-in-out lg:text-base",
              descVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            {texts.about.desc}
          </div>

          {/* Button to view resume */}
          <a href="/DanielSarzynski_Resume.pdf" target="_blank">
            <Button
              ref={cvRef}
              text={texts.about.resume}
              className={cn(
                "transition-all duration-500 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0",
              )}
            />
          </a>

          <div
            ref={contactRef}
            className={cn(
              "flex flex-row gap-5 transition-all duration-500 ease-in-out md:scale-125",
              contactVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            {/* Github Icon */}
            <div>
              <SocialMedia
                svgSrc={githubIcon}
                className={"bg-lavender/90"}
                num="1"
                href="https://github.com/BigBodyDan"
                alt={texts.hero.social.altGit}
              />
            </div>

            {/* Linkedin Icon */}
            <div >
              <SocialMedia
                svgSrc={linkedinIcon}
                className={"bg-lavender/90"}
                num="2"
                href="https://www.linkedin.com/in/daniel-sarzynski"
                alt={texts.hero.social.altLinkedin}
              />
            </div>

            {/* Mail Icon */}
            <div>
              <SocialMedia
                svgSrc={mailIcon}
                className={"bg-lavender/90"}
                num="3"
                href="mailto:dsarzynski13116@gmail.com"
                alt={texts.hero.social.altMail}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <Timeline className="scale-90 lg:scale-110" />
    </ParallaxLayer>
  );
}

export default About;
