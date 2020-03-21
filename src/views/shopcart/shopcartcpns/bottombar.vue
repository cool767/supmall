<!--  -->
<template>
  <div id="bottombar">
    <div class="choose"  @click="allchecked">
      <div class="btn" :class="{ischeckedactive:ischecked}"></div>
      <span>全选</span>
    </div>
    
    <div class="totoal">
      <span>合计</span>
      <span>${{totoal}}</span>
    </div>

    <div class="caculate" @click="calcclick">
      <span>结算:</span>
      <span>({{length}})</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartlist:[],
      // ischecked:true
      isall:false
    };
  },

  components: {
    
  },

  computed: {
    totoal(){
      return  this.cartlist.filter(item => {
        return item.checked
      }).reduce((pre,item) => {
        return pre+item.price*item.count
      },0).toFixed(2)
    },
    length(){
      return this.cartlist.filter(item => {return item.checked}).length
    },
    ischecked(){
      if (this.cartlist.length===0) {
        return false
      }else{
        return !(this.cartlist.filter(item => {return !item.checked}).length)
      }
    }
  },

  methods: {
    allchecked(){
      for(let item of this.cartlist){
        item.checked = this.isall
      }
      this.isall = !this.isall
    },
    calcclick(){
      if(this.cartlist.length===0){
        this.$emit("calcclick")
      }
    }
  },
  created() {
    this.cartlist = this.$store.state.cartlist
  },
  mounted() {
   
  },
}

</script>
<style  scoped>
#bottombar{
  height: 30px;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  font-size: 14px;

  display: flex;
  box-shadow: 0 -2px 2px rgb(247, 244, 244);
  background: rgb(248, 245, 245);
}
.choose{
  display: flex;
  align-items: center;
  width: 70px;
}
.choose span{
  font-size: 14px;
  color: #000;
}
.btn{
  width: 18px;
  height: 18px;
  border: 2px solid gray;
  border-radius: 15px;
  margin:0 6px;
}
.totoal{
  display: flex;
  align-items: center;
  margin-left: 20px;
  flex: 1;
}
.totoal span{
  margin-left: 6px;
}
.caculate{
  width: 80px;
  display: flex;
  align-items: center;
  background: red;
}
.caculate span{
  color: aliceblue;
  margin-left: 6px;
}
.ischeckedactive{
  background: red;
}
</style>