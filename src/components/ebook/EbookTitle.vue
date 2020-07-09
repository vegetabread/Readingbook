<template>
    <div>
        <transition name="slide-down">
            <div class="titlewrapper" v-show="this.$store.state.book.menuVisible" >
                <div class="left">
                        <span class="icon-back icon"></span>
                </div>
                <div class="right">
                    <div class="one">
                        <span class="icon-shelf " @click="test"></span>
                    </div>
                    <div class="one">
                        <span class="icon-cart " @click="test"></span>
                    </div>
                    <div class="one">
                        <span class="icon-more "></span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  props: {
    showif: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    test () {
      this.$emit('test')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/global';
@import '../../assets/styles/icon.css';
    .titlewrapper{
        position: absolute;
        width: 100%;
        height: px2rem(48);
        z-index: 101;
        left: 0;
        display: flex;
        background: #fff;
        font-size: px2rem(20);
        box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
        .left{
            flex: 0 0 px2rem(60);
            @include center;
        }
        .right{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .one{
                flex: 0 0 px2rem(40);
                @include center;
            }
        }
    }
</style>
