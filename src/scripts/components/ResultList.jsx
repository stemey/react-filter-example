/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Link = require('react-router').Link;


var ListItemWrapper = React.createClass({
    render: function() {
        return <li><Link to="detail" params={this.props.data.toJSON()}>{this.props.data.get("title")}</Link> kostet {this.props.data.get("price")}</li>;
    }
});

var ResultList = React.createClass({
    render: function() {
        var children = this.props.results.map(function(result) {
            return <ListItemWrapper key={result.get("_id")} data={result}/>;
        });
        return (
            <div>
            <ul>
                {children}
            </ul>
                </div>
        );
    }
});

module.exports = ResultList;
