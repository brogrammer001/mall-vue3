<template>
    <IndexHeaderSelect :isSearch="true" />
    <IndexHeadSerch :isSearch="true" />
    <SearchHotSalePromotion />
    <a-config-provider :theme="{ token: { colorPrimary: '#ec5353' } }">
        <a-row style="margin-top: 5px;background: #f2f2f2;">
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
                    <a-layout-header class="selector-title">
                        <h3><b>手机</b><em>商品筛选</em></h3>
                        <div class="st-ext">共&nbsp;<span>10135</span>个商品</div>
                    </a-layout-header>
                    <a-layout-content>
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
import { h, ref, reactive } from 'vue';
let router = useRouter();
//查询条件
let searchData = router.currentRoute.value.params.searchData;
</script>

<style lang="less" scoped>
.selector-title {
    background: #dfdede;
    overflow: hidden;
    height: 34px;
    zoom: 1;
    display: flex;
    align-items: center;
    padding: 0;
    margin-top: 10px;

    h3 {
        margin-left: 10px;
        font-size: 14px;

        b {
            color: #e4393c;
            margin-right: 5px;
        }

        em {
            font-style: normal;
        }
    }

    .st-ext {
        margin-left: 20px;
        font-size: 13px;
        color: #999;
    }
}

.breadcrumb-style{
    padding: 13px 0 9px;
}
</style>