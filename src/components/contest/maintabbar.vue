<!--  -->
<template>
  <div class="tabbar">
    <Tabbar>
      <TabbarItem path="/home">
        <img src="@/assets/img/tabbar/home.svg" slot="img" alt="">
        <img src="../../assets/img/tabbar/home_active.svg" slot="active-img" alt="">
        <span slot="text">首页</span>
      </TabbarItem>
      <TabbarItem path="/category">
        <img src="../../assets/img/tabbar/category.svg" slot="img" alt="">
        <img src="../../assets/img/tabbar/category_active.svg" slot="active-img" alt="">
        <span slot="text">分类</span>
      </TabbarItem>
      <TabbarItem path="/shopcart">
        <img src="../../assets/img/tabbar/shopcart.svg" slot="img" alt="">
        <img src="../../assets/img/tabbar/shopcart_active.svg" slot="active-img" alt="">
        <span slot="text">购物车</span>
      </TabbarItem>
      <TabbarItem path = "/profile">
        <img src="../../assets/img/tabbar/profile.svg" slot="img" alt="">
        <img src="../../assets/img/tabbar/profile_active.svg" slot="active-img" alt="">
        <span slot="text">我的</span>
      </TabbarItem>
    </Tabbar>
    

  </div>
</template>

<script>
import Tabbar from '../common/tabbar/tabbar'
import TabbarItem from '../common/tabbar/tabbaritem'
export default {
  data () {
    return {
    };
  },

  components: {
    Tabbar,
    TabbarItem
    
  },

  computed: {},

}

</script>
<style  scoped>

</style>