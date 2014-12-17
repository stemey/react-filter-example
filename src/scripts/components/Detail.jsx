/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


var Detail = React.createClass({
    mixins: [ Router.Navigation, Router.State ],

    render: function () {
        return (
            <div data-zz="ll">
                <h3>Detail</h3>
                <span>{this.getParams()._id}</span>
            </div>
        );
    }
});

module.exports = Detail;
