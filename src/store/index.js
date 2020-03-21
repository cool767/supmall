import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist:[]
  },
  mutations: {
    addcount(state,oldproduct){
      oldproduct.count++
    },
    pushcartlist(state,product){
      state.cartlist.push(product)
    },
    
  },
  // 判断商品是否存在
  actions: {
    addCart(context, product) {
      return new Promise((resolve, reject) => { 
        let oldproduct = context.state.cartlist.find(item => item.iid === product.iid)//find 返回值是满足条件的item
        if (oldproduct) {
          // oldproduct.count += 1
          context.commit("addcount", oldproduct)
          resolve("此商品数量加一")
        } else {
          // state.cartlist.push(product)
          context.commit("pushcartlist", product)
          resolve("此商品已加入购物车")

        }
      })
    }
    
  },
  modules: {
  }
})
