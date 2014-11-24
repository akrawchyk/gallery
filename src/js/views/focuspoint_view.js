/* globals App, Ember */

(function() {
  'use strict';


  App.FocuspointView = Ember.View.extend({
    templateName: 'focuspoint',

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      // must not use the element due to binding data attrs
      this.$().find('.js-focuspoint').focusPoint({
        throttleDuration: 100
      });
      console.log('did focuspoint');
    }
  });

})();
