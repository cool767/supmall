<!--  -->
<template>
  <div v-if="rate.list">
    <div class="font">
      <span>用户评价</span><span>更多</span>
    </div>
    <div class="assess">
      <div class="photo">
        <img :src="rate.list[0].user.avatar" alt="">
        <span>{{rate.list[0].user.uname}}</span>
      </div>

      <div class="assesscontent">
        {{rate.list[0].content}}
      </div>

      <div class="shopinfo">
        <span>{{rate.list[0].created | showtime()}} </span>
        <span> {{rate.list[0].style}}</span>
      </div>

      <div class="assessimage" v-if="rate.list[0].images">
        <img :src="rate.list[0].images[0]" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '../../../common/util'
export default {
  props:{
    rate:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {},
  filters:{
    showtime(value){
      //将时间戳转化为时间
      const date = new Date(value * 1000)
      //调用util.js中函数将时间格式化
      return formatDate(date,'yyyy/MM/dd')
    }
  }
}

</script>
<style  scoped>
.font{
  padding: 10px 5px 30px 5px;
  border-bottom: 2px solid rgb(235, 232, 232);
  font-size: 14px;
}
.font :first-child{
  float: left;
  color: #000;
}
.font :last-child{
  float: right;
  color: #000;

}
.photo img{
  width: 46px;
  border-radius: 23px;
}
.photo span{
  position: relative;
  bottom: 15px;
  left: 20px;
  color: #000;

}
.assesscontent{
  padding: 5px;
  font-size: 14px;
  line-height: 21px;
}
.shopinfo{
  background: rgba(241, 239, 239,.1);
  padding: 2px;
}
.shopinfo span{
  padding-left: 5px;
  color: rgb(167, 164, 164);
  font-size: 13px;
}
.assessimage{
  padding: 8px 5px;
}
.assessimage img{
  width: 60px;
  height: 60px;
}
</style>