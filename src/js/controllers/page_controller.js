/* globals Ember, App */


(function() {
  'use strict';


  App.PageController = Ember.ObjectController.extend({
    actions: {
      editPage: function() {
        this.set('isEditing', true);
      }
    },

    isEditing: false,

    imageStyle: function() {
      return 'background-image: url(' + this.get('image') + ')';
    }.property('imageStyle')
  });

})();
