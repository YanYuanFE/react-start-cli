//原型模式
//图片轮播类
var LoopImages=function(imgArr,container){
  this.imagesArray=imgArr;
  this.container=container;

}
LoopImages.prototype={
  //创建轮播图片
  createImage:function(){
    console.log('LoopImages createImage function');
  },
  //切换下一张图片
  changeImage:function(){
    console.log('LoopImages changeImage function');
  }
}
LoopImages.prototype.getImageLength=function(){
  return this.imagesArray.length;
}

//上下滑动切换类
var SlideLoopImg=function(imgArr,container,arrow){
  //构造函数继承图片轮播类
  LoopImages.call(this,imgArr,container);
  //重写继承的切换下一张图片的方法

}
SlideLoopImg.prototype=new LoopImages();
//重写继承的切换下一张图片的方法
SlideLoopImg.prototype.changeImage=function(){
  console.log('SlideLoopImg changeImage function');
}
//渐隐切换类
var FadeLoopImg=function(imgArr,container,arrow){
  LoopImages.call(this,imgArr,container);
  //切换箭头私有变量
  this.arrow=arrow;

}
FadeLoopImg.prototype=new LoopImages();
FadeLoopImg.prototype.changeImage=function(){
  console.log('FadeLoopImg changeImage function');
}
FadeLoopImg.prototype.getContainer=function(){
  return this.container;
}

var fadeImg=new FadeLoopImg([
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg'
],'slide',[
  'left.jpg',
  'right.jpg'
]);
console.log(fadeImg.container);
fadeImg.changeImage();
console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());
