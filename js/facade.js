//外观模式
//外观模式实现
function addEvent(dom,type,fn){
	//对于支持DOM二级事件处理程序addEventListener方法的浏览器
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
		//对于不支持addEventListener方法但支持attachEvent方法的浏览器
	}else if(dom.attachEvent){
		dom.attachEvent('on'+type,fn);
		//对于不支持addEventListener方法也不支持addEvent方法，但支持on+‘事件名’的浏览器
	}else{
		dom['on'+type]=fn;
	}
}

//获取事件对象
var getEvent=function(event){
	//标准浏览器返回event.target,IE下window.event
	return event.target || window.target;
}
//获取元素
var getTarget=function(event){
	//标准浏览器下event.target,IE下event.srcElement
	return event.target || event.srcElement;
}
//阻止默认行为
var preventDefault=function(event){
	var event=getEvent(event);
	//标准浏览器
	if(event.preventDefault){
		event.preventDefault();
	}else{
		//IE浏览器
		event.returnValue=false;
	}
	
}
var myInput=document.getElementById('myinput');
addEvent(myInput,'click',function(){
	console.log("绑定第一个事件");
})

addEvent(myInput,'click',function(){
	console.log("绑定第二个事件");
});

addEvent(myInput,'click',function(){
	console.log("绑定第三个事件");
})

document.onclick=function(e){
	preventDefault(e);
	if(getTarget(e)!==document.getElementById('myinut')){
		hideInputSug();
	}
}

//获取元素属性的方法库
//简约版属性样式方法库
var A={
	//通过id获取元素
	g:function(id){
		return document.getElementById(id);
	},
	//设置元素CSS属性
	css:function(id,key,value){
		document.getElementById(id).style[key]=value;
	},
	//设置元素的属性
	attr:function(id,key,value){
		document.getElementById(id)[key]=value;
	},
	html:function(id,html){
		document.getElementById(id).innerHTML=html;
	},
	//为元素绑定事件
	on:function(id,type,fn){
		document.getElementById(id)['on'+type]=fn;
	}
};
A.css('box','background','red');
A.attr('box','className','box');
A.html('box','这是新添加的内容');
A.on('box','click',function(){
	A.css('box','width','500px');
});