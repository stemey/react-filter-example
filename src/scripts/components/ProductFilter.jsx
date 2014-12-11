/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var ResultList = require('./ResultList');
var Filter = require('./Filter');
var store = require('./ProductMemoryStore');
var ProductDispatcher = require('./ProductDispatcher');


var filter = {text: "mein", lprice: 0, uprice: 100};

var ProductFilter = React.createClass({
    componentDidMount: function() {
        var me =this;
        store.on("change", function() {
            me.setState({"results": store.getProducts()});
            me.forceUpdate();
        })
        ProductDispatcher.dispatch({event:"filter-products",filter:filter});
    },
    getInitialState: function () {
        return {results: []};
    },
    filterChanged: function (filter) {
        ProductDispatcher.dispatch({event:"filter-products",filter:filter});
    },
    render: function () {
        return (
            <p>
                <Filter defaultFilter={filter} filterChange={this.filterChanged}/>
                <ResultList results={this.state.results} />
            </p>
        );
    }
});

module.exports = ProductFilter;
