//引入公共头部和底部
$("header").load("../layout/header_03.html",function(){
	$("footer").load("../layout/footer_03.html")
})
//动态生成商品内容
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
			html=$("<tbody><tr><td><input class='check_one check' type='checkbox'></td><td class='good_img'><a href='#'><img src="+info.src+"></a></td><td class='good_name'><a href='#'>"+info.desc+"</a></td><td class='good_num'><span class='reduce'>-</span><input class='num_input' value="+info.total+" /><span class='add'>+</span></td><td class='price'>"+info.price+"</td><td class='subtotal'>"+(info.price*info.total).toFixed(2)+"</td><td class='operation'><span class='delete'>删除</span></td></tr></tbody>")
			$(".bag_table").append(html)
		}
	}
}
window.onload=function(){
	var numvalue=$(document).find(".num_input").val();
	if(numvalue<=1){
		$(document).find(".reduce").html("")
	}else{
		$(document).find(".reduce").html("-")
	}
}
//全选
var $count=0
var $length=$(".check_one").length
$(".checkall").click(function(){
	if($(this).prop("checked")){
		$count=$length;
		$(document).find(".check_one").prop("checked",true);
	}else{
		$(document).find(".check_one").prop("checked",false);
		$count=0
	}
	getTotal()
})
//单选
$(document).on("click",".check_one",function(){
	if($(this).prop("checked")){
		$count++;
		if($count==$length){
			$(".checkall").prop("checked",true)
		}
	}else{
		$count--;
		$(".checkall").prop("checked",false)
	}
	getTotal()
})
 //删除
$(document).on("click",".delete",function(){
	$(this).parents("tr").remove();
	getTotal();
})
$(document).on("mouseover",".delete",function(){
	$(this).css("cursor","pointer")
})
//-号事件
$(document).on("mouseover","#bag_main .reduce",function(){
	$(this).css("cursor","pointer")//鼠标移入变成小手
})
$(document).on("click","#bag_main .reduce",function(){
	var numinput=$(this).next();
	var numvalue=numinput.val()*1;
		if(numvalue == 1){
	            $(this).html("");
	            return false;
	    }
		numinput.val(numvalue-1);
		 if (numinput.val() == 1) {
            $(this).html("");
        }
	  getOneTotalPrice($(this),numinput.val());
})
//+号事件
$(document).on("mouseover","#bag_main .add",function(){
	$(this).css("cursor","pointer")//鼠标移入变成小手
})

$(document).on("click","#bag_main .add",function(){
	var numinput=$(this).prev();
	var numvalue=numinput.val()*1;
	numinput.val(numvalue+1);
	var reduce=$(this).prev().prev();
	reduce.html("-");
	getOneTotalPrice($(this),numinput.val())
})
//小计
function getOneTotalPrice(obj,num){
	var priceTd=obj.parent().next();//找到单价的Td；
	var totalTd=obj.parent().next().next();//找到小计的Td
	var totalprice=priceTd.html()*1*num;
	totalTd.html(totalprice.toFixed(2))
	getTotal()
}
//总计
function getTotal() {
    var total = 0;
    
    $(document).find(".check_one").each(function () {//循环每一个checkbox
        if ($(this).prop("checked")) {
            //统计小计
            var price = $(this).parents("tr").find("td").eq(5).html() * 1;
            
            total += price;
        }
    })
    $(".bag_price span").html(total.toFixed(2));
}
$(".con_shopping").click(function(){
	window.location.href="../index.html"//返回首页继续购物
})
nowAccount()
function nowAccount(){
	$(".bag_pay_btn").click(function(){
		window.location.href="../layout/order_form.html"
	})
}
