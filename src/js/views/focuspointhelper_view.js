/* globals App, Ember */

(function() {
  'use strict';


  App.FocuspointhelperView = Ember.View.extend({
    templateName: 'focuspointhelper',

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      // TODO update reticle with model values
    },

    click: function(e) {
      // https://github.com/jonom/jquery-focuspoint/blob/d2e25764018e14ef226380c0aab3ddf6f5f40352/js/jquery.focuspoint.helpertool.js
      var focusPointAttr = {};
      var $image = jQuery(e.target);
      var $focusPointContainers = $image.closest('.js-focuspoint');
      var imageW = $image.width();
      var imageH = $image.height();

      // calculate focus point coordinates
      var offsetX = e.pageX - $image.offset().left;
      var offsetY = e.pageY - $image.offset().top;
      var focusX = (offsetX/imageW - 0.5)*2;
      var focusY = (offsetY/imageH - 0.5)*-2;
      focusPointAttr.focusX = focusX;
      focusPointAttr.focusY = focusY;

      // update focus point to the model
      this.get('controller').send('updateFocusPoint', focusPointAttr);

      $focusPointContainers.attr({
        'data-focus-x': focusPointAttr.focusX,
        'data-focus-y': focusPointAttr.focusY
      });
      $focusPointContainers.data('focusX', focusPointAttr.focusX);
      $focusPointContainers.data('focusY', focusPointAttr.focusY);
      $focusPointContainers.focusPoint('adjustFocus');
      console.log(focusPointAttr);
      console.log('readjusted focuspoint');


      // calculate focus point percentages
      var percentageX = (offsetX/imageW)*100;
      var percentageY = (offsetY/imageH)*100;
      // var backgroundPosition = percentageX.toFixed(0) + '% ' + percentageY.toFixed(0) + '%';
      // var backgroundPositionCSS = 'background-position: ' + backgroundPosition + ';';

      // move helper reticle
      $image.closest('.focuspoint-helper').find('.focuspoint-helper__reticle').css({
        top: percentageY+'%',
        left: percentageX+'%'
      });
    }
  });
})();
