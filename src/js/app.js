/* globals Ember, DS, jQuery, FastClick, WebFont */

(function() {
  'use strict';

  var App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });
  App.ApplicationAdapter = DS.FixtureAdapter;
  window.App = App;


  // View customization to allow binding of data attributes in templates
  Ember.View.reopen({
    init: function() {
      this._super();
      var self = this;

      // bind attributes beginning with 'data-'
      Em.keys(this).forEach(function(key) {
        if (key.substr(0, 5) === 'data-') {
          self.get('attributeBindings').pushObject(key);
        }
      });
    }
  });


  FastClick.attach(document.body);

  jQuery('.js-focuspoint').focusPoint();


  WebFont.load({
    google: {
      families: ['Lato', 'Overclock']
    }
  });

})();
