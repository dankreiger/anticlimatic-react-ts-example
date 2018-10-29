import { mount, ReactWrapper, render } from 'enzyme';
import * as React from 'react';
import { IGlobal } from 'src/interfaces/testInterfaces/IGlobal.interface';
import App from './App';

declare let global: IGlobal;

describe('App', () => {
  describe('rendering', () => {
    const renderedComponent: Cheerio = render(<App />); // shallow wrapper not working with hooks
    test('renders as expected', () => {
      expect(renderedComponent).toBeTruthy();
      expect(renderedComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    let component: ReactWrapper;
    beforeEach(() => {
      component = mount(<App />); // Enzyme's shallow not working with React state hooks
    });
    describe('button', () => {
      test('renders 1 button html element', () => {
        expect(component.find('button').length).toBe(1);
      });
      test('button has text "Click me"', () => {
        expect(component.find('button').text()).toBe('Click me 0');
      });
    });
    describe('inputs', () => {
      test('renders 2 input html elements', () => {
        expect(component.find('input').length).toBe(2);
      });
    });

    describe('div for window width', () => {
      test('renders 1 div.windowWidth', () => {
        expect(component.find('.windowWidth').length).toBe(1);
      });
      test('div.windowWidth displays the current window width information', () => {
        expect(component.find('.windowWidth').text()).toBe(
          'Window width: 1024'
        ); // 1024 is the JSDOM default
      });
    });
  });

  describe('behavior', () => {
    let component: ReactWrapper;

    test('renders an incremented value on button click', () => {
      component = mount(<App />); // Enzyme's shallow isn't working with state hooks

      expect(component.find('button').text()).toBe('Click me 0');
      component.find('button').simulate('click');
      component.update(); // Read: enzyme update
      expect(component.find('button').text()).toBe('Click me 1');
    });

    test('renders the window size on resize', () => {
      global.innerWidth = 500;
      component = mount(<App />); // only works like this right now - .update() not working on component

      expect(component.find('.windowWidth').text()).toBe('Window width: 500');
      global.innerWidth = 1023;
      component = mount(<App />); // only works like this right now - .update() not working on component
      expect(component.find('.windowWidth').text()).toBe('Window width: 1023');
    });
  });
});
