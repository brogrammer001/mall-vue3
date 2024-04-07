<template>
    <a-radio-group style=" margin-bottom: 10px;" v-model:value="sortItem" button-style="solid">
        <a-radio-button v-for="(item, index) in sortSelector" :key="index" :value="item.value">{{ item.title
            }}</a-radio-button>
    </a-radio-group>
    <a-list :grid="{ column: 5 }" :pagination="pagination" :data-source="listData">
        <template #renderItem="{ item }">
            <a-list-item style="padding: 0;margin: 12px 0 0 12px;">
                <a-card hoverable>
                    <template #cover>
                        <img width="220" height="220" :alt="item.ad_title"
                            :src="'https://img11.360buyimg.com/n7/' + item.image_url" />
                    </template>
                    <a-card-meta>
                        <template #title>
                            <strong><em>￥</em><i>{{ item.pc_price }}</i></strong>
                        </template>
                        <template #description>
                            <div class="description" v-html="item.ad_title"></div>
                            <div class="comment-rate">
                                <span>{{ item.fuzzy_comment_num }}评论</span>
                                <span>{{ item.good_rate ? item.good_rate : 0 }}%好评</span>
                            </div>
                        </template>
                    </a-card-meta>
                </a-card>
            </a-list-item>
        </template>
    </a-list>
</template>

<script setup>
import { h, ref, reactive, onMounted } from 'vue';
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
//商品查询数据地址
const fakeDataUrl = `/src/json/productJson.json`;
const listData = ref([]);
//分页选择1
const topPageCurrent = ref(1);
const topPageTotal = ref(0);
const topPageSize = ref(30);

onMounted(() => {
    fetch(fakeDataUrl)
        .then(res => res.json())
        .then(res => {
            listData.value = res;
            topPageTotal.value = res.length;
        });
});

const pagination = {
    onChange: page => {
        topPageCurrent.value = page;
    },
    pageSize: topPageSize.value,
    current: topPageCurrent.value
};
</script>

<style lang="less" scoped>
strong {
    color: #e4393c;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
}

.description {
    margin: 5px 5px 0 0;
    font-size: 12px;
    color: #999;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    &:hover {
        color: #e4393c;
    }
}

.comment-rate {
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    position: relative;
    font-size: 12px;

    span {
        margin-top: 8px;
        font-weight: 400;
        line-height: 16px;
        margin-right: 8px;
    }
}
</style>