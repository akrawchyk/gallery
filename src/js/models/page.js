/* global Gallery, DS */

(function() {
  'use strict';

  Gallery.Page = DS.Model.extend({
    title: DS.attr('string'),
    slug: DS.attr('string'),
    paragraph: DS.attr('string'),
    image: DS.attr('string')
  });

  Gallery.Page.FIXTURES = [
    {
      id: 1,
      title: 'Learn Ember.js',
      slug: 'learn-emberjs',
      paragraph: 'Aasdf',
      image: '//www.fillmurray.com/300/300'
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
  ];

})();
