import { mount, ReactWrapper, render } from 'enzyme';
import * as React from 'react';
import InputGroup from './InputGroup';

describe('App', () => {
  describe('rendering', () => {
    const renderedComponent: Cheerio = render(
      <InputGroup
        inputLabel="test label"
        stateHook={{ value: 'Dan', onChange: () => null }}
      />
    ); // shallow wrapper not working with hooks
    test('renders as expected', () => {
      expect(renderedComponent).toBeTruthy();
      expect(renderedComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    let component: ReactWrapper;
    beforeEach(() => {
      component = mount(
        <InputGroup
          inputLabel="test label"
          stateHook={{ value: 'Dan', onChange: () => null }}
        />
      ); // Enzyme's shallow not working with React state hooks
    });
    describe('input', () => {
      test('renders 1 input html element', () => {
        expect(component.find('input').length).toBe(1);
      });

      test('input value is correct', () => {
        expect(component.find('input').props().value).toBe('Dan');
      });

      test('input onChange is defined', () => {
        expect(component.find('input').props().onChange).toBeDefined();
      });
    });
  });
});
