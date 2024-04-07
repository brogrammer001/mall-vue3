<template>
    <a-form :model="formData" :label-col="labelCol">
        <a-form-item v-for="(d, index) in visibleSelectorData" :key="index" :label="d.selectorTitle" labelAlign="left">
            <a-checkbox-group v-model:value="formData[d.selectorName]" v-show="!d.multipleChoice">
                <template v-if="d.selectorType == '1'">
                    <a-checkbox v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i.value" :name="i.value"
                        class="selector-img-box"><img :src="i.img" /></a-checkbox>
                </template>
                <template v-else>
                    <a-checkbox v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i" :name="i">{{ i
                        }}</a-checkbox>
                </template>
            </a-checkbox-group>
            <a-radio-group v-model:value="formData[d.selectorName]" v-show="d.multipleChoice">
                <template v-if="d.selectorType == '1'">
                    <a-radio-button v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i.value"
                        :name="i.value" class="selector-img-box"><img :src="i.img" /></a-radio-button>
                </template>
                <template v-else>
                    <a-radio-button v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i" :name="i">{{ i
                        }}</a-radio-button>
                </template>
            </a-radio-group>
            <a-switch class="selector-switch" v-model:checked="d.multipleChoice" checked-children="单选"
                un-checked-children="多选" />
        </a-form-item>
        <template v-if="invisibleSelectorData.length > 0">
            <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn"
                leave-active-class="animate__fadeOut">
                <div v-show="moreSelector">
                    <a-form-item v-for="(d, index) in invisibleSelectorData" :key="index" :label="d.selectorTitle" labelAlign="left">
                        <a-checkbox-group v-model:value="formData[d.selectorName]" v-show="!d.multipleChoice">
                            <template v-if="d.selectorType == '1'">
                                <a-checkbox v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i.value"
                                    :name="i.value" class="selector-img-box"><img :src="i.img" /></a-checkbox>
                            </template>
                            <template v-else>
                                <a-checkbox v-for="(i, iindex) in d.selectorItems" 
                                :key="iindex" :value="i" :name="i">{{ i }}</a-checkbox>
                            </template>
                        </a-checkbox-group>
                        <a-radio-group v-model:value="formData[d.selectorName]" v-show="d.multipleChoice">
                            <template v-if="d.selectorType == '1'">
                                <a-radio-button v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i.value"
                                    :name="i.value" class="selector-img-box"><img :src="i.img" /></a-radio-button>
                            </template>
                            <template v-else>
                                <a-radio-button v-for="(i, iindex) in d.selectorItems" :key="iindex" :value="i"
                                    :name="i">{{ i }}</a-radio-button>
                            </template>
                        </a-radio-group>
                        <a-switch class="selector-switch" v-model:checked="d.multipleChoice" checked-children="单选"
                            un-checked-children="多选" />
                    </a-form-item>
                </div>
            </transition-group>
            <a-divider><a-button type="dashed" @click="moreSelector = !moreSelector">{{ moreSelector ? '收起' : '更多选项'
                    }}</a-button></a-divider>
        </template>
    </a-form>
</template>

<script setup>
import 'animate.css';
import { h, ref, reactive } from 'vue';

const formData = reactive({
    type: []
});

let moreSelector = ref(false);

const labelCol = {
    style: {
        width: '100px',
    },
};

const selectorData = reactive([
    {
        multipleChoice: false,
        selectorName: "brand",
        selectorTitle: "品牌",
        selectorType: '1',
        selectorItems: [
            {
                img: '../src/assets/search/apple.jpg',
                value: '苹果'
            },
            {
                img: '../src/assets/search/cz.jpg',
                value: '锤子'
            },
            {
                img: '../src/assets/search/hw.jpg',
                value: '华为'
            },
            {
                img: '../src/assets/search/kp.jpg',
                value: '酷派'
            },
            {
                img: '../src/assets/search/mz.jpg',
                value: '魅族'
            },
            {
                img: '../src/assets/search/njy.jpg',
                value: '诺基亚'
            },
            {
                img: '../src/assets/search/oneplus.jpg',
                value: '一加'
            },
            {
                img: '../src/assets/search/oppo.jpg',
                value: 'oppo'
            },
            {
                img: '../src/assets/search/sx.jpg',
                value: '三星'
            },
            {
                img: '../src/assets/search/vivo.jpg',
                value: 'vivo'
            },
            {
                img: '../src/assets/search/xm.jpg',
                value: '小米'
            },
            {
                img: '../src/assets/search/zx.jpg',
                value: '中兴'
            }
        ]
    },
    {
        multipleChoice: false,
        selectorName: "price",
        selectorTitle: "价格",
        selectorType: '0',
        selectorItems: ['0-499', '500-999', '1000-1699', '1700-2799', '2800-4499', '4500-11999', '12000以上']
    },
    {
        multipleChoice: false,
        selectorName: "screenSize",
        selectorTitle: "屏幕尺寸",
        selectorType: '0',
        selectorItems: ['5.56英寸及以上', '5.5-5.1英寸', '5.0-4.6英寸', '4.5-3.1英寸', '3.0英寸以下']
    },
    {
        multipleChoice: false,
        selectorName: "color",
        selectorTitle: "机身颜色",
        selectorType: '0',
        selectorItems: ['白色', '黑色', '灰色', '金色', '银色', '红色', '蓝色', '粉色', '黄的', '蓝色']
    },
    {
        multipleChoice: false,
        selectorName: "memory",
        selectorTitle: "机身内存",
        selectorType: '0',
        selectorItems: ['8G', '16G', '32G', '64G', '128G', '256G', '512G', '1TB']
    },
    {
        multipleChoice: false,
        selectorName: "category",
        selectorTitle: "种类",
        selectorType: '0',
        selectorItems: ['以旧换新', '功能机', '儿童手机', '全面屏', '翻盖', '商务手机', '曲面屏']
    },
    {
        multipleChoice: false,
        selectorName: "system",
        selectorTitle: "系统",
        selectorType: '0',
        selectorItems: ['安卓', 'IOS']
    }
]);

let i = 0;
const visibleSelectorData = reactive([]);
const invisibleSelectorData = reactive([]);
selectorData.forEach(item => {
    if (i < 3) {
        visibleSelectorData.push(item);
    } else {
        invisibleSelectorData.push(item);
    }
    i++;
})
</script>

<style lang="less" scoped>
.selector-img-box {
    width: 120px;
    height: 40px;
    margin: 5px 5px 5px 0;
}

.selector-switch {
    border-radius: 6px;
    margin-left: 10px;
}
</style>