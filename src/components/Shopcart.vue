<template>
	<div id="app01">

				<!--购物车 -->
				<div class="concent">
					<div id="cartTable">
						<div class="cart-table-th">
							<div class="wp">
								<div class="th th-chk">
									<div id="J_SelectAll1" class="select-all J_SelectAll">

									</div>
								</div>
								<div class="th th-item">
									<div class="td-inner">商品信息</div>
								</div>
								<div class="th th-price">
									<div class="td-inner">单价</div>
								</div>
								<div class="th th-amount">
									<div class="td-inner">数量</div>
								</div>
								<div class="th th-sum">
									<div class="td-inner">金额</div>
								</div>
								<div class="th th-op">
									<div class="td-inner">操作</div>
								</div>
							</div>
						</div>
						<div class="clear"></div>

						<tr class="item-list">
							<div class="bundle  bundle-last ">

								<div class="clear"></div>

								<div class="bundle-main">
									<ul class="item-content clearfix" v-for="(shop,index) in shops">
										<li class="td td-chk">
											<div class="cart-checkbox ">
												<input class="check" id="box1" name="items[]" value="Box1" type="checkbox" @click="checkedClick(index)">
												<label for="box1"></label>
											</div>
										</li>
										<li class="td td-item">
											<div class="item-pic">
												<a href="#" target="_blank" data-title="美康粉黛醉美东方唇膏口红正品 持久保湿滋润防水不掉色护唇彩妆" class="J_MakePoint" data-point="tbcart.8.12">
													<img src="@/../static/images/kouhong.jpg_80x80.jpg" class="itempic J_ItemImg"></a>
											</div>
											<div class="item-info">
												<div class="item-basic-info">
													<a href="#" target="_blank" title="美康粉黛醉美唇膏 持久保湿滋润防水不掉色" class="item-title J_MakePoint" data-point="tbcart.8.11">{{shop.commodity.gname}}</a>
												</div>
											</div>
										</li>
										<li class="td td-info">
											<div class="item-props item-props-can">
												<span class="sku-line">颜色：12#川南玛瑙</span>
												<span class="sku-line">包装：裸装</span>
												<span tabindex="0" class="btn-edit-sku theme-login">修改</span>
												<i class="theme-login am-icon-sort-desc"></i>
											</div>
										</li>
										<li class="td td-price">
											<div class="item-price price-promo-promo">
												<div class="price-content">

													<div class="price-line">
														<em class="J_Price price-now" tabindex="0">{{shop.commodity.price}}</em>
													</div>
												</div>
											</div>
										</li>
										<li class="td td-amount">
											<div class="amount-wrapper ">
												<div class="item-amount ">
													<div class="sl">
														<input class="min am-btn" name="" type="button" value="-" @click="sub(index)" />
														<input class="text_box" name="" type="text" v-model="shop.total" style="width:30px;" />
														<input class="add am-btn" name="" type="button" value="+" @click="add(index)" />
													</div>
												</div>
											</div>
										</li>
										<li class="td td-sum">
											<div class="td-inner">
												<em tabindex="0" class="J_ItemSum number">{{shop.commodity.price*shop.total}}</em>
											</div>
										</li>
										<li class="td td-op">
											<div class="td-inner">
												<a title="移入收藏夹" class="btn-fav" href="#">
													移入收藏夹</a>
												<a href="javascript:;" data-point-url="#" class="delete" @click="del(index)">
													删除</a>
											</div>
										</li>
									</ul>

								</div>
							</div>
						</tr>
					</div>
					<div class="clear"></div>

					<div class="float-bar-wrapper">
						<div id="J_SelectAll2" class="select-all J_SelectAll">
							<div class="cart-checkbox">
								<input class="check-all check" id="checkbox" name="select-all" type="checkbox" @change="changeAllChecked()">
								<label for="checkbox"></label>
							</div>
							<span>全选</span>
						</div>
						<div class="operations">
							<a href="javascript:void(0);" hidefocus="true" class="deleteAll" @click="delAll()">删除</a>
							<a href="#" hidefocus="true" class="J_BatchFav">移入收藏夹</a>
						</div>
						<div class="float-bar-right">
							<div class="amount-sum">
								<span class="txt">已选商品</span>
								<em id="J_SelectedItemsCount">{{shopCount}}</em><span class="txt">件</span>
								<div class="arrow-box">
									<span class="selected-items-arrow"></span>
									<span class="arrow"></span>
								</div>
							</div>
							<div class="price-sum">
								<span class="txt">合计:</span>
								<strong class="price">¥<em id="J_Total">{{moneySum}}</em></strong>
							</div>
							<div class="btn-area">
								<a href="javascript:void(0);" id="J_Go" class="submit-btn submit-btn-disabled" 
									@click="commitShops()" aria-label="请注意如果没有选择宝贝，将无法结算">
									<span>结&nbsp;算</span></a>
							</div>
						</div>

					</div>
				</div>

				<!--操作页面-->

				<div class="theme-popover-mask"></div>

				<div class="theme-popover">
					<div class="theme-span"></div>
					<div class="theme-poptit h-title">
						<a href="javascript:;" title="关闭" class="close">×</a>
					</div>
					<div class="theme-popbod dform">
						<form class="theme-signin" name="loginform" action="" method="post">

							<div class="theme-signin-left">

								<li class="theme-options">
									<div class="cart-title">颜色：</div>
									<ul>
										<li class="sku-line selected">12#川南玛瑙<i></i></li>
										<li class="sku-line">10#蜜橘色+17#樱花粉<i></i></li>
									</ul>
								</li>
								<li class="theme-options">
									<div class="cart-title">包装：</div>
									<ul>
										<li class="sku-line selected">包装：裸装<i></i></li>
										<li class="sku-line">两支手袋装（送彩带）<i></i></li>
									</ul>
								</li>
								<div class="theme-options">
									<div class="cart-title number">数量</div>
									<dd>
										<input class="min am-btn am-btn-default" name="" type="button" value="-" />
										<input class="text_box" name="" type="text" value="1" style="width:30px;" />
										<input class="add am-btn am-btn-default" name="" type="button" value="+" />
										<span class="tb-hidden">库存<span class="stock">1000</span>件</span>
									</dd>

								</div>
								<div class="clear"></div>
								<div class="btn-op">
									<div class="btn am-btn am-btn-warning">确认</div>
									<div class="btn close am-btn am-btn-warning">取消</div>
								</div>

							</div>
							<div class="theme-signin-right">
								<div class="img-info">
									<img src="@/../static/images/kouhong.jpg_80x80.jpg" />
								</div>
								<div class="text-info">
									<span class="J_Price price-now">¥39.00</span>
									<span id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件</span>
								</div>
							</div>

						</form>
					</div>
				</div>
			</div>
</template>

<script>
	export default{
		name:"Shopcart",
		data() {
				return {
					shops:[],
					//确定商品个数
					shopCount:0,
					//总钱数
					moneySum:0
					
				}
			},

			created() {
				this.loadList();
				//this.totalMoney();
				
			},

			methods: {
				checkedClick:function(index){
					//console.log($('input[name="items[]"]').eq(index).is(':checked'));
					if($('input[name="items[]"]').eq(index).is(':checked')){
						this.moneySum = this.moneySum + this.shops[index].commodity.price*this.shops[index].total;
						this.shopCount++;
					}else{
						this.moneySum = this.moneySum - this.shops[index].commodity.price*this.shops[index].total;
						this.shopCount--;
					}
				},
				changeAllChecked:function(){
					if($('#checkbox').is(':checked')){
						this.shopCount = this.shops.length;
						$('input[name="items[]"]').prop("checked",'true');
						for(i=0;i<this.shops.length;i++){
							this.moneySum=this.moneySum+this.shops[i].commodity.price*this.shops[i].total;
						}
					}else{
						$('input[name="items[]"]').removeAttr("checked");
						this.shopCount = 0;
						this.moneySum = 0;
					}
				 	
				 },
				
				totalMoney:function(){
					this.moneySum = 0;
					for(i=0;i<this.shops.length;i++){
						if($('input[name="items[]"]').eq(i).is(':checked')){
							this.moneySum=this.moneySum+this.shops[i].commodity.price*this.shops[i].total;
						}
					}
				},
				add: function(index) {
					
					if(this.shops[index].total<this.shops[index].commodity.stock){
						this.shops[index].total++;
						this.totalMoney();
					}
				},
				sub: function(index) {
					if(this.shops[index].total)
					this.shops[index].total--;
					this.totalMoney();
					
				},
				del: function(index) {
					console.log(this.shops[index].gid);
					console.log(this.shops[index].uid);
					this.$http.post("http://localhost:8081/shopping/delete",{
						gid: this.shops[index].gid,
						uid: this.shops[index].uid
						
					}).then(
						function() {
							this.shops.splice(index,1);
						},
						function(error) {
							alert("删除数据失败" + error);
						}
					)
				},
				delAll:function(){
					var len = this.shops.length-1;
					for(i=len;i>=0;i--){
						if($('input[name="items[]"]').eq(i).is(':checked')){
							this.$http.post("http://localhost:8081/shopping/delete", {
								gid: this.shops[i].gid,
								uid: this.shops[i].uid
							}).then(
								function(result) {
									this.shops.splice(i,1);
								},
								function(error) {
									alert("加载数据失败" + error);
								}
							)
						}
					}
					$('input[name="items[]"]').removeAttr("checked");
				},
				
                loadList: function() {
                	var uid = this.$route.query.uid;
					this.$http.post("http://localhost:8081/shopping/select", {
						uid: uid
					}).then(
						function(result) {
							this.shops = result.body;
							console.log(result);
						},
						function(error) {
							alert("加载数据失败" + error);
						}
					)
				},
				//有问题+1   i的问题
				commitShops: function(){
					var len = this.shops.length-1;
					for(i=len;i>=0;i--){
						console.log(i);
						if($('input[name="items[]"]').eq(i).is(':checked')){
							this.$http.post("http://localhost:8081/order/create", {
								shoppingCart:JSON.stringify(this.shops[i])
							}).then(
								function(result) {
									
								},
								function(error) {
									alert("加载数据失败" + error);
								}
							)
						}
					}
					//this.loadList();
					$('input[name="items[]"]').removeAttr("checked");
				}
			}
	}
</script>

<style scoped>
	
	
	
	
	
</style>