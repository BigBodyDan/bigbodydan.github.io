/**
 * @name TimelineStep.tsx
 * @type Component
 */

import { cn } from "../../../lib/utils.ts";

import "../../style/timeline.css";

type PropsStep = {
  title: string;
  desc: string;
  date: string;
  right?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

type PropsText = {
  title: string;
  desc: string;
  right?: boolean;
};

type PropsDate = {
  date: string;
  right?: boolean;
};

/**
 * @TimelineText
 * @description Displays the title and description of the step.
 * @param title Title of the step
 * @param desc Description of the step
 * @param right If the text is on the right side of the timeline (otherwise on the left)
 */
const TimelineText = ({ title, desc, right = false }: PropsText) => {
  return (
    <div
      className={cn(
        "p-fluid-anim flex w-20 flex-col items-center hover:scale-110 md:w-40 lg:h-32",
        right
          ? "timeline-end hover:translate-x-3"
          : "timeline-start hover:-translate-x-3",
      )}
    >
      {/* Title */}
      <span
        className={"font-pixel text-center text-base/4 opacity-90 lg:text-xl/5"}
      >
        {title}
      </span>
      {/* Description */}
      <div
        className={"mt-2 hidden text-center text-xs opacity-75 md:inline-block"}
      >
        {desc}
      </div>
    </div>
  );
};

/**
 * @TimelineMiddle
 * @description Middle line of the timeline with a badge to indicate the step.
 */
const TimelineMiddle = () => {
  return (
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 "
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

/**
 * @TimelineDate
 * @description Text showcasing the date of Timeline step
 * @param date Date of the step
 * @param right If the text is on the right side of the timeline (otherwise on the left)
 */
const TimelineDate = ({ date, right = false }: PropsDate) => {
  return (
    <div
      className={cn(
        "text-xs opacity-75",
        right ? "timeline-end" : "timeline-start",
      )}
    >
      {date}
    </div>
  );
};

/**
 * @TimelineStep
 * @description Individual step present on the timeline, with title, date, and description
 * @param title Title
 * @param desc Description
 * @param date Timeframe
 * @param right If the text is on the right side of the timeline (otherwise on the left)
 * @param isFirst If this is the first step
 * @param isLast If this is the last step
 */
const TimelineStep = ({
  title,
  desc,
  date,
  right = false,
  isFirst = false,
  isLast = false,
}: PropsStep) => {
  return (
    <li>
      <hr className={cn(isFirst ? "first-hr" : "")} />
      <TimelineMiddle />
      <TimelineText title={title} desc={desc} right={right} />
      <TimelineDate date={date} right={!right} />
      <hr className={cn(isLast ? "last-hr" : "")} />
    </li>
  );
};

export default TimelineStep;
