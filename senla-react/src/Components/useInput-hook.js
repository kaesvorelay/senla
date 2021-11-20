import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState();
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };
}

export default useInput;
