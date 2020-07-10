const book = {
  state: {
    test: 1,
    menuVisible: false,
    filename: '',
    titlename: '我是天下第一'
  },
  mutations: {
    setfilename (state, val) {
      state.filename = val
    },
    settest (state, newtest) {
      state.test = newtest
    },
    setmenuvisible (state, val) {
      state.menuVisible = val
    }
  }
}
export default book
