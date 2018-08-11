var React = require('react'),
    _ = require('underscore');


var NavItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object // One nav item in the navBar array
    },
    render: function() {
        var item = this.props.item;
        return (
            <li>
                <a href={item.url} target={(item.newTab ? '_blank' : '_self')}>
                    {item.title}
                </a>
            </li>
        );
    }
});

module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
        var items = [],
            navBar = this.props.navBar;
        for (var i = 0; i < navBar.length; i++) {
            items.push(<NavItem item={navBar[i]} key={i}/>);
        }

        return (
            <nav>
                <img src="https://ias.inspera.no/file/cil/mp_logo/file"/>
                <ul>
                    {items}
                </ul>
            </nav>
        );
    }
});