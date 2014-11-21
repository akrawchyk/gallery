/* globals Ember, App, S */


(function() {
  'use strict';


  App.BlocksNewController = Ember.ArrayController.extend({
    actions: {
      createBlock: function() {
        var title = this.get('newTitle');
        // var paragraph = this.get('newParagraph');
        // var image = this.get('newImage');

        if (!title) {
          return false;
        }

        var block = this.store.createRecord('block', {
          title: title
          // paragraph: paragraph,
          // image: image
        });

        this.set('newTitle', '');
        this.set('newParagraph', '');
        this.set('newImage', '');

        block.save();
      }
    }
  });

})();
