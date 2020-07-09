<template>
    <div >
        <div id="show"></div>
    </div>
</template>
<script>
import Epub from 'epubjs'
// import { mapGetters } from 'vuex'
global.ePub = Epub
export default {
  computed: {
    // ...mapGetters(['fileName'])
  },
  methods: {
    initEpub () {
      const url = 'http://localhost:8081/epub/History/2013_Book_FungalDiseaseInBritainAndTheUn.epub'
      this.book = new Epub(url)
      console.log(this.book)
      this.rendition = this.book.renderTo('show', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
        console.log(this.touchStartX)
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        console.log(offsetX, time)
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
    },
    prevPage () {
      this.rendition.prev()
    },
    nextPage () {
      this.rendition.next()
    },
    showTitleandMenu () {
      let single = this.$store.state.book.menuVisible
      let another = !single
      this.$store.commit('setmenuvisible', another)
    }
  },
  mounted () {
    this.initEpub()
  }
}
</script>
<style lang="scss" scoped>
</style>
