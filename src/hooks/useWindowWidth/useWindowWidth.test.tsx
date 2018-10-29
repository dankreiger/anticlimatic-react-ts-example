import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';
import useWindowWidth from './useWindowWidth';

interface IGlobal extends NodeJS.Global {
  document: Document;
  window: Window;
  navigator: Navigator;
  innerWidth: number;
}

declare let global: IGlobal;

const MockComponent = () => {
  const windowWidth: number = useWindowWidth();
  return <div>{windowWidth}</div>;
};

describe('useWindowWidth', () => {
  let mockedComponent: ReactWrapper;

  test('it returns hook', () => {
    mockedComponent = mount(<MockComponent />);
    expect(mockedComponent.find('div').text()).toBe('1024');

    global.innerWidth = 500; // not sure how to make this right in typescript
    // mockedComponent.update()
    mockedComponent = mount(<MockComponent />); // not sure why I have to do this
    expect(mockedComponent.find('div').text()).toBe('500');
  });
});
