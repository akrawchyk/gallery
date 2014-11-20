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
          paragraph: 'Time to party',
          image: '//www.fillmurray.com/300/200'
        });

        this.set('newTitle', '');
        page.save();
      }
    }
  });

})();
