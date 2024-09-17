import type { HTMLProps } from "react";

export type IToken = string | number;

export interface IAnimationState {
  value: string;
  columns: IToken[];
}

export interface IAnimatedNumberProps {
  delay?: number;
  value: string | number;
}

export interface IAnimatedNumber
  extends Omit<HTMLProps<HTMLDivElement>, "value">,
    IAnimatedNumberProps {
  duration?: number;
  timingFunction?: string;
}
