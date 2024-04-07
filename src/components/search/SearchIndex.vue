<template>
    <!--  <IndexHeaderSelect :isSearch="true" />
    <IndexHeadSerch :isSearch="true" />
    <SearchHotSalePromotion/> -->
    <a-config-provider :theme="{ token: { colorPrimary: '#ec5353' } }">
        <a-row style="margin-top: 5px;">
            <a-col :span="16" :offset="4">
                <!-- <a-breadcrumb>
                    <a-breadcrumb-item><a href="/"><home-outlined /></a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">手机</a></a-breadcrumb-item>
                </a-breadcrumb> -->
                <a-layout>
                    <a-layout-header class="selector-title">
                        <!-- <h3><b>手机</b><em>商品筛选</em></h3>
                        <div class="st-ext">共&nbsp;<span>10135</span>个商品 </div> -->
                    </a-layout-header>
                    <a-layout-content>
                        <!-- <SearchQuerySelector/> -->
                        <a-divider />
                        <!-- <div class="sort-page-box">
                            <a-radio-group v-model:value="sortItem" button-style="solid">
                                <a-radio-button v-for="(item, index) in sortSelector" :key="index"
                                    :value="item.value">{{ item.title }}</a-radio-button>
                            </a-radio-group>
                            <a-pagination v-model:current="topPageCurrent" simple :total="topPageTotal"
                                :defaultPageSize="topPageSize" />
                        </div> -->

                        <a-list :grid="{ column: 5 }" :pagination="pagination" :data-source="listData">
                            <template #renderItem="{ item }">
                                <a-list-item style="padding: 0;margin: 0;">
                                    <a-card hoverable>
                                        <template #cover>
                                            <img :alt="selectDesc" :src="selectPicture" />
                                            <ul class="tab-img-ul">
                                                <li v-for="(i, index) in item.pictureDataList" :key="index"
                                                    @mouseenter="imgMouseover(i.color, i.desc, i.picture)"
                                                    @mouseleave="imgMouseleave(i.color, i.desc, i.picture)">
                                                    <a href="#" :title="i.color">
                                                        <img :alt="i.desc" :src="i.picture">
                                                    </a>
                                                </li>
                                            </ul>
                                        </template>
                                        <a-card-meta>
                                            <template #title>¥{{ item.price }}</template>
                                            <template #description>{{ selectDesc }}</template>
                                        </a-card-meta>
                                    </a-card>
                                </a-list-item>
                            </template>
                        </a-list>
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
import { h, ref, reactive } from 'vue';
let router = useRouter();
//查询条件
let searchData = router.currentRoute.value.params.searchData;

//排序选择
const sortSelector = reactive([
    {
        value: '1',
        title: '综合排序'
    },
    {
        value: '2',
        title: '销量'
    },
    {
        value: '3',
        title: '价格'
    },
    {
        value: '4',
        title: '评论分'
    },
    {
        value: '5',
        title: '上架时间'
    }
]);
const sortItem = ref(sortSelector[0].value);

//分页选择1
const topPageCurrent = ref(1);
const topPageTotal = ref(100);
const topPageSize = ref(10);

const listData = ref([
    {
        pictureDataList: [
            {
                picture: "../src/assets/search/phoneSelect_1.jpg",
                desc: "Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机",
                color: "黑色"
            },
            {
                picture: "../src/assets/search/phoneSelect_2.jpg",
                desc: "Apple iPhone 7 Plus (A1661) 32G 玫瑰金色 移动联通电信4G手机",
                color: "玫瑰金色"
            },
            {
                picture: "../src/assets/search/phoneSelect_3.jpg",
                desc: "Apple iPhone 7 Plus (A1661) 32G 金色 移动联通电信4G手机",
                color: "金色"
            },
            {
                picture: "../src/assets/search/phoneSelect_4.jpg",
                desc: "Apple iPhone 7 Plus (A1661) 32G 红色特别版 移动联通电信4G手机",
                color: "红色特别版"
            },
            {
                picture: "../src/assets/search/phoneSelect_5.jpg",
                desc: "Apple iPhone 7 Plus (A1661) 32G 银色 移动联通电信4G手机",
                color: "银色"
            },
        ],
        price: 1999
    },

]);

for (let index = 0; index < 20; index++) {
    listData.value.push(listData.value[0])
}

const pagination = {
    onChange: page => {
        console.log(page);
    },
    pageSize: 10,
};

const selectDesc = ref("Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机");
const selectPicture = ref('../src/assets/search/phoneSelect_1.jpg');

const imgMouseover = function (color, desc, picture) {
    selectDesc.value = desc;
    selectPicture.value = picture;
}

const imgMouseleave = function (color, desc, picture) {
   
}
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

.sort-page-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.tab-img-ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        margin: 0 3px;

        &:first-child {
            border: 1px solid red;
        }

        img {
            width: 25px;
            height: 25px;
            border-radius: 0;
        }
    }
}
</style>