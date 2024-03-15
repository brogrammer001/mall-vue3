<template>
    <a-row style="margin-top: 5px;">
        <a-col :span="14" :offset="5">
            <div class="section_second_header">
                <div class="section_second_header_left">
                    <p></p>
                    <span>秒杀</span>
                    <span>总有你想不到的低价</span>
                    <p></p>
                </div>
                <div class="section_second_header_right">
                    <p>当前场次</p>
                    <span class="section_second_header_right_hours">00</span>
                    <span class="section_second_header_right_mao">：</span>
                    <span class="section_second_header_right_minutes">00</span>
                    <span class="section_second_header_right_mao">：</span>
                    <span class="section_second_header_right_second">00</span>
                    <p>后结束</p>
                </div>
            </div>

            <div class="section_second_list">
                <a-carousel arrows :autoplay="false" :slides-to-show="5" :slides-to-scroll="1">
                    <template #prevArrow>
                        <div class="custom-slick-arrow" style="left: 10px; z-index: 1;">
                            <svg focusable="false" data-icon="left-circle" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true" viewBox="64 64 896 896">
                                <path
                                    d="M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z">
                                </path>
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                </path>
                            </svg>
                        </div>
                    </template>

                    <template #nextArrow>
                        <div class="custom-slick-arrow" style="right: 10px;">
                            <svg focusable="false" data-icon="right-circle" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true" viewBox="64 64 896 896">
                                <path
                                    d="M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z">
                                </path>
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                </path>
                            </svg>
                        </div>
                    </template>

                    <div v-for="(item, index) in swiperPic" :key="index" class="swiper-pic-box">
                        <a-card hoverable>
                            <template #cover>
                                <div class="">
                                    <a-image :alt="item.titleText" :src="item.img" />
                                </div>
                            </template>
                            <a-card-meta>
                                <template #description>
                                    <p>{{ item.titleText }}</p>
                                    <span>¥{{ item.seckillPrice }}</span><s>¥{{ item.price }}</s>
                                </template>
                            </a-card-meta>
                        </a-card>
                    </div>
                </a-carousel>
            </div>
        </a-col>
    </a-row>
</template>

<script setup>
import 'animate.css';
import { h, ref, reactive } from 'vue';
const swiperPic = ref([
    {
        img: "src/assets/index/section_second_list_img1.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img2.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img3.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img4.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img5.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img6.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img7.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img8.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img9.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    },
    {
        img: "src/assets/index/section_second_list_img10.jpg",
        titleText: "华为mate9 4GB+32GB版 月光银 移动联通电信4G手机 双卡",
        seckillPrice: 16.9,
        price: 17.9
    }
])
</script>

<style lang="less" scoped>
:deep(.slick-slide) {
    text-align: center;
    height: 240px;
    line-height: 240px;
    overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #797676;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #797676;
    opacity: 0.5;
}

:deep(.slick-slide h3) {
    color: #797676;
}

.section_second_header {
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    height: 55px;
    padding: 0 30px;
    background: url("src/assets/index/section_second_header_background.png") no-repeat;
    position: relative;
    display: flex;
    justify-content: space-between;

    .section_second_header_left {
        display: flex;
        color: #ffffff;
        font-size: 14px;
        align-items: flex-end;
        margin-bottom: 5px;

        span {
            margin-right: 10px;
            margin-bottom: 5px;
        }

        p:nth-child(1) {
            width: 40px;
            height: 40px;
            background: url("src/assets/index/section_second.png") no-repeat;
            background-position: 6px -39px;
            margin: 10px 10px 0 0;
        }

        span:nth-child(2) {
            font-size: 25px;
            font-weight: 500;
            cursor: pointer;
        }

        p:nth-child(4) {
            display: inline-block;
            width: 20px;
            height: 22px;
            background: url("src/assets/index/section_second.png") no-repeat;
            background-position: -154px -39px;
            margin: 0;
        }
    }

    .section_second_header_right {
        display: flex;
        align-items: center;

        p {
            line-height: 55px;
            color: #FFFFFF;
            font-size: 14px;
        }

        .section_second_header_right_hours,
        .section_second_header_right_minutes,
        .section_second_header_right_second {
            display: inline-block;
            width: 30px;
            height: 30px;
            background: #440106;
            border-radius: 3px;
            color: #F90013;
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            text-align: center;
            box-sizing: border-box;
        }

        .section_second_header_right_hours {
            margin-left: 10px;
        }

        .section_second_header_right_second {
            margin-right: 10px;
        }
    }
}

.section_second_list {
    overflow: hidden;

    .swiper-pic-box {
    
        .seckill-img {
            width: 130px;
            height: 130px;
            margin: auto;
        }

        p {
            margin: 0;
            font-size: 12px;
            color: #999;
            text-align: left;
            overflow: hidden; //多出的隐藏
            text-overflow: ellipsis; //多出部分用...代替
            display: -webkit-box; //定义为盒子模型显示
            -webkit-line-clamp: 2; //用来限制在一个块元素显示的文本的行数
            -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
        }

        s {
            font-size: 12px;
            color: #999;
        }

        span {
            font-size: 18px;
            color: red;
            font-weight: 600;
        }
    }
}
</style>