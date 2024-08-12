<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <a-row>
                <a-col :span="8" class="shoppingcart-head-left">
                    <img width="190" height="100" src="../../assets/login/logo.jpg" />
                    <span class="shoppingcart-head-left-font">购物车</span>
                </a-col>
                <a-col :span="8" :offset="8" class="shoppingcart-head-left">
                    <a-input-search v-model:value="searchData" enter-button="搜索" size="middle" @search="onSearch" />
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup>
import { h, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
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