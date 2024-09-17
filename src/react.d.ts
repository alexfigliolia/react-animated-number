import "react";

declare module "react" {
  export interface CSSProperties {
    "--transition-duration"?: string;
    "--transition-timing-function"?: string;
  }
}
