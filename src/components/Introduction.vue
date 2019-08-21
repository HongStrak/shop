<template>
	<div>
		<button @click="trun()">ss</button>
	</div>
	
</template>

<script>
	export default{
		name:'Introduction',
		methods:{
			trun:function(){
				this.$http.get("http://127.0.0.1:8081/introduction/fun04").then(
				function(ret) {
					console.log(typeof(ret.body));
					console.log(ret.body);
	//				alert(ret.body.key02);
				}
			)
			}
			
		}
	}
</script>

<style>
</style>