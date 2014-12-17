var ProductDispatcher = require('./ProductDispatcher');
var Backbone = require("backbone")
var $ = require("jquery")

ProductItem = Backbone.Model.extend({})

ProductCollection = Backbone.Collection.extend({
    model: ProductItem,
    url: "http://localhost:3333/api/Products",
    dispatchCallback: function (event) {
        if (event.event == "filter-products") {

            var criteria = [];
            if (event.filter.lprice!=null) {
                criteria.push({price: {$gte: event.filter.lprice}});
            }
            if (event.filter.uprice!=null) {
                criteria.push({price: {$lte: event.filter.uprice}});
            }
            if (event.filter.text!="") {
                criteria.push({title: {$regex: event.filter.text}});
            }
            var filter = criteria.length==0 ?criteria[0] :{$and:criteria};
            var mdbQueryString = JSON.stringify(filter);
            this.fetch({data: $.param({conditions: mdbQueryString})})
        }
    },
    getProducts: function () {
        return this;
    }
})

var store = new ProductCollection();

ProductDispatcher.register(ProductCollection.prototype.dispatchCallback.bind(store));

module.exports = store;
