<!--  -->
<template>
  <div class="tabcontre">
    <div class="tab">
      <div  v-for="(item,index) in tab"  class="tabitem" :class="{active: index === moveindex}" @click="tabclick(index)">
          <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    tab:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      moveindex: 0
    };
  },
  methods: {
     tabclick(index){
       this.moveindex = index;
       this.$emit("tabclick",index)
     }
  },

}

</script>
<style scoped>
.tabcontre{
  position: sticky;
  top: 44px;
  left: 0;
  right: 0;
  background: #FFF;
  z-index: 9;
  padding: 4px 0 4px;
  margin-bottom: 5px;
}
.tab{
  padding: 5px 0 5px;
  text-align: center;
  display: flex;
  font-size: 14px;

}
.tabitem{
  flex: 1
}
.tabitem span{
  padding: 5px;
}
.active span{
    border-bottom: 3px solid rgb(192, 123, 123);
}

</style>