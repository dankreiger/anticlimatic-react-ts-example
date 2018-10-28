import * as React from 'react';

const InputGroup: React.SFC<{inputLabel: string, inputValue: string}> = ({inputLabel, inputValue}) => {
  return (
    <>
      <label>{inputLabel}</label>
      <input value={inputValue} />
    </>
  );
};

export default InputGroup;