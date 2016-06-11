//适配器模式
//定义框架
var A=A || {};
//通过ID获取元素
A.g=function(id){
	document.getElementById(id);
}
//为元素绑定事件
A.on=function(id,type,fn){
	// 如果传递参数是字符串则以id处理，否则以元素对象处理
	var dom=typeof id==='string' ? this.g(id):id;
	//标准DOM2级添加事件方式
	if(dom.addEventListener){
		dom.addEventListener(type,fn,false);
		//IE DOM2级添加事件方式
	}else if(dom.attachEvent){
		dom.attachEvent('on'+type,fn);
		//简易添加事件方式
	}else{
		dom['on'+type]=fn;
	}
};

//窗口加载完成事件
A.on(window,'load',function(){
	//按钮点击事件
	A.on('mybutton','click',function(){
		console.log('点击button');
	});
});

A.g=function(id){
	//通过JQuery来获取JQuery对象，然后返回第一个成员
	return $(id).get(0);
};
A.on=function(id,type,fn){
	//如果传递参数是字符串则以id处理，否则以元素对象处理
	var dom=typeof id==='string'? $('#'+id):$(id);
	dom.on(type,fn);
};

//数组适配对象
var arr=['JavaScript','book','前端编程语言','8月1日'];
var obj={
	name:'',
	type:'',
	title:'',
	time:''

};

function arrToObjAdapter(arr){
	return {
		name:arr[0],
		type:arr[1],
		title:arr[2],
		time:arr[3]
	}
}

var adapterData=arrToObjAdapter(arr);
console.log(adapterData);


//服务端数据适配
function ajaxAdapter(data){
	//处理数据并返回新数据
	return [data['key1'],data['key2'],data['key3']]
};
$.ajax({
	url:'someAdress.php',
	success:function(data,status){
		if(data){
			doSomething(ajaxAdapter(data));
		}
	}
});