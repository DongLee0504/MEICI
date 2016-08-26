//引入公共头部和底部
$("header").load("../layout/header_03.html",function(){
	$("footer").load("../layout/footer_03.html")
})
//收货人信息
$(".con_name input").blur(function(){
	if($(this).val()==""){
		$(this).css("border","1px solid red");
		$(this).next().html("请输入您的姓名")
	}else{
		$(this).next().html("")
	}
})
$(".con_addr input").blur(function(){
	if($(this).val()==""){
		$(this).css("border","1px solid red");
		$(this).next().html("请输入您的收货地址")
	}else{
		$(this).next().html("")
	}
})
$(".tel input").blur(function(){
	if($(this).val()==""){
		$(this).css("border","1px solid red");
		$(this).next().html("请输入您的手机号码")
	}else{
		$(this).next().html("")
	}
})
$(function(){
	$(".con_region").citySelect({
		nodata:"none",
		required:false
	}); 
	if($(".self_get input").prop("checked")){
		$(".self_get span").css("display","block")
	}		
});
//支付方式
$(".self_get").click(function(){
	if($(this).find("input").prop("checked")){
		$(this).find("span").css("display","block")
	}
})
//包装方式
window.onload=function(){
	$(".pack_style").each(function(){
		if($(this).find("input").prop("checked")){
			$(this).find(".pack_img").show();
			$(this).css("background","#f5f5f5")
		}else{
			$(this).find(".pack_img").hide();
			
		}
	})
}
$(".pack_style").click(function(e){
	if($(this).find("input").prop("checked")){
		$(this).find(".pack_img").show(500);
		$(this).css("background","#f5f5f5")
		$(this).siblings().find(".pack_img").hide();
		$(this).siblings().css("background","#ffffff")
	}
})
//商品清单
  //动态生成商品清单
getData()
function getData(){
	var html="";
	for(var i=0;i<localStorage.length;i++){
		var key=localStorage.key(i);
		if(key.indexOf("clothes_a")!=-1){
			var info=JSON.parse(localStorage.getItem(key));
//			<tbody>
//						<tr>
//							<td class="check"><input type="checkbox"></td>
//							<td class="good_img"><a href="#">
//								<img src="../img/good_detail/s-1.jpg">
//							</a></td>
//							<td class="good_name"><a href="#">芬迪 女士 枚红色 皮革 手提斜挎包</a> </td>
//							<td class="good_num">
//								<span class="reduce">-</span>
//								<input class="num_input" value="1"/>
//								<span class="add">+</span>
//							</td>
//							<td class="price">12000</td>
//							<td class="subtotal">12000</td>
//							<td class="operation"><span class="delete">删除</span></td>
//						</tr>
//					</tbody>
			html=$("<tbody><tr><td class='good_img'><a href='#'><img src="+info.src+"></a></td><td class='good_name'><a href='#'>"+info.desc+"</a></td><td class='good_num'><span class='num'>"+info.total+"</span></td><td class='price'>"+info.price+"</td><td class='subtotal'>"+(info.price*info.total).toFixed(2)+"</td></tr></tbody>")
			$("table").append(html)
		}
	}
}
  //汇总价格
getTotal();
function getTotal(){
  	var total=0;
  	$(".subtotal").each(function(){
  		total+=$(this).html()*1
  		$(".total span").html("￥"+total.toFixed(2))
  	})
}

var subtotal=parseInt($(".total span").html());

var postage=Number($(".postage span").html());
var pack_cost=Number($(".pack_cost span").html())
var disc_cost=Number($(".disc_cost span").html())
var footing_total=subtotal+postage+pack_cost-disc_cost

 $(".footing span").html($(".total span").html())
//跳转支付页面
var flag=false
$(".sub_order").find("button").click(function(){
	$(".address p").has(".required").find("input").each(function(){
		if($(this).val()!=""){
			flag=true
		}else{
			flag=false
		}
	})
	if(flag){
		window.location.href="../layout/order_success.html"
	}else{
		alert("请填写收货信息");
		document.documentElement.scrollTop = document.body.scrollTop =0
	}
})
