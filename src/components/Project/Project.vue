<template>
	<div id="Project">
    <div class="beautiful">
      <samp>美丽淘</samp>
      <samp> > </samp>
      <samp><a>北京整形</a></samp>

    </div>
		<ul class="select">
      <li v-for="(item,index) in dataList">
        <dl >
          <dt v-for="(city,index) in item.city" :key="index" @click="conditioncity($event,index)" :class="{color:num1==index}">{{city}}</dt>
          <dt v-for="(part,index) in item.part" :key="index" @click="conditionpart($event,index)" :class="{color:num2==index}">{{part}}</dt>
          <dt v-for="(zhuTi,index) in item.zhuTi" :key="index" @click="conditionzhuti($event,index)" :class="{color:num3==index}">{{zhuTi}}</dt>
          <dt v-for="(type,index) in item.type" :key="index" @click="conditiontype($event,index)" :class="{color:num4==index}">{{type}}</dt>
          <dt>更多
            <select name="" id="" v-for="(lost,index) in item.lost" @click="conditionlost($event,index)" :class="{color:num5==index}">
              <option v-for="(item,index) in lost.item" :key="index" >{{item}}</option>
            </select>
          </dt>
        </dl>
      </li>
      <li>
        <dl class="condition">
          <dt>条件</dt>
          <dt class="conditionlist" >
            <a v-for="(city,index) in conditioncitys" href="">{{city}}</a>
            <a v-for="(part,index) in conditionparts" href="">{{part}}</a>
            <a v-for="(zhuti,index) in conditionzhutis" href="">{{zhuti}}</a>
            <a v-for="(type,index) in conditiontypes" href="">{{type}}</a>
            <a v-for="(lost,index) in conditionlosts" href="">{{lost}}</a>
          </dt>
        </dl>
      </li>
    </ul>
	</div>
</template>
<script>
export default {
  beforeCreate(){
    console.log('----创建前-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  created(){
    console.log('----创建后-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  beforeMount(){
    console.log('----挂载前-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  mounted(){
    console.log('----挂载后-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  beforeUpdate(){
    console.log('----更新前-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  update(){
    console.log('----更新后-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  beforeDestroy(){
    console.log('----销毁前-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  destroyed(){
    console.log('----销毁后-----');
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.num1);
  },
  name:'Project',
  data(){
    return{
      dataList:[],
      conditioncitys:[],
      conditionparts:[],
      conditionzhutis:[],
      conditiontypes:[],
      conditionlosts:[],
      color:false,
      num1:1,
      num2:-1,
      num3:-1,
      num4:-1,
      num5:-1,

    }
  },
  methods:{
    conditioncity(e,index){
      if(index!=0){
        this.conditioncitys.pop(e.target.innerHTML)
        this.conditioncitys.push(e.target.innerHTML)
        this.num=index
      }
    },
    conditionpart(e,index){
      if(index!=0) {
        this.conditionparts.pop(e.target.innerHTML)
        this.conditionparts.push(e.target.innerHTML)
        this.num = index
      }
    },
    conditionzhuti(e,index){
      if(index!=0) {
        this.conditionzhutis.pop(e.target.innerHTML)
        this.conditionzhutis.push(e.target.innerHTML)
        this.num = index
      }
    },
    conditiontype(e,index){
      if(index!=0) {
        this.conditiontypes.pop(e.target.innerHTML)
        this.conditiontypes.push(e.target.innerHTML)
        this.num = index
      }
    },
    conditionlost(e,index){
      if(index!=0) {
        this.conditionlosts.pop(e.target.innerHTML)
        this.conditionlosts.push(e.target.value)
        this.num = index
      }
    }
  },
  mounted(){
    this.$http.get('../../static/project.json').then(res=>{
//      console.log(res.data.data);
      this.dataList=res.data.data;
    })
  }
}
</script>
