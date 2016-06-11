//类式继承

//声明父类
// function SuperClass(){
// 	this.superValue=true;
// 	this.books=['JavaScript','html','css'];
// }


// //为父类添加共有方法
// SuperClass.prototype.getSuperValue=function(){
// 	return this.superValue;
// };
// //声明子类
// function SubClass(){
// 	this.subValue=false;
// }

// //继承父类
// SubClass.prototype=new SuperClass();
// //为子类添加共有方法
// SubClass.prototype.getSubValue=function(){
// 	return this.subValue;
// };

// var instance1=new SubClass();

// var instance2=new SubClass();

// console.log(instance2.books);
// instance1.books.push('设计模式');
// console.log(instance2.books);
// console.log(instance.getSuperValue());
// console.log(instance.getSubValue());
// console.log(instance instanceof SuperClass);
// console.log(instance instanceof SubClass);
// console.log(SubClass.prototype instanceof SuperClass)

//构造函数式继承

//声明父类
// function SuperClass(id){
// 	//引用类型共有属性
// 	this.books=['JavaScript','html','css'];
// 	//值类型共有属性
// 	this.id=id;
// }


// //父类声明原型方法
// SuperClass.prototype.showBooks=function(){
// 	console.log(books);
// };
// //声明子类
// function SubClass(id){
// 	//继承父类
// 	SuperClass.call(this,id);
// }


// var instance1=new SubClass(10);

// var instance2=new SubClass(11);


// instance1.books.push('设计模式');
// console.log(instance1.books);
// console.log(instance1.id);
// console.log(instance2.books);
// console.log(instance2.id);

// instance1.showBooks();



//组合式式继承

//声明父类
// function SuperClass(name){
// 	//引用类型共有属性
// 	this.books=['JavaScript','html','css'];
// 	//值类型共有属性
// 	this.name=name;
// }


// //父类声明原型方法
// SuperClass.prototype.getName=function(){
// 	console.log(this.name);
// };
// //声明子类
// function SubClass(name,time){
// 	//构造函数式继承父类name属性
// 	SuperClass.call(this,name);
// 	this.time=time;
// }

// //类式继承 子类原型继承父类
// SubClass.prototype=new SuperClass();
// //子类原型方法
// SubClass.prototype.getTime=function(){
// 	console.log(this.time);
// };


// var instance1=new SubClass("js book",2014);

// instance1.books.push('设计模式');
// console.log(instance1.books);
// instance1.getName();
// instance1.getTime();

// var instance2=new SubClass("css book",2013);

// console.log(instance2.books);
// instance2.getName();
// instance2.getTime();


//原型式继承
// function inheritObject(o){
// 	function F(){

// 	}
// 	F.prototype=o;
// 	return new F();
// }
// var book={
// 	name:'js book',
// 	alikeBook:["css book","html book"]
// };
// var newBook=inheritObject(book);
// newBook.name="ajax book";
// newBook.alikeBook.push("xml book");

// var otherBook=inheritObject(book);
// otherBook.name="flash book";
// otherBook.alikeBook.push("as book");

// console.log(newBook.name);
// console.log(newBook.alikeBook);

// console.log(otherBook.name);
// console.log(otherBook.alikeBook);


// console.log(book.name);
// console.log(book.alikeBook);

// //寄生式继承
// var book={
// 	name:'js book',
// 	alikeBook:["css book","html book"]
// };
// function createBook(){
// 	//通过原型继承方式创建新对象
// 	var o=new inheritObject(obj);
// 	//拓展新对象
// 	o.getName=function(){
// 		console.log(name);
// 	};
// 	//返回拓展后的新对象
// 	return o;
// }

// //寄生组合式继承
// function inheritPrototype(subClass,superClass){
// 	//复制一份父类的原型副本保存在变量中
// 	var p=inheritObject(superClass.prototype);

// 	//修正因为重写子类原型导致子类的constructor属性被修改
// 	p.constructor=subClass;
// 	//设置子类的原型
// 	subClass.prototype=p;

// }


// //声明父类
// function SuperClass(name){
// 	//引用类型共有属性
// 	this.colors=['red','blue','green'];
// 	//值类型共有属性
// 	this.name=name;
// }


// //父类声明原型方法
// SuperClass.prototype.getName=function(){
// 	console.log(this.name);
// };
// //声明子类
// function SubClass(name,time){
// 	//构造函数式继承父类name属性
// 	SuperClass.call(this,name);
// 	//子类新增属性
// 	this.time=time;
// }

// //寄生式继承父类原型
// inheritPrototype(SubClass,SuperClass);
// //子类新增原型方法
// SubClass.prototype.getTime=function(){
// 	console.log(this.time);
// };


// var instance1=new SubClass("js book",2014);


// var instance2=new SubClass("css book",2013);

// instance1.colors.push('black');
// console.log(instance1.colors);
// console.log(instance2.colors);
// instance1.getName();
// instance1.getTime();

// instance2.getName();
// instance2.getTime();



//单继承 属性复制
var extend=function(target,source){
	//遍历源对象中的属性
	for(var property in source){
		//将原对象中的属性复制到目标对象中
		target[property]=source[property];

	}
	
	//返回目标对象
	return target;
};

var book={
	name:'JavaScript 设计模式',
	alike:["css","html","JavaScript"]
};
var anotherBook={
	color:'blue'
}
extend(anotherBook,book);
console.log(anotherBook.name);
console.log(anotherBook.alike);
anotherBook.alike.push('ajax');
anotherBook.name='设计模式';
console.log(anotherBook.name);
console.log(anotherBook.alike);
console.log(book.name);
console.log(book.alike);

var mix=function(){
	var i=1,
	len=arguments.length,
	target=arguments[0],
	arg;
	//遍历被继承的对象
	for(;i<len;i++){
		//缓存当前对象
		arg=arguments[i];
		//遍历被继承对象中的属性
		for(var property in arg){
			//将被继承对象中的属性复制到目标对象中
			target[property]=arg[property];
		}
	}
	//返回目标对象
	return target;
};

Object.prototype.mix=function(){
	var i=0;
	len=arguments.length,
	target=arguments[0],
	arg;
	//遍历被继承的对象
	for(;i<len;i++){
		//缓存当前对象
		arg=arguments[i];
		//遍历被继承对象中的属性
		for(var property in arg){
			//将被继承对象中的属性复制到目标对象中
			target[property]=arg[property];
		}
	}
	//返回目标对象
	return target;
}
otherBook.mix(book1,book2);
console.log(otherBook)


