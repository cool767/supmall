<!--  -->
<template>
  <div  id="detail">

    <dnav @navbarclick="navbarclick" ref="nav"></dnav>
    <detail-scoll ref="scoll" class="scoll"  @backclick="backclick"   :pbtype="3">
      <swiper :topimg="topimg" ></swiper>
      <recommend :itemInfo="itemInfo" :columns="columns" :services="services"></recommend>
      <detial-shop-info :shopInfo="shopInfo" :score="score"></detial-shop-info>
      <detail-image :detailInfo="detailInfo" @imgload="imgload"></detail-image>
      <shop-params ref="params" :shopParams="itemParams"></shop-params>
      <detail-assess ref="assess" :rate="rate"></detail-assess>
      <detailrecommentshop ref="recommends" :recommendShop="recommendShop"></detailrecommentshop>
    </detail-scoll>
    <backtop @click.native="backtopclick" v-show="backisshow"></backtop>
    <detail-bottombar @addclick="addcarclick"></detail-bottombar>
    <toast :message="message" :isshow="isshow"></toast>
  </div>
</template>

<script>
import {getdetialdata,getRecommendShopData} from '../../network/detial'

import {backtopmixin} from '../../common/mixin'
import backtop from '../../components/contest/Backtop'

import dnav from './detialcpns/nav'
import swiper from './detialcpns/dswiper'
import recommend from './detialcpns/Detailrecommend'
import DetailImage from './detialcpns/DetailImage'
import shopParams from './detialcpns/shopParams'
import detailAssess from './detialcpns/detailAssess'
import detailrecommentshop from './detialcpns/detailrecommendshop'
import detailBottombar from './detialcpns/detailbottombar'
import toast from '../../components/common/toast/Toast'



import DetialShopInfo from './detialcpns/DetailShopInfo'
import DetailScoll from '../../BScroll/better-scroll'

import {debounce} from '../../common/util'

export default {
  name:"Detial",
  data () {
    return {
      iid:null,
      topimg:[],
      columns:[],
      services:[],
      itemInfo:{},
      shopInfo:{},
      score:[],
      detailInfo:{},
      itemParams:{},
      rate:{},
      recommendShop:[],
      getitemY:[],
      gettop:null,
      curryIndex:0,
      message:"",
      isshow:false
    };
  },

  components: {
    dnav,
    swiper,
    recommend,
    DetialShopInfo,
    DetailScoll,
    DetailImage,
    shopParams,
    detailAssess,
    detailrecommentshop,
    detailBottombar,
    backtop,
    toast
  },

  mixins:[backtopmixin],

  computed: {
  },

  methods: {
    imgload(){
      this.$refs.scoll.bscroll.refresh()
      this.gettop()
    },
    navbarclick(index){
      this.$refs.scoll.bscroll.scrollTo(0,-this.getitemY[index],300)
    },
    backclick(position){
      // backtop的显示
      this.backisshow = -position.y > 1000

      const positionY = -position.y
      // console.log(positionY)
      for(let i = 0 ; i< this.getitemY.length-1 ; i++){
        // console.log(this.getitemY[i])
        // parseInt(i)
        if(this.curryIndex!=i && (positionY>this.getitemY[i] && positionY<this.getitemY[i+1])){
          this.curryIndex = i
          this.$refs.nav.curryindex = this.curryIndex
          // console.log(this.$refs.nav.curryIndex)
        }
      }
    },
    addcarclick(){
      const product = {}
      product.img = this.topimg[0]
      product.price = this.itemInfo.lowPrice
      product.desc = this.itemInfo.desc
      product.title = this.itemInfo.title
      product.count = 1
      product.iid = this.iid
      product.checked = true
      this.$store.dispatch("addCart",product).then(res => {
        this.isshow=true
        this.message = res
        setTimeout(() => {
          this.isshow=false
          this.message = ""
        }, 2000);
      }).catch((res)=>{})
    }
     
  },
  created() { 
    // 获取数据
    this.iid = this.$route.params.iid
   getdetialdata(this.iid).then(res => {
      console.log(res)
      
      this.topimg = res.result.itemInfo.topImages
      this.columns = res.result.columns
      this.services = res.result.shopInfo.services
      this.itemInfo = res.result.itemInfo
      this.shopInfo = res.result.shopInfo
      this.score = res.result.shopInfo.score
      this.detailInfo = res.result.detailInfo
      this.itemParams = res.result.itemParams
      this.rate = res.result.rate
    })
    getRecommendShopData().then(res => {
      console.log(res)
      this.recommendShop = res.data.list
    })
    // 向getitemtop中传高度
    this.gettop = debounce(() => {
      this.getitemY = []
      this.getitemY.push(0)
      this.getitemY.push(this.$refs.params.$el.offsetTop + 44)
      this.getitemY.push(this.$refs.assess.$el.offsetTop + 44)
      this.getitemY.push(this.$refs.recommends.$el.offsetTop + 44)
      this.getitemY.push(Number.MAX_VALUE)
      console.log(this.getitemY)
    },100)
  }
}

</script>
<style scoped>
#detail{
  position: relative;
  z-index: 11;
  background: #fff;
  height: 100vh;
}
.scoll{
  height:calc(100% - 49px);
  /* position: absolute;
  top: 44px;
  bottom: 10px;
  left: 0;
  right: 0; */
  /* height: 617px; */
}
</style>