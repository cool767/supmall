<!--  -->
<template>
  <div>
    <swper class="swper">
      <swperitem v-for="item in topimg">
        <img :src="item">
      </swperitem>
    </swper>
  </div>
</template>

<script>
import swper from '../../../components/common/swiper/Swiper'
import swperitem from '../../../components/common/swiper/SwiperItem'
export default {
  props:{
    topimg:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    };
  },

  components: {
    swperitem,
    swper
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.swper{
  height: 250px;
  margin-top: 44px;
}
</style>