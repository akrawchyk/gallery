/* global Gallery, DS */

(function() {
  'use strict';

  var attr = DS.attr,
  belongsTo = DS.belongsTo;

  Gallery.Block = DS.Model.extend({
    createdAt: attr('date', {
      defaultValue: function() { return new Date().toISOString(); }
    }),
    title: attr('string'),
    paragraph: attr('string'),
    image: attr('string'),

    page: belongsTo('page')
  });


  Gallery.Block.reopenClass({
    FIXTURES: [
      {
        id: 1,
        title: 'Top Block',
        paragraph: 'Top block paragraph',
        image: '//www.fillmurray.com/1000/1000',
        page: 1
      },
      {
        id: 2,
        title: 'Second Block',
        paragraph: 'Second block paragraph',
        image: '//www.fillmurray.com/1100/1100',
        page: 1
      }
    ]
  });

})();
