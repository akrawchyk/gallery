/* global App, Ember, jQuery */

(function() {
  'use strict';


  App.Router.map(function() {
    this.resource('pages', { path: '/pages' }, function() {
      this.route('new');
    });
    this.resource('page', { path: '/pages/:page_slug' }, function() {
      this.resource('blocks', function() {
        this.route('new');
      });
    });
  });


  App.ApplicationRoute = Ember.Route.extend({
    actions: {
      openModal: function(modalName, model) {
        this.controllerFor(modalName).set('model', model);
        return this.render(modalName, {
          into: 'application',
          outlet: 'modal'
        });
      },

      closeModal: function() {
        return this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
  });


  App.PagesRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('page');
    },
    afterModel: function(pages, transition) {
      if (pages.get('length') === 1) {
        var firstPage = pages.get('firstObject');
        console.log(firstPage);
        this.transitionTo('blocks', firstPage);
      }
    }
  });


  App.PageRoute = Ember.Route.extend({
    model: function(params) {
      return jQuery.getJSON('/page/' + params.page_slug);
    },
    serialize: function(model) {
      return { page_slug: model.get('slug') };
    }
  });


  App.BlocksRoute = Ember.Route.extend({
    model: function () {
      return this.modelFor('page').get('blocks');
    }
  });

})();
