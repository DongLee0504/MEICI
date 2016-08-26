//header
header();
function header(){
	$(".focusUs,.focusUs_way").mouseover(function(){
		$(".focusUs_way").css({"display":"block"})
	}).mouseout(function(){
		$(".focusUs_way").css({"display":"none"})
	})
	$("#header #first a").click(function(){
		window.location.href="layout/register.html"
	})
	$("#header .login").click(function(){
		window.location.href="layout/login.html"
	})
}
//导航main_nav
nav();
function nav(){
	$("#main_nav .nav").find("li").not(":first").mouseover(function(){
		var $index=$(this).index();
		$(".menu").css({"display":"block"});
		$(".menu .menu_m").eq($index-1).addClass("menu_c").siblings().removeClass("menu_c")
	}).mouseout(function(){
		$(".menu").css({"display":"none"});
	});
	$(".menu .menu_m").mouseover(function(){
		$(".menu").css({"display":"block"});
		$(this).addClass("menu_c").siblings().removeClass("menu_c");
	}).mouseout(function(){
		$(".menu").css({"display":"none"});
	})
	$("#main_nav .nav").find("li").eq(1).click(function(){
		window.location.href="layout/goods_list.html"
	})
}

//轮播图slides
slide();
function slide(){
	//Prev Next按钮显示及消失
	$(".slides_container,.myprev,.mynext").mouseover(function(){
		$(".myprev").css({"display":"block"});
		$(".mynext").css({"display":"block"});
	}).mouseout(function(){
		$(".myprev").css({"display":"none"});
		$(".mynext").css({"display":"none"});
	})
	//图片滚动
	var $before=0;
	var $index=0;
	var $length=$(".slides_container li").length;
	var timer=null;
	autoPlay();
	function autoPlay(){
		timer=setInterval(function(){
			$index++;
			if($index==$length){
				$index=0;
				$before=$length-1;
			}
			scroll(960)
		},2000)
	}
	function scroll(target){
		$(".slides_container li").eq($before).stop(true,true).animate({"left":-target+"px"});
		$(".slides_container li").eq($index).css({"left":target+"px"}).stop(true,true).animate({"left":"0"})
		$before=$index;
	}
	$(".slides_container").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		autoPlay();
	})
	$(".myprev").click(function(){
		clearInterval(timer);
		$index--;
		if($index<0){
			$index=$length-1;
			$before=0;
		}
		scroll(-960)
	})
	$(".mynext").click(function(){
		clearInterval(timer);
		$index++;
		if($index==$length){
			$index=0;
			$before=$length-1
		}
		scroll(960)
	})
	
}
//特别推荐 男仕精选 女士精选  时尚生活
 $(function () {
        $(window).load(function () {
            special_offer()
         	men_select()
         	women_select()
         	fashion_style()
        })
        $(window).resize(function () {
            window.location.reload();
        });
    });
function special_offer(){
	var maxWidth=$("#special_offer .goods_con").width();
	var width=$("#special_offer .goods_box").width();
	var maxNum=Math.floor(maxWidth/width);
	var balanceWidths=maxWidth-maxNum*width;
	var balanceWidth=Math.floor(balanceWidths/maxNum);
	$("#special_offer .goods_box").css("marginLeft",balanceWidth+"px");
	var heightList=[];
	for(var i=0;i<$("#special_offer .goods_box").length;i++){
		if(i<maxNum){
			heightList.push($("#special_offer .goods_box").eq(i).height());
		}else{
			var obj=$("#special_offer .goods_box").eq(i);
			 var minHeight = Math.min.apply(null, heightList);//找出数组中最小的值
             var minIndex = $.inArray(minHeight, heightList);//找数组中最小值的index
             obj.css({
             	"position":"absolute",
             	"left":$("#special_offer .goods_box").eq(minIndex).position().left + "px",
             	"top":minHeight + "px"
             });
              heightList[minIndex] = minHeight + obj.height();
		}
	}
}
//男仕精选men_select
function men_select(){
	var maxWidth=$("#men_select .goods_con").width();
	var width=$("#men_select .goods_box").width();
	var maxNum=Math.floor(maxWidth/width);
	var balanceWidths=maxWidth-maxNum*width;
	var balanceWidth=Math.floor(balanceWidths/maxNum);
	$("#men_select .goods_box").css("marginLeft",balanceWidth+"px");
	var heightList=[];
	for(var i=0;i<$("#men_select .goods_box").length;i++){
		if(i<maxNum){
			heightList.push($("#men_select .goods_box").eq(i).height());
		}else{
			var obj=$("#men_select .goods_box").eq(i);
			 var minHeight = Math.min.apply(null, heightList);//找出数组中最小的值
             var minIndex = $.inArray(minHeight, heightList);//找数组中最小值的index
             obj.css({
             	"position":"absolute",
             	"left":$("#men_select .goods_box").eq(minIndex).position().left + "px",
             	"top":minHeight + "px"
             });
              heightList[minIndex] = minHeight + obj.height();
		}
	}
}
//女士精选men_select
function women_select(){
	var maxWidth=$("#women_select .goods_con").width();
	var width=$("#women_select .goods_box").width();
	var maxNum=Math.floor(maxWidth/width);
	var balanceWidths=maxWidth-maxNum*width;
	var balanceWidth=Math.floor(balanceWidths/maxNum);
	$("#women_select .goods_box").css("marginLeft",balanceWidth+"px");
	var heightList=[];
	for(var i=0;i<$("#women_select .goods_box").length;i++){
		if(i<maxNum){
			heightList.push($("#women_select .goods_box").eq(i).height());
		}else{
			var obj=$("#women_select .goods_box").eq(i);
			 var minHeight = Math.min.apply(null, heightList);//找出数组中最小的值
             var minIndex = $.inArray(minHeight, heightList);//找数组中最小值的index
             obj.css({
             	"position":"absolute",
             	"left":$("#women_select .goods_box").eq(minIndex).position().left + "px",
             	"top":minHeight + "px"
             });
              heightList[minIndex] = minHeight + obj.height();
		}
	}
}
//时尚生活Fashionable Lifestyle
function fashion_style(){
	var maxWidth=$("#fashion_style .goods_con").width();
	var width=$("#fashion_style .goods_box").width();
	var maxNum=Math.floor(maxWidth/width);
	var balanceWidths=maxWidth-maxNum*width;
	var balanceWidth=Math.floor(balanceWidths/maxNum);
	$("#fashion_style .goods_box").css("marginLeft",balanceWidth+"px");
	var heightList=[];
	for(var i=0;i<$("#fashion_style .goods_box").length;i++){
		if(i<maxNum){
			heightList.push($("#fashion_style .goods_box").eq(i).height());
		}else{
			var obj=$("#fashion_style .goods_box").eq(i);
			 var minHeight = Math.min.apply(null, heightList);//找出数组中最小的值
             var minIndex = $.inArray(minHeight, heightList);//找数组中最小值的index
             obj.css({
             	"position":"absolute",
             	"left":$("#fashion_style .goods_box").eq(minIndex).position().left + "px",
             	"top":minHeight + "px"
             });
              heightList[minIndex] = minHeight + obj.height();
		}
	}
}
//正被选购
beingSold()
function beingSold(){
	var html=$("#being_sold ul").html();
	$("#being_sold ul").html(html+html);
	var length=$("#being_sold ul li").length;
	var width=$("#being_sold ul li").eq(0).width()+10;
	$("#being_sold ul").width(width*length)
	var speed=170;
	var timer=null;
	timer=setInterval(move,2000)
	var obj=$("#being_sold ul")
	function move(){
		if(obj.position().left<-obj.width()/2){
			obj.css("left","0");
		}
		if(obj.position().left>0){
			obj.css("left",-obj.width()/2)
		}
		obj.stop().animate({"left":obj.position().left-speed+"px"},1000);
	}
	$("#being_sold .prev").click(function(){
		clearInterval(timer)
		obj.stop().animate({"left":obj.position().left-speed+"px"},1000);
	})
	$("#being_sold .next").click(function(){
		clearInterval(timer)
		obj.stop().animate({"left":obj.position().left+speed+"px"},1000);
	})
	$("#being_sold").mouseover(function(){
		clearInterval(timer)
	}).mouseout(function(){
		timer=setInterval(move,2000)
	})
}
//更改登录状态
changeLoginState();
function changeLoginState(){
	var href=window.location.href;
	if(href.indexOf("?")!=-1){
		var tel=href.split("?")[1].split("=")[1];
        $(".headernav .login").html("欢迎"+tel+"回来")
	}
}



