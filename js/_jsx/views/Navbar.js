var React = require('react'),
    _ = require('underscore');


var NavItem = React.createClass({displayName: "NavItem",
    propTypes: {
        item: React.PropTypes.object // One nav item in the navBar array
    },
    render: function() {
        var item = this.props.item;
        return (
            React.createElement("li", null, 
                React.createElement("a", {href: item.url, target: (item.newTab ? '_blank' : '_self')}, 
                    item.title
                )
            )
        );
    }
});

module.exports = React.createClass({displayName: "exports",
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
        var items = [],
            navBar = this.props.navBar;
        for (var i = 0; i < navBar.length; i++) {
            items.push(React.createElement(NavItem, {item: navBar[i], key: i}));
        }

        return (
            React.createElement("nav", null, 
                React.createElement("img", {src: "https://ias.inspera.no/file/cil/mp_logo/file"}), 
                React.createElement("ul", null, 
                    items
                )
            )
        );
    }
});