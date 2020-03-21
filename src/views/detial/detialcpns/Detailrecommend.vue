<!--  -->
<template>
  <div >
    <div class="title">{{itemInfo.title}}</div>
    <div class="itemInfo">
      <span class="itemInfo1">{{itemInfo.price}}</span>
      <span class="itemInfo2">{{itemInfo.oldPrice}}</span>
      <span class="itemInfo3">{{itemInfo.discountDesc}}</span>  
    </div>
    <div class="columns" v-if="services[0]">
      <span class="columns1">{{columns[0]}}</span>
      <span class="columns2">{{columns[1]}}</span>
      <span class="columns3">{{services[0].name}}</span>
    </div>
    <div class="services" v-if="services[1],services[2],services[3]">
      <span class="services1">{{services[1].name}}</span>
      <span class="services2">{{services[2].name}}</span>
      <span class="services3">{{services[3].name}}</span>
    </div>

  </div>
</template>

<script>
export default {
  props:{
    services:Array,
    itemInfo:Object,
    columns:Array
  },
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
.title{
  padding: 10px 2px 10px;
  color: black;
}
.itemInfo{
  padding: 0px 2px 10px;
}
.itemInfo1{
  color: red;
  font-size: 22px;
}
.itemInfo2{
  color: gray;
  font-size: 12px;
}
.itemInfo3{
  border-radius: 5px;
  background: rgb(240, 100, 100);
  padding: 2px;position: relative;
  bottom: 5px;
}
.columns{
  display: flex;
  font-size: 12px;
  color:gray ;
  padding: 2px 0 5px;
}
.columns1,.columns2,.columns3{
  flex: 1;
  padding: 0 2px;
  text-align: center;
}
.services{
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 3px 2px rgb(240, 236, 236);
}
.services1,.services2,.services3{
  flex: 1;
}


</style>