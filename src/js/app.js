/* globals Ember, DS, jQuery, FastClick */

(function() {
  'use strict';

  window.Gallery = Ember.Application.create();
  Gallery.ApplicationAdapter = DS.FixtureAdapter;

  jQuery(function() {
    FastClick.attach(document.body);
  });

})();
