export type IconSize = "small" | "default" | "large";
export type IconColor =
  | "default"
  | "inverse"
  | "disabled"
  | "selected"
  | "brand"
  | "danger"
  | "warning"
  | "success"
  | "information"
  | "subtle"
  | "subtlest";

export interface IconData {
  width: number;
  height: number;
  paths: string[];
}
