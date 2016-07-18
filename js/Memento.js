//备忘录模式
//Page备忘录类





//下一页按钮点击事件
//获取新闻内容元素当前页数据
//获取并显示新闻
//修正新闻内容元素当前页数据
var Page=function(){
	//信息缓存对象
	
	var cache={};
	//主函数
	//参数page 页码
	//参数fn   成功回调函数
	return function(page,fn){
		//判断该页数据是否在缓存中
		if(cache[page]){
			//恢复到该页状态，显示该页内容
			showPage(page,cache[page]);
			//执行成功回调函数
			fn && fn();
		}else{
			//若缓存Cache中无该页数据
			$.post('./data/getNewsData.php',{
				//请求携带数据page 页码
				page:page
			},function(res){
				//成功返回
				if(res.errNo==0){
					//显示该页数据
					showPage(page,res.data);
					//将该页数据种入缓存中
					cache[page]=res.data;
					//执行成功回调函数
					fn && fn();
				}else{
						//处理异常
				}
			})
		}
	}
}();

$('#naxt_page').click(function(){
	var $news=$("#news_content"),
		page=$news.data('page');
	Page(page,function(){
		$news.data('page',page+1);
	})
});