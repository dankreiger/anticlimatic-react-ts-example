import * as React from 'react';
import { SFC, useState } from 'react'; // // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5128
import { IFormInputHook } from 'src/interfaces/hookInterfaces/IFormInputHook.interface';
// hooks
import useDocumentTitle from '../../hooks/useDocumentTitle/useDocumentTitle';
import useFormInput from '../../hooks/useFormInput/useFormInput';
import useWindowWidth from '../../hooks/useWindowWidth/useWindowWidth';

// components
import InputGroup from '../InputGroup/InputGroup';

// styles
import { AppContainer, AppInputGroupContainer } from './styles';

const App: SFC<{}> = () => {
  const name: IFormInputHook = useFormInput('Dan');
  const surname: IFormInputHook = useFormInput('Kreiger');
  useDocumentTitle(`${name.value} ${surname.value}`);

  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  const windowWidth = useWindowWidth();

  return (
    <AppContainer>
      <button onClick={handleClick}>Click me {count}</button>
      <AppInputGroupContainer>
        <InputGroup inputLabel="Name" stateHook={name} />
        <InputGroup inputLabel="Surname" stateHook={surname} />
      </AppInputGroupContainer>
      <p className="windowWidth">Window width: {windowWidth}</p>
    </AppContainer>
  );
};

export default App;
