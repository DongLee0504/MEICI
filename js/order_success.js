//引入公共头部和底部
$("header").load("../layout/header_03.html",function(){
	$("footer").load("../layout/footer_03.html")
})
//获取订单price
getPrice();

function getPrice(){
	for(var i=0;i<localStorage.length;i++){
		var key=localStorage.key(i);
		if(key.indexOf("clothes_a")!=-1){
			var info=JSON.parse(localStorage.getItem(key))
		}
	}
	$(".order_info_txt span").html("￥"+(info.price*info.total).toFixed(2))
}
//pay_ment
var price=$(".order_info_txt span").html();
$(".full_payment span").html(price)
//选择银行
blankSlect();
function blankSlect(){
	$(".blanks li").click(function(){
		$(this).find(".checked").css({"display":"block"});
		$(this).siblings().find(".checked").css("display","none");
	})
}
//支付平台
platformSelect();
function platformSelect(){
	$(".platforms li").click(function(){
		$(this).find(".checked").css({"display":"block"});
		$(this).siblings().find(".checked").css("display","none");
	})
}
//跳转支付页面
var payment=false;
var blank=false;
var platForm=false;
$(".pay_btn").click(function(){
	payWay();
	blankPay();
	platform();
	if(payment&&blank&&platForm){
		window.location.href="../layout/pay.html"
	}
	
})
//判断支付方式
function payWay(){
	$(".order_pay input").each(function(){
		if($(this).prop("checked")){
			payment=true;
			return false;
		}
	})
	if(!payment){
		alert("请选择支付方式")
	}
}
//判断blanks
function blankPay(){
	$(".blanks li").find(".checked").each(function(){
		if($(this).css("display")=="block"){
			blank=true;
			return false;
		}
	})
	if(!blank){
		alert("请选择网上银行")
	}
}
//判断支付平台
function platform(){
	$(".platforms li").find(".checked").each(function(){
		if($(this).css("display")=="block"){
			platForm=true;
			return false;
		}
	})
	if(!platForm){
		alert("请选择支付平台")
	}
}
