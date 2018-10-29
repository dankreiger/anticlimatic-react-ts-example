import * as React from 'react';
import { IFormInputHook } from 'src/interfaces/hookInterfaces/IFormInputHook.interface';
import { InputGroupContainer } from './styles';

const InputGroup: React.SFC<{
  inputLabel: string;
  stateHook: IFormInputHook;
}> = ({ inputLabel, stateHook }) => {
  return (
    <InputGroupContainer>
      <label>{inputLabel}</label>
      <div>
        <input {...stateHook} />
        <span className="focus-border" />
      </div>
    </InputGroupContainer>
  );
};

export default InputGroup;
