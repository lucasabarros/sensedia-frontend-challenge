import { RefObject } from "react";

export interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
}
