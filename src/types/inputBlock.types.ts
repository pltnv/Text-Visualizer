export interface InputBlockProps {
  isLoading?: boolean;
  maxLength?: number;
  minLength?: number;
}

export interface InputBlockEmits {
  (event: "send", value: string): void;
}
