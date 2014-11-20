/* globals Ember, DS, jQuery, FastClick */

(function() {
  'use strict';

  var App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });
  App.ApplicationAdapter = DS.FixtureAdapter;
  window.App = App;


  jQuery(function() {
    FastClick.attach(document.body);
  });

})();
