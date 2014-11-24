/* globals App, Ember */

(function() {
  'use strict';


  App.FocusPointView = Ember.View.extend({
    templateName: 'focuspoint',
    click: function(evt) {
      console.log(evt);
      alert("FocusPointView was clicked!");
    }
  });
})();
