/*!
 * jQuery WD PicMark Plugin v0.8(beta)
 * 
 *
 * Copyright 2012, Mizan Syed, With Digital
 * DO NOT REMOVE ANY ATTRIBUTION INFO
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */


;(function($) {
  $.fn.wd_picmark = function(options) 
  {
    var defaults = 
    {
       useAlt: true,
       dataAttrVar: 'mark',
       defaultText: false,
       useExternalStyle: false,
       positionX: 'right', //left 
       positionY: 'bottom', //top
       marginX: '2px',
       marginY: '2px',
       font: {
        fontFamily: '"Lekton", arial, sans-serif',
        fontSize: '10px',
        color : '#dddddd',
        backgroundColor : 'transparent', 
        shadow : '0px 1px 1px #4d4d4d',
        padding: '2px'
       }

    }

    //get the settings sorted
    var settings = $.extend({}, defaults, options);

    //prefix
    var prefix = "wd_picmark";
    var wrapper_class = prefix + "_wrapper";
    var mark_span_class = prefix + "_mark";

    var add_wrapper = function(el)
    {
      el.wrap("<div style='position:relative'><div class='" + wrapper_class + "'></div></div>");
    }

    var add_mark = function(el, data) 
    {
      el.after("<span class='" + mark_span_class + "'>" + data + "</data>");
    }

    var stylise = function(el)
    {
      var obj_wrapper = el.parent();
      obj_wrapper.css({
        'float'     : 'left', 
        'position'  : 'relative'
      });

      var obj_mark = obj_wrapper.find('.wd_picmark_mark');
      obj_mark.css({
        'position' : 'absolute',
      });

      obj_mark.css(settings.positionX, settings.marginX); 
      obj_mark.css(settings.positionY, settings.marginY); 
      obj_mark.css('font-size', settings.font.fontSize); 
      obj_mark.css('font-family', settings.font.fontFamily); 
      obj_mark.css('background-color', settings.font.backgroundColor); 
      obj_mark.css('color', settings.font.color); 
      obj_mark.css('text-shadow' , settings.font.shadow);
      obj_mark.css('padding' , settings.font.padding);

    }
    

    return this.each(function() {
      var obj = $(this);
      var mark_text = "";

      if (obj.get(0).tagName !== "IMG") return;

      if (settings.useAlt === true)
      {
        if (obj.get(0).hasAttribute("alt") !== false)
        { 
          var mark_text = obj.attr("alt"); //use this is alt is set
        }
      } 
      else
      {
        //use this if data attribute is set
        var mark_text = obj.data(dataAttrVar);
      }

      //if the default is set and no alt is set
      if (mark_text == "" && defaultText !== false)
      {
        mark_text == defaultText;
      }

      //nothing is available ...
      if (mark_text == "") return;

      add_wrapper(obj);
      add_mark(obj, mark_text);

      if (!settings.useExternalStyle) stylise(obj);
    });

  }
})(jQuery);