/* global Gallery, Ember */

(function() {
  'use strict';

  Gallery.Router.map(function() {
    this.resource('pages', { path: '/' });
  });


  Gallery.PagesRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('page');
    }
  });

})();

