import { createStore } from 'vuex'

export default createStore({
  state: {
    isBuy:false,
    num:23
  },
  mutations: {
  },
  actions: {
    updateIsBuy(states,value){
      console.log("update")
      states.state.isBuy = value
    },
  },
  modules: {
  
  }
})
