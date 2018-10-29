import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import useFormInput from './useFormInput';

const MockComponent = () => {
  const stateHook = useFormInput('test value');
  return <input {...stateHook} />;
};

describe('useFormInput', () => {
  let hookedComponent: ReactWrapper;
  beforeEach(() => {
    hookedComponent = mount(<MockComponent />);
  });

  test('it returns correct input value', () => {
    expect(hookedComponent.find('input').props().value).toBe('test value');
  });
  test('it returns an onChange event function', () => {
    expect(hookedComponent.find('input').props().onChange).toBeDefined();
  });
});
