<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <header>
                <a-row>
                    <a-col :span="6">
                        <div v-show="!isSearch" style="position: relative;" @mouseenter="cityMouseover"
                            @mouseleave="cityMouseleave">
                            <a class="city-box menu-item-city" :style="citySelect" @click.prevent>
                                <img width="13" height="13" src="../../assets/index/dz.png" />
                                <span style="vertical-align: middle;">{{ checkedCityItem }}</span>
                            </a>
                            <transition-group appear name="animate__animated animate__bounce"
                                enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                                <div v-show="cityShow" key="1" class="city-select-box">
                                    <div v-for="(i, index) in cityItem" :key="index" class="city-item"
                                        @click="selectCity(i)"
                                        :style="i.select ? 'background: #C81623;color: #fff;' : ''">
                                        {{ i.item }}</div>
                                </div>
                            </transition-group>
                        </div>
                        <div v-show="isSearch" class="is-search-item">
                            <a-menu :style="headerStyleMenu" class="right-menu" mode="horizontal">
                                <a-menu-item :key="'home'">
                                    <router-link to="/">首页</router-link>
                                </a-menu-item>
                                <a-menu-item :key="'city'" style="color: red;">
                                    <div class="menu-item-city">
                                        <img width="13" height="13" src="../../assets/index/dz.png" />
                                        <span>{{ checkedCityItem }}</span>
                                    </div>
                                </a-menu-item>
                            </a-menu>
                        </div>
                    </a-col>
                    <a-col :span="10" :offset="8">
                        <a-menu :style="headerStyleMenu" class="right-menu" mode="horizontal">
                            <a-menu-item :key="'login'">
                                <router-link to="/login">你好，请登录</router-link>
                            </a-menu-item>
                            <a-menu-item :key="'register'" style="color: red;">
                                <router-link to="/register">免费注册</router-link>
                            </a-menu-item>
                            <a-menu-item :key="'order'">
                                <router-link to="/order">我的订单</router-link>
                            </a-menu-item>
                        </a-menu>
                    </a-col>
                </a-row>
            </header>
        </a-col>
    </a-row>
</template>

<script setup>
import 'animate.css';
import { h, ref, reactive } from 'vue';

const headerStyle = {
    textAlign: "center",
    color: "#999",
    height: "32px",
    paddingInline: 25,
    lineHeight: "32px",
    fontSize: "12px",
    margin: "0",
    backgroundColor: "#e3e4e5",
};

const headerStyleMenu = {
    float: "right",
    ...headerStyle
};

let cityShow = ref(false);

const citySelect = reactive({});

const cityItem = reactive([
    {
        item: "北京",
        select: true
    },
    {
        item: "上海",
        select: false
    },
    {
        item: "天津",
        select: false
    },
    {
        item: "重庆",
        select: false
    },
    {
        item: "河北",
        select: false
    },
    {
        item: "山西",
        select: false
    },
    {
        item: "河南",
        select: false
    },
    {
        item: "辽宁",
        select: false
    },
    {
        item: "吉林",
        select: false
    },
    {
        item: "黑龙江",
        select: false
    },
    {
        item: "内蒙古",
        select: false
    },
    {
        item: "江苏",
        select: false
    },
    {
        item: "山东",
        select: false
    },
    {
        item: "安徽",
        select: false
    },
    {
        item: "浙江",
        select: false
    },
    {
        item: "福建",
        select: false
    },
    {
        item: "湖北",
        select: false
    },
    {
        item: "湖南",
        select: false
    },
    {
        item: "广东",
        select: false
    },
    {
        item: "广西",
        select: false
    },
    {
        item: "江西",
        select: false
    },
    {
        item: "四川",
        select: false
    },
    {
        item: "海南",
        select: false
    },
    {
        item: "贵州",
        select: false
    },
    {
        item: "云南",
        select: false
    },
    {
        item: "西藏",
        select: false
    },
    {
        item: "陕西",
        select: false
    },
    {
        item: "甘肃",
        select: false
    },
    {
        item: "青海",
        select: false
    },
    {
        item: "宁夏",
        select: false
    },
    {
        item: "新疆",
        select: false
    },
    {
        item: "港澳",
        select: false
    },
    {
        item: "台湾",
        select: false
    },
    {
        item: "钓鱼岛",
        select: false
    },
    {
        item: "海外",
        select: false
    }
])

let checkedCityItem = ref(cityItem.filter(data => data.select)[0].item);

/**
 * 省份box移入
 */
function cityMouseover() {
    cityShow.value = true;
    citySelect.backgroundColor = "#fff";
}

/**
 * 省份box移出
 */
function cityMouseleave() {
    cityShow.value = false;
    citySelect.backgroundColor = "";
}

/**
 * 省份选择及赋值
 * @param {*} data 
 */
function selectCity(data) {
    cityItem.forEach(ci => {
        ci.select = false;
    })
    data.select = true;
    checkedCityItem.value = data.item
}

const showTypeProps = defineProps({
    isSearch: {
        type: Boolean,
        default: false
    }
});

</script>

<style lang="less" scoped>
.city-box {
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: #999;
    padding: 0 7px;
    cursor: pointer;

    img {
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
        margin-left: 5px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        color: #f00;
    }
}

.is-search-item {
    display: flex;
}

.hover-color:hover {
    color: #f00;
}

.city-select-box {
    position: absolute;
    top: 32px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    list-style: none;
    width: 325px;
    padding: 10px;
    z-index: 999;
    overflow: hidden;
    list-style-type: none;
    background-color: #ffffff;
    box-shadow: 1px 2px 14px rgba(0, 0, 0, 0.1);

    .city-item {
        float: left;
        width: 60px;
        padding: 2px 0;
        line-height: 24px;
        text-align: center;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.04);
            color: #f00;
        }
    }
}

.right-menu {
    li:nth-child(3) {
        padding: 0;
    }

    li:nth-child(2) {
        a {
            color: #f00;
        }
    }

    li {
        float: left;
        padding: 0 10px;
    }

    a {
        color: #999;

    }

    a:hover {
        color: #f00;
    }
}

.menu-item-city {
    display: flex;
    align-items: center;
}
</style>