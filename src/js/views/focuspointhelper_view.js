/* globals App, Ember, jQuery, interact */

(function() {
  'use strict';


  App.FocuspointhelperView = Ember.View.extend({
    templateName: 'focuspointhelper',

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      console.log(this);
      // TODO update reticle with model values
      var $reticle = this.$().find('.focuspoint-helper__reticle');
      interact($reticle[0]).draggable({
        max: 1,
        onmove: function(e) {
          console.log(e.pageX, e.pageY);
          // https://github.com/jonom/jquery-focuspoint/blob/d2e25764018e14ef226380c0aab3ddf6f5f40352/js/jquery.focuspoint.helpertool.js
          var focusPointAttr = {};
          var $image = jQuery(e.target);
          var $focusPointContainers = $image.closest('.block').find('.js-focuspoint');
          var imageW = $image.width();
          var imageH = $image.height();

          var offsetX = e.pageX - $image.offset().left;
          var offsetY = e.pageY - $image.offset().top;
          var focusX = (offsetX/imageW - 0.5)*2;
          var focusY = (offsetY/imageH - 0.5)*-2;
          focusPointAttr.focusX = focusX;
          focusPointAttr.focusY = focusY;

          console.log(focusPointAttr);

          // update focus point to the model
          // controller.send('updateFocusPoint', focusPointAttr);

          $focusPointContainers.attr({
            'data-focus-x': focusPointAttr.focusX,
            'data-focus-y': focusPointAttr.focusY
          });
          $focusPointContainers.data('focusX', focusPointAttr.focusX);
          $focusPointContainers.data('focusY', focusPointAttr.focusY);
          $focusPointContainers.focusPoint('adjustFocus');

          // translate the element
          var percentageX = (offsetX/imageW)*100;
          var percentageY = (offsetY/imageH)*100;
          $reticle[0].style.webkitTransform =
            $reticle[0].style.transform =
            'translate(' + percentageX+ '%, ' + percentageY + '%)';

          // calculate focus point percentages
          // var backgroundPosition = percentageX.toFixed(0) + '% ' + percentageY.toFixed(0) + '%';
          // var backgroundPositionCSS = 'background-position: ' + backgroundPosition + ';';
        }
      });
    },
    click: function(e) {
      console.log(e.pageX, e.pageY);
    }
  });

  Ember.Handlebars.helper('focuspoint-helper', App.FocuspointhelperView);

})();
