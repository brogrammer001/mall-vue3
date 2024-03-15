<template>
    <a-row style="margin-top: 5px;">
        <a-col :span="16" :offset="4">
            <a-row :gutter="16">
                <a-col :span="4" :offset="1">
                    <div class="header_main_left">
                        <ul>
                            <li v-for="(l, index) in leftSelectTips" :key="index" @mouseenter="categoryMouseover"
                                @mouseleave="categoryMouseleave">
                                <template v-for="(s, index) in l.items" :key="index">
                                    <a>{{ s }}</a>
                                    <template v-if="index != l.items.length - 1">
                                        /
                                    </template>
                                </template>
                            </li>
                        </ul>
                    </div>
                </a-col>
                <a-col :span="14">
                    <a-carousel autoplay>
                        <div v-for="(i, index) in swiperPic" :key="index">
                            <a :href="i.href"><img :src="i.img"></a>
                        </div>
                    </a-carousel>
                    <div class="swiper_pic_other">
                        <a href="#"><img width="350" height="130" src="src/assets/index/section_second_list_right_img.jpg" /></a>
                        <a href="#"><img width="350" height="130" src="src/assets/index/section_second_list_right_img.png" /></a>
                    </div>
                </a-col>
                <a-col :span="4">
                    <div class="header_main_right">
                        <div class="user_info">
                            <div class="user_info_top">
                                <a href="#">
                                    <img width="40" height="40" :src="userLoginFlag ?
            'src/assets/index/login_user.png' : 'src/assets/index/no_login_user.png'"></a>
                                <div class="user_info_show">
                                    <p>Hi, 欢迎来到!</p>
                                    <p>
                                        <a href="/login">登录</a>
                                        <a href="/register">注册</a>
                                    </p>
                                </div>
                            </div>
                            <div class="user_info_hide">
                                <a href="#">新人福利</a>
                                <a href="#">PLUS会员</a>
                            </div>
                        </div>
                        <a-menu v-model:selectedKeys="current" @select="selectData" mode="horizontal" :items="items" />
                        <a-space direction="vertical" class="header_new_connter">
                            <ul>
                                <li v-show="promotionOrAnnouncementShow" v-for="(p, index) in promotionData"
                                    :key="index">
                                    <a>{{ p.content }}</a>
                                </li>
                                <li v-show="!promotionOrAnnouncementShow" v-for="(p, index) in announcementData"
                                    :key="index">
                                    <a>{{ p.content }}</a>
                                </li>
                            </ul>
                        </a-space>
                    </div>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup>
import { h, ref, reactive } from 'vue';

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

const swiperPic = ref([
    {
        img: "src/assets/index/lunbo.png",
        href: ""
    },
    {
        img: "src/assets/index/lunbo1.png",
        href: ""
    },
    {
        img: "src/assets/index/lunbo2.png",
        href: ""
    },
    {
        img: "src/assets/index/lunbo3.png",
        href: ""
    }
])

let userLoginFlag = ref(false);

const current = ref(['promotion']);

const items = ref([
    {
        key: 'promotion',
        label: '促销',
        title: '促销'
    },
    {
        key: 'announcement',
        label: '公告',
        title: '公告'
    }
]);

//促销
const promotionData = ref([
    {
        id: "1",
        content: "关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告"
    }
])

//公告
const announcementData = ref([
    {
        id: "1",
        content: "物流推出配送员统一外呼电话“95056”"
    }
])

let promotionOrAnnouncementShow = ref(true);

function selectData(item) {
    if (item.key == 'announcement') {
        promotionOrAnnouncementShow = false;
    } else {
        promotionOrAnnouncementShow = true;
    }
}
</script>

<style lang="less" scoped>
:deep(.slick-slide) {
    text-align: center;
    height: 340px;
    line-height: 160px;
    overflow: hidden;
}

:deep(.slick-slide h3) {
    color: #fff;
}

.header_main_left {
    height: 480px;
    background-color: #fff;

    li {
        padding-left: 12px;
        height: 32px;
        line-height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        a {
            font-size: 14px;
            color: #333;
            text-decoration: none;

            &:hover {
                color: #C81623;
            }
        }
    }
}

.swiper_pic_other {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;

    a {
        width: 350px;
        height: 130px;
    }
}

.header_main_right {
    height: 480px;
    background-color: #fff;

    .user_info {
        height: 115px;
        border-bottom: 1px solid #e6e6e6;

        .user_info_top {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px 0;

            .user_info_show {
                color: #666;
                font-size: 12px;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-left: 10px;

                p {
                    margin-block: 0;

                    &:nth-child(2) {
                        margin-top: 5px;
                    }

                    a {
                        color: #666;

                        &:nth-child(2) {
                            margin-left: 5px;
                        }

                        &:hover {
                            color: #e01222;
                        }
                    }
                }
            }
        }
    }

    .user_info_hide {
        display: flex;
        justify-content: space-evenly;

        a {
            display: inline-block;
            width: 70px;
            height: 20px;
            border: 2px solid #e01222;
            line-height: 20px;
            font-size: 12px;
            text-align: center;
            color: #e01222;

            &:hover {
                background: #e01222;
                color: #fff;
            }
        }
    }

    .header_new_connter {
        padding: 10px 0 10px 20px;
        height: 310px;
        overflow: auto;

        li {
            line-height: 24px;
            max-width: 160px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            a {
                color: #666;
                font-size: 12px;

                &:hover {
                    color: #F10215;
                }

            }
        }
    }
}
</style>