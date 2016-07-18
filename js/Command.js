//命令模式

//模块实现模块
// var viewCommand=(function(){
// 	var tpl={
// 		//展示图片结构模板
// 		product:[
// 			'<div>',
// 				'<img src="{#src#}"/>',
// 				'<p>{#text#}</p>',
// 			'</div>'
// 		].join(''),
// 		//展示标题结构模板
// 		title:[
// 			'<div class="title">',
// 				'<div class="main">',
// 					'<h2>{#title#}</h2>',
// 					'<p>{#tips#}</p>',
// 				'</div>',
// 			'</div>'
// 		].join('')
// 	},
// 	//格式化字符串缓存字符串
// 	html='';
// 	//格式化字符串 如：'<div>{#content#}</div>'用{content:'demo'}替换后可得到字符串:'<div>demo</div>'
// 	function formateString(str,obj){
// 		//替换'{#'与'#}'之间的字符串
// 		return str.replace(/\{#(\w+)#\}/g,function(match,key){
// 			return obj[key];
// 		})
// 	}
// 	//方法集合
// 	var Action={
// 		//创建方法
// 		create:function(data,view){
// 			//解析数据 如果数据是一个数组
// 			if(data.length){
// 				//遍历数组
// 				for(var i=0,len=data.length;i<len;i++){
// 					//将格式化之后的字符串缓存到html中
// 					html+=formateString(tpl[view],data[i]);
// 				}
// 			}else{
// 				//直接格式化字符串缓存到html中
// 				html+=formateString(tpl[view],data);
// 			}
// 		},
// 		//展示方法
// 		display:function(container,data,view){
// 			//如果传入数据
// 			if(data){
// 				//根据给定数据创建视图
// 				this.create(data,view);
// 			}
// 			document.getElementById(container).innerHTML=html;
// 			//展示后清空缓存的字符串
// 			html='';
// 		}
// 	}
// 	//命令接口
// 	return function excute(msg){
// 		//解析命令，如果msg.param不是数组则将其转化为数组(apply方法要求第二个参数为数组)
// 		msg.param=Object.prototype.toString.call(msg.param)==="[Object Array]" ? msg.param:[msg.param];
// 		//Action 内部调用的方法引用this，所以此处为保证作用域this执行传入Action
// 		Action[msg.command].apply(Action,msg.param);
// 	}	
// })();






// //产品展示数据
// var productData=[
// 	{
// 		src:'img/02.jpg',
// 		text:'绽放的桃花'
// 	},
// 	{
// 		src:'img/03.jpg',
// 		text:'阳光下的温馨'
// 	},
// 	{
// 		src:'img/04.jpg',
// 		text:'镜头前的绿色'
// 	}
// ],
// //模块标题数据
// titleData={
// 	title:'夏日里的一片温馨',
// 	tips:'暖暖的温情带给人们家的感受。'
// };

// viewCommand({
// 	//参数说明 方法display
// 	command:'display',
// 	//参数说明 param1 元素容器 param2 标题数据 param3 元素模板 详见display方法
// 	param:['title',titleData,'title']
// });

// viewCommand({
// 	command:'create',
// 	//详见create方法参数
// 	param:[{
// 		src:'../img/01.jpg',
// 		text:'迎着朝阳的野菊花'
// 	},'product']
// })

// viewCommand({
// 	command:'display',
// 	param:['product',productData,'product']
// });


//实现绘图对象


var CanvasCommand=(function(){
	//获取canvas
	var canvas=document.getElementById('canvas'),
	//canvas元素的上下文引用对象缓存在命令对象的内部
		ctx=canvas.getContext('2d');
		//内部方法对象
	var Action={
		//填充色彩
		fillStyle:function(c){
			ctx.fillStyle=c;
		},
		//填充矩形
		fillRect:function(x,y,width,height){
			ctx.fillRect(x,y,width,height);
		},
		//描边色彩
		strokeStyle:function(c){
			ctx.strokeStyle=c;
		},
		//描边矩形
		strokeRect:function(x,y,width,height){
			ctx.strokeRect(x,y,width,height);
		},
		//填充字体
		fillText:function(text,x,y){
			ctx.fillText(text,x,y);
		},
		//开启路径
		beginPath:function(){
			ctx.beginPath();
		},
		//移动画笔触电
		moveTo:function(x,y){
			ctx.moveTo(x,y);
		},
		//画笔连线
		lineTo:function(x,y){
			ctx.lineTo(x,y);
		},
		//绘制弧线
		arc:function(x,y,r,begin,end,dir){
			ctx.arc(x,y,begin,end,dir);
		},
		//填充
		fill:function(){
			ctx.fill();
		},
		//描边
		stroke:function(){
			ctx.stroke();
		}
	}
	return {
		//命令接口
		excute:function(msg){
			//如果没有指令返回
			if(!msg)
				return;
			//如果指令是一个数组
			if(msg.length){
				//遍历执行多个命令
				for(var i=0,len=msg.length;i<len;i++)
					arguments.callee(msg[i]);
			//执行一个命令
			}else{
				//如果msg.param不是一个数组，将其转化为数组，apply第二个参数要求格式
				msg.param=Object.prototype.toString.call(msg.param)==="[Object Array]" ? msg.param :[msg.param];
				//Action内部调用的方法可能引用this，为保证作用域中this指向正确，故传入Action
				Action[msg.command].apply(Action,msg.param);		
			}
		}
	}
})();

//设置填充颜色为红色，并绘制一个矩形
CanvasCommand.excute([
	{command:'fillStyle',param:'red'},
	{command:'fillRect',param:[20,20,100,100]}
	]);
