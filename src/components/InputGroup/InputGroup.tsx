import * as React from 'react';

const InputGroup: React.SFC<{inputLabel: string, stateHook: any}> = ({inputLabel, stateHook}) => {
  return (
    <>
      <label>{inputLabel}</label>
      <input {...stateHook} />
    </>
  );
};

export default InputGroup;