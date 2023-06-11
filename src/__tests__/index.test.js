import Validator from '../index';

test('check name', () => {
  expect(Validator.validateUsername('name')).toEqual(true);
});
