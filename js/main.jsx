var React = require('react/addons'),
    Router = require('react-router'),
    Route = Router.Route,
    Routes = Router.Routes,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Page1 = React.createClass({

    render: function() {
        return (
            <div className="page page-2">
                <Link to="page2">2</Link>
                Page 1
            </div>
        );
    }

});

var Page2 = React.createClass({

    render: function() {
        return (
            <div className="page page-1">
                            <Link to="page1">1</Link>
                Page 2
            </div>
        );
    }

});


var Application = React.createClass({
    render: function() {
        //debugger;
        return (
            <div className="app">
                <ReactCSSTransitionGroup transitionName="example">
                    <this.props.activeRouteHandler />
                </ReactCSSTransitionGroup>
            </div>
        );
    }

});


var AppRoutes = (
    <Routes location="hash">
        <Route path="/" handler={Application}>
            <Route name="page1" path="page-one" addHandlerKey={true} handler={Page1} />
            <Route name="page2" path="page-two" addHandlerKey={true} handler={Page2} />
        </Route>
    </Routes>
);

React.render(AppRoutes, document.body);