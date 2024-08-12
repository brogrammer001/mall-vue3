<template>
    <IndexHeaderSelect :isSearch="true" />
    <IndexHeadSerch :isSearch="true" />
    <SearchHotSalePromotion />
    <a-config-provider :theme="{ token: { colorPrimary: proxy.$colorPrimary } }">
        <a-row style="margin-top: 5px;">
            <a-col :span="16" :offset="4">
                <a-breadcrumb class="breadcrumb-style">
                    <a-breadcrumb-item><a href="/"><home-outlined /></a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">手机</a></a-breadcrumb-item>
                </a-breadcrumb>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="16" :offset="4">
                <a-layout>
                    <a-layout-content style="background: #fff;">
                        <SearchQuerySelector />
                        <SearchListData/>
                    </a-layout-content>
                </a-layout>
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import { HomeOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
import SearchHotSalePromotion from '../search/SearchHotSalePromotion.vue'
import SearchQuerySelector from '../search/SearchQuerySelector.vue'
import SearchListData from '../search/SearchListData.vue'
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

let router = useRouter();
//查询条件
let searchData = router.currentRoute.value.params.searchData;
</script>

<style lang="less" scoped>
.breadcrumb-style{
    padding: 13px 0 9px;
}
</style>