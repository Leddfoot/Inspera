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
    getInitialState: function() {
      return {navCollapsed: false};
    },
    toggleNavbar: function() {
      this.setState({navCollapsed: !this.state.navCollapsed});
  },
    render: function() {
      const items = this.props.navBar.map((navItem) => <NavItem item={navItem} key={navItem.title}/>);
      const {navCollapsed} = this.state;
  
        return (
          <div>

            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" onClick={this.toggleNavbar}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <a className="navbar-brand" href="#"><img src="https://ias.inspera.no/file/cil/mp_logo/file"/></a>
                </div>
                {/* <div className="collapse navbar-collapse"> */}
                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                  <ul className="nav navbar-nav">
                    {items}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
    }
});
