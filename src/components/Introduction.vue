<template>
	<div>
		<div class="listMain">

				<!--分类-->
			<div class="nav-table">
			</div>
				<ol class="am-breadcrumb am-breadcrumb-slash">
					<li><a href="#">首页</a></li>
					<li><a href="#">分类</a></li>
					<li class="am-active">内容</li>
				</ol>
				
				<div class="scoll">
					<section class="slider">
						<div class="flexslider">
							<ul class="slides">
								<li>
									<img src="@/../static/images/01.jpg" title="pic" />
								</li>
								<li>
									<img src="@/../static/images/02.jpg" />
								</li>
								<li>
									<img src="@/../static/images/03.jpg" />
								</li>
							</ul>
						</div>
					</section>
				</div>

				<!--放大镜-->

				<div class="item-inform">
					<div class="clearfixLeft" id="clearcontent">

						<div class="box">
							
							<div class="tb-booth tb-pic tb-s310">
								<a href="@/../static/images/01.jpg"><img src="@/../static/images/01_mid.jpg" alt="细节展示放大镜特效" rel="@/../static/images/01.jpg" class="jqzoom" /></a>
							</div>
							<ul class="tb-thumb" id="thumblist">
								<li class="tb-selected">
									<div class="tb-pic tb-s40">
										<a href="#"><img src="@/../static/images/01_small.jpg" mid="@/../static/images/01_mid.jpg" big="@/../static/images/01.jpg"></a>
									</div>
								</li>
								<li>
									<div class="tb-pic tb-s40">
										<a href="#"><img src="@/../static/images/02_small.jpg" mid="@/../static/images/02_mid.jpg" big="@/../static/images/02.jpg"></a>
									</div>
								</li>
								<li>
									<div class="tb-pic tb-s40">
										<a href="#"><img src="@/../static/images/03_small.jpg" mid="@/../static/images/03_mid.jpg" big="@/../static/images/03.jpg"></a>
									</div>
								</li>
							</ul>
						</div>

						<div class="clear"></div>
					</div>

					<div class="clearfixRight">

						<!--规格属性-->
						<!--名称-->
						<div id="price">
						<div class="tb-detail-hd">
							<h1 >	
								{{gname}}
	          				</h1>
	          
						</div>
						<div class="tb-detail-list">
							<!--价格-->
							
							<div class="tb-detail-price" >
								<li class="price iteminfo_price">
									<dt>价格</dt>
									<em>¥</em><b class="sys_item_price">{{price}}</b>                                 
								</li>
								<!--<li class="price iteminfo_mktprice">
									<dt>原价</dt>
									<dd><em>¥</em><b class="sys_item_mktprice">98.00</b></dd>									
								</li>-->
								<div class="clear"></div>
							</div>

							<!--地址-->
							<dl class="iteminfo_parameter freight">
								<dt>配送至</dt>
								<div class="iteminfo_freprice">
									<div class="am-form-content address">
										<select data-am-selected>
											<option value="a">浙江省</option>
											<option value="b">湖北省</option>
										</select>
										<select data-am-selected>
											<option value="a">温州市</option>
											<option value="b">武汉市</option>
										</select>
										<!--<select data-am-selected>
											<option value="a">瑞安区</option>
											<option value="b">洪山区</option>
										</select>-->
									</div>

									
									
									<div class="pay-logis">
										快递<b class="sys_item_freprice">10</b>元
									</div>
								</div>
							</dl>
							<div class="clear"></div>

							<!--销量-->
							<ul class="tm-ind-panel">
								<li class="tm-ind-item tm-ind-sellCount canClick">
									<div class="tm-indcon"><span class="tm-label">月销量</span><span class="tm-count">{{MouthlySales}}</span></div>
								</li>
								<li class="tm-ind-item tm-ind-sumCount canClick">
									<div class="tm-indcon"><span class="tm-label">累计销量</span><span class="tm-count">{{TotalSales}}</span></div>
								</li>
								<li class="tm-ind-item tm-ind-reviewCount canClick tm-line3">
									<div class="tm-indcon"><span class="tm-label">累计评价</span><span class="tm-count">{{EvaluationNum}}</span></div>
								</li>
							</ul>
							<div class="clear"></div>

							<!--各种规格-->
							<dl class="iteminfo_parameter sys_item_specpara">
								<dt class="theme-login"><div class="cart-title">可选规格<span class="am-icon-angle-right"></span></div></dt>
								<dd>
									<!--操作页面-->

									<div class="theme-popover-mask"></div>

									<div class="theme-popover">
										<div class="theme-span"></div>
										<div class="theme-poptit">
											<a href="javascript:;" title="关闭" class="close">×</a>
										</div>
										<div class="theme-popbod dform">
											<form class="theme-signin" name="loginform" action="" method="post">

												<div class="theme-signin-left">

													<div class="theme-options">
														<div class="cart-title">口味</div>
														<ul>
															<li class="sku-line selected">原味<i></i></li>
															<li class="sku-line">奶油<i></i></li>
															<li class="sku-line">炭烧<i></i></li>
															<li class="sku-line">咸香<i></i></li>
														</ul>
													</div>
													<div class="theme-options">
														<div class="cart-title">包装</div>
														<ul>
															<li class="sku-line selected">手袋单人份<i></i></li>
															<li class="sku-line">礼盒双人份<i></i></li>
															<li class="sku-line">全家福礼包<i></i></li>
														</ul>
													</div>
													<div class="theme-options">
														<div class="cart-title number">数量</div>
														
															<input id="min" class="am-btn am-btn-default" name="" type="button" value="-" />
															<input id="text_box" name="" type="text" value="1" style="width:30px;" />
															<input id="add" class="am-btn am-btn-default" name="" type="button" value="+" />
															<span id="Stock" class="tb-hidden">库存<span class="stock">{{stock}}</span>件</span>
														

													</div>
													<div class="clear"></div>

													<div class="btn-op">
														<div class="btn am-btn am-btn-warning">确认</div>
														<div class="btn close am-btn am-btn-warning">取消</div>
													</div>
												</div>
												<div class="theme-signin-right">
													<div class="img-info">
														<img src="@/../static/images/songzi.jpg" />
													</div>
													<div class="text-info">
														<span class="J_Price price-now">¥39.00</span>
														<span id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件</span>
													</div>
												</div>

											</form>
										</div>
									</div>

								</dd>
							</dl>
							<div class="clear"></div>
							<!--活动	-->
							<div class="shopPromotion gold">
								<div class="hot">
									<dt class="tb-metatit">店铺优惠</dt>
									<div class="gold-list">
										<p>购物满2件打8折，满3件7折<span>点击领券<i class="am-icon-sort-down"></i></span></p>
									</div>
								</div>
								<div class="clear"></div>
								<div class="coupon">
									<dt class="tb-metatit">优惠券</dt>
									<div class="gold-list">
										<ul>
											<li>125减5</li>
											<li>198减10</li>
											<li>298减20</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
</div>
						<div class="pay">
							<div class="pay-opt">
							<a href="home.html"><span class="am-icon-home am-icon-fw">首页</span></a>
							<a><span class="am-icon-heart am-icon-fw">收藏</span></a>
							
							</div>
							<li>
								<div class="clearfix tb-btn tb-btn-buy theme-login">
									<a id="LikBuy" title="点此按钮到下一步确认购买信息" href="#">立即购买</a>
								</div>
							</li>
							<li>
								<div class="clearfix tb-btn tb-btn-basket theme-login">
									<a id="LikBasket" title="加入购物车" href="#"><i></i>加入购物车</a>
								</div>
							</li>
						</div>

					</div>

					<div class="clear"></div>

				</div>
		</div>
				
	</div>

</template>

<script>

	export default{
		name:'Introduction',
			data(){
				return{
					price:0,
					gname:'',
					stock:0,
					MouthlySales:0,
					TotalSales:0,
					EvaluationNum:0,
					gid:0
				}
			},
		created(){
			var _this = this;
			this.gid=_this.$route.query.gid;
			this.getJson();
					this.$http.get("http://127.0.0.1:8081/introduction/upload",
					{
						params:{
							gid:this.gid
						}
					}
				).then(
						function(ret){
							console.log(ret);
							this.price=ret.body.price;
							this.gname = ret.body.gname;
							this.stock = ret.body.stock;
							this.MouthlySales = ret.body.mouthlySales;
							this.TotalSales = ret.body.totalSales;
							this.EvaluationNum = ret.body.evaluationNum;
						}
					)
		},
		mounted:{
			/*$('.flexslider').flexslider({
				animation: "slide",
				start: function(slider) {
					$('body').removeClass('loading');
				}
			});
			
			$(".jqzoom").imagezoom();
			$("#thumblist li a").click(function() {
				$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
				$(".jqzoom").attr('src', $(this).find("img").attr("mid"));
				$(".jqzoom").attr('rel', $(this).find("img").attr("big"));
			});*/
			
		},
		methods:{
			trun:function(){
				this.$http.get("http://127.0.0.1:8081/introduction/fun04").then(
				function(ret) {
					console.log(typeof(ret.body));
					console.log(ret.body);
	//				alert(ret.body.key02);
				}
			)
			},
			getJson:function(){
				this.$http.get("@/../static/chinaall.json").then(
					function(ret){
						console.log(ret.body[0].name);
					}
				)
			}
			
		}
	}
</script>

<style>
</style>