const book = {
  test: state => state.book.test,
  filename: state => state.book.filename,
  menuvisible: state => state.book.menuVisible,
  show: state => state.book.menuVisible,
  titlename: state => state.book.titlename,
  settingvisible: state => state.book.settingvisible,
  defaultfontsize: state => state.book.defaultfontsize,
  currentbook: state => state.book.currentbook,
  defaultfontfamily: state => state.book.defaultfontfamily,
  fontstylepopup: state => state.book.fontstylepopup
}
export default book
