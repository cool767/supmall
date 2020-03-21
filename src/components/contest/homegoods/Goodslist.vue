<!--  -->
<template>
  <div>
    <div class="goods">
        <goodslistitem :goodsitem = "item" v-for="item in goods"></goodslistitem>
    </div>
  </div>
</template>

<script>
import goodslistitem from './Goodslistitem'
export default {
  props:{
    goods:{
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
    goodslistitem
  },

  computed: {},

  methods: {}
}

</script>
<style  scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
      background: rgb(241, 236, 236);;
  }
</style>