import { useState } from 'react';

export default function useDefault(value: any, defaultValue: any) {
  const [state, setState] = useState(value);

  if (typeof state === 'undefined' || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
}
