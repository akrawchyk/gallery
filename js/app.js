/* globals Ember, DS, jQuery, FastClick, WebFont */

(function() {
  'use strict';

  var App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });
  App.ApplicationAdapter = DS.FixtureAdapter;
  window.App = App;


  // View customization to allow binding of data attributes in templates
  Ember.View.reopen({
    init: function() {
      this._super();
      var self = this;

      // bind attributes beginning with 'data-'
      Em.keys(this).forEach(function(key) {
        if (key.substr(0, 5) === 'data-') {
          self.get('attributeBindings').pushObject(key);
        }
      });
    }
  });


  FastClick.attach(document.body);


  WebFont.load({
    google: {
      families: ['Lato', 'Overclock']
    }
  });

})();

this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};
this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<header>\n    app header\n</header>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<footer>\n    app footer\n</footer>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["blocks"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"blocks\" id=\"blocksapp\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</section>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["focuspoint"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"block__image js-focuspoint\"\n    ");
  hashContexts = {'data-focus-x': depth0};
  hashTypes = {'data-focus-x': "ID"};
  options = {hash:{
    'data-focus-x': ("focusX")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n    ");
  hashContexts = {'data-focus-y': depth0};
  hashTypes = {'data-focus-y': "ID"};
  options = {hash:{
    'data-focus-y': ("focusY")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n    ");
  hashContexts = {'data-image-w': depth0};
  hashTypes = {'data-image-w': "ID"};
  options = {hash:{
    'data-image-w': ("imageW")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n    ");
  hashContexts = {'data-image-h': depth0};
  hashTypes = {'data-image-h': "ID"};
  options = {hash:{
    'data-image-h': ("imageH")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["focuspointhelper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"focuspoint-helper\">\n    <img class=\"focuspoint-helper__image\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("view.image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n    <div class=\"focuspoint-helper__reticle circle\"></div>\n    <img class=\"focuspoint-helper__image focuspoint-helper__overlay\" ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("view.image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("go to pages");
  }

  data.buffer.push("<section id=\"index\">\n    <h1>Welcome to Gallery</h1>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "pages", options) : helperMissing.call(depth0, "link-to", "pages", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</section>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <h2>Generic modal for Application use</h2>\n    <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Close</button>\n");
  return buffer;
  }

  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("close")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["page"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("new block");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("back to pages");
  }

  data.buffer.push("<div class=\"page\">\n    <ul class=\"page__controls\">\n        <li>\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "blocks.new", options) : helperMissing.call(depth0, "link-to", "blocks.new", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n    </ul>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <div class=\"page__back\">\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "pages", options) : helperMissing.call(depth0, "link-to", "pages", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["pages"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("new page");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("back to index");
  }

  data.buffer.push("<section id=\"pagesapp\">\n    <header class=\"hero\" id=\"hero\">\n        <h1 class=\"hero__title\">Pages</h1>\n    </header>\n\n    <section id=\"main\">\n        <ul class=\"pages__controls\">\n            <li>\n                ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "pages.new", options) : helperMissing.call(depth0, "link-to", "pages.new", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </li>\n        </ul>\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </section>\n\n    <footer>\n        <p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</p>\n        <p>pages footer</p>\n    </footer>\n</section>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["blocks/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <div class=\"block flex\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("isEditing:block--editing")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n        ");
  hashContexts = {'image': depth0,'focusX': depth0,'focusY': depth0};
  hashTypes = {'image': "ID",'focusX': "ID",'focusY': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FocuspointView", {hash:{
    'image': ("image"),
    'focusX': ("focusX"),
    'focusY': ("focusY")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        <div class=\"block__content center--xy text--bordered text--center\">\n            <h2 class=\"block__title text--uppercase\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n            <p class=\"block__paragraph\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "paragraph", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n            <button class=\"block__toggle-edit\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleEdit", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isEditing", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</button>\n        </div>\n        <ul class=\"block__controls\">\n            <li>\n                <label class=\"label\">\n                    <span>Edit image</span>\n                    ");
  hashContexts = {'type': depth0,'value': depth0,'placeholder': depth0,'action': depth0,'on': depth0};
  hashTypes = {'type': "ID",'value': "ID",'placeholder': "STRING",'action': "STRING",'on': "STRING"};
  options = {hash:{
    'type': ("text"),
    'value': ("newImage"),
    'placeholder': ("New image URL"),
    'action': ("updateImage"),
    'on': ("enter")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </label>\n            </li>\n            <li>\n                <label class=\"label\">\n                    <span>Edit focus point</span>\n                    ");
  hashContexts = {'image': depth0};
  hashTypes = {'image': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FocuspointhelperView", {hash:{
    'image': ("image")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </label>\n            </li>\n        </ul>\n    </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Done");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("block")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["blocks/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("back to blocks");
  }

  data.buffer.push("<h1>Create block</h1>\n\n<ul class=\"blocks__controls\">\n    <li>\n        <label>\n            <span>Title</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Title your block"),
    'value': ("newTitle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <label>\n            <span>Paragraph</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Give your block a paragraph (optional)"),
    'value': ("newParagraph")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <label>\n            <span>Image</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Give your block an image (optional)"),
    'value': ("newImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createblock", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create block</button>\n        <!-- TODO make block adding work -->\n    </li>\n</ul>\n\n<div>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "blocks", options) : helperMissing.call(depth0, "link-to", "blocks", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["components/modal-dialog"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"overlay\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></div>\n<div class=\"modal\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["pages/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    <li class=\"page list__item\" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "ID"};
  options = {hash:{
    'style': ("imageStyle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "blocks", "", options) : helperMissing.call(depth0, "link-to", "blocks", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "image", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("image")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  hashContexts = {'alt': depth0};
  hashTypes = {'alt': "STRING"};
  options = {hash:{
    'alt': ("{{title}}")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<ul class=\"list list-bare\" id=\"pages\">\n    ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("page")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});
this["Ember"]["TEMPLATES"]["pages/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("back to pages");
  }

  data.buffer.push("<h1>Create a new page</h1>\n\n<ul class=\"pages__controls\">\n    <li>\n        <label>\n            <span>Title</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Title your page"),
    'value': ("newTitle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <label>\n            <span>Slug</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Give your page a slug (optional)"),
    'value': ("newSlug")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <label>\n            <span>Paragraph</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Give your page a paragraph (optional)"),
    'value': ("newParagraph")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <label>\n            <span>Image</span>\n            ");
  hashContexts = {'type': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'type': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'placeholder': ("Give your page an image (optional)"),
    'value': ("newImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </label>\n    </li>\n    <li>\n        <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createPage", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create page</button>\n    </li>\n</ul>\n\n<div>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "pages", options) : helperMissing.call(depth0, "link-to", "pages", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});
/* global App, Ember, jQuery */

(function() {
  'use strict';


  App.Router.map(function() {
    this.resource('pages', { path: '/pages' }, function() {
      this.route('new');
    });
    this.resource('page', { path: '/pages/:page_slug' }, function() {
      this.resource('blocks', function() {
        this.route('new');
      });
    });
  });


  App.ApplicationRoute = Ember.Route.extend({
    actions: {
      openModal: function(modalName, model) {
        this.controllerFor(modalName).set('model', model);
        return this.render(modalName, {
          into: 'application',
          outlet: 'modal'
        });
      },

      closeModal: function() {
        return this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
  });


  App.PagesRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('page');
    }
    // afterModel: function(pages/*, transition*/) {
    //   if (pages.get('length') === 0) {
    //     this.transitionTo('page.new');
    //   }
    //
    //   if (pages.get('length') === 1) {
    //     var firstPage = pages.get('firstObject');
    //     console.log(firstPage);
    //     this.transitionTo('blocks', firstPage);
    //   }
    // }
  });


  App.PageRoute = Ember.Route.extend({
    model: function(params) {
      return jQuery.getJSON('/pages/' + params.page_slug);
    },
    serialize: function(model) {
      return { page_slug: model.get('slug') };
    }
  });


  App.BlocksRoute = Ember.Route.extend({
    model: function () {
      return this.modelFor('page').get('blocks');
    },
    beforeModel: function() {
      var blocks = this.modelFor('page').get('blocks');
      var block = blocks.get('firstObject');

      if (!block) {
        this.transitionTo('blocks.new');
        return;
      }

      this.transitionTo('blocks.index');
    }
  });

})();

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

    focusX: attr(''),
    focusY: attr(''),
    imageW: attr(''),
    imageH: attr(''),

    page: belongsTo('page')
  });


  App.Block.reopenClass({
    FIXTURES:[
      {
        id: 1,
        title: 'Ferrari Panorama',
        paragraph: 'Ferrari (and a Lambo) Panorama taken at Cars and Coffee in Irvine.',
        image: '//farm8.staticflickr.com/7307/8732672635_ff80790616_k_d.jpg',
        focusX: 0,
        focusY: 0,
        imageW: 2048,
        imageH: 740,
        page: 1
      },
      {
        id: 2,
        title: 'Axion23',
        paragraph: 'Ferrari Supercars - F40, F50, and Enzo.',
        image: '//farm6.staticflickr.com/5332/9376918883_ef2844c3c0_k_d.jpg',
        focusX: 0,
        focusY: 0,
        imageW: 2048,
        imageH: 1356,
        page: 1
      },
      {
        id: 3,
        title: 'Spot The Odd One Out',
        paragraph: 'Roadtrip car feat some Lambos!',
        image: '//farm3.staticflickr.com/2898/14449510770_2f18830e87_k_d.jpg',
        focusX: 0,
        focusY: 0,
        imageW: 2048,
        imageH: 1365,
        page: 2
      }
    ]
  });

})();

/* globals App, Ember */

(function() {
  'use strict';


  App.ModalController = Ember.ObjectController.extend({
    actions: {
      close: function() {
        return this.send('closeModal');
      }
    }
  });

})();

/* globals Ember, App */


(function() {
  'use strict';


  App.PagesNewController = Ember.ArrayController.extend({
    actions: {
      createPage: function() {
        var title = this.get('newTitle');
        var slug = this.get('newSlug');
        var paragraph = this.get('newParagraph');
        var image = this.get('newImage');

        console.log(title, slug, paragraph, image);

        if (Ember.isEmpty(title)) {
          return false;
        } else {
          title = title.trim();
        }

        if (title && !slug) {
          slug = title.trim().dasherize();
        }

        // TODO consider adding bg color option

        var page = this.store.createRecord('page', {
          title: title,
          slug: slug,
          paragraph: paragraph,
          image: image
        });

        var self = this;

        function onSuccess(page) {
          console.log('success', page);
          // self.set('newTitle', '');
          // self.set('newSlug', '');
          // self.set('newParagraph', '');
          // self.set('newImage', '');
          // self.transitionTo('blocks', page, page.get('blocks'));
        }

        function onFail(reason) {
          console.log(reason);
        }

        page.save(onSuccess, onFail);
      }
    }
  });

})();

/* globals Ember, App */


(function() {
  'use strict';


  App.PageController = Ember.ObjectController.extend({
    actions: {
      editPage: function() {
        this.set('isEditing', true);
      }
    },

    isEditing: false,

    imageStyle: function() {
      return 'background-image: url(' + this.get('image') + ');';
    }.property('imageStyle')
  });

})();

/* globals Ember, App, S */


(function() {
  'use strict';


  App.BlocksNewController = Ember.ArrayController.extend({
    actions: {
      createBlock: function() {
        var title = this.get('newTitle');
        var paragraph = this.get('newParagraph');
        var image = this.get('newImage');

        if (Ember.isEmpty(title)) {
          return false;
        } else {
          title = title.trim();
        }

        var block = this.store.createRecord('block', {
          title: title,
          paragraph: paragraph,
          image: image
        });

        this.set('newTitle', '');
        this.set('newParagraph', '');
        this.set('newImage', '');

        block.save();
      }
    }
  });

})();

/* globals Ember, App */


(function() {
  'use strict';


  App.BlockController = Ember.ObjectController.extend({
    actions: {
      editBlock: function() {
        this.set('isEditing', true);
      },

      doneEditing: function() {
        this.set('isEditing', false);
      },

      toggleEdit: function() {
        var editing = this.get('isEditing');
        this.set('isEditing', !editing);
      },

      updateFocusPoint: function(newFocusPoint) {
        // TODO better type checking on this object
        console.log('controller ' + newFocusPoint);
        if (Ember.isEmpty(newFocusPoint.focusX || Ember.isEmpty(newFocusPoint.focusY))) {
          return;
        }

        var block = this.get('model');
        block.setProperties(newFocusPoint);
        block.save();
      },

      updateImage: function() {
        var newImage = this.get('newImage');

        if (Ember.isEmpty(newImage)) {
          return;
        }

        var block = this.get('model');
        block.set('image', newImage);
        block.save();
        console.log('updated image with ' + newImage);
      }
    },

    isEditing: false,

    imageStyle: function() {
      return 'background-image: url(' + this.get('image') + ');';
    }.property('imageStyle')
  });

})();

/* globals App, Ember */

(function() {
  'use strict';


  App.ModalDialogComponent = Ember.Component.extend({
    actions: {
      close: function() {
        return this.sendAction();
      }
    }
  });

})();

/* globals App, Ember */

(function() {
  'use strict';


  App.FocuspointView = Ember.View.extend({
    templateName: 'focuspoint',

    didInsertElement: function() {
      Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
      // FIXME add correct image width and heights
      // var imageH = this.$().closest('.block').height();
      // var imageW = this.$().closest('.block').width();
      // this.$().find('.js-focuspoint').attr('data-image-w', imageW).attr('data-image-h', imageH);
      // must not use the element due to binding data attrs
      this.$().find('.js-focuspoint').focusPoint({
        throttleDuration: 100
      });
      console.log('did focuspoint');
    }
  });

})();

/* globals App, Ember, jQuery */

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
      // FIXME this is a code smell. A lot of dependency on a jQuery plugin I guess
      // https://github.com/jonom/jquery-focuspoint/blob/d2e25764018e14ef226380c0aab3ddf6f5f40352/js/jquery.focuspoint.helpertool.js
      var focusPointAttr = {};
      var $image = jQuery(e.target);
      var $focusPointContainers = $image.closest('.block').find('.js-focuspoint');
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
