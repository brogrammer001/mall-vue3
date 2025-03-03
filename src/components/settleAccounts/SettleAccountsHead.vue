<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <a-row>
                <a-col :span="8" class="shoppingcart-head-left">
                    <!-- <img width="190" height="100" src="../../assets/login/logo.jpg" />
                    <span class="shoppingcart-head-left-font">购物车</span> -->
                </a-col>
                <a-col :span="8" :offset="2" class="shoppingcart-head-left">
                    <a-steps :current="current" label-placement="vertical" :items="[
                            {
                                title: '1.我的购物车',
                                disabled: true
                            },
                            {
                                title: '2.填写核对订单信息'
                            },
                            {
                                title: '3.成功提交订单',
                                disabled: true
                            }
                        ]" />
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup>
import { h, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const current = ref(1);
const router = useRouter();
const headerStyle = {
    textAlign: "center",
    color: "#999",
    height: "120px",
    paddingInline: 25,
    fontSize: "12px",
    margin: "0",
    backgroundColor: "#fff",
};

let searchData = ref("");
const onSearch = searchValue => {
    console.log('use value', searchValue);
    console.log('or use this.value', searchData.value);

    router.push({
        name: 'search',
        params: {
            searchData: searchData.value
        }
    });
};

</script>

<style lang="less" scoped>

:deep(.ant-input-search-button) {
    background-color: #ec5353;
}

:deep(.ant-input:focus) {
    border-color: #ec5353;
}

:deep(.ant-input:hover) {
    border-color: #ec5353;
}

:deep(.ant-steps-item-title) {
  color: #7ABD54 !important;
}

:deep(.ant-steps-item-tail::after) {
    background-color: #7ABD54 !important;
}

.shoppingcart-head-left {
    display: flex;
    align-items: flex-end;

    .shoppingcart-head-left-font {
        vertical-align: middle;
        font-weight: bold;
        padding-top: 15px;
        display: inline-block;
        font-size: 20px;
        color: #333;
    }
}

</style>