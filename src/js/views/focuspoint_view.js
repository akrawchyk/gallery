/* globals App, Ember */

(function() {
  'use strict';


  App.FocuspointView = Ember.View.extend({
    templateName: 'focuspoint',

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      // FIXME add correct image width and heights
      // var imageH = this.$().closest('.block').height();
      // var imageW = this.$().closest('.block').width();
      // this.$().find('.js-focuspoint').attr('data-image-w', imageW).attr('data-image-h', imageH);
      // must not use the element due to binding data attrs
      this.$().find('.js-focuspoint').focusPoint({
        throttleDuration: 100
      });
    }
  });

  Ember.Handlebars.helper('focuspoint', App.FocuspointView);

})();
