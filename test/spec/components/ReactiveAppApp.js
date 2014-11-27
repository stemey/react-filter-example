'use strict';

describe('Main', function () {
  var ReactiveAppApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactiveAppApp = require('../../../src/scripts/components/ReactiveAppApp.jsx');
    component = ReactiveAppApp();
  });

  it('should create a new instance of ReactiveAppApp', function () {
    expect(component).toBeDefined();
  });
});
