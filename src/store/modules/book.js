const book = {
  state: {
    test: 1,
    menuVisible: false,
    filename: '',
    titlename: '我是天下第一',
    settingvisible: -1,
    defaultfontsize: 16,
    currentbook: null,
    defaultfontfamily: 'Default',
    fontstylepopup: false
  },
  mutations: {
    setfontstyle (state, val) {
      state.fontstylepopup = val
    },
    setfontfamily (state, val) {
      state.defaultfontfamily = val
    },
    setcurrentbook (state, val) {
      state.currentbook = val
    },
    setfilename (state, val) {
      state.filename = val
    },
    setdefaultfontsize (state, val) {
      state.defaultfontsize = val
    },
    settest (state, newtest) {
      state.test = newtest
    },
    setmenuvisible (state, val) {
      state.menuVisible = val
    },
    setvisible (state, val) {
      console.log('传进来的字体是', val)
      state.settingvisible = val
    }
  }
}
export default book
