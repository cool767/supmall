<!--  -->
<template>
  <div class="recommend">
    <div class="recommenditem" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" srcset="">
      </a>
      <div>
      <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
   recommends:{
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

  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 15px;
  border-bottom: 4px solid rgba(196, 195, 192, 0.2)
}
.recommenditem{
  flex: 1;
}
.recommenditem img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>