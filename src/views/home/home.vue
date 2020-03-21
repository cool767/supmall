<!-- git commit -m "first commit" -->
<template>
  <div id="home">
    <NavBar id="nav"><div  slot="center">购物街</div></NavBar>
    <Tabcontrol :tab = "[ '流行' , '新款' , '精选']"
                 @tabclick="goodsshop"
                  v-show="isshowtabcontore"
                  ref="tabcontrolTop"></Tabcontrol>
    <bscroll class="scroll" ref="scroll" :pbtype=3 @backclick="backtopisshow" @pullmore="pullmore">
      <Swiper :banners = banners @imgload="imgload"></Swiper>
      <Recommend :recommends = recommends></Recommend>
      <Featureimg></Featureimg>
      <Tabcontrol :tab = "[ '流行' , '新款' , '精选']" @tabclick="goodsshop" ref="tabcontrol"></Tabcontrol>
      <goodslist :goods="goods[movetype].list"></goodslist>
    </bscroll>
    <backtop @click.native="backclick" v-show="backisshow"></backtop>
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import Tabcontrol from '../../components/contest/tabcontrol'
import goodslist from '../../components/contest/homegoods/Goodslist'
import backtop from '../../components/contest/Backtop'

import Recommend from '../home/chidecpns/Recommend'
import bscroll from '../../BScroll/better-scroll'

import {githomedata,homegoodsdata} from '../../network/home'

import Featureimg from './chidecpns/Featureimg'
import Swiper from './chidecpns/Homeswiper'


export default {
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
      "pop":{page:0,list:[]},
       "new":{page:0,list:[]},
       "sell":{page:0,list:[]}
      },
      movetype:"pop",
      backisshow:false,
      isshowtabcontore:false,
      tapoffsetTop:0,
      scolly:0
    };
  },

  components: {
    NavBar,
    Swiper,
    Recommend,
    Featureimg,
    Tabcontrol,
    goodslist,
    bscroll,
    backtop
  },

  computed: {},


  created() {
    this.githomedata()
    this.homegoodsdata("pop",1)
    this.homegoodsdata("new",1)
    this.homegoodsdata("sell",1)
    this.$bus.$on("imgload",() => {
      this.$refs.scroll.bscroll.refresh()
    })
  },
  
  methods: {
    goodsshop(index){
      switch (index) {
        case 0:
          this.movetype = "pop"
          break;
        case 1:
          this.movetype = "new"
          break
         case 2:
          this.movetype = "sell"
          break
        default:
          break;
      }
      this.$refs.tabcontrolTop.moveindex=index
      this.$refs.tabcontrol.moveindex=index

    },
   backclick(){
        this.$refs.scroll.bscroll.scrollTo(0,0,500)           
      },
  backtopisshow(postion){
      this.backisshow = -postion.y>1000
      this.isshowtabcontore = -postion.y>this.tapoffsetTop
  },
  pullmore(){
    this.homegoodsdata(this.movetype)
  },
  imgload(){
    this.tapoffsetTop = this.$refs.tabcontrol.$el.offsetTop
  },

  //处理页面位置保留问题
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.bscroll.scroll.y = this.scolly
  },
  deactivated() {
    this.scolly = this.$refs.scroll.bscroll.scroll.y
  },




    homegoodsdata(type){
      const page = this.goods[type].page + 1
      homegoodsdata(type,page).then(res => {
        console.log(res)
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1 
      })
    },
    githomedata(){
       githomedata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    }
  },
}

</script>
<style scoped>
#home{
  height: 100vm;
  width: 100%;
  padding-top: 44px;
  background: #fff;
}
  #nav{
    color:#fff;
    background: var(--color-tint)
  }
  /* .scroll{
  position:absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  } */
</style>
