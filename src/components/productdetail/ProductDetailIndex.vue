<template>
   <!--  <IndexHeaderSelect :isSearch="true" />
    <IndexHeadSerch :isSearch="true" /> -->
    <a-config-provider :theme="{ token: { colorPrimary: '#ec5353' } }">
        <a-row style="margin-top: 5px;background: #f2f2f2;">
            <a-col :span="16" :offset="4">
                <a-breadcrumb class="breadcrumb-style">
                    <a-breadcrumb-item><a href="/"><home-outlined /></a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">手机</a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">一加12</a></a-breadcrumb-item>
                </a-breadcrumb>
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import { HomeOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
import { h, ref, reactive } from 'vue';
let router = useRouter();
//查询条件
let productId = router.currentRoute.value.params.productId;
console.log(productId)
</script>

<style lang="less" scoped>
.breadcrumb-style{
    padding: 13px 0 9px;
}
</style>