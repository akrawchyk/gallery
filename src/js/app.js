/* globals Ember, DS, jQuery, FastClick */

(function() {
  'use strict';

  var Gallery = Ember.Application.create();
  Gallery.ApplicationAdapter = DS.FixtureAdapter;
  window.Gallery = Gallery;


  jQuery(function() {
    FastClick.attach(document.body);
  });

})();
