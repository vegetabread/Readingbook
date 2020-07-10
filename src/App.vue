<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    // this.$store.dispatch('setTeset', 10000)
    // console.log('输出了this.test', this.test)
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
}
</style>
