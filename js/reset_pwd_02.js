//引入公共头部和底部
$("header").load("../layout/header.html",function(){
	$("footer").load("../layout/footer_02.html")
})
//取出电话号码
$(window).load(function(){
	var key=localStorage.key(0);
	var info=JSON.parse(localStorage.getItem(key))
	$(".tel span").html(key);
	$(".complete button").click(function(){
		var rePwd=/^[a-zA-Z]\w{5,17}$/;
		var pwd=$(".pwd input").val();
		if(rePwd.test(pwd)){
			if($(".pwd input").val()==$(".con_pwd input").val()){
				info.pwdValue=$(".pwd input").val();
				localStorage.setItem(key,JSON.stringify(info))
				window.location.href="/MEICI/layout/reset_pwd_03.html"
			}
		}
	})
})



