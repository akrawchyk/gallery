/* global App, DS */

(function() {
  'use strict';


  var attr = DS.attr,
  belongsTo = DS.belongsTo;


  App.Block = DS.Model.extend({
    createdAt: attr('date', {
      defaultValue: function() { return new Date().toISOString(); }
    }),
    title: attr('string'),
    paragraph: attr('string'),
    image: attr('string'),

    page: belongsTo('page')
  });


  App.Block.reopenClass({
    FIXTURES:[
      {
        id: 1,
        title: 'block Learn Ember.js',
        paragraph: 'block Aasdf',
        image: '//www.fillmurray.com/300/300',
        page: 1
      },
      {
        id: 2,
        title: '...',
        paragraph: 'Qerty',
        image: '//www.fillmurray.com/600/400',
        page: 1
      },
      {
        id: 3,
        title: 'Profit!',
        paragraph: 'sdfghh',
        image: '//www.fillmurray.com/400/400',
        page: 2
      }
    ]
  });

})();
