import * as React from 'react';
import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';
// import { useFormInput } from '../../hooks/useFormInput';
// import InputGroup from '../InputGroup/InputGroup';

// not working with typescript yet

// interface IFormInputHook {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const App: React.SFC<{}> = () => {
//   const name: IFormInputHook = useFormInput('Dan');;
//   const surname: IFormInputHook = useFormInput('Kreiger');

//   return (
//     <>
//       <button>Click me</button>
//       <InputGroup inputLabel="Name" stateHook={name} />
//       <InputGroup inputLabel="Surname" stateHook={surname} />
//     </>
//   );
// };

interface IState {
  count: number;
  name: string;
  surname: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { count: 0, name: 'Dan', surname: 'Kreiger' };
  }

  public render() {
    const { count, name, surname } = this.state;
    return (
      <Container>
        <Row className="align-items-center">
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input onChange={this.handleName} value={name} />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Surname</InputGroupAddon>
              <Input onChange={this.handleSurname} value={surname} />
            </InputGroup>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body inverse color="primary">
              <CardTitle>{name}</CardTitle>
              <CardText>
                {surname}
              </CardText>
              <Button color="secondary" onClick={this.handleClick}>Click me {count}</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  private handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  private handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };
  private handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ surname: e.target.value });
  };
}

export default App;
