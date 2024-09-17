import type { IAnimationState, IToken } from "./types";

export class Controller {
  value: string;
  columns: IToken[];
  public static readonly NUMBERS = Array.from(
    { length: 10 },
    (_, i) => i,
  ).reverse();
  public static readonly START_COLUMN = (<span key="space">&nbsp;</span>);
  public static readonly NUMBER_COLUMN = [
    ...this.NUMBERS.map(number => {
      return <span key={number}>{number}</span>;
    }),
    this.START_COLUMN,
  ];
  constructor(value: string | number) {
    this.value = value.toString();
    this.columns = Controller.parse(this.value);
  }

  public getState(): IAnimationState {
    return {
      value: this.value,
      columns: this.columns,
    };
  }

  public enqueue(value: string | number) {
    this.value = value.toString();
    this.columns = Controller.parse(this.value);
    return this.getState();
  }

  public static parse(value: string) {
    const str = value.toString();
    const columns: (string | number)[] = [];
    for (const char of str) {
      if (this.isDigit(char)) {
        columns.push(parseInt(char));
      } else {
        columns.push(char);
      }
    }
    return columns;
  }

  public static isDigit(value: string | number) {
    // @ts-ignore
    return parseInt(value) == value;
  }
}
