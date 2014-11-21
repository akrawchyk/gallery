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
        title: 'Ferrari Panorama',
        paragraph: 'Ferrari (and a Lambo) Panorama taken at Cars and Coffee in Irvine.',
        image: '//farm8.staticflickr.com/7307/8732672635_ff80790616_k_d.jpg',
        page: 1
      },
      {
        id: 2,
        title: 'Axion23',
        paragraph: 'Ferrari Supercars - F40, F50, and Enzo.',
        image: '//farm6.staticflickr.com/5332/9376918883_ef2844c3c0_k_d.jpg',
        page: 1
      },
      {
        id: 3,
        title: 'Spot The Odd One Out',
        paragraph: 'Roadtrip car feat some Lambos!',
        image: '//farm3.staticflickr.com/2898/14449510770_2f18830e87_k_d.jpg',
        page: 2
      }
    ]
  });

})();
