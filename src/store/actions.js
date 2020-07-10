const actions = {
  asetfilename ({ commit }, val) {
    return commit('setfilename', val)
  },
  asetmenuvisible ({ commit }, val) {
    return commit('setmenuvisible', val)
  },
  setTeset: ({ commit, state }, newtest) => {
    commit('settest', newtest)
  }
}
export default actions
