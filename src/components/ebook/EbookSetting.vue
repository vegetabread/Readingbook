<template>
    <div>
        <!-- 字体大小模块 -->
        <transition name="slide-up">
            <div class="settingwrapper" v-show="menuvisible&&settingvisible==0">
                <div class="setfontsize" >
                    <div class="preview" :style="{fontSize: fontSizeList[0].fontSize+'px'}">A</div>
                    <!-- 选择字体大小横线部分 -->
                    <div class="selected">
                        <div class="select" v-for="(item,index) in fontSizeList" :key="index">
                        <!-- 左横线 -->
                            <div class="line"></div>
                            <!-- 中间远点 -->
                            <div class="pointwrapper" @click="changesize(item.fontSize)">
                                <div class="point" v-show="defaultfontsize==item.fontSize">
                                    <div class="smallpoint"></div>
                                </div>
                            </div>
                            <!-- 右横线 -->
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
                </div>
                <!-- 设置字体样式部分 -->
                <div class="fontstyle" @click="showstylepopup">
                    <div class="fontstyle-content">
                        <span class="style-innercontent">{{defaultfontfamily}}</span>
                    </div>
                    <div class="fontstyle-icon">
                        <span class="icon-forward"></span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { ebookMixins } from '../../utils/mixin'
import { fontSizeList } from '../../utils/book'
export default {
  mixins: [ebookMixins],
  data: function () {
    return {
      fontSizeList
    }
  },
  methods: {
    changesize (val) {
      this.setdefaultfontsize(val)
      if (val === 'Default') {
        this.currentbook.rendition.themes.font('Times New Roman')
      }
      this.currentbook.rendition.themes.font(val)
      console.log('我们看看default', this.defaultfontsize)
    },
    showstylepopup () {
      this.setfontstyle(!this.fontstylepopup)
    }
  },
  mounted () {
    console.log('字体函数进来了')
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global';
 .settingwrapper{
        position: absolute;
        left: 0;
        bottom: px2rem(48);
        width: 100%;
        z-index: 110;
        height: px2rem(90);
        display: flex;
        flex-direction: column;
        background: white;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        &.slide-up-enter, &.slide-up-leave-to{
            transform: translate3d(0, px2rem(138), 0);
        }
        &.slide-up-enter-to, &.slide-up-leave{
            transform: translate3d(0, 0, 0);
        }
        &.slide-up-enter-active, &.slide-up-leave-active{
            transition: all .3s linear;
        }
        .setfontsize{
            flex: 2;
            display: flex;
            height: 100%;
            align-items: center;
            .preview{
                flex: 0 0 px2rem(40);
                 @include center;
            }
            .selected{
                display: flex;
                flex: 1;
                .select{
                    flex: 1;
                    display: flex;
                    &:first-child{
                        .line{
                            &:first-child{
                                border-top: none;
                            }
                        }
                    }
                    &:last-child{
                    .line{
                            &:last-child{
                                border-top: none;
                            }
                        }
                    }
                    .line{
                        flex: 1;
                        height: 0;
                        border-top: px2rem(1) solid #ccc;
                    }
                    .pointwrapper{
                        position: relative;
                        flex: 0 0 0;
                        width: 0;
                        height: px2rem(7);
                        border-left: px2rem(1) solid #ccc;
                        .point{
                            position: absolute;
                            top: px2rem(-8);
                            left: px2rem(-10);
                            width: px2rem(20);
                            height: px2rem(20);
                            border-radius: px2rem(20);
                            background: white;
                            border: px2rem(1) solid #ccc;
                            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
                            @include center;
                            .smallpoint{
                                width: px2rem(5);
                                height: px2rem(5);
                                background: black;
                                border-radius: px2rem(5);
                            }
                        }
                    }
                }
            }
        }
        .fontstyle{
          flex: 1;
          @include center;
          font-size: px2rem(16);
          .fontstyle-icon{
              font-size: px2rem(10);
              margin-left: px2rem(6);
          }
        }
    }
</style>
