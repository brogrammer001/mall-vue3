<template>
    <!-- <IndexHeaderSelect :isSearch="true" />
    <IndexHeadSerch :isSearch="true" /> -->
    <a-config-provider :theme="{ token: { colorPrimary: '#ec5353' } }">
        <a-row style="background: #f2f2f2;">
            <a-col :span="16" :offset="4">
                <a-breadcrumb class="breadcrumb-style">
                    <a-breadcrumb-item><a href="/"><home-outlined /></a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">手机</a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">{{ productData.phoneName }}</a></a-breadcrumb-item>
                </a-breadcrumb>
            </a-col>
        </a-row>
        <a-row style="margin-top: 5px;">
            <a-col :span="16" :offset="4">
                <a-row>
                    <a-col :span="9">
                        <!-- <MagnifyingGlass>
                            <img :src="productData.defaultImg" />
                        </MagnifyingGlass>
                        <div style="width: 450px;">
                            <a-carousel class="img-carousel" arrows :dots="false" :autoplay="false" :slides-to-show="5"
                                :slides-to-scroll="1">
                                <template #prevArrow>
                                    <div class="custom-slick-arrow">
                                        <LeftOutlined />
                                    </div>
                                </template>

<template #nextArrow>
                                    <div class="custom-slick-arrow">
                                        <RightOutlined />
                                    </div>
                                </template>
<div v-for="(item, index) in productData.cutImg" :key="index">
    <div class="img-item">
        <img width="54" height="54" :src="item" />
    </div>
</div>
</a-carousel>
</div> -->
                    </a-col>
                    <a-col :span="15">
                        <!-- <div class="sku-name">{{ productData.phoneTitle }}</div>
                        <div class="box-hide">{{ latestRelease.title }}
                            <a :href="'productDetail/' + latestRelease.id"><u>{{ latestRelease.hrefDesc }}</u></a>
                        </div> -->
                        <div class="box-summary">
                            <div>价格</div>
                            <span>￥</span>
                            <span class="price">4499.00</span>
                        </div>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import { HomeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
import MagnifyingGlass from '../productdetail/MagnifyingGlass.vue'
import { h, ref, reactive, onMounted, computed } from 'vue';

let router = useRouter();
//查询条件
let productId = router.currentRoute.value.params.productId;

const fakeDataUrl = `/src/json/productDetail.json`;
const productData = ref({});
onMounted(() => {
    fetch(fakeDataUrl)
        .then(res => res.json())
        .then(res => {
            productData.value = res;
        });
});

const latestRelease = computed(() => productData.value.latestRelease ? productData.value.latestRelease : {})

</script>

<style lang="less" scoped>
:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #797676;
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

.breadcrumb-style {
    padding: 13px 0 9px;
}

.img-carousel {
    width: 430px;
    margin: auto;

    .img-item {
        display: flex;
        justify-content: center;
        cursor: pointer;
        border: 2px solid #fff;

        &:hover {
            border: 2px solid red;
        }
    }
}

.sku-name {
    font: 700 16px Arial, "microsoft yahei";
    color: #666;
    padding-top: 10px;
    line-height: 28px;
    margin-bottom: 5px;
}

.box-hide {
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-height: 1.5em;
    line-height: 1.5em;
    font-size: 12px;
    color: red;

    a {
        color: #636DAF;
    }
}

.box-summary {
    padding: 10px 0 5px;
    background: #f3f3f3;
    position: relative;
    margin-bottom: 5px;
    display: flex;
    line-height: 22px;

    div {
        padding-left: 10px;
        font-family: simsun;
        color: #999;
    }

    span {
        color: #E4393C;
        font-family: "microsoft yahei";
        margin-left: 10px;
    }

    .price{
        font-size: 22px;
    }
}
</style>