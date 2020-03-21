<!--  -->
<template>
  <div>
    <div class="photo">
      <img :src="shopInfo.shopLogo" alt="">
      <div>{{shopInfo.name}}</div>
    </div>

    <div class="middle">
      <div class="middleleft">
        <div class="middleleft-top">
          <span>{{shopInfo.cSells}}</span><span>{{shopInfo.cGoods}}</span>
        </div>
        <div class="middleleft-bottom">
          <span>总容量</span><span>全部宝贝</span>
        </div>
      </div>

      <div class="middleright">
        <div class="middleright-left">
          <div v-for="item in shopInfo.score">{{item.name}}</div>
        </div>

        <div class="middleright-right">
          <div v-for="item in shopInfo.score" :class="{better:item.isBetter}">{{item.score}}</div>
        </div>
      </div>

      <div class="entershop"><button><a href="shopInfo.shopUrl">进店逛逛</a></button></div>

    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      },
    }
  },
  data () {
    return {

    };
  },

  components: {},

  computed: {},

  methods: {},
  created() {
  
  },
}

</script>
<style scoped>
.photo{
  padding: 5px;
  height: 45px;
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0 -3px 3px rgb(238, 233, 233);
  padding-top: 12px;
}
.photo img{
  width: 35px;
  height: 35px;
  margin-left: 10px;
}
.photo div{
  display: inline-block;
  color: #000;
  position: relative;
  bottom: 12px;
  left: 5px;
  font-size: 18px;
  font-family: serif;
}
.middleleft{
  width: 55%;
  background: #fff;
  display: inline-block;
  position: relative;
  bottom: 12px;
}
.middleleft-top{
  display: flex;
  color: #000;
  padding: 3px;
}
.middleleft-top span{
  flex: 1;
  text-align: center;
}
.middleleft-bottom{
  display: flex;
  color: #000;
  padding: 3px;
}
.middleleft-bottom span{
  flex: 1;
  text-align: center;
}
.middle{
  height: 140px;
  background: #ffffff;
  box-shadow: 0 3px 5px rgb(231, 229, 229);
}
.middleright{
  display: inline-block;
  padding: 10px 5px;
}
 .middleright-left{
    display: inline-block;
}
 .middleright-left div{
   margin-top: 5px;
 }
.middleright-right{
    display: inline-block;
} 
.middleright-right div{
  margin-top: 5px;
  margin-left: 5px;
}
.entershop{
  text-align: center;
}
.entershop button{
  background: rgba(235, 230, 230,.6);
  border-radius: 5px;
  padding: 5px 20px;
  border: none;
}
.entershop button a{
  font-size: 13px;
}
.better{
  color: red;
}
</style>