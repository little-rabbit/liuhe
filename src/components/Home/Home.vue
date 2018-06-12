<template>
      <div id="home">
        <swiper :options="swiperOption" ref="mySwiper"">
          <!-- slides -->
          <swiper-slide v-for="(img,index) in banner"  key="index"><img :src="img" style="height: 450px;" alt=""></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
        <ul>
          <li class="list" v-for="(item,index) in homedata">
            <img class="list-title" :src="item.title">
            <div class="list-box">
              <div class="list-item" v-for="(img,index) in item.ins" alt="">
                <img :src="img" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Home',
    data(){
      return {
        banner:[require('../../assets/image/hb1.jpg'),require('../../assets/image/hb2.jpg'),require('../../assets/image/hb3.jpg'),require('../../assets/image/hb4.jpg'),require('../../assets/image/hb5.jpg'),require('../../assets/image/hb6.jpg')],
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
//          autoplay: true,
          autoplay: {
            disableOnInteraction: false,
          },
          speed:1000,
          loop: true,
          direction: 'horizontal', //水平滑动  ‘vertival’ 垂直方向
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination'
          },
          paginationClickable :true,
          touchMoveStopPropagation:false,
          centeredSlides: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          keyboard: true,
          observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        },
        homedata:[
            {
              title:require('../../assets/image/t1.png'),
              "ins":[require('../../assets/image/tejia1.jpg'),require('../../assets/image/tejia2.jpg'),]
            },
            {
              title:require('../../assets/image/t2.jpg'),
              "ins":[require('../../assets/image/doc1.jpg'),require('../../assets/image/doc2.jpg'),require('../../assets/image/doc3.png'),]
            },
            {
              title:require('../../assets/image/t3.jpg'),
              "ins":[require('../../assets/image/hanguo.jpg')]
            },
            {
              title:require('../../assets/image/t4.jpg'),
              "ins":[require('../../assets/image/pay.jpg')]
            },
            {
              title:require('../../assets/image/t5.jpg'),
              "ins":[require('../../assets/image/zx1.png'),
                require('../../assets/image/zx2.jpg'),
                require('../../assets/image/zx3.jpg'),
                require('../../assets/image/zx4.jpg'),
                require('../../assets/image/zx5.jpg'),
                require('../../assets/image/zx6.jpg'),]
            },
            {
              title:require('../../assets/image/t6.jpg'),
              "ins":[require('../../assets/image/hzs1.jpg'),
                     require('../../assets/image/hzs2.jpg'),
                     require('../../assets/image/hzs3.jpg'),
                     require('../../assets/image/hzs4.png'),
                     require('../../assets/image/hzs5.jpg'),
                     require('../../assets/image/hzs6.png'),]
            }],
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    computed:{
      swiper(){
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
<style>
  .swiper-pagination-bullet {
    width:24px!important;
    height:6px;
    margin:auto 20px!important;
    border-radius:0!important;
  }
  .swiper-container{
    background: url("../../assets/image/banner_bg.jpg");
  }
</style>
