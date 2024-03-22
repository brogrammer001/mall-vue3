<template>
    <IndexHeaderSelect :isSearch="true" />

    <IndexHeadSerch :isSearch="true" />

    <a-row style="margin-top: 5px;">
        <a-col :span="16" :offset="4">
            <a-row>
                <a-col>
                    <div class="hot-sale-promotion">
                        <div class="recommend-title">
                            热卖推荐
                        </div>
                        <div>
                            <ul>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <div></div>
        </a-col>
    </a-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import IndexHeadSerch from '../index/IndexHeadSerch.vue'
let router = useRouter();
//查询条件
let searchData = router.currentRoute.value.params.searchData;

</script>

<style lang="less" scoped>
.hot-sale-promotion {
    width: 100%;
    height: 137px;
    padding-top: 15px;
    background-color: #f1f1f1;

    .recommend-title {
        width: 30px;
        height: 60px;
        position: absolute;
        left: 20px;
        top: 0;
        line-height: 18px;
        padding: 20px 10px 0 5px;
        font-size: 14px;
        text-align: center;
        color: #f60;
        background: url(../../assets/search/image.png) no-repeat;
    }
}
</style>