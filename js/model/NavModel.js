
var _ = require('underscore');

var navBarJSON = [
    {
        'title': 'Inspera Assessment',
        'url': 'https://ia.inspera.no',
        'newTab': true
    },
    {
        'title': 'Idunn',
        'url': 'http://www.idunn.no',
        'newTab': true
    },
    {
        'title': 'Creaza',
        'url': 'http://www.creaza.no',
        'newTab': true
    }
];



var getNavBarItems = function () {
  var sortedNavBarJSON = _.sortBy( navBarJSON, 'title');
    return sortedNavBarJSON;
};

module.exports = {
    getNavBarItems : getNavBarItems
};
