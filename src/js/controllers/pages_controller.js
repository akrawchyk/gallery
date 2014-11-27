/* globals Ember, App */


(function() {
  'use strict';


  App.PagesNewController = Ember.ArrayController.extend({
    actions: {
      createPage: function() {
        var title = this.get('newTitle');
        var slug = this.get('newSlug');
        var paragraph = this.get('newParagraph');
        var image = this.get('newImage');

        console.log(title, slug, paragraph, image);

        if (Ember.isEmpty(title)) {
          return false;
        } else {
          title = title.trim();
        }

        if (title && !slug) {
          slug = title.trim().dasherize();
        }

        // TODO consider adding bg color option

        var page = this.store.createRecord('page', {
          title: title,
          slug: slug,
          paragraph: paragraph,
          image: image
        });

        // var self = this;

        function onSuccess(page) {
          console.log('success', page);
          // self.set('newTitle', '');
          // self.set('newSlug', '');
          // self.set('newParagraph', '');
          // self.set('newImage', '');
          // self.transitionTo('blocks', page, page.get('blocks'));
        }

        function onFail(reason) {
          console.log(reason);
        }

        page.save(onSuccess, onFail);
      }
    }
  });

})();
