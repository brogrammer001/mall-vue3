<template>
    <!-- <IndexHeaderSelect :isSearch="true" /> -->
    <ShoppingCartHeadSearch />
    <a-config-provider :theme="{ token: { colorPrimary: proxy.$colorPrimary } }">
        <a-row>
            <a-col :span="16" :offset="4">
                <div class="shoppingcart-tips">
                    <InfoCircleOutlined />
                    <span>您还没有登录！登录后购物车的商品将保存到您账号中</span>
                    <a-button type="primary" size="small" @click="toLogin">立即登录</a-button>
                </div>
                <a-tabs activeKey="allproduct">
                    <a-tab-pane key="allproduct" tab="全部商品">
                        <a-table :columns="columns" :scroll="{ y: 400 }" :pagination="false" :data-source="productList"
                            :row-selection="rowSelection" :row-key="(record) => record.shopId">
                            <template #bodyCell="{ column, text, record }">
                                <template v-if="column.dataIndex[1] === 'Name'">
                                    <div class="product-info">
                                        <img width="80" height="80" :alt="record.item.Name"
                                            :src="'https://img11.360buyimg.com/n7/' + record.item.ImgUrl" />
                                        <p v-html="text"></p>

                                        <div class="cell p-props">
                                            <div class="props-txt">
                                                <span class="">{{ record.item.propertyTags.a }}</span>
                                            </div>
                                            <div class="props-txt">
                                                <span class="">{{ record.item.propertyTags.b }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>

                                <template v-if="column.dataIndex[1] === 'Num'">
                                    <a-input-number v-model:value="record.item.Num" :min="1" />
                                </template>

                                <template v-if="column.dataIndex === 'sum'">
                                    ￥{{ (record.item.Price ? record.item.Price : 1) * (record.item.Num ? record.item.Num
        : 1) }}
                                </template>

                                <template v-if="column.dataIndex === 'handle'">
                                    <a-button type="link" @click="deleteProduct(record.shopId)">删除</a-button>
                                </template>
                            </template>
                            <template #footer>
                                <div class="One_ShopFootBuy">
                                    <ul>
                                        <li class="check-check"><a-checkbox @change="selectAll"
                                                v-model:checked="checked">全选</a-checkbox></li>
                                        <li><a-button type="link">删除选中的商品</a-button></li>
                                        <li><a-button type="link">移到我的关注</a-button></li>
                                        <li><a-button type="link">清除下柜商品</a-button></li>
                                    </ul>
                                    <ul>
                                        <li>总价:<span style="color:#e64346;font-weight:bold;font-size:16px;"
                                                class="fnt">￥0.00</span> </li>
                                        <li><a-button type="primary">去结算</a-button></li>
                                    </ul>
                                </div>
                            </template>
                        </a-table>
                    </a-tab-pane>
                </a-tabs>
            </a-col>
        </a-row>
    </a-config-provider>

    <a-modal v-model:open="open" title="删除商品？" :confirm-loading="confirmLoading" @ok="handleOk">
        <p>{{ modalText }}</p>
    </a-modal>
</template>

<script setup>
import {
    InfoCircleOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import IndexHeaderSelect from '../index/IndexHeaderSelect.vue'
import ShoppingCartHeadSearch from '../addshoppingcart/ShoppingCartHeadSearch.vue'
import { h, ref, reactive, onMounted, computed, getCurrentInstance } from 'vue';
import { message } from 'ant-design-vue';

const { proxy } = getCurrentInstance();
const colorPrimary = computed(() => proxy.$colorPrimary);
let router = useRouter();
//查询条件
let productId = router.currentRoute.value.params.productId;
const open = ref(false);
const checked = ref(false);
const confirmLoading = ref(false);
const cartInfo = ref({});
const state = ref({});
const toLogin = () => {
    router.push({
        name: 'login'
    });
}
const { selectedRowKeys } = state.value;
const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectChange,
}
const columns = [
    {
        title: '商品',
        dataIndex: ['item', 'Name'],
        width: 500
    },
    {
        title: '单价',
        dataIndex: ['item', 'PriceShow'],
        sorter: true,
    },
    {
        title: '数量',
        dataIndex: ['item', 'Num'],
        sorter: true,
    },
    {
        title: '小计',
        dataIndex: "sum"
    },
    {
        title: '操作',
        dataIndex: 'handle',
    }
];
const fakeDataUrl = `/src/json/addShoppingCart.json`;

onMounted(() => {
    fetch(fakeDataUrl)
        .then(res => res.json())
        .then(res => {
            cartInfo.value = res;
        });
});

const productList = computed(() => cartInfo.value.product ? cartInfo.value.product : []);

// 全选函数
// 传入选中的行的序号ID 和 选中的行
function handleRowSelectChange(selectedRowKeys, selectedRows) {
    // 在 state中 维护这个状态
    state.value = {
        selectedRowKeys, selectedRows
    }
}

function selectAll() {
    const data = productList.value;
    // selectedRows 为state中存放的选中的表格行
    const selectedRows = state.value.selectedRows;
    
    if (selectedRows && data.length === selectedRows.length) {
        handleRowSelectChange([], []);
    } else {
        //把索引数组里的值由String转换成Number
        const keys = Object.keys(data)
        const index = [];
        const selectedRowArr = [];
        keys.forEach(item => {
            index.push(data[item].shopId)
            selectedRowArr.push(data[item])
        });
        handleRowSelectChange(index, selectedRowArr)
    }
}

function deleteProduct(shop_id) {
    console.log(shop_id)
    showModal();
};

const showModal = () => {
    open.value = true;
};

const modalText = ref('您可以选择移到关注，或删除商品。');

const handleOk = () => {
    confirmLoading.value = true;
    setTimeout(() => {
        open.value = false;
        confirmLoading.value = false;
        message.success('删除成功！');
    }, 2000);
}
</script>

<style lang="less" scoped>
:deep(.ant-tabs-tab) {
    font-size: 18px;
    font-weight: bolder;
}

:deep(.ant-table-footer) {
    padding: 0;
    background-color: #ffffff;
}

:deep(.ant-btn-link) {
    color: v-bind(colorPrimary);
}

.shoppingcart-tips {
    border: 1px solid #edd28b;
    line-height: 46px;
    padding-left: 20px;
    background: #fffdee;

    span {
        color: #ff7700;
        margin-right: 15px;
    }
}

.product-info {
    display: flex;

    p {
        width: 200px;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        margin: 0 0 0 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .p-props {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: default;
        width: 130px;
        min-height: 10px;
        line-height: 20px;
        overflow: hidden;
        padding: 0 0 0 20px;

        .props-txt {
            width: 130px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}

.One_ShopFootBuy {
    border: 1px solid #f0f0f0;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-inline-end: 8px;
        padding-inline-start: 8px;
        text-align: center;

        .check-check {
            padding: 0;
        }

        li {
            padding: 10px;
        }
    }
}
</style>