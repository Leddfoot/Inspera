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
    getInitialState: function() {
      return {navCollapsed: false};
    },
    toggleNavbar: function() {
      this.setState({navCollapsed: !this.state.navCollapsed});
  },
    render: function() {
      const items = this.props.navBar.map((navItem) => React.createElement(NavItem, {item: navItem, key: navItem.title}));
      const {navCollapsed} = this.state;
  
        return (
          React.createElement("div", null, 

            React.createElement("nav", {className: "navbar navbar-default"}, 
              React.createElement("div", {className: "container-fluid"}, 
                React.createElement("div", {className: "navbar-header"}, 
                  React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false", onClick: this.toggleNavbar}, 
                    React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                    React.createElement("span", {className: "icon-bar"}), 
                    React.createElement("span", {className: "icon-bar"}), 
                    React.createElement("span", {className: "icon-bar"})
                  ), 

                  React.createElement("a", {className: "navbar-brand", href: "#"}, React.createElement("img", {src: "https://ias.inspera.no/file/cil/mp_logo/file"}))
                ), 
                /* <div className="collapse navbar-collapse"> */
                React.createElement("div", {className: (navCollapsed ? 'collapse' : '') + ' navbar-collapse'}, 
                  React.createElement("ul", {className: "nav navbar-nav"}, 
                    items
                  )
                )
              )
            )
          )
        );
    }
});
