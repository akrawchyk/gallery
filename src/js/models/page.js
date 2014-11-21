/* global App, DS */

(function() {
  'use strict';


  var attr = DS.attr,
  hasMany = DS.hasMany;


  App.Page = DS.Model.extend({
    createdAt: attr('date', {
      defaultValue: function() { return new Date().toISOString(); }
    }),
    title: attr('string'),
    slug: attr('string'),
    paragraph: attr('string'),
    image: attr('string'),

    blocks: hasMany('block', { async: true })
  });


  App.Page.reopenClass({
    FIXTURES:[
      {
        id: 1,
        title: 'Ferrari',
        slug: 'ferrari',
        paragraph: 'An expose of Ferrari\'s',
        image: '',
        blocks: [1, 2]
      },
      {
        id: 2,
        title: 'Lambos',
        slug: 'lambos',
        paragraph: 'An expose of Lambo\'s',
        image: '',
        blocks: [3]
      },
      {
        id: 3,
        title: 'Profit!',
        slug: 'profit',
        paragraph: 'sdfghh',
        image: ''
      }
    ]
  });


})();
