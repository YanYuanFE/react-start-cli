//链模式
var A=function(selector,context){
	return new A.fn.init(selector,context);
}

A.fn=A.prototype={
	constructor:A,
	init:function(selector,context){

		// console.log(this.constructor);
	
		this.length=0;
		context=context || document;
		if(~selector.indexOf('#')){
			this[0]=document.getElementById(selector);
			this.length=1;
		}else{
			var doms=context.getElementsByTagName(selector),
				i=0,
				len=doms.length;
			for(;i<len;i++){
				this[i]=doms[i];
			}
			this.length=len;
		}
		this.context=context;
		this.selector=selector;

		// console.log(this===A.fn,this===A.prototype,this);
		return this;
	},
	length:2,
	size:function(){
		return this.length;
	},
	push:[].push,
	sort:[].sort,
	splice:[].splice
}
A.fn.init.prototype=A.fn;

A.extend=A.fn.extend=function(){
	var i=1,
		len=arguments.length,
		target=arguments[0],
		j;
	if(i==len){
		target=this;
		i--;
	}
	for(;i<len;i++){
		for(j in arguments[i]){
			target[j]=arguments[i][j];
		}
	}
	return target;
}
var demo=A('demo');
var test=A('test');

console.log(test);
console.log(A('demo').size());

var demo=A.extend({first:1},{second:2},{third:3});

console.log(demo);
A.extend(A.fn,{version:'1.0'});
console.log(A('demo').version);
A.fn.extend({getVersion:function(){return this.version}});
console.log(A('demo').getVersion());
A.extend(A,{author:'小明'});
console.log(A.author);
A.extend({nickname:'雨夜清河'});
console.log(A.nickname);

A.fn.extend({
	on:(function(){
		if(document.addEventListener){
			var i=this.length-1;
			for(;i>=0;i--){
				this[i].addEventListener(type,fn,false);
			}
			return this;
		}
		else if(document.attachEvent){
			return function(type,fn){
				var i=this.length-1;
				for(;i>=0;i--){
					this[i].addEvent('on'+type,fn);
				}
				return this;
			}
		}else{
			return function(type,fn){
				var i=this.length-1;
				for(;i>=0;i--){
					this[i]['on'+type]=fn;
				}
				return this;
			}
		}
	})()
})

A.extend({
	camelCase:function(str){
		return str.replace(/\-(\w)/g,function(all,letter){
			return letter.toUpperCase();
		});
	}
});

A.fn.extend({
	css:function(){
		var arg=arguments,
			len=arg.length;
		if(this.length<1){
			return this;
		}
		if(len===1){
			if(typeof arg[0]==='string'){
				if(this[0].currentStyle){
					return this[0].currentStyle[name];
				}else{
					return getComputedStyle(this[0],false)[name];
				}
			}else if(typeof arg[0]==='object'){
				for(var i in arg[0]){
					for(var j=this.length-1;j>=0;j--){
						this[j].style[A.camelCase(i)]=arg[0][i];
					}
				}
			}
		}else if(len===2){
			for(var j=this.length-1;j>=0;j--){
				this[j].style[A.camelCase(arg[0])]=arg[1];
			}
		}
		return this;
	}
})

A.fn.extend({
	attr:function(){
		var arg=arguments,
			len=arg.length;
		if(this.length<1){
			return this;
		}
		if(len===1){
			if(typeof arg[0]==='string'){
				
				return this[0].getAttribute(arg[0]);
				
			}else if(typeof arg[0]==='object'){
				for(var i in arg[0]){
					for(var j=this.length-1;j>=0;j--){
						this[j].setAttribute(i,arg[0][i]);
					}
				}
			}
		}else if(len===2){
			for(var j=this.length-1;j>=0;j--){
				this[j].setAttribute(arg[0],arg[1]);
			}
		}
		return this;
	}
})

A.fn.extend=({
	html:function(){
		var arg=arguments,
			len=arg.length;
		if(len==0){
			return this[0] && this[0].innerHTML;
		}else{
			for(var i=this.length-1;i>=0;i--){
				this[i].innerHTML=arg[0];
			}
		}
		return this;
	}
})


A('div')
.css({
	height:'30px',
	border:'1px solid #000',
	'background-color':'red'
})
.attr('class','demo')
.html('add demo text')
.on('click',function(){
	console.log('clicked');
})