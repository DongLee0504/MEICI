//引入公共头部和底部
$("header").load("../layout/header.html",function(){
	$("footer").load("../layout/footer.html")
})
//注册

var reTelo=/^1\d{10}$/;
var reTelt=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
var rePwd=/^[a-zA-Z]\w{5,17}$/
$(".tel").blur(function(){
	$(this).css("border","1px solid #8e0c3a")
	if($(this).val()==$(this).defaultValue){
		$(".tips").html("请输入你的手机号或常用邮箱")
	}
})
$(".pwd").blur(function(){
	$(this).css("border","1px solid #8e0c3a")
	if($(this).val()==""){
		$(".tips").html("密码不能为空，请输入密码")
	}
})
$(".verify_pwd").blur(function(){
	$(this).css("border","1px solid #8e0c3a")
	if($(this).val()==""){
		$(".tips").html("请重新输入上一次的密码")
	}
})
$(".register_in").click(function(){
		if(reTelo.test($(".tel").val())||reTelt.test($(".tel").val())){
			if(rePwd.test($(".pwd").val())){
				if($(".pwd").val()==$(".verify_pwd").val()){
					window.location.href="../layout/login.html"
				}else{
					$(".tips").html("请重新输入上一次的密码")
				}
			}else{
				$(".tips").html("密码不能为空，请输入密码")
			}
		}else{
			$(".tips").html("请输入你的手机号或常用邮箱")
		}
		var telValue=$(".tel").val();
		var pwdValue=$(".pwd").val();
		var info={"pwdValue":pwdValue};
		if(localStorage.getItem(telValue)){
			$(".tips").html("已经注册，请更换用户名")
		}else{
			localStorage.setItem(telValue,JSON.stringify(info))
		}
})
$(".register .login").click(function(){
	window.location.href="../layout/login.html"
})

