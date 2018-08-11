var React = require('react'),
    NavBar = require('./Navbar'),
    MainContent = require('./MainContent');

module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array.isRequired // The JSON returned from js/model/NavModel.getNavBarItems passed from server.js
    },
    render: function() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/base.css"/>
                </head>
                <body>
                    <NavBar navBar={this.props.navBar}/>
                    <MainContent />
                </body>
            </html>
        );
    }
});