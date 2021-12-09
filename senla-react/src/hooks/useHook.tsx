import React, { useState } from "react";

function useInput() {
  const [value, setValue] = useState<string>();
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };
}

export default useInput;
