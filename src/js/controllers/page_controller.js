/* globals Ember, Gallery */


(function() {
  'use strict';


  Gallery.PageController = Ember.ObjectController.extend({
    actions: {
      createBlock: function() {
        var title = this.get('newTitle').trim();
        if (!title) {
          return false;
        }

        var block = this.store.createRecord('block', {
          title: title,
          page: 1
        });

        this.set('newTitle', '');
        block.save();
      }
    }
  });

})();
