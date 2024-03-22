<template>
    <IndexHeaderSelect :isSearch="true"/>
    <IndexHeadSerch :isSearch="true"/>
    <h1>{{ searchData }}</h1>
</template>

<script setup>
import { useRouter } from 'vue-router'; 
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
let router = useRouter();

let searchData = router.currentRoute.value.params.searchData;
console.log(searchData);
</script>

<style lang="less" scoped></style>