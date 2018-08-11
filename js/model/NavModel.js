
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

var sortedNavBarJSON = _.sortBy( navBarJSON, 'title');

var getNavBarItems = function () {
    return sortedNavBarJSON;
};

module.exports = {
    getNavBarItems : getNavBarItems
};
