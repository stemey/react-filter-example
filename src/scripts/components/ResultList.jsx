/**
 * @jsx React.DOM
 */

var React = require('react/addons');

var ListItemWrapper = React.createClass({
    render: function() {
        return <li>{this.props.data.text} kost {this.props.data.price}</li>;
    }
});

var ResultList = React.createClass({
    render: function() {
        var children = this.props.results.map(function(result) {
            return <ListItemWrapper key={result.id} data={result}/>;
        });
        return (
            <ul>
                {children}
            </ul>
        );
    }
});

module.exports = ResultList;
