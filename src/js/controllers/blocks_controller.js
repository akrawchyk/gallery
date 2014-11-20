/* globals Ember, Gallery */


(function() {
  'use strict';


  Gallery.BlocksController = Ember.ArrayController.extend({
    actions: {
      createBlock: function() {
        var title = this.get('newTitle').trim();
        if (!title) {
          return false;
        }

        var block = this.store.createRecord('block', {
          title: title,
          paragraph: '',
          image: '',
          page: 1 // TODO find the correct page
        });

        this.set('newTitle', '');
        block.save();
      }
    }
  });

})();
