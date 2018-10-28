import useFormInput from './useFormInput';

xdescribe('useFormInput', () => {
  test('it returns hook', () => {
    expect(useFormInput('test value')).toBe({
      onChange: jest.fn(),
      value: 'test value'
    });
  });
});
