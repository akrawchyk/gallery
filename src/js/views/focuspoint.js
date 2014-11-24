/* globals App, Ember */

(function() {
  'use strict';


  App.FocusPointView = Ember.View.extend({
    click: function(evt) {
      console.log(evt);
      // this.get('controller').send('isEditing', true);
      alert("FocusPointView was clicked!");
    }
  });
})();
