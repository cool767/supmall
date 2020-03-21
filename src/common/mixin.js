export const backtopmixin = {
  data() {
    return {
      backisshow: true,
    }
  },
  methods: {
    backtopclick() {
      this.$refs.scoll.bscroll.scrollTo(0, 0, 500)
    },
    backtopisshow(postion) {
      this.backisshow = -postion.y > 1000
      this.isshowtabcontore = -postion.y > this.tapoffsetTop
    },
  },
}