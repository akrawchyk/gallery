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
        image: '//lh6.googleusercontent.com/-c8CcCzSEH6w/UT4HMJE4j9I/AAAAAAABNj8/2puHpt9nL34/s250-no/prova_logo.jpg',
        blocks: [1, 2]
      }
      // ,
      // {
      //   id: 2,
      //   title: 'Lambos',
      //   slug: 'lambos',
      //   paragraph: 'An expose of Lambo\'s',
      //   image: '//lh4.googleusercontent.com/-Kcv3WfzI-uU/Uk2OU8-yXgI/AAAAAAAAZ28/5X4DCD4JmOc/s380-no/Logo%2BGoogle%2BPlus.jpg',
      //   blocks: [3]
      // },
      // {
      //   id: 3,
      //   title: 'Profit!',
      //   slug: 'profit',
      //   paragraph: 'sdfghh',
      //   image: ''
      // }
    ]
  });


})();
