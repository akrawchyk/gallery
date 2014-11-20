/* globals Ember, App */


(function() {
  'use strict';


  App.PageController = Ember.ObjectController.extend({
    actions: {
      editPage: function() {
        this.set('isEditing', true);
      }
    },

    isEditing: false
  });

})();
