var React = require('react'),
    NavBar = require('./Navbar'),
    MainContent = require('./MainContent');

module.exports = React.createClass({displayName: "exports",
    propTypes: {
        navBar: React.PropTypes.array.isRequired // The JSON returned from js/model/NavModel.getNavBarItems passed from server.js
    },
    render: function() {
        return (
            React.createElement("html", null, 
                React.createElement("head", null, 
                    React.createElement("link", {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"}), 
                    React.createElement("link", {rel: "stylesheet", href: "/base.css"})
                ), 
                React.createElement("body", null, 
                    React.createElement(NavBar, {navBar: this.props.navBar}), 
                    React.createElement(MainContent, null)
                )
            )
        );
    }
});