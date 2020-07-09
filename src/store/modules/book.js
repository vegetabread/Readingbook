const book = {
  state: {
    test: 1,
    menuVisible: false
  },
  mutations: {
    settest (state, newtest) {
      state.test = newtest
    },
    setmenuvisible (state, val) {
      state.menuVisible = val
    }
  },
  actions: {
    setTeset: ({ commit, state }, newtest) => {
      commit('settest', newtest)
      console.log(state.test, newtest)
    }
  }
}
export default book
