import { useState, useCallback, useEffect } from "react";

export const useFilter = (
  initialValue: string,
  onChange: (value: string) => void
) => {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleInputChange = useCallback(
    (newValue: string) => {
      setInputValue(newValue);
      onChange(newValue);
    },
    [onChange]
  );

  return {
    inputValue,
    handleInputChange,
  };
};
