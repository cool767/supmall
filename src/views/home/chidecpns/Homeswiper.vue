<!--  -->
<template>
  <div>
    <swiper>
      <swiperitem v-for="item in banners"> 
        <a :href="item.link">
          <img :src="item.image"  @load="imgload">
        </a>
      </swiperitem>
    </swiper>
  </div>
</template>

<script>
import swiper from '../../../components/common/swiper/Swiper'
import swiperitem from '../../../components/common/swiper/SwiperItem'
export default {
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isimgload:true
    };
  },

  components: {
    swiperitem,
    swiper
  },

  computed: {},

  methods: {
    imgload(){
      if (this.isimgload) {
        this.$emit("imgload")
        this.isimgload = 'false'
      }
    }
  }
}

</script>
<style lang='scss' scoped>
</style>