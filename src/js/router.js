/* global App, Ember, jQuery */

(function() {
  'use strict';


  App.Router.map(function() {
    this.resource('pages', { path: '/pages' }, function() {
      this.route('new');
    });
    this.resource('page', { path: ':page_slug' }, function() {
      this.route('edit');
      this.resource('blocks', { path: ':block_id' }, function() {
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
    }
  });


  App.PageRoute = Ember.Route.extend({
    model: function(params) {
      console.log(params);
      // return this.store.find('page', params.page_id);
      return jQuery.getJSON('/pages/' + params.page_id);
    },
    serialize: function(model) {
      return { page_slug: model.get('slug') };
    }
    // afterModel: function() {
    //   console.log(this.model().name);
    //   // this.transitionTo('blocks', this.model().name);
    // }
  });


  App.BlocksRoute = Ember.Route.extend({
    model: function () {
      return this.modelFor('page').get('blocks');
    }
    // beforeModel: function() {
    //   var blocks = this.modelFor('page').get('blocks');
    //   var block = blocks.get('firstObject');
    //
    //   if (!block) {
    //     this.transitionTo('blocks.new');
    //     return;
    //   }
    //
    //   this.transitionTo('blocks.index');
    // }
  });

})();
