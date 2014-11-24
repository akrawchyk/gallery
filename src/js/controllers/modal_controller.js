/* globals App, Ember */

(function() {
  'use strict';


  App.ModalController = Ember.ObjectController.extend({
    actions: {
      close: function() {
        return this.send('closeModal');
      }
    }
  });

})();
