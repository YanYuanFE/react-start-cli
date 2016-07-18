//享元模式
// var Flyweight=function(){
// 	//已创建的元素
// 	var created=[];
// 	function create(){
// 		//创建一个新闻包装容器
// 		var dom=document.createElement('div');
// 		//将容器插入新闻列表容器中
// 		document.getElementById('container').appendChild(dom);
// 		//缓存新创建的元素
// 		created.push(dom);
// 		//返回创建的新元素
// 		return dom;
// 	}
// 	return {
// 		//获取创建新闻元素的方法
// 		getDiv:function(){
// 			//如果已创建的元素小于当前页元素总个数，则创建
// 			if(created.length<5){
// 				return create();
// 			}else{
// 				//获取第一个元素，并插入最后面
// 				var div=created.shift();
// 				created.push(div);
// 				return div;
// 			}
// 		}
// 	};

// };

// var paper=0,
// 	num=5,
// 	len=article.length;
// for(var i=0;i<5;i++){
// 	if(article[i])
// 		Flyweight.getDiv().innerHTML=article[i];
// }


// document.getElementById('next_page').onclick=function(){
// 	if(article.length<5)
// 		return;
// 	var n=++paper*num%len,
// 		j=0;
// 	for(;j<5;j++){
// 		if(article[n+j]){
// 			Flyweight.getDiv().innerHTML=article[n+j];
// 		}else if(article[n+j-len]){
// 			Flyweight.getDiv().innerHTML=article[n+j-len];
// 		}else{
// 			Flyweight.getDiv().innerHTML="";
// 		}
// 	}
// };



//享元动作
var Flyweight={
	moveX:function(x){
		this.x=x;
	},
	moveY:function(y){
		this.y=y;
	}
};

var Player=function(x,y,c){
	this.x=x;
	this.y=y;
	this.color=c;
};

Player.prototype=Flyweight;
Player.prototype.changeC=function(c){
	this.color=c;
};

var Spirit=function(x,y,r){
	this.x=x;
	this.y=y;
	this.r=r;
};
Spirit.prototype=Flyweight;
Spirit.prototype.changeR=function(r){
	this.r=r;
};

var player1=new Player(5,6,'red');
console.log(player1);

player1.moveX(6);
player1.moveY(7);
player1.changeC('pink');
console.log(player1);

var spirit1=new Spirit(2,3,4);
console.log(spirit1);

spirit1.moveX(3);
spirit1.moveY(4);
spirit1.changeR(5);

console.log(spirit1);

