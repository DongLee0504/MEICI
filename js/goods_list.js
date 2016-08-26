//引入公共头部和底部
$("header").load("../layout/header_02.html",function(){
	$("footer").load("../layout/footer_02.html")
})
//页面加载自动折叠
$(function(){
	$("#main .main-l .sort dl dt").siblings().hide();
})
$("#main .main-l .sort dl dt").click(function(e){
	if(this==e.target){
		if($(this).siblings().is(":hidden")){
			$(this).siblings().show()
		}else{
			$(this).siblings().hide()
		}
	}
})
//品牌分类点击折叠
$("#main .main-l .sort_brand dl dt").click(function(e){
	if(this==e.target){
		if($(this).siblings().is(":hidden")){
			$(this).siblings().show()
		}else{
			$(this).siblings().hide()
		}
	}
})
//价格分类点击折叠
$("#main .main-l .sort_price dl dt").click(function(e){
	if(this==e.target){
		if($(this).siblings().is(":hidden")){
			$(this).siblings().show()
		}else{
			$(this).siblings().hide()
		}
	}
})
//list动态生成
$("#goods_list dt").mouseover(function(){
	$(this).css("cursor","pointer");
	$(this).find("span").css("top","0")
}).mouseout(function(){
	$(this).find("span").css("top","252px")
})
getData();
function getData(){
	$.ajax({
		type:"get",
		url:"../data/goods_list.json",
		async:true,
		dataType:"json",
		success:function(data){
			if(data.length>0){
				var html="";
				for(var i=0;i<data.length;i++){
					var obj=data[i];
//					<dl>
//						<dt><a href="#"><img src="../img/goods_list/list01.jpg">
//						<span><img src="../img/goods_list/list01_.jpg"></span></a></dt>
//						<dd><a href="#">Michael Kors 迈克高仕 <br>牛皮 女士 两用包</a><br>
//							<span>￥2900</span>
//							<p>活动价￥2170.00</p>
//						</dd>
//					</dl>
					html+="<dl>";
					html+="<dt><a href=javascript:void(0)><img src="+obj.src01+"><span><img src="+obj.src02+"></span></a></dt><dd><a href="+obj.href+
					">"+obj.desc+"</a><br><span>￥"+obj.o_price+"</span><p>活动价￥"+obj.f_price+"</p></dd></dl>";
				}
				$("#goods_list").html(html);
			}
		}
	});
}
detail()
function detail(){
	$(document).on("click","#goods_list dl",function(){
		window.location.href="../layout/good_detail.html"
	})
}
