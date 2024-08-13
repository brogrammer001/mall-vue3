<template>
    <IndexHeaderSelect :isSearch="true" />
    <ShoppingCartHeadSearch />
    <a-config-provider :theme="{ token: { colorPrimary: proxy.$colorPrimary } }">
        <a-row>
            <a-col :span="16" :offset="4">
                <a-result status="success" title="商品已成功加入购物车!">
                    <template #extra>
                        <a-button key="console" type="primary" @click="goShoppingCart">去购物车结算</a-button>
                        <a-button key="buy" @click="goProductInfo">查看商品详情</a-button>
                    </template>
                    <template #subTitle>
                        <div class="product-info">
                            <img width="80" height="80"
                                :src="`https://img11.360buyimg.com/n7/${productDto.item.ImgUrl}`" />
                            <div class="info-text">
                                <p v-html="productDto.item.Name"></p>
                                <div>数量：{{ productDto.item.Num }}</div>
                            </div>
                        </div>
                    </template>
                </a-result>
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import ShoppingCartHeadSearch from '../addshoppingcart/ShoppingCartHeadSearch.vue'
import { h, ref, reactive, onMounted, computed, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();
const colorPrimary = computed(() => proxy.$colorPrimary);
let router = useRouter();
//查询条件
let productId = router.currentRoute.value.params.productId;

const productDto = ref({
    "shopId": 1000001947,
    "shopName": "荣耀京东自营旗舰店",
    "item": {
        "Id": "100057334060",
        "Name": "荣耀X50 第一代骁龙6芯片 1.5K超清护眼硬核曲屏 5800mAh超耐久大电池 5G AI手机 8GB+128GB 雨后初晴",
        "Num": 1,
        "Price": 1399,
        "PriceShow": "￥1,399.00",
        "ImgUrl": "jfs/t1/228277/36/24287/76067/66aa371dF18273a7e/23e3ef8c97653c79.jpg.dpg",
        "ImageUrlRN": "jfs/t1/228277/36/24287/76067/66aa371dF18273a7e/23e3ef8c97653c79.jpg",
        "unitedText": "雨后初晴，8GB+128GB",
        "propertyTags": {
            "a": "雨后初晴",
            "b": "8GB+128GB"
        }
    }
})
onMounted(() => {
    /* fetch(fakeDataUrl)
        .then(res => res.json())
        .then(res => {
            productDto.value = res;
        }); */
});

function goShoppingCart() {
    router.push({
        name: 'addShoppingCart'
    });
}

function goProductInfo() {
    
}
</script>

<style lang="less" scoped>
.product-info {
    display: flex;
    justify-content: center;

    .info-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        div {
            margin: 10px 0 0 10px;
        }
    }

    p {
        width: 500px;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        margin: 0 0 0 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: left;
    }
}
</style>