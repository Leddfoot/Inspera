const navModel = require('../../../js/model/navModel');

test('NavModel should return something', () => {
  expect(navModel.getNavBarItems()).toBeDefined;
});

test('throws error on bullshit argument', () => {
  expect(() => {
    navModel.getNavBarItems('bullshit');
  }).toThrow();
});
