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
                        <div class="sku-name">{{ productData.phoneTitle }}</div>
                        <div class="box-hide">{{ latestRelease.title }}
                            <a :href="'productDetail/' + latestRelease.id"><u>{{ latestRelease.hrefDesc }}</u></a>
                        </div>

                        <a-form :model="productForm" :label-col="labelCol" :wrapper-col="wrapperCol">
                            <a-form-item class="box-summary box-stock" label="价　格">
                                <div class="box-item">
                                    <span class="price">￥{{ productData.price }}</span>
                                </div>
                            </a-form-item>
                            <a-form-item class="box-stock" label="配送至">
                                <div class="box-item">
                                    <a-cascader v-model:value="areaValue" placeholder="Please select" :options="areaOptions"
                                        @change="onChange">
                                        <a class="ant-dropdown-link dt" @click.prevent>
                                            {{ text }}
                                            <DownOutlined />
                                        </a>
                                    </a-cascader>
                                </div>
                            </a-form-item>
                            <a-divider />
                            <a-form-item class="box-stock" label="选择颜色">
                                <a-radio-group v-model:value="colorValue">
                                    <a-radio-button value="a">摩卡金</a-radio-button>
                                    <a-radio-button value="b">亮黑色</a-radio-button>
                                    <a-radio-button value="c">香槟金</a-radio-button>
                                    <a-radio-button value="d">樱粉金</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item class="box-stock" label="选择版本">
                                <a-radio-group v-model:value="versionValue">
                                    <a-radio-button value="a">摩卡金</a-radio-button>
                                    <a-radio-button value="b">亮黑色</a-radio-button>
                                    <a-radio-button value="c">香槟金</a-radio-button>
                                    <a-radio-button value="d">樱粉金</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                            <a-form-item class="box-stock" label="选择内存">
                                <a-radio-group v-model:value="memoryValue">
                                    <a-radio-button value="a">8GB+128GB</a-radio-button>
                                    <a-radio-button value="b">8GB+256GB</a-radio-button>
                                    <a-radio-button value="c">12GB+256GB</a-radio-button>
                                    <a-radio-button value="d">16GB+512GB</a-radio-button>
                                </a-radio-group>
                            </a-form-item>
                        </a-form>

                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import { HomeOutlined, LeftOutlined, RightOutlined, DownOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
import MagnifyingGlass from '../productdetail/MagnifyingGlass.vue'
import { h, ref, reactive, onMounted, computed } from 'vue';

let router = useRouter();
//查询条件
let productId = router.currentRoute.value.params.productId;

const fakeDataUrl = `/src/json/productDetail.json`;
const areaDataUrl = `/src/json/area.json`;
const productData = ref({});
const areaOptions = ref([]);
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

const latestRelease = computed(() => productData.value.latestRelease ? productData.value.latestRelease : {})

const productForm = reactive({
    price: '',
});

const labelCol = {
    style: {
        width: '50px',
    },
};

const wrapperCol = {
    span: 24,
};

const colorValue = ref("");
const versionValue = ref("");
const memoryValue = ref("");

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
const areaValue = ref([]);
const text = ref('江西省南昌市');
const onChange = (_value, selectedOptions) => {
    text.value = selectedOptions.map(o => o.label).join(', ');
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

label,
.dt {
    font-family: simsun;
    color: #999;
}

.box-item {
    margin-left: 10px;
}
</style>