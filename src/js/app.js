/* globals Ember, DS, jQuery, FastClick */

(function() {
  'use strict';

  window.Gallery = Ember.Application.create();
  Gallery.ApplicationAdapter = DS.FixtureAdapter.extend();

  jQuery(function() {
    FastClick.attach(document.body);
  });

})();
