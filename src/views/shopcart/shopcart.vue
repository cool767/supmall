<!--  -->
<template>
  <div id="shopcart">
    <shopNav></shopNav>
  <shop-scroll class="scroll" ref="scroll">
    <shopitem></shopitem>
  </shop-scroll>
  <bottom-bar @calcclick="calcclick"></bottom-bar>
  <toast :isshow="isshow" :message="message"></toast>
  </div>
</template>

<script>
import shopitem from './shopcartcpns/shopcartitem'
import shopNav from './shopcartcpns/shopnav'
import bottomBar from './shopcartcpns/bottombar'

import shopScroll from '../../BScroll/better-scroll'
import { debounce } from '../../common/util'
import toast from '../../components/common/toast/Toast'
export default {
  data () {
    return {
      refreshscroll:null,
      product:[],
      isshow:false,
      message:"请添加购物商品"
    };
  },

  components: {
    shopitem,
    shopNav,
    shopScroll,
    bottomBar,
    toast
  },

  computed: {},

  methods: {
    calcclick(){
      this.isshow = true
      setTimeout(() => {
        this.isshow = false
      }, 1000);
      console.log(this.isshow)
    }
  },


  
  activated() {
    this.$refs.scroll.bscroll.refresh()
    // this.$refs.scroll.refresh()
    console.log("--------")
  },
}

</script>
<style scoped>
.shopcart{
  height: 100vh;
}
/* .scroll{ */
  /* height:calc(100%-123px); */
  /* height: 400px; */
  /* background: rgb(214, 89, 89); */
/* } */

</style>