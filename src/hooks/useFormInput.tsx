import { useState } from 'react';

/**
 *
 * @param {string} initialValue
 */

export default function useFormInput(initialValue: string) {
  let value: string;
  let setValue: (newState: string) => void;

  [value, setValue] = useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    onChange: handleChange,
    value
  };
}
