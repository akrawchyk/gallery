/* globals Ember, App */


(function() {
  'use strict';


  App.BlockController = Ember.ObjectController.extend({
    actions: {
      editBlock: function() {
        this.set('isEditing', true);
      },
      toggleEdit: function() {
        var editing = this.get('isEditing');

        this.set('isEditing', !editing);
      },

      updateImage: function() {
        var newImage = this.get('newImage');

        if (Ember.isEmpty(newImage)) {
          return;
        }

        var block = this.get('model');
        block.set('image', newImage);
        block.save();
        console.log('updated image with ' + newImage);
      }
    },

    isEditing: false,

    imageStyle: function() {
      return 'background-image: url(' + this.get('image') + ');';
    }.property('imageStyle')
  });

})();
