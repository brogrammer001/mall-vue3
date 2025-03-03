<template>
    <!-- <IndexHeaderSelect :isSearch="true" /> -->
    <SettleAccountsHead/>
    <a-config-provider :theme="{ token: { colorPrimary: proxy.$colorPrimary } }">
        <a-row>
            <a-col :span="16" :offset="4">
                
            </a-col>
        </a-row>
    </a-config-provider>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue';
import SettleAccountsHead from '../settleAccounts/SettleAccountsHead.vue';
import { h, ref, reactive, onMounted, computed, getCurrentInstance } from 'vue';
import { message } from 'ant-design-vue';
const { proxy } = getCurrentInstance();
const colorPrimary = computed(() => proxy.$colorPrimary);
let router = useRouter();
//商品id
const selectIds = JSON.parse(router.currentRoute.value.query.row);


</script>

<style>

</style>