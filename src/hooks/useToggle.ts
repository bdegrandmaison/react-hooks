import { useState, useCallback } from 'react';

export default function useToggle(value = true): [boolean, (value?: any) => void] {
  const [on, setOn] = useState(() => {
    if (typeof value === 'boolean') {
      return value;
    }

    return Boolean(value);
  });

  const handleToggle = useCallback((value?: any) => {
    if (typeof value === 'boolean') {
      return setOn(value);
    } else {
      return setOn((v) => !v);
    }
  }, []);

  return [on, handleToggle];
}
