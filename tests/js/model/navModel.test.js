const navModel = require('../../../js/model/navModel');

beforeAll(() => configNotice());

const configNotice = () => console.log('NOTE: Testing is setup to run in watch mode, and testing is in currently operating in watch mode. To deactivate automatic watch, remove the --watch flag in the package.JSON \"test\" script.');

test('NavModel should return something', () => {
  expect(navModel.getNavBarItems()).toBeDefined;
});

describe( 'getNavBarItems', () => {
  it('should output an array that is sorted by title', ()=> {
  expect(navModel.getNavBarItems()).toEqual([{"newTab": true, "title": "Creaza", "url": "http://www.creaza.no"}, {"newTab": true, "title": "Idunn", "url": "http://www.idunn.no"}, {"newTab": true, "title": "Inspera Assessment", "url": "https://ia.inspera.no"}]);
});
});


test('First item in the array should be the first alphabetically', () => {
  returnedGetNavArray = navModel.getNavBarItems();
  expect(returnedGetNavArray[1]).toEqual({"newTab": true, "title": "Idunn", "url": "http://www.idunn.no"});
});

test('getNavBarItems exists(and is a function)', ()=> {
  expect(typeof navModel.getNavBarItems).toEqual('function');
})
