//工厂方法模式
//安全模式创建的工厂类
var Factory=function (type,content){
  if(this instanceof Factory){
    var s=new this[type](content);
    return s;
  }else{
    return new Factory(type,content);
  }
}

Factory.prototype={
  //创建Java学科类
  Java :function(content){
    //将内容保存在content里面以备日后使用
    this.content=content;
    //创建对象时，通过闭包，直接执行，将内容按需求的样式插入到页面内
    (function(content){
      var div=document.createElement('div');
      div.innerHTML=content;
      div.style.color='green';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  //创建PHP学科类
  Php :function(content){
    this.content=content;
    //创建对象时，通过闭包，直接执行，将内容按需求的样式插入到页面内
    (function(content){
      var div=document.createElement('div');
      div.innerHTML=content;
      div.style.color='yellow';
      div.style.background='red';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  //创建JavaScript学科
  JavaScript :function(content){
    this.content=content;
    //创建对象时，通过闭包，直接执行，将内容按需求的样式插入到页面内
    (function(content){
      var div=document.createElement('div');
      div.innerHTML=content;
      div.style.background='pink';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  UI : function(content){
    this.content=content;
    (function(content){
      var div=document.createElement('div');
      div.innerHTML=content;
      div.style.border='1px solid red';
      document.getElementById('container').appendChild(div);
    })(content);
  }
};




// //学科类工厂
// function JobFactory(type,content){
//   switch (type) {
//     case 'java':
//       return new Java(content);
//       case 'php':
//         return new Php(content);
//      case 'JavaScript':
//        return new JavaScript(content);
//
//
//   }
// }

var data=[
  {type:'JavaScript',content:'JavaScript哪家强'},
  {type:'Java',content:'Java哪家强'},
  {type:'Php',content:'Php哪家强'},
  {type:'UI',content:'UI哪家强'},
  {type:'Java',content:'Java哪家强'},
  {type:'JavaScript',content:'JavaScript哪家强'},
  {type:'JavaScript',content:'JavaScript哪家强'}
];

for(var i=6;i>=0;i--){
  console.log(data[i].type,data[i].content);
  Factory(data[i].type,data[i].content);
}
