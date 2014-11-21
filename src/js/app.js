/* globals Ember, DS, jQuery, FastClick, WebFont */

(function() {
  'use strict';

  var App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });
  App.ApplicationAdapter = DS.FixtureAdapter.extend({
    simulateRemoteResponse: true
  });
  window.App = App;


  jQuery(function() {
    FastClick.attach(document.body);
  });


  WebFont.load({
    google: {
      families: ['Lato']
    }
  });

})();
