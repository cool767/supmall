<!--  -->
<template>
  <div class="tabaritem" @click="jumppage">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="active-img"></slot></div>
    <div class="text" :style="{color:Color}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    Col:{
      type:String,
      default:"red"
    }
  },
  data () {
    return {
      
    };
  },

  components: {},

  computed: {
    isActive(){
      return this.$route.path == this.path
    },
    Color(){
      if (this.$route.path == this.path) {
        return this.Col
      }
    }
  },
  methods: {
    jumppage(){
      this.$router.push(this.path)
    }
  },

}


</script>
<style  scoped>
.tabaritem{
  flex: 1;
  background: rgb(247, 244, 244);
  height:49px;
  text-align: center
}
.tabaritem img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 4px 0 2px 0;
}
.text{
  text-align: center
}
.active{
  color: red
}

</style>