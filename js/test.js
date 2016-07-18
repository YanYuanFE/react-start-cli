// function prototypeExtend(){
// 	var F=function(){},
// 	args=arguments,
// 	i=0,
// 	len=args.length;
// 	for(;i<len;i++){
// 		for(var j in args[i]){
// 			F.prototype[j]=args[i][j];
// 		}
// 	}
// 	return new F();
// }

// var penguin=prototypeExtend({
// 	speed:20,
// 	swim:function(){
// 		console.log('游泳速度'+this.speed);
// 	}
// },{
// 	run:function(speed){
// 		console.log('奔跑速度'+speed);
// 	}
// },{
// 	jump:function(){
// 		console.log('跳跃动作');
// 	}
// });

// penguin.swim();
// penguin.run(10);
// penguin.jump();


// function prison(){
// 	for(i=0;i<10;i++){
// 		console.log(i);
// 	}
// }

// prison();
// console.log(i);
// delete window.i;
// 
// 
// 
// function prison(){
// 	for(var i=0;i<10;i++){
// 		console.log(i);
// 	}
// }

// prison();
// console.log(i);
// 
// function prison(){
// 	var i;
// 	for(i=0;i<10;i++){
// 		console.log(i);
// 	}
// }

// prison();
// console.log(i);

//变量提升
// function hoisted(){
// 	console.log(v);
// 	var v=1;
// }
// hoisted();
// 
// function isString(str){
// 	return (typeof str=='string') && str.constructor==String;
// }


// function isArray(obj){
// 	return (typeof obj=='object') && obj.constructor==Array;
// }

// function isNumber(obj){
// 	return (typeof obj=='number') && obj.constructor==Number;
// }

// function isObject(obj){
// 	return (typeof obj=='object') && obj.constructor==Object;
// }

// var a='12';
// var b=[1];
// var c=2;
// var d={};
// console.log(isString(a));
// console.log(isArray(b));
// console.log(isNumber(c));
// console.log(isObject(d));

// function nowTime(){
// 	var time=new Date();
// 	var nowYear=time.getFullYear();
// 	var nowMonth=time.getMonth();
// 	var nowDay=time.getDate();
// 	var nowHour=time.getHours();
// 	var nowMinute=time.getMinutes();
// 	var nowSecond=time.getSeconds();
// 	var nowtime=nowYear+'-'+nowMonth+'-'+nowDay+" "+nowHour+":"+nowMinute+":"+nowSecond;
// 	document.getElementById("box").innerHTML=nowtime;
// 	setTimeout("nowTime()",1000);
// }

// nowTime();

// window.onload=function(){
// 	alert("Hello\nWorld")
// 	alert("Hello\r\nWorld")
// }
//判断字符串出现次数最多的字符
// function strSplit(str){
// 	var arr=str.split("");
// 	var obj={};
// 	var objArr=[];
// 	var max=0;
// 	var maxKey;
// 	console.log(arr);
// 	for(var i=0,j;i<arr.length;i++){
// 		j=arr[i];
// 		if(!obj[j]){
// 			obj[j]=1;
// 		}else{
// 			obj[j]++;
// 		}
// 	}
// 	console.log(obj);
// 	for(var i in obj){
// 		if(max<obj[i]){
// 			max=obj[i];
// 			maxKey=i;
// 		}

// 	}
// 	console.log(maxKey);//次数最多的值
// 	console.log(max);//最多的次数
// }
// var str ="caibaojian.com";
// strSplit(str);

//JS把url参数解析为一个对象
// var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";
// function parseQueryString(url){
// 	var items=url.split("?")[1];
// 	var item=items.split("&");
// 	var obj={},arr,name,value;
// 	for(var i=0;i<item.length;i++){
// 		arr=item[i].split("=");
// 		console.log(arr)
// 		name=arr[0];
// 		value=arr[1];
// 		obj[name]=value;
// 	}
// 	return obj;
// }
// console.log(parseQueryString(url));

//JS从文本框中取出值并在span中显示出来
// function getName(){
// 	var boxEle=document.getElementById("field");
	
// 	var inputEle=boxEle.getElementsByTagName("input");
// 	console.log(inputEle)
// 	var inputValue=inputEle[0].value;
	
// 	function showName(){
// 		var red=document.getElementsByClassName("red")[0];
// 		console.log(red)
// 		red.innerHTML=inputValue;
// 		console.log(inputValue)
// 	}
// 	return showName();
// }

// window.onload=getName();
window.onload=function(){
	var box=document.getElementById('abox');
	var oStyle=window.getComputedStyle(box, null);

	box.onfocus=function(){
		console.log(oStyle.width);
		oStyle.width='300px';
	}
}