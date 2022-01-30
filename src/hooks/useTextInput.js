import { useState } from "react";

function useTextInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const resetInputValue = () => {
    setValue("");
  };

  return [value, handleInputChange, resetInputValue];
}

export default useTextInput;
