<template>
    <div >
        <div id="show">
        </div>
    </div>
</template>
<script>
import Epub from 'epubjs'
import { ebookMixins } from '../../utils/mixin'
global.ePub = Epub
// 地址=History|2017_Book_InterdisciplinaryPerspectivesO
export default {
  mixins: [ebookMixins],
  methods: {
    // 启动epubjs
    initEpub () {
      const url = 'http://localhost:8081/epub/' + this.filename + '.epub'
      this.book = new Epub(url)
      // 将图书渲染在页面上
      this.setcurrentbook(this.book)
      this.rendition = this.book.renderTo('show', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      this.rendition.display()
      // 手指触碰屏幕开始
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      })
      // 手指触碰屏幕结束
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        // 半段触屏的方向和时间
        if (time < 500 && offsetX > 40) {
          this.prevPage()
        } else if (time < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.showTitleandMenu()
        }
        // 这句话报错，需要讨论
        // event.preventDefault()
        event.stopPropagation()
      })
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
        ])
      })
    },
    // 后一页
    prevPage () {
      this.rendition.prev()
      this.hidetopandbottom()
    },
    // 下一页
    nextPage () {
      this.rendition.next()
      this.hidetopandbottom()
    },
    // 隐藏上下标题栏
    hidetopandbottom () {
      // this.$store.dispatch('asetmenuvisible', false)
      this.asetmenuvisible(false)
      this.setfontstyle(false)
    },
    // 显示上下标题栏
    showTitleandMenu () {
      this.asetmenuvisible(!this.menuvisible)
      this.setvisible(-1)
      this.setfontstyle(false)
    }
  },
  mounted () {
    // console.log('mouted函数进来了')
    // console.log(this.$route.params.filename.split('|').join('/'))
    this.asetfilename(this.$route.params.filename.split('|').join('/')).then(() => { this.initEpub() })
    // this.initEpub()
  }
}
</script>
<style lang="scss" scoped>
.big{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 500px;
  height: 500px;
  background: green;
  .small{
    width: 200px;
    height: 200px;
    background: pink;
  }
}
</style>
