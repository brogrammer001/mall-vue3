<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <a-layout-header class="header-title">
                <div>
                    <a href="/"><img src="../../assets/login/logo.jpg" /></a>
                    <p>欢迎登录</p>
                </div>
                <a href="/">返回首页</a>
            </a-layout-header>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="16" :offset="4">
            <a-layout-content class="content-style">
                <h1>欢迎登录</h1>
                <div class="login-con">
                    <a-tabs v-model:activeKey="activeKey" class="login-space">
                        <a-tab-pane key="scanCodeLogin">
                            <template #tab>
                                <span>
                                    <ExpandOutlined />
                                    扫码登录
                                </span>
                            </template>
                            <a-space :size="23" direction="vertical" class="login-space-switch">
                                <a-qrcode style="margin: auto;" error-level="M"
                                    value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                <a-descriptions class="login-space-switch-desc" title="扫描二维码"></a-descriptions>
                            </a-space>
                        </a-tab-pane>
                        <a-tab-pane key="accountLogin">
                            <template #tab>
                                <span>
                                    <UserOutlined />
                                    账号登录
                                </span>
                            </template>
                            <a-space :size="20" direction="vertical" class="login-space-switch">
                                <a-form :model="loginForm" name="register" autocomplete="off" @finish="onFinish"
                                    :rules="rules" @finishFailed="onFinishFailed">

                                    <a-form-item name="userName">
                                        <a-input v-model:value="loginForm.userName" placeholder="用户名" style="margin-top: 27px;">
                                            <template #prefix>
                                                <UserOutlined />
                                            </template>
                                        </a-input>
                                    </a-form-item>

                                    <a-form-item name="password">
                                        <a-input-password v-model:value="loginForm.password" placeholder="密码">
                                            <template #prefix>
                                                <LockOutlined />
                                            </template>
                                        </a-input-password>
                                    </a-form-item>

                                    <div class="forget-password">
                                        <a href="/forgetPassword">忘记密码</a>
                                    </div>

                                    <a-form-item>
                                        <a-button html-type="submit" class="login-button">登录</a-button>
                                    </a-form-item>
                                </a-form>
                            </a-space>
                        </a-tab-pane>
                    </a-tabs>
                    <a-space class="other-login-box">
                        <template #split>
                            <a-divider type="vertical" />
                        </template>
                        <a-typography-link class="other-login"><img width="18" height="18"
                                src="../../assets/login/github.png" />&nbsp;Github</a-typography-link>
                        <a-typography-link class="other-login"><img width="18" height="18"
                                src="../../assets/login/gitee.png" />&nbsp;Gitee</a-typography-link>
                        <a-typography-link class="other-login" style="color: red;font-weight: bold;">
                            <router-link to="/register">立即注册</router-link>
                        </a-typography-link>
                    </a-space>
                </div>
            </a-layout-content>
        </a-col>
    </a-row>
</template>

<script setup>
import {
    UserOutlined,
    LockOutlined,
    ExpandOutlined
} from '@ant-design/icons-vue';
import { h, ref, reactive } from 'vue';
const headerStyle = {
    paddingInline: 25,
    margin: "0",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd"
};

const loginForm = reactive({
    userName: '',
    password: ''
});


const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const validateUserName = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入用户名');
  } else {
    return Promise.resolve();
  }
};

const validatePassword = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入密码');
  } else {
    return Promise.resolve();
  }
};

const rules = {
    userName: [
        {
            validator: validateUserName,
            trigger: 'change',
        }
    ],
    password: [
        {
            validator: validatePassword,
            trigger: 'change',
        }
    ]
};


</script>

<style lang="less" scoped>
.header-title {
    font-weight: 400;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }

    p {
        margin-left: 20px;
    }

    a {
        color: red;
        font-size: 12px;
    }
}

.content-style {
    margin-top: 5px;
    background: rgba(233, 56, 84, 0.9);
    width: 100%;
    height: 500px;
    color: #fff;
    box-shadow: -15px 15px 15px rgba(193, 193, 196, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin-left: 50px;
    }

    .login-con {
        background-color: #fff;
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .login-space {
            width: 70%;

            .login-space-switch {
                width: 100%;

                .login-space-switch-desc {
                    text-align: center;
                }

                .forget-password {
                    margin-bottom: 10px;
                    text-align: end;
                }

                .login-button {
                    width: 100%;
                }
            }
        }

        .other-login-box {
            margin-top: 50px;

            .other-login {
                display: flex;
                align-items: center;
                font-size: 12px;
                color: dimgray;
            }
        }
    }
}
</style>