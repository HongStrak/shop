<template>
	<div>
		<div class="login-boxtitle">
			
		</div>

		<div class="res-banner" >
			<div class="res-main" id="mainapp">
			
				<div class="login-box">

						<div class="am-tabs" id="doc-my-tabs">
							<ul class="am-tabs-nav am-nav  am-nav-justify">
							
								<li><a class="am-active" href="">手 机号登录</a></li>
							</ul>

							<div class="am-tabs-bd">
								

								<div class="am-tab-panel am-active">
									<form method="post">
                 <div class="user-email">    
                                             <!--
                                             	user-phone
                                             -->
								    <label for="phone"><i class="am-icon-mobile-phone am-icon-md"></i></label>
								    <input type="tel" name="" id="phone" placeholder="请输入手机号" v-model="phone">
                 </div>																			
										<div class="verification">
											<label for="code"><i class="am-icon-code-fork"></i></label>
											<input type="tel" v-model="mess" name="" id="code" placeholder="请输入验证码">
											<a class="btn" href="javascript:void(0);" v-on:click="checkCode()" id="sendMobileCode" >
												<span id="dyMobileButton">获取</span></a>
										</div>
                
									</form>
								 <div class="login-links">
										<label for="reader-me">
											<input id="reader-me" type="checkbox"> 点击表示您同意商城《服务协议》
										</label>
							  	</div>
										<div class="am-cf">
											<input type="button" @click="login()" name="" value="登录" class="am-btn am-btn-primary am-btn-sm am-fl">
										</div>
								
									<hr>
								</div>
							</div>
						</div>

				</div>
			</div>
			
					<div class="footer ">
						<div class="footer-hd ">
							<p>
								<a href="# ">恒望科技</a>
								<b>|</b>
								<a href="# ">商城首页</a>
								<b>|</b>
								<a href="# ">支付宝</a>
								<b>|</b>
								<a href="# ">物流</a>
							</p>
						</div>
						<div class="footer-bd ">
							<p>
								<a href="# ">关于恒望</a>
								<a href="# ">合作伙伴</a>
								<a href="# ">联系我们</a>
								<a href="# ">网站地图</a>
								<em>© 2015-2025 Hengwang.com 版权所有. 更多模板 <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></em>
							</p>
						</div>
					</div>
					</div>
					<a href="javascript:history.back(-1)">返回上一页</a>
		<a href="javascript:void(0);" @click="disp()">dd</a>
		 <router-view></router-view>
</div>
</template>

<script>
   
  

	export default{
		name:'Login',
		data() {
		return {
			phone: '',
			mess: '',
			username: ''
			
		}
	},
	methods: {
		login: function() {
			alert(this.phone+":::"+this.mess);
			
			this.$http.get("http://127.0.0.1:8081/introduction/fun02"
			, {
				params: {
					phone: this.phone,
					mess: this.mess
				}
			}
			).then(function(ret) {
					if(ret.body==false){
						alert("验证码错误，请重新输入！");
					}else{
						alert("正确!");
					}
			},function(eor){
				console.log("fail:"+eor);
			}

			)
		},
		checkCode: function() {
			this.$http.get("http://127.0.0.1:8081/introduction/fun03"
			, {
				params: {
					phone: this.phone
				}
			}
			).then(
				function(ret) {
					console.log(typeof(ret.body.Message));
					console.log(ret.body.Message);
					if(ret.body.Message!="OK"){
						alert("发送失败，请检查手机号!");
					}
				}
			)
		},
		disp:function(){
			this.$parent.show11=true;
		}
	}
}</script>

<style>
</style>