var EventEmitter = require('events').EventEmitter
var ProductDispatcher = require('./ProductDispatcher');
var util = require('util');


var results = [
    {
        id: 1,
        text: "meine 1",
        price: 3.45
    },
    {
        id: 2,
        text: "meine 2",
        price: 45.45
    },
    {
        id: 3,
        text: "meine 3",
        price: 13.45
    }
];


var Store = function() {
    EventEmitter.call(this);
}

util.inherits(Store, EventEmitter);

Store.prototype.filter = function(event) {
    if (event.event=="filter-products") {
        var filter = event.filter;
        this.results = results.filter(function (r) {
            return (
                    (filter.text == ""
                    || r.text.match(new RegExp(filter.text))))
                && (filter.uprice == null || r.price < filter.uprice)
                && (filter.lprice == null || r.price >= filter.lprice);
        });
        this.emit("change");

    }
}

Store.prototype.getProducts = function() {
    return this.results;
}
var store = new Store();

ProductDispatcher.register(Store.prototype.filter.bind(store));

store.results=results;

module.exports = store;



