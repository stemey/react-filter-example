/** @jsx React.DOM */

var ProductFilter = require('./ProductFilter');
var Detail = require('./Detail');
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <p>Wonderful store</p>
                <ul>
                    <li>
                        <Link to="detail" params={{_id: 1}}>go x</Link>
                    </li>
                    <li>
                        <Link to="detail" params={{_id: 2}}>go</Link>
                    </li>
                    <li>
                        <Link to="filter" >go back</Link>
                    </li>
                </ul>
                <div id="router">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});


var routes = (
    <Route handler={App}>
        <Route name="detail" path="detail/:_id" handler={Detail}/>
        <Route name="filter" path="filter" handler={ProductFilter}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('content'));
});
