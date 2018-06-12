<template>
	<div id="nav">
		<div class="navtop">
			<div>
        <a href="">柳荷首页</a>
      </div>
		</div>
		<div class="navcenter">
			<div class="logobox">
				<div class="logo">
					<img src="../../assets/image/logo.png">
				</div>
				<div class="figure">
					<img src="../../assets/image/figure.png"><p>只做有品质的医疗美容</p>
				</div>
			</div>
			<div class="soubox">
        <form action="">
          <div class="sousuo">
            <input type="text" name="search" value="" placeholder="柳荷变美攻略" v-model.trim="project">
            <button>搜索</button>
          </div>
        </form>
        <ul>
          <li><a href="">眼部</a></li>
          <li><a href="">鼻部</a></li>
          <li><a href="">脂肪填充</a></li>
          <li><a href="">面部轮廓</a></li>
          <li><a href="">面部提升</a></li>
        </ul>
			</div>
		</div>
    <div class="clear"></div>
		<div class="navlist">
      <ul>
        <li v-for="(item,index) in pathsList" :key="index" @click="navbg(index)" :class="{navclass:index==count}">
          <router-link :to="item.path">{{item.project}}</router-link>
          <dl class="secondnav">
            <dt v-for="(item,index) in item.child" ><a href="">{{item.project}}</a></dt>
            <dd ></dd>
          </dl>
        </li>
      </ul>
		</div>
	</div>
</template>
<script type="text/javascript">
  const delay = (function() {
    let timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();
	export default{
		name:'Nav',
		data() {
      return {
        navclass:false,
        count:0,
        pathsList:[],
        secondList:[],
        project: '',
        search:[]
      }
    },
    watch: {
      project() {
        delay(() => {
          this.fetchData();
        }, 300);
      },
    },
    methods:{
      navbg(index){
        this.count=index;
        this.navclass=true;
      },
      fetchData() {
        this.$http.get('../../static/nav.json')
          .then(res=>{
          console.log(res.data.paths.project);
            this.search=res.data.paths.project;
          })
      },
    },
    mounted(){
      this.$http.get('../../static/nav.json')
        .then(res=>{
//          console.log(res.data.paths);
         this.pathsList=res.data.paths;
        })
//      this.$http.get('http://localhost:8000/json.php').then(res=>{console.log(res)})
    }
	}
</script>
