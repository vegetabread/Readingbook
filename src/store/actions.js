const actions = {
  setfontstyle ({ commit }, val) {
    return commit('setfontstyle', val)
  },
  setdefaultfontfamily ({ commit }, val) {
    return commit('setfontfamily', val)
  },
  // 设置小说文件路径
  setcurrentbook ({ commit }, val) {
    return commit('setcurrentbook', val)
  },
  asetfilename ({ commit }, val) {
    return commit('setfilename', val)
  },
  // 设置默认字体大小
  setdefaultfontsize ({ commit }, val) {
    return commit('setdefaultfontsize', val)
  },
  // 设置是否显示
  asetmenuvisible ({ commit }, val) {
    return commit('setmenuvisible', val)
  },
  setTeset: ({ commit, state }, newtest) => {
    commit('settest', newtest)
  },
  // 设置底部选中栏
  setvisible ({ commit }, val) {
    return commit('setvisible', val)
  }
}
export default actions
