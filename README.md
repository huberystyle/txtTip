# txtTip
一个文本框信息提示的jQuery插件！

使用说明：

$("input选中器").txtTip({
    tipTxt:"this is a test", // 提示信息	
    objStyle:{defaultColor:"#000",fontSize:"12px",ww:150,hh:30},// input框字体颜色和大小及文本框长度宽度设置
    labelStyle:{focusColorNull:"color",blurColorNull:"color"}, // 获得焦点和失去焦点时的文本信息的颜色设置
    wrapStyle:"float:left;margin-right:9px;text-align:left" // input的样式
})

无论是input text 还是 password 都可以使用。
