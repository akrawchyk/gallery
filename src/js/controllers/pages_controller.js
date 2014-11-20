/* globals Ember, Gallery */


(function() {
  'use strict';


  Gallery.PagesController = Ember.ArrayController.extend({
    actions: {
      createPage: function() {
        var title = this.get('newTitle').trim();
        if (!title) {
          return false;
        }

        var page = this.store.createRecord('page', {
          title: title,
          paragraph: '',
          image: '',
          blocks: []
        });

        this.set('newTitle', '');
        page.save();
      }
    }
  });

})();
