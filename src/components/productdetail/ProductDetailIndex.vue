<template>
    <IndexHeaderSelect :isSearch="true" />
    <IndexHeadSerch :isSearch="true" />
    <a-config-provider :theme="{ token: { colorPrimary: proxy.$colorPrimary } }">
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
                        <MagnifyingGlass>
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
                        </div>
                    </a-col>
                    <a-col :span="15">
                        <div class="sku-name">{{ productData.phoneTitle }}</div>
                        <div class="box-hide">{{ latestRelease.title }}
                            <a :href="'productDetail/' + latestRelease.id"><u>{{ latestRelease.hrefDesc }}</u></a>
                        </div>
                        <a-form :model="productForm" :label-col="labelCol" :wrapper-col="wrapperCol" @finish="onFinish">
                            <a-form-item class="box-summary box-stock" label="价　　格">
                                <span class="price">￥{{ productData.price }}</span>
                            </a-form-item>
                            <a-form-item class="box-stock" label="配&nbsp;&nbsp;送&nbsp;&nbsp;至">
                                <a-cascader v-model:value="productForm.areaValue" placeholder="Please select"
                                    :options="areaOptions" @change="onChange">
                                    <a class="ant-dropdown-link dt" @click.prevent>
                                        {{ text }}
                                        <DownOutlined />
                                    </a>
                                </a-cascader>
                            </a-form-item>
                            <a-divider style="margin: 10px 0;" />
                            <a-form-item class="box-stock" label="选择颜色">
                                <a-radio-group v-model:value="productForm.colorValue"
                                    v-for="(l, index) in productData.colorData" :key="index">
                                    <a-radio-button :value="l.value">{{ l.item }}</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item class="box-stock" label="选择版本">
                                <a-radio-group v-model:value="productForm.versionValue"
                                    v-for="(l, index) in productData.versionData" :key="index">
                                    <a-radio-button :value="l.value">{{ l.item }}</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item class="box-stock" label="选择内存">
                                <a-radio-group v-model:value="productForm.memoryValue"
                                    v-for="(l, index) in productData.memoryData" :key="index">
                                    <a-radio-button :value="l.value">{{ l.item }}</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item>
                                <div class="submit-style">
                                    <a-input-number size="large" v-model:value="productForm.num" :min="1" />
                                    <a-button size="large" type="primary" html-type="submit">加入购物车</a-button>
                                </div>
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>
                <a-row class="product-info">
                    <div class="product-info-menu">
                        <a-menu v-model:selectedKeys="menuCurrent" mode="horizontal" :items="menuItems" />
                    </div>

                    <div class="tabs-content-holder">
                        <div v-show="menuCurrent == 'productInfo'" class="tabs-tabpane">
                            <div class="brand-list">
                                <a-descriptions>
                                    <a-descriptions-item :label="productInfo.name">
                                        <a :href="productInfo.url" target="_blank">{{ productInfo.value }}</a>
                                    </a-descriptions-item>
                                </a-descriptions>

                                <a-descriptions :column="4">
                                    <a-descriptions-item v-for="(l, index) in productDetailInfo" :key="index"
                                        :label="l.name">
                                        {{ l.value }}
                                    </a-descriptions-item>
                                </a-descriptions>
                            </div>
                            <a-divider style="margin: 10px 0;" />
                            <div class="shop-activity-item">
                                <img v-for="(l, index) in productInfo.imgs" :key="index" :src="l">
                            </div>
                        </div>
                        <div v-show="menuCurrent == 'specificationPacking'" class="tabs-tabpane">
                            <div class="brand-list">
                                <a-descriptions v-for="(l, index) in spu" :key="index" :title="l.title">
                                    <a-descriptions-item v-for="(d, index) in l.data" :key="index" :label="d.name">
                                        {{ d.value }}
                                    </a-descriptions-item>
                                </a-descriptions>
                            </div>
                        </div>
                        <div v-show="menuCurrent == 'safeguard'" class="tabs-tabpane">
                            <div class="brand-list">
                                <a-empty :description="null" />
                            </div>
                        </div>
                        <div v-show="menuCurrent == 'productAppraise'" class="tabs-tabpane">
                            <a-row class="brand-list">
                                <a-col :span="4" class="rate-info">
                                    <span class="percent-con">{{ commentInfo.rate }}</span>
                                    <a-rate :value="commentInfo.rate" :count="5" disabled allow-half />
                                </a-col>
                                <a-col :span="20">
                                    <a-checkable-tag v-for="(l, index) in commentInfo.commentTagList" :key="index">{{
        l.tag + "(" +
        l.count + ")" }}</a-checkable-tag>
                                </a-col>
                            </a-row>
                            <a-divider style="margin: 10px 0;" />
                            <a-list class="comment-list" :header="`${commentList.length} replies`"
                                item-layout="horizontal" :data-source="commentList">
                                <template #renderItem="{ item }">
                                    <a-list-item>
                                        <a-comment :author="item.author" :avatar="item.avatar">
                                            <template #actions>
                                                <span v-for="(action, index) in item.actions" :key="index">{{ action
                                                    }}</span>
                                            </template>
                                            <template #content>
                                                <p>
                                                    {{ item.content }}
                                                </p>
                                            </template>
                                            <template #datetime>
                                                <a-tooltip :title="item.datetime">
                                                    <span>{{ item.datetime }}</span>
                                                </a-tooltip>
                                            </template>
                                        </a-comment>
                                    </a-list-item>
                                </template>
                            </a-list>
                        </div>
                    </div>
                </a-row>
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import {
    HomeOutlined, LeftOutlined, RightOutlined, DownOutlined,
    ShoppingOutlined, PaperClipOutlined, TeamOutlined, MessageOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSearch.vue'
import MagnifyingGlass from '../productdetail/MagnifyingGlass.vue'
import { h, ref, reactive, onMounted, computed, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

let router = useRouter();
//查询条件
const productId = router.currentRoute.value.params.productId;

const fakeDataUrl = `/src/json/productDetail.json`;
const areaDataUrl = `/src/json/area.json`;
const productData = ref({});
const areaOptions = ref([]);

const latestRelease = computed(() => productData.value.latestRelease ? productData.value.latestRelease : {});
const productInfo = computed(() => productData.value.productInfo ? productData.value.productInfo : {});
const productDetailInfo = computed(() => productData.value.productDetailInfo ? productData.value.productDetailInfo : []);
const spu = computed(() => productData.value.spu ? productData.value.spu : []);
const commentInfo = computed(() => productData.value.commentInfo ? productData.value.commentInfo : []);
const commentList = computed(() => productData.value.commentList ? productData.value.commentList : []);

const productForm = reactive({
    price: 0,
    areaValue: '',
    colorValue: '',
    versionValue: '',
    memoryValue: '',
    num: 1,
});

const labelCol = {
    style: {
        width: '70px',
    },
};

const wrapperCol = {
    span: 24,
};

const text = ref('江西省南昌市');

const menuCurrent = ref(['productInfo']);
const menuItems = ref([
    {
        key: 'productInfo',
        icon: () => h(ShoppingOutlined),
        label: '商品介绍',
        title: '商品介绍'
    },
    {
        key: 'specificationPacking',
        icon: () => h(PaperClipOutlined),
        label: '规格与包装',
        title: '规格与包装'
    },
    {
        key: 'safeguard',
        icon: () => h(TeamOutlined),
        label: '售后保障',
        title: '售后保障'
    },
    {
        key: 'productAppraise',
        icon: () => h(MessageOutlined),
        label: '商品评价',
        title: '商品评价'
    }
]);

onMounted(() => {
    fetch(fakeDataUrl)
        .then(res => res.json())
        .then(res => {
            productData.value = res;
        });

    fetch(areaDataUrl)
        .then(res => res.json())
        .then(res => {
            for (let index = 0; index < res.provinceList.length; index++) {
                const element = res.provinceList[index];
                areaOptions.value.push({
                    value: element.name,
                    label: element.name,
                    children: recursionSetArea(element.areaList)
                })
            }
        });
});

/**
 * 设置省市县选择
 * @param {*} areaArray 
 */
function recursionSetArea(areaArray) {
    const childrenList = [];
    for (let index = 0; index < areaArray.length; index++) {
        const element = areaArray[index];

        if (!element.areaList) {
            childrenList.push({
                value: element,
                label: element
            })
        } else {
            childrenList.push({
                value: element.name,
                label: element.name,
                children: recursionSetArea(element.areaList)
            })
        }
    }
    return childrenList;
}

/**
 * 回显省市县选择
 */
const onChange = (_value, selectedOptions) => {
    text.value = selectedOptions.map(o => o.label).join(', ');
};

const onFinish = values => {
    productForm.price = productData.value.price;

    router.push({
        name: 'addShoppingCartSuccess',
        params: {
            productId: productId
        }
    });
};

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

:deep(.ant-form-item .ant-form-item-label > label) {
    color: #999;
}

:deep(.ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected)) {
    color: #ec5353;
}

:deep(.ant-menu-light) {
    position: relative;
    background-color: #f7f7f7;
    display: block;
    color: #666;
}

:deep(.ant-menu-item-selected) {
    background-color: #e4393c !important;
    color: #fff !important;
}

:deep(.ant-descriptions-item-label) {
    color: #666;
}

:deep(.ant-descriptions-item-content) {
    color: #666;
}

:deep(.ant-rate) {
    color: #e4393c;
}

:deep(.ant-tag) {
    color: #999;
    display: inline-block;
    line-height: 20px;
    padding: 0 9px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    margin-right: 10px;
    margin-bottom: 10px;
}

:deep(.ant-tag-checkable-checked) {
    color: #e4393c;
    border-color: #e4393c;
    background-color: #fff;
}

:deep(.ant-tag-checkable:not(.ant-tag-checkable-checked):hover) {
    color: #e4393c;
    border-color: #e4393c;
    background-color: #fff;
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
    background: #f3f3f3;

    .price {
        color: #E4393C;
        font-family: "microsoft yahei";
        font-size: 22px;
    }

    label {
        color: #666
    }
}

.box-stock {
    padding-left: 10px;
    font-size: 14px;
    margin-bottom: 10px;
}

.submit-style {
    display: flex;
    padding-left: 10px;

    button {
        margin-left: 10px;
    }
}

label,
.dt {
    font-family: simsun;
    color: #999;
}

.box-item {
    margin-left: 10px;
}

.product-info {
    position: relative;
    display: block;
    padding-top: 20px;

    .product-info-menu {
        background-color: #f7f7f7 !important;
        border: 1px solid #eee;
        border-bottom: 1px solid #e4393c;
    }

    .tabs-content-holder {
        flex: auto;
        min-width: 0;
        min-height: 0;

        .tabs-tabpane {
            outline: none;
            flex: none;
            width: 100%;
            color: #666;

            .brand-list {
                padding: 20px 0 0 20px;
                overflow: hidden;
                zoom: 1;

                .rate-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .percent-con {
                        line-height: 110%;
                        font-size: 45px;
                        color: #e4393c;
                        font-family: arial;
                    }
                }
            }

            .shop-activity-item {
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>