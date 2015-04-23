/* 
 jQuery txtTip plugin
 Author: Hu Yicheng
 usage: $("slector").txtTip({tipTxt:"提示的文字信息",objStyle:{ww:100,hh:100}}); //  ww,hh 是为解决jQuery低版本库不支持获取隐藏元素高度和宽度而定义的宽度和高度
*/
(function(){
$.fn.txtTip = function(options){
	var defaults = {tipTxt:"",objStyle:{defaultColor:"#000",fontSize:"12px",ww:150,hh:30},labelStyle:{focusColorNull:"#CCC",blurColorNull:"#999"},wrapStyle:""};
	var options = $.extend(defaults, options);
	this.each(function(){
		var visibleState = "visible";
		if($.trim($(this).val()).length > 0){visibleState = "hidden";}
		var wS = "width:"+options.objStyle.ww+"px; height:"+options.objStyle.hh+"px; position:relative; overflow:hidden;"+options.wrapStyle+";";
		var lS = "display:block; width:"+options.objStyle.ww+"px; height:"+options.objStyle.hh+"px; line-height:"+options.objStyle.hh+"px;position:absolute;left:0;top:0;cursor:text;visibility:"+visibleState+";text-indent:8px;color:"+options.labelStyle.blurColorNull+";font-size:"+options.objStyle.fontSize;
		
		$(this).wrap("<div style='"+wS+"'></div>");
		$(this).after("<label style='"+lS+"'>"+options.tipTxt+"</label>");
		$(this).css({"color":options.objStyle.defaultColor,"position":"absolute", "left":0, "top":0, "backgroundColor":"transparent"});
		var label = $(this).next("label");
		$(this).bind({
			"focus":function(){
				var vl = $.trim($(this).val()).length;
				if(vl==0){label.css("color",options.labelStyle.focusColorNull);}else{label.css("visibility","hidden");}
			},
			"keyup":function(){
				var vl = $.trim($(this).val()).length;
				if(vl==0){label.css({"visibility":"visible","color":options.labelStyle.focusColorNull});}else{label.css("visibility","hidden");}
			},
			"blur":function(){
				var vl = $.trim($(this).val()).length;
				if(vl==0){label.css({"visibility":"visible","color":options.labelStyle.blurColorNull});}else{label.css("visibility","hidden");}
			}
		});
		var $t = $(this);
		$(this).next("label").click(function(){
			$t.trigger("focus");
		});
	});
};
	
})(jQuery);