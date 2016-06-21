var Book=function(id,bookname,price){
	this.id=id;
	this.bookname=bookname;
	this.price=price;
	//私有属性
	var num=1;
	//私有方法
	function checkId(){

	};
	//特权方法
	this.getName=function(){

	};
	this.getPrice=function(){

	};
	this.setName=function(){

	};
	this.setPrice=function(){

	};
	//对象公有属性
	this.copy=function(){

	};
	//构造器
	this.setName(name);
	this.setPrice(price);

	
};
//类静态公有属性
Book.isChinese=true;
//类静态公有方法
Book.resetTime=function(){
	console.log('New Tiem');
};
Book.prototype={
	//公有属性
	isJSbook:false,
	display:function(){
	}//展示这本书
};
var book=new Book(10,"Javascript设计模式",50);
console.log(book.num);
console.log(book.isJSbook);
console.log(book.id);
console.log(book.isChinese);
console.log(Book.isChinese);
console.log(Book.resetTime());