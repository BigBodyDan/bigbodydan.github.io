/**
 * @name Button.tsx
 * @type Component
 */

import type {Ref} from "react";
import { cn } from "../../lib/utils.ts";

type Props = {
  ref?: Ref<HTMLButtonElement>;
  text: string;
  className?: string;
  onClick?: () => void;
};

/**
 * @Button
 * @description Button with applied styles
 * @param ref Reference used for display on scroll
 * @param text Text to display in the button
 * @param className Additional class to apply to the button
 * @param onClick Function that will execute when the button is clicked
 */
function Button({ ref, text, className = "", onClick = () => {} }: Props) {
  return (
    <button
      ref={ref}
      className={cn("relative p-0.5", className)}
      onClick={onClick}
    >
      {/* Outer  */}
      <div className="absolute inset-0 rounded-lg bg-linear-to-b from-lavender/65 to-cyan/45" />

      {/* Inner */}
      <div className="group relative rounded-md bg-midnight px-8 py-2 text-xs font-semibold transition duration-200 hover:bg-transparent hover:text-midnight active:blur-sm lg:text-base">
        {text}
      </div>
    </button>
  );
}

export default Button;
