/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var ResultList = require('./ResultList');
var Filter = require('./Filter');
var results=[
    {
        id:1,
        text:"meine 1",
        price:3.45
    },
    {
        id:2,
        text:"meine 2",
        price:45.45
    },
    {
        id:3,
        text:"meine 3",
        price:13.45
    }
];

var filter = {text:"mein",lprice:0,uprice:100};

var ProductFilter = React.createClass({
    getInitialState: function() {
        return {results: this.filter(results, filter)};
    },
    filter: function(results, filter) {
        var r = results.filter(function(r) {return (filter.text == "" || r.text.match(new RegExp(filter.text))) && r.price<filter.uprice && r.price>=filter.lprice;});
        return r;
    },
    filterChanged: function(filter) {
        this.setState({results:this.filter(results, filter)});
    },
    render: function() {
        return (
            <p>
                <Filter defaultFilter={filter} filterChange={this.filterChanged}/>
                <ResultList results={this.state.results} />
            </p>
        );
    }
});

module.exports = ProductFilter;
