<!--  -->
<template>
  <div>
    <div class="warpper" ref="warpper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    pbtype:{
      type:Number,
      default:0
    }
  },
  data () {
    return {
      bscroll:null
    };
  },

  components: {},

  computed: {},

  methods: {},
  mounted() {
    this.bscroll = new BScroll(this.$refs.warpper,{
      pullUpLoad:true,
      click:true,
      probetype:this.pbtype

    })
    this.bscroll.on("pullingUp",() => {
      console.log("下拉加载更多")
      this.$emit("pullmore")
        this.bscroll.finishPullUp()
    }),
    this.bscroll.on("scroll",(position) => {
      this.$emit("backclick",position)
    })
  },
  activated() {
    this.bscroll.refresh()
    console.log("bbbbsssccrroll")
  },
}

</script>
<style  scoped>
.warpper{
  position:absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>