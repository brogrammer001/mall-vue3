<template>
    <!-- <IndexHeaderSelect :isSearch="true" />

    <IndexHeadSerch :isSearch="true" /> -->

    <a-row style="margin-top: 5px;">
        <a-col :span="16" :offset="4">
            <a-row>
                <a-col>
                    <div class="hot-sale-promotion">
                        <div class="recommend-title">
                            热卖推荐
                        </div>
                        <div class="hot-sale-promotion-con">
                            <a-carousel arrows :dots="false" :autoplay="false" :slides-to-show="4"
                                :slides-to-scroll="1">
                                <template #prevArrow>
                                    <div class="custom-slick-arrow" style="left: 10px; z-index: 1;">
                                        <svg focusable="false" data-icon="left-circle" width="1em" height="1em"
                                            fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
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
                                        <svg focusable="false" data-icon="right-circle" width="1em" height="1em"
                                            fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
                                            <path
                                                d="M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z">
                                            </path>
                                            <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                                            </path>
                                        </svg>
                                    </div>
                                </template>

                                <div v-for="(item, index) in hotSalePromotionList" :key="index">
                                    <div class="swiper-pic-box">
                                        <a href="#"><img :src="item.img" /></a>
                                        <div class="swiper-pic-con">
                                            <a href="#" class="swiper-pic-title">
                                                <em>{{ item.title }}</em>
                                            </a>
                                            <strong>
                                                <em>￥{{ item.price }}</em>
                                            </strong>
                                            <a-button class="swiper-pic-button">立即抢购</a-button>
                                        </div>
                                    </div>
                                </div>
                            </a-carousel>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <div></div>
        </a-col>
    </a-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
import { h, ref, reactive } from 'vue';
let router = useRouter();
//查询条件
let searchData = router.currentRoute.value.params.searchData;

const hotSalePromotionList = reactive([
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    },
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    },
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    },
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    },
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    },
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    },
    {
        img: "../src/assets/search/phone_1.jpg",
        title: "华为 HUAWEI nova 2S 全面屏四摄 6GB +64GB 曜石黑 移动联通电信4G手机 双卡双待",
        price: 2999
    }
])
</script>

<style lang="less" scoped>
.hot-sale-promotion {
    width: 100%;
    height: 137px;
    padding-top: 15px;
    background-color: #f1f1f1;

    .recommend-title {
        width: 30px;
        height: 60px;
        position: absolute;
        left: 20px;
        top: 0;
        line-height: 18px;
        padding: 20px 10px 0 5px;
        font-size: 14px;
        text-align: center;
        color: #f60;
        background: url(../../assets/search/image.png) no-repeat;
    }

    .hot-sale-promotion-con {
        margin-left: 70px;

        .swiper-pic-box {
            background-color: #fff;
            display: flex;
            align-items: center;
            margin: 0 10px;

            .swiper-pic-con {
                display: flex;
                flex-direction: column;

                .swiper-pic-title {
                    margin: 5px 5px 0 0;
                    font-size: 12px;
                    color: #999;
                    text-align: left;
                    overflow: hidden; //多出的隐藏
                    text-overflow: ellipsis; //多出部分用...代替
                    display: -webkit-box; //定义为盒子模型显示
                    -webkit-line-clamp: 2; //用来限制在一个块元素显示的文本的行数
                    -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
                }

                strong {
                    margin-top: 5px;
                    color: #e4393c;
                    font-size: 14px;
                    font-weight: 700;
                }

                .swiper-pic-button {
                    margin: 10px 0;
                    width: 100px;
                }
            }
        }
    }


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
</style>