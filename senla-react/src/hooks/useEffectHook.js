import React, { useEffect } from 'react';

function useChild({ updateOne, updateTwo }) {
  useEffect(() => {
    updateOne();
  }, [updateOne]);

  useEffect(() => {
    updateTwo();
  }, [updateTwo]);
}

export default useChild;
