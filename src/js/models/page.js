/* global Gallery, DS */

(function() {
  'use strict';

  Gallery.Page = DS.Model.extend({
    title: DS.attr('string'),
    paragraph: DS.attr('string'),
    image: DS.attr('string')
  });

  Gallery.Page.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    paragraph: 'Aasdf',
    image: '//www.fillmurray.com/200/300'
  },
  {
    id: 2,
    title: '...',
    paragraph: 'Qerty',
    image: '//www.fillmurray.com/100/400'
  },
  {
    id: 3,
    title: 'Profit!',
    paragraph: 'sdfghh',
    image: '//www.fillmurray.com/200/400'
  }
  ];

})();
