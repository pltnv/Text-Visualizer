export type Sentiment = "positive" | "negative" | "neutral" | "mixed";

export type ChartType =
  | "bar"
  | "line"
  | "pie"
  | "doughnut"
  | "radar"
  | "scatter"
  | "polarArea";

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
  description: string;
}

export interface Chart {
  title: string;
  type: ChartType;
  data: ChartData;
}

export interface ProblemsAndSolutions {
  problems: string[];
  solutions: string[];
}

export interface TextAnalysisResult {
  mainIdea: string;
  keyIdeas: string[];
  keywords: string[];
  thesis: string;
  terms: string[];
  entities: string[];
  sentiment: Sentiment;
  problemsAndSolutions: ProblemsAndSolutions;
  charts: Chart[];
}
