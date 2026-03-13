/**
 * @name Timeline.tsx
 * @type Component
 */

import { cn } from "../../../lib/utils.ts";
import { useOnScreen } from "../../hooks/useOnScreen.tsx";

import TimelineStep from "./TimelineStep";

import texts from "../../../data/data-texts.tsx";

import "../../style/timeline.css";

type Props = {
  className?: string;
};

/**
 * @Timeline
 * @description Displays a timeline of experience and academic background,
 * with a title, description, and date for each item.
 * @param className Additional class to apply to the button
 */
function Timeline({ className = "" }: Props) {
  // Reference for appearance on scroll
  const [lineRef, lineVisible] = useOnScreen<HTMLUListElement>();

  return (
    <ul
      ref={lineRef}
      className={cn(
        "delay-400 timeline transition-all duration-1000 ease-in-out lg:timeline-vertical",
        className,
        lineVisible
          ? ""
          : "-translate-y-20 opacity-0 lg:-translate-x-20 lg:translate-y-0",
      )}
    >
      {/* Undergraduate Degree */}
      <TimelineStep
        title={texts.about.timeline.undergraduate.title}
        desc={texts.about.timeline.undergraduate.desc}
        date={texts.about.timeline.undergraduate.date}
        isFirst
      />

      {/* Graduate Certificate */}
      <TimelineStep
        title={texts.about.timeline.graduate.title}
        desc={texts.about.timeline.graduate.desc}
        date={texts.about.timeline.graduate.date}
        right
      />

      {/* Internship */}
      <TimelineStep
        title={texts.about.timeline.timet.title}
        desc={texts.about.timeline.timet.desc}
        date={texts.about.timeline.timet.date}
      />

      {/* Google Cloud Developer */}
      <TimelineStep
        title={texts.about.timeline.GenSpark.title}
        desc={texts.about.timeline.GenSpark.desc}
        date={texts.about.timeline.GenSpark.date}
        right
        isLast
      />
    </ul>
  );
}

export default Timeline;
