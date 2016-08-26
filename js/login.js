//引入公共头部和底部
$("header").load("/MEICI/layout/header.html",function(){
	$("footer").load("/MEICI/layout/footer.html")
})
$(".login_btn button").click(function(){
	var $use_data=$(".usedata input").val();
	var $pwd=$(".pwd input").val();
	var info=JSON.parse(localStorage.getItem($use_data));
	if(info){
		if($pwd==info.pwdValue){
			window.location.href="/MEICI/index.html?tel="+$use_data//跳转到主页
		}else{
			$(".login_data p").html("你输入的密码不正确")
		}
	}else{
		$(".login_data p").html("用户名不存在")
	}
})
$(".register").click(function(){
	window.location.href="/MEICI/layout/register.html"
})
$(".checkbox a").click(function(){
	window.location.href="../layout/reset_pwd.html";//跳转到找回密码页面
})
$(".usedata input").blur(function(){
	$(this).css("border","1px solid #8e0c3a")
	if($(this).val()==''){
		$(".login_data p").html("请输入注册时的邮箱或手机号")
	}
})
$(".pwd input").blur(function(){
	$(this).css("border","1px solid #8e0c3a")
	if($(this).val()==''){
		$(".login_data p").html("请输入您的密码")
	}
})