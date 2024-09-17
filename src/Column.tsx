import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useMount, useTimeout } from "@figliolia/react-hooks";
import { Controller } from "./Controller";
import type { IAnimatedNumberProps } from "./types";

export const Column = memo(function Column({
  value,
  delay = 0,
}: IAnimatedNumberProps) {
  const timeout = useTimeout();
  const node = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState(false);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const fixed = useMemo(() => typeof value === "string", [value]);

  const translate = useMemo(() => {
    if (typeof value === "string") {
      return `0 ${animated ? "50%" : 0}`;
    }
    return `0 ${animated ? `${((value + 1) / 11) * 100}%` : 0}`;
  }, [animated, value]);

  useMount(() => {
    if (typeof window !== "undefined") {
      timeout.execute(() => {
        setAnimated(true);
      }, delay);
    }
  });

  useEffect(() => {
    if (node.current) {
      setWidth(node.current.getBoundingClientRect().width);
    }
  }, [value]);

  return (
    <div className="column-container">
      <span className="dummy" ref={node}>
        {value}
      </span>
      <div className="column" style={{ translate, width }}>
        {fixed && <span>{value}</span>}
        {fixed ? Controller.START_COLUMN : Controller.NUMBER_COLUMN}
      </div>
    </div>
  );
});
