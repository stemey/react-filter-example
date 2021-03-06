/**
 * @jsx React.DOM
 */

var React = require('react/addons');


var Filter = React.createClass({
    getInitialState: function () {
        return {filter: this.props.defaultFilter};
    },
    parseFloat: function(value) {
        if (value==="") {
            return null;
        } else {
            return parseFloat(value);
        }
    },
    filterChanged: function () {
        var filter = {};
        filter.uprice = this.parseFloat(this.state.filter.uprice);
        filter.lprice = this.parseFloat(this.state.filter.lprice);
        filter.text = this.state.filter.text;
        if (!isNaN(filter.uprice) && !isNaN(filter.lprice)) {
            this.props.filterChange(filter);
            return true;
        } else {
            return false;
        }

    },
    onTextChange: function (event) {
        this.setFilter('text', event.target.value);
        this.filterChanged();
    },
    onLpriceChange: function (event) {
        this.setFilter('lprice', event.target.value);
        this.filterChanged();
    },
    onUpriceChange: function (event) {
        this.setFilter('uprice', event.target.value);
        this.filterChanged();
    },
    setFilter: function (name, value) {
        var newFilter = this.state.filter;
        newFilter[name] = value;
        this.setState({filter: newFilter});
    },
    render: function () {
        return (
            <div>
                <input value={this.state.filter.text} onChange={this.onTextChange}/>
                <input value={this.state.filter.lprice} onChange={this.onLpriceChange}/>
                <input value={this.state.filter.uprice} onChange={this.onUpriceChange}/>
            </div>
        );
    }
});

module.exports = Filter;
