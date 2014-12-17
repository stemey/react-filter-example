/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var ResultList = require('./ResultList');
var Filter = require('./Filter');
var store = require('./ProductRestStore');
var ProductDispatcher = require('./ProductDispatcher');
var Router = require('react-router');


var filter = {text: "He", lprice: 0, uprice: 100};

var ProductFilter = React.createClass({
    mixins: [ Router.Navigation, Router.State ],
    cb:null,
    onStoreChange: function() {
        this.setState({"results": store.getProducts()});
        this.forceUpdate();
    },
    componentDidMount: function() {
        var me =this;
        store.on("all", this.onStoreChange);
        ProductDispatcher.dispatch({event:"filter-products",filter:filter});
    },
    componentWillUnmount: function() {
        var me =this;
        store.off("all",this.onStoreChange)
    },
    getInitialState: function () {
        return {results: []};
    },
    filterChanged: function (filter) {
        ProductDispatcher.dispatch({event:"filter-products",filter:filter});
    },
    render: function () {
        return (
            <div>
                <Filter defaultFilter={filter} filterChange={this.filterChanged}/>
                <ResultList results={this.state.results} />
            </div>
        );
    }
});

module.exports = ProductFilter;
