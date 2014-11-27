/** @jsx React.DOM */

var ProductFilter = require('./ProductFilter');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
    <p>
    <ProductFilter/>
    </p>
), document.getElementById('content'));
