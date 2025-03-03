<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <header>
                <a-row>
                    <a-col :span="4">
                        <img width="190" height="100" src="../../assets/login/logo.jpg"/>
                    </a-col>
                    <a-col :span="16">
                        <a-row class="search-box">
                            <a-col :span="16" :offset="2">
                                <div class="search-input-box">
                                    <input type="text" v-model="searchData" class="search-input" />
                                    <button class="button" aria-label="搜索" @click="search">
                                        <svg t="1705805736272" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="4444" width="20" height="20">
                                            <path
                                                d="M469.344 789.344c176.736 0 320-143.264 320-320s-143.264-320-320-320-320 143.264-320 320 143.264 320 320 320z m296.864-44.032l136.704 139.936a42.656 42.656 0 0 1-61.056 59.616l-140.096-143.424a403.488 403.488 0 0 1-232.416 73.216C245.44 874.656 64 693.216 64 469.344S245.472 64 469.344 64c223.84 0 405.312 181.472 405.312 405.344 0 106.592-41.152 203.584-108.448 275.968z"
                                                fill="#ffffff" p-id="4445"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="search-tips1">
                                    <ul>
                                        <li v-for="(t, index) in searchTips" :key="index">
                                            <a :href="t.href" :title="t.label">{{ t.label }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </a-col>
                            <a-col :span="6">
                                <div class="settleup">
                                    <a-dropdown placement="bottomRight">
                                        <div class="cw-icon">
                                            <span class="iconfont">
                                                <a-badge count="5" show-zero :offset="[2, 4]">
                                                    <svg t="1705807986522" class="icon" viewBox="0 0 1028 1024"
                                                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5546"
                                                        width="20" height="20">
                                                        <path
                                                            d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z"
                                                            p-id="5547" fill="#e1251b"></path>
                                                    </svg>
                                                </a-badge>
                                            </span>
                                            <a target="_blank" href="">我的购物车</a>
                                        </div>
                                        <template #overlay>
                                            <a-menu>
                                                <a-menu-item>
                                                    <svg t="1705814304526" class="icon empty-shopping-cart-icon"
                                                        viewBox="0 0 1149 1024" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg" p-id="6865" width="30"
                                                        height="30">
                                                        <path
                                                            d="M574.877193 1024V561.22386l452.715789-188.272281v474.273684z"
                                                            fill="#DFDFDF" p-id="6866"></path>
                                                        <path
                                                            d="M121.442807 847.225263L574.877193 1024V561.22386L115.694035 372.951579z"
                                                            fill="#C9C9C9" p-id="6867"></path>
                                                        <path
                                                            d="M574.877193 555.475088l-118.568421 242.885614L0 622.304561l115.694035-249.352982z"
                                                            fill="#E5E5E5" p-id="6868"></path>
                                                        <path
                                                            d="M574.877193 196.176842L115.694035 372.951579 574.877193 561.22386z"
                                                            fill="#D5D5D5" p-id="6869"></path>
                                                        <path
                                                            d="M1027.592982 372.951579L574.877193 196.176842v365.047018z"
                                                            fill="#C9C9C9" p-id="6870"></path>
                                                        <path
                                                            d="M574.877193 561.22386l121.442807 237.136842L1149.754386 615.837193l-122.161404-242.885614z"
                                                            fill="#EBEBEB" p-id="6871"></path>
                                                        <path
                                                            d="M710.69193 240.011228a5.748772 5.748772 0 0 1-4.311579-5.748772V84.794386A85.512982 85.512982 0 0 1 790.45614 0h249.352983a84.794386 84.794386 0 0 1 84.794386 84.794386v23.713684a84.794386 84.794386 0 0 1-84.794386 84.794386H790.45614l-71.859649 45.271579zM790.45614 14.37193a71.859649 71.859649 0 0 0-71.859649 71.859649v133.658947l67.54807-40.241403h252.945965a71.859649 71.859649 0 0 0 71.859649-71.859649v-22.995088a71.859649 71.859649 0 0 0-71.859649-71.859649z"
                                                            fill="#DFDFDF" p-id="6872"></path>
                                                        <path
                                                            d="M819.918596 99.166316m-17.964912 0a17.964912 17.964912 0 1 0 35.929825 0 17.964912 17.964912 0 1 0-35.929825 0Z"
                                                            fill="#C9C9C9" p-id="6873"></path>
                                                        <path
                                                            d="M913.33614 99.166316m-17.964912 0a17.964912 17.964912 0 1 0 35.929825 0 17.964912 17.964912 0 1 0-35.929825 0Z"
                                                            fill="#C9C9C9" p-id="6874"></path>
                                                        <path
                                                            d="M1006.753684 99.166316m-17.964912 0a17.964912 17.964912 0 1 0 35.929824 0 17.964912 17.964912 0 1 0-35.929824 0Z"
                                                            fill="#C9C9C9" p-id="6875"></path>
                                                    </svg>
                                                    购物车中还没有商品，赶紧选购吧！
                                                </a-menu-item>
                                            </a-menu>
                                        </template>
                                    </a-dropdown>
                                </div>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="isSearch ? 18 : 16" :offset="isSearch ? 3 : 4">
                        <nav :class="isSearch ? 'search-nav' : 'no-search-nav' ">
                            <div v-show="isSearch" class="all-class-goods" @click.prevent
                                @mouseenter="allClassGoodsMouseover" @mouseleave="allClassGoodsMouseleave">
                                全部商品分类
                                <transition-group appear name="animate__animated animate__bounce"
                                    enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                                    <div v-show="allClassGoodsShow" key="1" class="all-class-goods-box">
                                        <ul>
                                            <li v-for="(l, index) in leftSelectTips" :key="index">
                                                <template v-for="(s, index) in l.items" :key="index">
                                                    <a :href="`/search/${s}`">{{ s }}</a>
                                                    <template v-if="index != l.items.length - 1">
                                                        &nbsp;/&nbsp;
                                                    </template>
                                                </template>
                                            </li>
                                        </ul>
                                    </div>
                                </transition-group>
                            </div>
                            <ul class="nav-ul">
                                <li v-for="(n, index) in searchTipsNavList" :key="index">
                                    <template v-if="n instanceof Object">
                                        <a :href="n.href">{{ n.label }}</a>
                                    </template>

                                    <template v-else>
                                        |
                                    </template>
                                </li>
                            </ul>
                        </nav>
                    </a-col>
                </a-row>
            </header>
        </a-col>
    </a-row>
</template>

<script setup>
import 'animate.css';
import { h, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const headerStyle = {
    textAlign: "center",
    color: "#999",
    height: "140px",
    paddingInline: 25,
    fontSize: "12px",
    margin: "0",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd"
};

const showTypeProps = defineProps({
    isSearch: {
        type: Boolean,
        default: false
    }
});

let searchData = ref("");

const search = () => {
    router.push({
        name: 'search',
        params: {
            searchData: searchData.value
        }
    });
}

const searchTips = ref([
    {
        href: "",
        label: "满999减300"
    },
    {
        href: "",
        label: "农用物资"
    },
    {
        href: "",
        label: "保暖特惠"
    },
    {
        href: "",
        label: "洗衣机节"
    },
    {
        href: "",
        label: "七度空间卫生巾"
    },
    {
        href: "",
        label: "自动波箱油"
    },
    {
        href: "",
        label: "超市"
    }
])

const searchTipsNavList = ref([
    {
        href: "",
        label: "秒杀"
    },
    {
        href: "",
        label: "优惠券"
    },
    {
        href: "",
        label: "闪购"
    },
    {
        href: "",
        label: "拍卖"
    },
    {
        href: "",
        label: "服饰"
    },
    {
        href: "",
        label: "超市"
    },
    {
        href: "",
        label: "生鲜"
    },
    {
        href: "",
        label: "全球购"
    },
    {
        href: "",
        label: "金融"
    },
])

for (let index = 1; index < (searchTipsNavList.value.length / 4); index++) {
    searchTipsNavList.value.splice(index * 4 + (index - 1), 0, '|')
}

const leftSelectTips = ref([
    {
        items: ['家用电器']
    },
    {
        items: ['手机', '运营商', '数码']
    },
    {
        items: ['电脑', '办公']
    },
    {
        items: ['家居', '家具', '家装', '厨具']
    },
    {
        items: ['男装', '女装', '童装', '内衣']
    },
    {
        items: ['美妆个护', '宠物']
    },
    {
        items: ['鞋', '箱包', '钟表', '珠宝']
    },
    {
        items: ['运动', '户外']
    },
    {
        items: ['汽车', '汽车用品']
    },
    {
        items: ['母婴', '玩具乐器']
    },
    {
        items: ['食品', '酒类', '生鲜', '特产']
    },
    {
        items: ['礼品鲜花', '农资绿植']
    },
    {
        items: ['医药保健', '计生情趣']
    },
    {
        items: ['图书', '音像', '电子书']
    },
    {
        items: ['彩票', '酒店', '旅游', '生活']
    }
])

let allClassGoodsShow = ref(false);
/**
 * 移入
 */
function allClassGoodsMouseover() {
    allClassGoodsShow.value = true;
}

/**
 * 移出
 */
function allClassGoodsMouseleave() {
    allClassGoodsShow.value = false;
}
</script>

<style lang="less" scoped>
header {
    .ariatheme {
        display: block;
        height: 120px;
        margin: 10px 0;
    }

    .search-box {
        margin: auto;
        margin-top: 38px;

        .search-input-box {
            position: relative;
            width: 100%;
            height: 32px;
            float: left;
            border: 2px solid #e2231a;
            background: #fff;
            border-right: 0;

            .search-input {
                left: 0;
                padding: 2px 2px 2px 17px;
                width: 82%;
                height: 26px;
                border: 1px solid transparent;
                line-height: 26px;
                font-size: 12px;
                background: transparent;
                color: #333;
                position: absolute;
                top: 0;
                outline: none;
            }

            .button {
                position: absolute;
                border-radius: 0;
                right: 0;
                width: 58px;
                height: 32px;
                line-height: 32px;
                border: none;
                background-color: #e1251b;
                font-size: 20px;
                font-weight: 700;
                color: #fff;
                -webkit-transition: background .2s ease;
                transition: background .2s ease;

                &:hover {
                    background-color: #c81623;
                }
            }
        }

        .search-tips1 {
            width: 100%;
            overflow: hidden;
            height: 20px;

            ul {
                display: flex;

                li {
                    float: left;
                    margin-right: 10px;
                    width: 65px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    a {
                        color: #666;
                        font-size: 12px;
                        display: contents;

                        &:hover {
                            color: #c81623;
                        }
                    }

                }

                li:first-child {
                    a {
                        color: red;
                    }
                }
            }

        }
    }

}

.settleup {
    margin-left: 50px;

    .cw-icon {
        width: 130px;
        height: 34px;
        background-color: #fff;
        text-align: center;
        line-height: 34px;
        border-color: #eee;
        overflow: hidden;
        position: relative;
        z-index: 1;
        float: left;
        border: 1px solid #e3e4e5;

        .iconfont {
            margin-right: 13px;
            font-size: 16px;
            vertical-align: sub;
        }

        a {
            color: #e1251b;
            -webkit-transition: color .2s ease;
            transition: color .2s ease;
        }
    }
}

.empty-shopping-cart-icon {
    vertical-align: bottom;
}

.search-nav{
    justify-content: space-between;
    .nav-ul {
        width: calc(100% - 200px);
    }
}

.no-search-nav{
    justify-content: space-around;
    .nav-ul {
        width: 100%;
    }
}

nav {
    display: flex;
    .nav-ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            a {
                position: relative;
                display: block;
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                font-weight: 700;
                color: #555;
                text-decoration: none;

                &:hover {
                    color: #c81623;
                }
            }
        }
    }

    .all-class-goods {
        font-size: 16px;
        width: 180px;
        display: block;
        background: #f30213;
        color: #fff;
        text-align: center;
        cursor: pointer;
        height: 38px;
        line-height: 38px;
        font-weight: 700;
        margin-right: 20px;

        .all-class-goods-box {
            background-color: #ffffff;
            box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
            width: 180px;
            position: relative;
            z-index: 999;

            li {
                padding: 0 10px;
                height: 32px;
                line-height: 32px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #333;
                text-align: left;
                font-weight: normal;

                a {
                    font-size: 14px;
                    color: #333;

                    &:hover {
                        color: #C81623;
                    }
                }
            }
        }
    }
}
</style>