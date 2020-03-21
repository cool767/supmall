<!--  -->
<template>
  <div>
    <div>
      
        <goodslist :goods="recommendShop"></goodslist>
      
    </div>
  </div>
</template>

<script>
// import goodslist from '@/components/contest/homegoods/Goodslist'
import goodslist from '@/components/contest/homegoods/Goodslist'
export default {
  props:{
    recommendShop:{
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
    goodslist,
    // goodslist
  },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>