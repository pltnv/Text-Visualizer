export interface Chart {
  type: "bar" | "line" | "pie" | "doughnut" | "radar" | "polarArea";
  title: string;
  labels: string[];
  data: number[];
  description?: string;
}

export type ChartType =
  | "bar"
  | "line"
  | "pie"
  | "doughnut"
  | "radar"
  | "polarArea";
