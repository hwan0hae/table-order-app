import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    bgColor: string;
    containerColor: string;
    textColor: string;
    boxColor: string;
  }
}
