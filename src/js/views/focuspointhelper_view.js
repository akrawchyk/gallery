/* globals App, Ember, jQuery, interact */

(function() {
  'use strict';


  App.FocuspointhelperView = Ember.View.extend({
    classNames: ['focuspointhelper'],
    templateName: 'focuspointhelper',

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      // TODO update reticle with model values
      var self = this;
      var $reticle = this.$().find('.focuspointhelper__reticle');
      interact($reticle[0]).draggable({
        max: 1,
        onmove: function(e) {
          // https://github.com/jonom/jquery-focuspoint/blob/d2e25764018e14ef226380c0aab3ddf6f5f40352/js/jquery.focuspoint.helpertool.js
          // var $image = jQuery(e.target);
          var $focusPointContainers = $reticle.closest('.block').find('.focuspoint');
          var $image = $reticle.closest('.focuspointhelper').find('.focuspointhelper__image');
          var imageW = $image.width();
          var imageH = $image.height();

          var offsetX = e.pageX - $image.offset().left;
          var offsetY = e.pageY - $image.offset().top;
          var focusX = (offsetX/imageW - 0.5)*2;
          var focusY = (offsetY/imageH - 0.5)*-2;
          var focusPointAttr = {};
          focusPointAttr.focusX = focusX;
          focusPointAttr.focusY = focusY;

          // update focus point to the model
          self.get('controller').send('updateFocusPoint', focusPointAttr);

          // update focus point to the dom (Ember sets attr, not data)
          $focusPointContainers.data('focus-x', focusX);
          $focusPointContainers.data('focus-y', focusY);
          $focusPointContainers.focusPoint('adjustFocus');

          // TODO this is copy/paste from interactjs, clean it up a bi
          // translate the element
          var target = e.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;

          // translate the element
          target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }
      })
      .restrict({
        drag: 'parent',
        endOnly: false,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      });
    }
  });

  Ember.Handlebars.helper('focuspoint-helper', App.FocuspointhelperView);

})();
