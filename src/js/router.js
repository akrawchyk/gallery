/* global Gallery, Ember, jQuery */

(function() {
  'use strict';

  Gallery.Router.map(function() {
    this.resource('pages', { path: '/' });
    this.resource('page', { path: '/page/:page_slug' });
  });


  Gallery.PagesRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('page');
    }
  });


  Gallery.PageRoute = Ember.Route.extend({
    model: function(params) {
      return jQuery.getJSON('/page/' + params.page_slug);
    },
    serialize: function(model) {
      return { post_slug: model.get('slug') };
    }
  });

})();

