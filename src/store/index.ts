import { createStore } from 'vuex'

export default createStore({
  state: {
    isBuy:false,
    isReload:false,
    num:23
  },
  mutations: {
    updateIsBuy(states,value){
      states.isBuy = value["buy"]
      states.isReload = value["reload"]
    },
  },
  getters:{
  },
  actions: {
    
  },
  modules: {
  
  }
})
