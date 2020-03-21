<!--  -->
<template>
  <div v-if="shopParams.rule">
    <table v-for="item in shopParams.rule.tables">
     <tr class="trr" v-for="tr in item">
       <td v-for="td in tr" class="tdd">{{td}}</td>
     </tr>
   </table>
   <table v-if="shopParams.info">
     <tr v-for="item in shopParams.info.set">
       <td class="td">{{item.key}}:</td>
       <td class="td2">{{item.value}}</td>
     </tr>
   </table>
  </div>
</template>

<script>
export default {
  props:{
    shopParams:{
      type:Object,
      default(){
        return {}
      }
    }
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
td{
  font-size: 16px;
  border-bottom:1px solid rgb(224, 219, 219);
}
.td{
  width: 60px;
  padding: 4px 1px 4px 15px;
}
.td2{
  padding-left: 60px;
  color: red;
}
.tdd{
  padding:8px 23px 8px 25px

}
</style>