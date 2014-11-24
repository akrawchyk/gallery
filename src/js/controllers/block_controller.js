/* globals Ember, App */


(function() {
  'use strict';


  App.BlockController = Ember.ObjectController.extend({
    actions: {
      editBlock: function() {
        this.set('isEditing', true);
      },

      openFocusPointModal: function(modalName, model) {
        console.log(modalName, model);
        this.controllerFor(modalName).set('model', model);
        return this.render(modalName, {
          into: 'blocks',
          outlet: 'modal'
        });
      },

      closeFocusPointModal: function() {
        return this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'blocks'
        });
      }
    },

    isEditing: false,

    imageStyle: function() {
      return 'background-image: url(' + this.get('image') + ');';
    }.property('imageStyle')
  });

})();
