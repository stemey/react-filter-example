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
        return (
            <ul>
                {this.props.results.map(function(result) {
                    return <ListItemWrapper key={result.id} data={result}/>;
                })}
            </ul>
        );
    }
});

module.exports = ResultList;
