<!--  -->
<template>
<div>
  <div class="goodsitem" @click="goodsitemclick">
    <img :src="showimg" alt="" @load="imgload">
    <div>
      <p>{{goodsitem.title}}</P> 
      <span class="price">{{goodsitem.orgPrice}}</span>
      <span>&nbsp;&nbsp;收藏:{{goodsitem.cfav}}</span>
      <div class="buy"><a href="goodsitem.link">立即购买</a></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
    goodsitem:Object,
    default(){
      return {}
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
    showimg(){
      return   this.goodsitem.image||this.goodsitem.show.img
    }
  },

  methods: {
    imgload(){
      this.$bus.$emit("imgload")
    },
    goodsitemclick(){
      this.$router.push("/detial/"+this.goodsitem.iid)
    }
  }
}

</script>
<style scoped>
.goodsitem{
  width: 150px;
  position: relative;
  text-align: center;
  background: #fff;
  font-size: 12px;
}
.goodsitem img{
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.goodsitem p{
  height: 14px;
overflow: hidden;
}
.price{
  color: red;
}
.buy{
  width: 95%;
  height: 26px;
  line-height: 30px;
  background: rgb(207, 34, 34);
  margin: 0 auto;
  margin-bottom: 5px;
  font-size: 16px;
}
.buy a{
    color: aliceblue;
}
</style>