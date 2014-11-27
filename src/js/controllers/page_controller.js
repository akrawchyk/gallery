/* globals Ember, App */


(function() {
  'use strict';


  App.PageController = Ember.ObjectController.extend({
    actions: {
      editPage: function() {
        this.set('isEditing', true);
      }
    },

    isEditing: false,

    imageStyle: function() {
      return 'background-image: url(' + this.get('image') + ');';
    }.property('imageStyle')
  });

  App.PageEditController = Ember.ObjectController.extend({
    actions: {
      acceptEdits: function() {
        this.set('isEditing', false);

        // FIXME editing slug is problematic, needs to be unique to the application
        // for routing. Also, when updating, need to reflect that change somehow.
        var self = this;
        var edits = false;
        var newPageAttrs = (function() {
          var attrs = {};
          // value corresponds with template {{input value=<value>}}
          ['newTitle', 'newSlug', 'newParagraph', 'newImage'].forEach(function(value) {
            var newVal = self.get(value);
            if (Ember.isPresent(newVal)) {
              edits = true;
              self.set(value, '');
              // remove 'new' and lowercase
              attrs[value.slice(3).toLowerCase()] = newVal;
            }
          });
          return attrs;
        })();

        if (!edits) {
          return;
        }

        var page = this.get('model');
        page.setProperties(newPageAttrs);
        page.save();
      }
    }
  });

})();
