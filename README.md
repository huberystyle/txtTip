# txtTip

一个文本框信息提示的jQuery插件！

不论你是input text还是 input password 它都可以完美提示。

这个插件写于2013年，现已成为世纪天成平台及各游戏官网通用的标准。


######使用说明：######
```js
$("input选中器").txtTip({
    tipTxt:"this is a test", // 提示信息	
    objStyle:{defaultColor:"#000",fontSize:"12px",ww:150,hh:30},// input框字体颜色和大小及文本框长度宽度设置
    labelStyle:{focusColorNull:"color",blurColorNull:"color"}, // 获得焦点和失去焦点时的文本信息的颜色设置
    wrapStyle:"float:left;margin-right:9px;text-align:left" // input的样式
})
```

