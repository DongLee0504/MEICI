//引入公共头部和底部
$("header").load("../layout/header.html",function(){
	$("footer").load("../layout/footer_02.html")
})
//生成四位随机验证码
function createCode(length){
	var str=initSource();
	var maxIndex=str.length-1;
	var randomString="";
	for(var i=0;i<length;i++){
		var randomIndex=Math.round(Math.random()*maxIndex);
		randomString+=str.charAt(randomIndex);
	}
	return randomString
	function initSource(){
		var reg="";
		for(var i=0;i<10;i++){
			reg+=i;
		}
		for(var i=97;i<123;i++){
			reg+=String.fromCharCode(i);
		}
		for(var i=65;i<91;i++){
			reg+=String.fromCharCode(i);
		}
		return reg
	}	
}
//页面加载生成四位验证码
$(window).load(function(){
	var code=createCode(4);
	$(".security_code span").html(code);
})
//点击验证码的span刷新验证码
$(".security_code span").click(function(){
	var code=createCode(4);
	$(".security_code span").html(code);
})
//重设密码第一步
$(".next button").click(function(){
	var $useData=$(".usedata input").val();
	var info=JSON.parse(localStorage.getItem($useData));
	var upperCode=$(".security_code span").html().toUpperCase();
	if(info){
		if($(".security_code input").val().toUpperCase()==upperCode){
		
			window.location.href="/MEICI/layout/reset_pwd_02.html"//跳转到下一步
		}else{
			$(".tips").html("您输入的验证码不正确")
			var code=createCode(4);
	        $(".security_code span").html(code);
		}
	}else{
		$(".tips").html("您输入的“邮箱/手机”信息有误")
	}
})