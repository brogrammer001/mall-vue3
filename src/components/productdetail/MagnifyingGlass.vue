<template>
    <div class="imgBox" ref="imgbox">
        <slot></slot>
        <div class="mask" v-show="state.isShow" :style="{
            left: state.maskX + 'px',
            top: state.maskY + 'px'
        }">
        </div>
    </div>
    <transition>
        <div class="zoomBox" v-show="state.isShow">
            <img :src="state.imgSrc" :style="{
            width: state.zoomImgWidth + 'px',
            height: state.zoomImgHeight + 'px',
            marginLeft: -state.bImgX + 'px',
            marginTop: -state.bImgY + 'px'
        }">
        </div>
    </transition>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
const imgbox = ref(null)
const maskWidth = 300,
    maskHeight = 300
const state = reactive({
    zoomImgWidth: 0,
    zoomImgHeight: 0,
    isShow: false,
    maskX: 0,
    maskY: 0,
    bImgX: 0,
    bImgY: 0,
    imgSrc: ''
})

const zommIn = (ev) => {
    const img = ev.currentTarget.getElementsByTagName('img')[0]
    const { offsetWidth, offsetHeight } = imgbox.value
    state.zoomImgWidth = offsetWidth * 3
    state.zoomImgHeight = offsetHeight * 3
    state.imgSrc = img.src
    state.isShow = true
}

const zoomMove = (ev) => {
    const { clientX, clientY } = ev
    const { offsetWidth, offsetHeight} = imgbox.value
    let mx = clientX - 300 - (maskWidth / 2),
        my = clientY - 150 - (maskHeight / 2)
    mx = mx < 0 ? 0 : mx
    my = my < 0 ? 0 : my
    if (mx > offsetWidth - maskWidth) {
        mx = offsetWidth - maskWidth
    }
    if (my > offsetHeight - maskHeight) {
        my = offsetHeight - maskHeight
    }
    state.maskX = mx
    state.maskY = my
    state.bImgX = mx * (state.zoomImgWidth - offsetWidth) / (offsetWidth - maskWidth)
    state.bImgY = my * (state.zoomImgHeight - offsetHeight) / (offsetHeight - maskHeight)
}

const zommOut = () => {
    state.isShow = false
}

//绑定方法
onMounted(() => {
    imgbox.value.addEventListener('mouseover', zommIn)
    imgbox.value.addEventListener('mousemove', zoomMove)
    imgbox.value.addEventListener('mouseout', zommOut)
})

onUnmounted(() => {
    //imgbox.value.removeEventListener('mouseover', () => { })
    //imgbox.value.removeEventListener('mousemove', () => { })
    //imgbox.value.removeEventListener('mouseout', () => { })
})
</script>

<style lang="less" scoped>
.imgBox {
    position: relative;
    overflow: hidden;
    width: 450px;
    height: 450px;
    border: 1px solid #eee;

    .mask {
        position: absolute;
        top: 0;
        background: rgba(255, 255, 0, 0.5);
        height: 300px;
        width: 300px;
        cursor: move;
        z-index: 10;
        opacity: .5;
    }
}

.zoomBox {
    position: absolute;
    left: 450px;
    top: 0;
    width: 450px;
    height: 450px;
    overflow: hidden;
    border: 1px solid #eee;
    background: #FFFFFF;
    z-index: 999;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>