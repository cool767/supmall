<!--  -->
<template>
  <div v-if="detailInfo.detailImage">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="imginfo" v-for="item in detailInfo.detailImage[0].list">
      <img :src="item" alt="" srcset="" @load="imgload">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:{
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

  methods: {
    imgload(){
      this.$emit("imgload")
    }
  }
}

</script>
<style scoped>
.imginfo img{
  width: 100%;
}
.desc{
  padding-top: 20px;
}
</style>