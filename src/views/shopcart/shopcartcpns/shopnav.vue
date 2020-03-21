<!--  -->
<template>
  <div>
    <shopNav class="shopnav">
      <div slot="center">购物车({{$store.state.cartlist.length}})</div>
    </shopNav>
  </div>
</template>

<script>
import shopNav from '../../../components/common/navbar/NavBar'
export default {
  data () {
    return {
    };
  },

  components: {
    shopNav
  },

  computed: {},

  methods: {}
}

</script>
<style  scoped>
.shopnav{
  background: #ff8198;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.shopnav div{
  color: #fff;
}
</style>