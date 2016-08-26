//引入公共头部和底部
$("header").load("../layout/header_02.html",function(){
	$("footer").load("../layout/footer_02.html")
})
//商品放大镜
$(".mag_glass li").mouseover(function(){
	var $index=$(this).index()+1;
	$(".mag_glass .s_box img").attr("src","../img/good_detail/d-"+$index+".jpg");
	$(".b_box img").attr("src","../img/good_detail/b-"+$index+".jpg");
})
$(".s_box").mousemove(function(event){
	$(".b_box").css("z-index","999");
	$(".txt").css("display","none");
	$(this).css("cursor","pointer")
	var evt=window.event||event;
	$(".mark").css("display","block");
	$(".b_box").css("display","block");
	var x=evt.clientX-$("#main").offset().left-$(".left").width()-$(".mark").width()/2;
	var y=evt.clientY-$(".s_box").offset().top-$(".mark").height()/2+$(window).scrollTop();
	if(x<=0){
		x=0
	}
	if(x>=$(".s_box").width()-$(".mark").width()){
		x=$(".s_box").width()-$(".mark").width()
	}
	if(y<=0){
		y=0
	}
	if(y>=$(".s_box").height()-$(".mark").height()){
		y=$(".s_box").height()-$(".mark").height()
	}
	var bigx=x/$(".s_box").width()*$(".b_box").find("img").width();
	var bigy=y/$(".s_box").height()*$(".b_box").find("img").height();
	$(".b_box img").css("left",-bigx+"px");
	$(".b_box img").css("top",-bigy+"px");
	$(".mark").css("left",x+"px");
	$(".mark").css("top",y+"px");
}).mouseout(function(){
	$(".mark").css("display","none");
	$(".b_box").css("display","none");
	$(".txt").css("display","block");
})
//商品详情
$(".main_foot li").mouseover(function(){
	$(this).css("cursor","pointer");
})
$(".main_foot li").click(function(){
	var $index=$(this).index()+1;
	$(this).addClass("current").siblings().removeClass("current");
	$(".main_foot .content img").attr("src","../img/good_detail/con0"+$index+".png")
})
//点击加入购物袋
$(".main_top .shopping_bag").mouseover(function(){
	$(this).css("cursor","pointer")
})
getAlltotal()
$(document).on("click",".main_top .shopping_bag",function(){
	$(".headerbar .shopping_bag_t span").html(total);
	
	var id=$(this).attr("id");
	var src=$(this).attr("src");
	var price=$(this).attr("price");
	var desc=$(this).attr("desc");
	var total=1;
	var exist=JSON.parse(localStorage.getItem("clothes_"+id));
	if(exist){
		total=exist.total*(1)+1;
	}
	var info={id:id,src:src,price:price,desc:desc,total:total};
	localStorage.setItem("clothes_"+id, JSON.stringify(info));
	getAlltotal()
	$(".headerbar .shopping_bag_con").css("display","block");
	$(".headerbar .shopping_bag_con").html("您的购物车有"+total+"件商品，请前往购物车结算！")
})
function getAlltotal(){
	var total=0;
	for(var i=0;i<localStorage.length;i++){
		var key=localStorage.key(i);
		if(key.indexOf("clothes_")!=-1){
			var info =JSON.parse(localStorage.getItem(key));
                total+=info.total;
		}
	}
	$(".headerbar .shopping_bag_t span").html(+total);
}
getData();
function getData(){
	$.ajax({
		type:"get",
		url:"../data/goods_list.json",
		async:true,
		dataType:"json",
		success:function(data){
			for(var i=0;i<data.length;i++){
				var obj=data[i];
				$(".main_top .shopping_bag").attr("id",obj.id);
				$(".main_top .shopping_bag").attr("src",obj.src01);
				$(".main_top .shopping_bag").attr("price",obj.f_price);
				$(".main_top .shopping_bag").attr("desc",obj.desc);
			}
		}
	});
}
//点击购物袋 调到到购物袋页面
$(document).on("click",".headerbar .shopping_bag",function(){
	window.location.href="../layout/shopping_bag.html"
})
//window.onload=function(){
//	localStorage.clear()
//}
