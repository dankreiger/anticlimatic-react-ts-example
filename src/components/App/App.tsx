import * as React from 'react';
import useFormInput from '../../hooks/useFormInput';
import InputGroup from '../InputGroup/InputGroup';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';


interface IFormInputHook {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const App: React.SFC<{}> = () => {
  const name: IFormInputHook = useFormInput('Dan');;
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
