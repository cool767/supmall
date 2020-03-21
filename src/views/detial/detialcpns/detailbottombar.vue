<!--  -->
<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item">
        <i class="icon"></i>
        <div>客服</div>
      </div>
      <div class="item">
        <i class="icon shop"></i>
        <div>店铺</div>
      </div>
      <div class="item">
        <i class="icon serve"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="right">
      <span class="addcar" @click="addclick">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    addclick(){
        this.$emit("addclick")
    }
  }
}

</script>
<style  scoped>
.bottom-bar{
  height: 49px;
  position: relative;
  bottom: 5px; 
}
.left{
  width: 50%;
  height: 49px;
  /* position: relative;
  bottom: 5px; */
}
.item{
  display: inline-block;
  padding: 0 5px;
  text-align: center;
  margin:6px 5px ;
}
.icon{
  display: block;
  width: 25px;
  height: 25px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  margin-left: 2px;
  margin-bottom: 3px;
}
.shop{
  background-position: 0 -58px;
}
.serve{
  background-position: 0 -111px;
}
.right{
  width: 50%;
  height: 100%;
  /* background: green; */
  position: relative;
  bottom: -5px;
}
.addcar{
  text-align: center;
  line-height: 49px;
  width: 60%;
  height: 100%;
  display: inline-block;
  background: rgb(243, 243, 116);
}
.buy{
  display: inline-block;
  width: 40%;
  height: 49px;
  background: rgb(230, 89, 112);
  text-align: center;
  line-height: 49px;
  color: #fff;
}
</style>