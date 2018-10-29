import * as React from 'react';
import { IFormInputHook } from 'src/interfaces/hookInterfaces/IFormInputHook.interface';

const InputGroup: React.SFC<{
  inputLabel: string;
  stateHook: IFormInputHook;
}> = ({ inputLabel, stateHook }) => {
  return (
    <>
      <label>{inputLabel}</label>
      <input {...stateHook} />
    </>
  );
};

export default InputGroup;
