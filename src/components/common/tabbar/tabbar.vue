<!--  -->
<template>
  <div class="tabbar">
    <slot></slot>
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

}

</script>

<style  scoped>
.tabbar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  box-shadow: 0 -3px 5px rgba(236, 218, 218, 0.5);
}
</style>