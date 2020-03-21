<!--  -->
<template>
  <div class="checked" @click="checkedclicked">
    <button  :class="{activechecked:product.checked}"></button>
  </div>
</template>

<script>
export default {
  props:{
    product:Object
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {
  },

  methods: {
    checkedclicked(){
      this.product.checked=!this.product.checked
    }
  }
}

</script>
<style  scoped>
button{
  width: 15px;
  height: 15px;
  border-radius: 10px;
  border: none;

}
.checked{
  width: 15px;
  height: 100%;
  display: inline-block;
  position: relative;
  bottom: 40px;
}
.activechecked{
  background: red;
}
</style>