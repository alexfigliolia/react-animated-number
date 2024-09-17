import { memo, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { useController } from "@figliolia/react-hooks";
import { Column } from "./Column";
import { Controller } from "./Controller";
import type { IAnimatedNumber, IAnimationState } from "./types";
import "./styles.css";

/**
 * Animated Number
 *
 * Animate transitions between numeric values!
 * ```tsx
 * <AnimatedNumber
 *  delay={0}
 *  duration={1000}
 *  value={statefulNumericValue}
 *  timingFunction="cubic-bezier(0.33, 1, 0.68, 1)" />
 * ```
 */
export const AnimatedNumber = memo(function AnimatedNumber({
  value,
  style,
  delay = 0,
  className,
  duration = 1000,
  timingFunction = "cubic-bezier(0.33, 1, 0.68, 1)",
  ...rest
}: IAnimatedNumber) {
  const controller = useController(new Controller(value));
  const [state, setState] = useState<IAnimationState>(controller.getState());

  useEffect(() => {
    setState(controller.enqueue(value));
  }, [value, controller]);

  const classes = useClassNames("number-animation", className);

  return (
    <div
      className={classes}
      aria-label={state.value}
      style={{
        "--transition-duration": `${duration}ms`,
        "--transition-timing-function": timingFunction,
        ...style,
      }}
      {...rest}>
      <div className="columns" aria-hidden>
        {state.columns.map((column, i) => {
          return <Column key={i} value={column} delay={delay} />;
        })}
      </div>
      <div className="dummy" aria-hidden>
        {state.value}
      </div>
    </div>
  );
});
