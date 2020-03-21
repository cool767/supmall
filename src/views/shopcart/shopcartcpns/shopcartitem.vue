<!--  -->
<template>
  <div>
  <div class="item">
      <div v-for="item in $store.state.cartlist">
         <div class="left">
           <shopchecked class="btn" :product="item"></shopchecked>
           <img :src="item.img" alt="">
         </div>
           
         <div class="right">
           <div class="desc">{{item.desc}}</div>
           <div class="title">{{item.title}}</div>
           <div class="price">{{item.price}}<span> ×{{item.count}}</span></div>
         </div>
          </div>
  </div>
    
  </div>
</template>

<script>
import shopchecked from './ItemChecked'
export default {
  data () {
    return {
    };
  },

  components: {
    shopchecked
  },

  computed: {
  },

  methods: {
  },
  created() {
    console.log(this.product)
  },
}

</script>
<style  scoped>
.item{
  background: purple;
  box-shadow: 0 3px 5px rgb(228, 224, 224);
}

.item img{
  width: 60px;
  height: 80px;
  border-radius: 8px;
  margin: 8px 6px 8px 3px;

}

.btnactive{
  background: pink;
}


.left{
  width: 30%;
  display: inline-block;
  /* background:rgb(245, 244, 244); */
  border-bottom: 5px solid rgba(199, 198, 198,.2);

}
.right{
  width: 70%;
  display: inline-block;
  padding-bottom: 1px;
  border-bottom: 5px solid rgba(199, 198, 198,.2);

  
}
.desc{
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 15px;
  position: relative;
  top: 10px;
}
.title{
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  font-size: 13px;
  color: rgb(194, 181, 181);
  margin-bottom: 20px;
  position: relative;
  top: 10px;
}
.price{
  font-size: 17px;
  color: red;
  position: relative;
  left: 15px;
  bottom: 10px;
}
.price span{
  color: #000;
  float: right;
  margin-right: 25px;
}



</style>