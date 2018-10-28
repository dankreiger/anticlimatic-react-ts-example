import * as React from 'react';
import useFormInput from './useFormInput';
import * as enzyme from 'enzyme';

const MockComponent = () => {
  const stateHook = useFormInput('test value');
  return <input {...stateHook} />;
};

describe('useFormInput', () => {
  test('it returns hook', () => {
    const hookedComponent = enzyme.mount(<MockComponent />);
    expect(hookedComponent.find('input').props().value).toBe('test value');
    expect(hookedComponent.find('input').props().onChange).toBeDefined();
  });
});
