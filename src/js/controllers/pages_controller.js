/* globals Ember, App, S */


(function() {
  'use strict';


  App.PagesNewController = Ember.ArrayController.extend({
    actions: {
      createPage: function() {
        var title = this.get('newTitle');
        var slug = 'asdf';
        // var slug = this.get('newSlug');
        // var paragraph = this.get('newParagraph');
        // var image = this.get('newImage');

        if (!title) {
          return false;
        }

        if (title && !slug) {
          slug = S(slug).dasherize().s;
        }

        var page = this.store.createRecord('page', {
          title: title,
          slug: slug
          // paragraph: paragraph,
          // image: image
        });

        var self = this;

        function onSuccess(page) {
          self.set('newTitle', '');
          self.set('newSlug', '');
          self.set('newParagraph', '');
          self.set('newImage', '');
          self.transitionToRoute('page', page.slug);
        }

        function onFail(reason) {
          console.log(reason);
        }

        page.save(onSuccess, onFail);
      }
    }
  });

})();
