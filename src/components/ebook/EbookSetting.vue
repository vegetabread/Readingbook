<template>
    <div>
        <transition name="slide-up">
            <div class="setfontsize" v-if="showtag === 0">
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
        </transition>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.setfontsize{
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
</style>
