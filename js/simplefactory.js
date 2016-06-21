//简单工厂模式
//篮球基类
var Basketball=function(){
  this.intro='篮球盛行于美国';
}
Basketball.prototype={
  getMember:function(){
    console.log('每个队伍需要五名队员');
  },
  getBallSize:function(){
    console.log('篮球很大');
  }
}
//足球基类
var Football=function(){
  this.intro='足球在世界范围内很流行';
}
Football.prototype={
  getMember:function(){
    console.log('每个队伍需要11名队员');
  },
  getBallSize:function(){
    console.log('足球很大');
  }
}
//网球基类
var Tennis=function(){
  this.intro='每年有很多网球系列赛';
}
Tennis.prototype={
  getMember:function(){
    console.log('每个队伍需要1名队员');
  },
  getBallSize:function(){
    console.log('网球很小');
  }
}
//运动工厂
var SportFactory=function(name){
  switch (name) {
    case 'NBA':
      return new Basketball();

    case 'wordcup':

      return new Football();
    case 'FrenchOpen':

      return new Tennis();

  }
}
//为世界杯创建一个足球，只需要记住运动工厂Sportfactory,调用并创建
var footnall=SportFactory('wordcup');
console.log(footnall);
console.log(footnall.intro);
footnall.getMember();


//登陆弹框
// var LoginAlert=function(text){
//   this.content=text;
// }
// LoginAlert.prototype.show=function(){
//   //显示警示框
// }
// var userNameAlert=new LoginAlert('用户名不能少于16个字母或数字');
// userNameAlert.show();
//
// var LoginConfirm=function(text){
//   this.content=text;
// }
// LoginConfirm.prototype.show=function(){
//   //显示确认框
// }
// var LoginFailConfirm=new LoginConfirm('您的用户名不存在，请重新输入');
// LoginFailConfirm.show();
//
// var LoginPrompt=function(text){
//   this.content=text;
// }
// LoginPrompt.prototype.show=function(){
//   //显示提示框
// }
function createPop(type,text){
  //创建一个对象，并对对象拓展属性和方法
  var o=new Object();
  o.content=text;
  o.show=function(){
    //显示方法
  };
  if(type=="alert"){
    //警示框
  }
  if(type=="prompt"){
    //提示框
  }
  if(type=="confirm"){
    //确认框
  }
  //将对象返回
  return o;
}
//创建警示框
var userNameAlert=createPop('alert','用户名只能是26个字母和数字');
console.log(userNameAlert);
//弹框工厂
var PopFactory=function(name){
  switch (name) {
    case 'alert':

      return new LoginAlert();
    case 'confirm':

      return new LoginConfirm();
    case 'prompt':

      return new LoginPrompt();

  }
}

//工厂模式
function createBook(name,time,type){
  //创建一个对象，并对对象拓展属性和方法
  var o=new Object();
  o.name=name;
  o.time=time;
  o.type=type;
  o.getName=function(){
    console.log(this.name);
  };
  //将对象返回
  return o;
}
var book1=createBook("js book",2014,"js");
var book2=createBook("css book",2013,"css");

book1.getName();
book2.getName();
