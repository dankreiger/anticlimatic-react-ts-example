import * as React from 'react';
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

  return (
    <>
      <button>Click me</button>
      <InputGroup inputLabel="Name" stateHook={name} />
      <InputGroup inputLabel="Surname" stateHook={surname} />
    </>
  );
};

export default App;
