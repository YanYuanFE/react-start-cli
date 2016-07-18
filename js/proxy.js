//代理模式
//JSONP前端浏览器页面
<script type="text/javascript">
//回调函数，打印出请求数据与响应数据
function jsonpCallBack(res,req){
	console.log(res,req);
}
</script>

<script type="text/javascript" src="http://localhost/test/jsonp.php?callback=jsonpCallBack&data=getJsonPData"></script>
//另外一个域下服务器请求接口
<?php
/*后端获取请求字段数据，并生成返回内容*/
$data=$_GET["data"];
$callback=$_GET["callback"];
echo $callback."('success','".$data."')";
?>