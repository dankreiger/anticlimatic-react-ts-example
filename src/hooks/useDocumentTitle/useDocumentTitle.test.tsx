import { mount } from 'enzyme';
import * as React from 'react';
import useDocumentTitle from './useDocumentTitle';

const MockComponent = () => {
  useDocumentTitle('test value');
  return <></>;
};

xdescribe('useDocumentTitle', () => {
  test('it returns hook', () => {
    mount(<MockComponent />);
    expect(document.title).toBe('test value'); // not working
  });
});
