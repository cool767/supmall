<!--  -->
<template>
  <div>
    <div>
      <navbar  class="detailnav">
        <div slot="left" class="left" @click="backclick">
          <img src="../../../assets/img/common/back.svg" alt="" >
        </div>
        <div slot="center" class="nav">
          <div v-for="(item,index) in titles"  class="center" :class="{active:index === curryindex}" @click="titleclick(index)">
            {{item}}
          </div>
        </div>
      </navbar>
    </div>
  </div>
</template>

<script>
import navbar from '../../../components/common/navbar/NavBar'
export default {
  data () {
    return {
      titles:["商品","参数","评论","推荐"],
      curryindex:0
    };
  },

  components: {
    navbar
  },

  computed: {},

  methods: {
    titleclick(index){
      this.curryindex = index
      this.$emit("navbarclick",index)
    },
    backclick(){
      this.$router.back()
    }
  }
}

</script>
<style  scoped>
.detailnav{
  background: #ffffff;
}
.nav{
  display: flex;
  font-size: 13px;
}
.center{
  flex: 1;
}
.active{
  color: red;
}
.left{
  margin-top: 6px;
}
</style>