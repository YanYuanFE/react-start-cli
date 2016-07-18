//策略模式

//价格策略对象
var PriceStrategy=function(){
	//内部算法对象
	var strategy={
		//100返30
		return30:function(price){
			//parseInt可通过~~、|等运算符替换，要注意此时price要在[-2147483648,2147483647]之间
			//+price转化为数字类型
			return +price+parseInt(price/100)*30;
		},
		//100返50
		return50:function(price){
			return +price+parseInt(price/100)*50;
		},
		//9折
		percent90:function(price){
			return price*100*90/10000;
		},
		//8折
		percent80:function(price){
			return price*100*80/10000;
		},
		//5折
		percent50:function(price){
			return price*100*50/10000;
		}
	}
	//策略算法调用接口
	return function(algorithm,price){
		//如果算法存在，则调用算法，否则返回false
		return strategy[algorithm] && strategy[algorithm](price)
	}
}();

var price=PriceStrategy('return50','314.67');
console.log(price);

//表单正则验证策略对象

var InputStrategy=function(){
	var strategy={
		//是否为空
		notNull:function(value){
			return /\s+/.test(value) ? '请输入内容':'';
		},
		//是否是一个数字
		number:function(value){
			return /^[0-9]+(\.[0-9]+)?$/.test(value)? '请输入数字':'';
		},
		//是否是本地电话
		phone:function(value){
			return /^\d{3}\-\d{8}$^\d{4}\-d{7}$/.test(value)? '请输入正确的电话号码格式，如：010-12345678或0418-1234567':'';

		}
	}
	return {
		//验证接口type算法value表单值
		check:function(type,value){
			//去除收尾空白符
			value=value.replace(/^\s+|\s+$/g,'');
			return strategy[type]? strategy[type](value):'没有该类型的检测方法'
		},
		//添加策略
		addStrategy:function(type,fn){
			strategy[type]=fn;
		}
	}
}();

//拓展 可以延伸算法
InputStrategy.addStrategy('nickname',function(value){
	return /^[a-zA-Z]\w{3,7}$/.test(value) ? '':'请输入4-8位昵称，如：YYQH';
})
//外观模式 简化元素获取
function $tag(tag,context){
	context=context || document;
	return context.getElementsByTagName(tag);
}
//提交按钮点击
$tag('input')[1].onclick=function(){
	//获取输入框内的内容
	var value=$tag('input')[0].value;
	//获取日期格式验证结果
	$tag('span')[0].innerHTML=InputStrategy.check('nickname',value);
}







