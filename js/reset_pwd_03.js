//引入公共头部和底部
$("header").load("../layout/header.html",function(){
	$("footer").load("../layout/footer_02.html")
})
$(".login").click(function(){
	window.location.href="/MEICI/layout/login.html"
})
