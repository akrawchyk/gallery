/* globals Ember, App */


(function() {
  'use strict';


  App.BlockController = Ember.ObjectController.extend({
    actions: {
      editBlock: function() {
        this.set('isEditing', true);
      },

      doneEditing: function() {
        this.set('isEditing', false);
      },

      toggleEdit: function() {
        var editing = this.get('isEditing');
        this.set('isEditing', !editing);
      },

      updateFocusPoint: function(newFocusPointAttrs) {
        // TODO better type checking on this object
        if (Ember.isEmpty(newFocusPointAttrs.focusX || Ember.isEmpty(newFocusPointAttrs.focusY))) {
          return;
        }

        var block = this.get('model');
        block.setProperties(newFocusPointAttrs);
        block.save();
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
