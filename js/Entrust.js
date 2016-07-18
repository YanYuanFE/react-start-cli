//委托模式
var ul=document.getElementById('container'),
	li=document.getElementsByTagName('li'),
	i=li.length-1;
for(;i>=0;i--){
	li[i].onclick=function(){
		this.style.backgroundColor='grey';
	}
}
//事件委托 
ul.onclick=function(){
	var e=e || window.event,
		tar=e.target || e.srcElement;
	if(tar.nodeName.toLowerCase()=='li'){
		tar.style.backgroundColor='grey';
	}
}


var article=document.getElementById('article');
article.onclick=function(){
	var e=e || window.event,
		tar=e.target || e.srcElement;
	if(tar.nodeName.toLowerCase()==='p'){
		tar.innerHTML='我要更改这段内容';
	}
}

var p=document.createElement('p');
p.innerHTML='新增一段内容';
article.appendChild(p);

var g=function(id){
	return document.getElementById(id);
}

g('btn_container').onclick=function(e){
	var target=e && e.target || window.event.srcElement;
	if(target.id==='btn'){
		g('btn_container').innerHTML='触发了事件';
	}
}