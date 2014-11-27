/* globals App, Ember */

(function() {
  'use strict';


  App.FocuspointView = Ember.View.extend({
    classNames: ['focuspoint block__image'],
    templateName: 'focuspoint',
    attributeBindings: ['data-focus-x', 'data-focus-y', 'data-image-w', 'data-image-h'],

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      this.$().focusPoint({
        throttleDuration: 100
      });
    }
  });

  Ember.Handlebars.helper('focuspoint', App.FocuspointView);

})();
