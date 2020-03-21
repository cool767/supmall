<!--  -->
<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped>
.navbar{
  height: 44px;
  line-height: 44px;
  display: flex;
  box-shadow: 0 3px 5px rgba(100, 100, 100,.1);
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  
}
.left,.right{
  width: 60px;
  text-align: center;
}
.center{
  flex: 1
}
</style>