<template>
    <div class="menubar">
        <!-- 这是底部导航栏 -->
        <transition name="slide-up">
            <div class="footerwrapper"  v-show="menuvisible">
                <div class="headericon">
                    <span class="icon-menu" @click="setfuntion(3)"></span>
                </div>
                <div class="headericon">
                    <span class="icon-progress" @click="setfuntion(2)"></span>
                </div>
                <div class="headericon" >
                    <span class="icon-bright" @click="setfuntion(1)"></span>
                </div>
                <div class="headericon" >
                    <span class="icon-a" @click="setfuntion(0)">A</span>
                </div>
            </div>
        </transition>
        <setting-font></setting-font>
        <setting-fontstyle></setting-fontstyle>
    </div>
</template>
<script>
import { ebookMixins } from '../../utils/mixin'
import SettingFont from '../../components/ebook/EbookSetting'
import SettingFontstyle from '../../components/ebook/Ebookfontpopup'
export default {
  mixins: [ebookMixins],
  data () {
    return {
    }
  },
  methods: {
    setfuntion (val) {
      this.setvisible(val)
      console.log('快看注意了', this.settingvisible)
    }
  },
  components: {
    SettingFont,
    SettingFontstyle
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global';
.menubar{
    .footerwrapper{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        z-index: 101;
        height: px2rem(48);
        background: #fff;
        box-shadow: px2rem(8) 0 px2rem(8) rgba(0, 0, 0, .15);
        &.noshadow{
            box-shadow: none;
        }
        .headericon{
            flex: 1;
            @include center();
            font-size: px2rem(22);
        }
        &.slide-up-enter, &.slide-up-leave-to{
            transform: translate3d(0, 100%, 0);
        }
        &.slide-up-enter-to, &.slide-up-leave{
            transform: translate3d(0, 0, 0)
        }
        &.slide-up-enter-active, &.slide-up-leave-active{
            transition: all .3s linear;
        }
    }
}
</style>
