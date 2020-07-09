<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['test'])
  },
  mounted () {
    this.$store.dispatch('setTeset', 10000)
    console.log(this.$store)
    console.log('thisis test', this.test)
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontsize = window.innerWidth / 10
  fontsize = fontsize > 50 ? 50 : fontsize
  html.style.fontSize = fontsize + 'px'
})
</script>
<style>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: pink;
}
</style>
