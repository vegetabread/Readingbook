<template>
<transition name="popup-slide-up">
    <div class="ebook-popup-list" v-show="fontstylepopup">
        <div class="ebook-popup-title">
            <div class="left-icon">
                <span class="icon-down2" @click="hidewindow"></span>
            </div>
            <span class="font-style">字体类型</span>
        </div>
        <div class="ebook-popup-list-wrapper">
            <div class="fontfamily-content" v-for="(item,index) in fontfamilyList" :key="index" @click="selectfontfamily(item.font)">
                <div class="realcontent" :class="{'active':isactive(item)}">{{item.font}}</div>
                <div class="icon" v-show="isactive(item)">
                    <span class="icon-check"></span>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
import { ebookMixins } from '../../utils/mixin'
import { fontfamilyList } from '../../utils/book'
import { setlocalstorage, getlocalstorage } from '../../utils/localstorage'
export default {
  mixins: [ebookMixins],
  data () {
    return {
      fontfamilyList
    }
  },
  mounted () {
    setlocalstorage(this.filename, 'testhahah')
    const output = getlocalstorage(this.filename)
    console.log(output)
  },
  methods: {
    isactive (val) {
      return val.font === this.defaultfontfamily
    },
    selectfontfamily (val) {
      this.setdefaultfontfamily(val)
      this.currentbook.rendition.themes.font(val)
    },
    show () {
      alert('hahah')
    },
    hidewindow () {
      this.setfontstyle(!this.fontstylepopup)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global';
.ebook-popup-list{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 150;
  background: white;
  width: 100%;
  box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, .1);
  .ebook-popup-title{
    position: relative;
    padding: px2rem(15);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid #b8b9bb;
    text-align: center;
    @include center;
      .left-icon{
          position: absolute;
          left: px2rem(15);
          top: 0;
          height: 100%;
          font-size: px2rem(16);
          font-weight: bold;
          @include center;

      }
      .font-style{
          font-size: px2rem(16);
      }
  }
  .ebook-popup-list-wrapper{
      padding: px2rem(2) px2rem(15);
      .fontfamily-content{
          padding: px2rem(2) px2rem(5);
          box-sizing: border-box;
          display: flex;
          @include center;
          .realcontent{
              flex: 1;
              text-align: left;
              font-size: px2rem(14);
              margin: px2rem(8) 0;
              font-weight: bold;
              &.active{
                  color: #346cb9;
              }
          }
          .icon{
              flex: 1;
              text-align: right;
              font-size: px2rem(15);
              color: #346cb9;
              font-weight: bold;
          }
      }
  }
}
</style>
