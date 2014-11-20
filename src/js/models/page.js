/* global Gallery, DS */

(function() {
  'use strict';

  var attr = DS.attr,
  hasMany = DS.hasMany;


  Gallery.Page = DS.Model.extend({
    createdAt: attr('date', {
      defaultValue: function() { return new Date().toISOString(); }
    }),
    title: attr('string'),
    slug: attr('string'),
    paragraph: attr('string'),
    image: attr('string'),

    blocks: hasMany('block', { async: true })
  });


  Gallery.Page.reopenClass({
    FIXTURES:[
      {
        id: 1,
        title: 'Learn Ember.js',
        slug: 'learn-emberjs',
        paragraph: 'Aasdf',
        image: '//www.fillmurray.com/300/300',
        blocks: [1, 2]
      },
      {
        id: 2,
        title: '...',
        slug: 'elipses',
        paragraph: 'Qerty',
        image: '//www.fillmurray.com/600/400'
      },
      {
        id: 3,
        title: 'Profit!',
        slug: 'profit',
        paragraph: 'sdfghh',
        image: '//www.fillmurray.com/400/400'
      }
    ]
  });


})();
