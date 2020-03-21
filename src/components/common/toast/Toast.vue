<!--  -->
<template>
  <div class="toast" v-show="isshow" >
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props:{
    isshow:Boolean,
    message:String
  },
  data () {
    return {
      // message:"",
      // isisshow:false
    };
  },

  components: {},

  computed: {},

  methods: {
    // show(message,delay=2000){
    //   this.isisshow = true
    //   this.message = message
    //   console.log('lichao',this.isisshow)


    //   setTimeout(() => {
    //     this.isisshow = false
    //   }, delay);
    // }
  }
}

</script>
<style  scoped>
.toast{
  padding: 8px 20px;
  width: 200px;
  text-align: center;
  position: fixed;
  top: 45%;
  left: 20%;
  right: 50%;
  background: rgba(0, 0, 0,.8);
  z-index: 999;
  border-radius: 8px;
  color: aliceblue;
  transition:all 5s ease ;
  /* translate: ; */
  /* transform: translate(50%,50%); */
  /* animation: fadeInOut 2s ease-in-out infinite reverse; */
}
</style>