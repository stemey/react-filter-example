/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


var List = React.createClass({
    mixins: [ Router.Navigation, Router.State ],

    render: function () {
        return (
            <div data-xx="gg">
                <h3>List</h3>
                <ul>
                    <li>
                        asdasd
                    </li>
                    <li>
                        asdasdasd
                    </li>
                    <li>
                        sdfsfsdf
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = List;
