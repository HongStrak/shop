<template>
  <div id="app">
    <div class="am-container header">
			<ul class="message-l">
				<div class="topMessage">
					<div class="menu-hd">
						
						<router-link to="/Login">亲，请登录</router-link>
						
					</div>
				</div>
			</ul>
			<ul class="message-r">
				<div class="topMessage home">
					<div class="menu-hd"><router-link to="/Home" target="_top" class="h">商城首页</router-link></div>
				</div>
				<div class="topMessage my-shangcheng">
					<div class="menu-hd MyShangcheng"><a href="#" target="_top"><i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
				</div>
				<div class="topMessage mini-cart">
					<div class="menu-hd"><router-link  to="/Shopcart" ><i class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" class="h">0</strong></router-link></div>
				</div>
				<div class="topMessage favorite">
					<div class="menu-hd"><a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
			</div></ul>
			</div>
			<div class="nav white">
				<div class="logo"><img src="@/../static/images/logo.png" /></div>
				<div class="logoBig">
					<li><img src="@/../static/images/logobig.png" /></li>
				</div>

				<div class="search-bar pr">
					<a name="index_none_header_sysc" href="#"></a>
					<form>
						<input id="searchInput" name="index_none_header_sysc" type="text" v-model="mess" placeholder="搜索" autocomplete="off">
						<input id="ai-topsearch" class="submit am-btn" @click="search()"  value="搜索" index="1" type="button">
					</form>
				</div>
			</div>
			<Search :key="timer"></Search>
    <router-view/>
  </div>
</template>


<script>


	
export default {
  name: 'App',
  data(){
  	return{
  		mess:'',
  		user:{},
  		timer:''
  	}
  },
  created(){
  	console.log();
//	this.$http.post("http://127.0.0.1:8081/introduction/fun07").then(
//		function(ret){
//			this.user=ret.body;
//			console.log(ret);
//			
//		}
//	)
  },
  methods:{
  	
  	search:function(){
  		this.timer=new Date().getTime();
  		this.$router.push({
  			path:"/Search",
  			query:{
  				mess: this.mess
  			}
  		})
  		
  	},
  	
  }
}
</script>

<style>

</style>
