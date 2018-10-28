import * as React from 'react';
import { useState } from 'react'; // // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5128
// hooks
import useFormInput from '../../hooks/useFormInput';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// components
import InputGroup from '../InputGroup/InputGroup';

interface IFormInputHook {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const App: React.SFC<{}> = () => {
  const name: IFormInputHook = useFormInput('Dan');
  const surname: IFormInputHook = useFormInput('Kreiger');

  useDocumentTitle(`${name.value} ${surname.value}`);

  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={handleClick}>Click me {count}</button>
      <InputGroup inputLabel="Name" stateHook={name} />
      <InputGroup inputLabel="Surname" stateHook={surname} />
    </>
  );
};

export default App;
