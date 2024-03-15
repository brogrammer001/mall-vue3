<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <a-layout-header class="header-title">
                <div>
                    <a href="/"><img src="../../assets/login/logo.jpg" /></a>
                    <p>欢迎注册</p>
                </div>
                <span>已有账号？<a href="/login">请登录</a></span>
            </a-layout-header>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="16" :offset="4">
            <a-layout-content class="content-style">
                <h1>欢迎注册</h1>
                <div class="register-con">
                    <a-space :size="20" direction="vertical" class="register-space">
                        <a-form :model="registerForm" name="register" autocomplete="off" @finish="onFinish"
                            :rules="rules" @finishFailed="onFinishFailed">

                            <a-form-item name="userName">
                                <a-input v-model:value="registerForm.userName" placeholder="用户名" allow-clear>
                                    <template #prefix>
                                        <UserOutlined />
                                    </template>
                                </a-input>
                            </a-form-item>

                            <a-form-item name="password">
                                <a-input-password v-model:value="registerForm.password" placeholder="设置密码" allow-clear>
                                    <template #prefix>
                                        <LockOutlined />
                                    </template>
                                </a-input-password>
                            </a-form-item>

                            <a-form-item name="affirmPassword">
                                <a-input-password v-model:value="registerForm.affirmPassword" placeholder="确认密码"
                                    allow-clear>
                                    <template #prefix>
                                        <icon :style="{ color: 'hotpink' }">
                                            <template #component>
                                                <svg t="1710300759463" class="icon" viewBox="0 0 1024 1024"
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478"
                                                    width="14" height="14">
                                                    <path
                                                        d="M241.1 358.5h-54.2v-33.4c0-43.9 8.6-86.5 25.6-126.6 16.4-38.7 39.8-73.5 69.7-103.3 29.8-29.8 64.6-53.3 103.3-69.7C425.5 8.6 468.1 0 512 0c43.9 0 86.5 8.6 126.6 25.6 38.7 16.4 73.5 39.8 103.3 69.7 29.8 29.8 53.3 64.6 69.7 103.3 17 40.1 25.6 82.7 25.6 126.6H783c0-149.4-121.5-270.9-270.9-270.9-149.4 0-270.9 121.5-270.9 270.9v33.3z"
                                                        p-id="2479"></path>
                                                    <path
                                                        d="M810 1024H214c-74.7 0-135.5-60.8-135.5-135.5V455c0-74.7 60.8-135.5 135.5-135.5h596c74.7 0 135.5 60.8 135.5 135.5v433.5c0 74.7-60.8 135.5-135.5 135.5zM214 373.8c-44.8 0-81.3 36.5-81.3 81.3v433.5c0 44.8 36.5 81.3 81.3 81.3h596c44.8 0 81.3-36.5 81.3-81.3V455c0-44.8-36.5-81.3-81.3-81.3H214z"
                                                        p-id="2480"></path>
                                                    <path
                                                        d="M463.1 829.4L303.2 669.5l38.3-38.3 121.6 121.6 219.4-219.5 38.3 38.4z"
                                                        p-id="2481"></path>
                                                </svg>
                                            </template>
                                        </icon>
                                    </template>
                                </a-input-password>
                            </a-form-item>

                            <a-form-item name="phone">
                                <a-input v-model:value="registerForm.phone" placeholder="手机号" allow-clear>
                                    <template #prefix>
                                        <PhoneOutlined />
                                    </template>
                                </a-input>
                            </a-form-item>

                            <a-form-item name="mail">
                                <a-input v-model:value="registerForm.mail" placeholder="邮箱" allow-clear>
                                    <template #prefix>
                                        <MailOutlined />
                                    </template>
                                </a-input>
                            </a-form-item>

                            <a-form-item name="code">
                                <a-input-group compact>
                                    <a-input v-model:value="registerForm.code" placeholder="验证码" allow-clear
                                        style="width: calc(100% - 80px)">
                                        <template #prefix>
                                            <SafetyCertificateOutlined />
                                        </template>
                                    </a-input>
                                    <a-button type="primary" @click="refreshCode()" style="width: 80px;">{{ authCode }}</a-button>
                                </a-input-group>
                            </a-form-item>

                            <a-form-item>
                                <a-button html-type="submit" class="register-button">注册</a-button>
                            </a-form-item>
                        </a-form>
                    </a-space>
                </div>
            </a-layout-content>
        </a-col>
    </a-row>
</template>

<script setup>
import Icon, {
    UserOutlined,
    LockOutlined,
    PhoneOutlined,
    SafetyCertificateOutlined,
    MailOutlined
} from '@ant-design/icons-vue';
import { h, ref, reactive } from 'vue';
const headerStyle = {
    paddingInline: 25,
    margin: "0",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd"
};

const registerForm = reactive({
    userName: '',
    password: '',
    affirmPassword: '',
    phone: '',
    mail: '',
    code: ''
});

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

const validateAffirmPassword = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入确认密码');
  } else {
    return Promise.resolve();
  }
};

const validatePhone = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入手机号');
  } else {
    return Promise.resolve();
  }
};

const validateMail = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入邮箱');
  } else {
    return Promise.resolve();
  }
};

const validateAuthCode = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入验证码');
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
        },
    ],
    affirmPassword: [
        {
            validator: validateAffirmPassword,
            trigger: 'change',
        },
    ],
    phone: [
        {
            validator: validatePhone,
            trigger: 'change',
        },
    ],
    mail: [
        {
            validator: validateMail,
            trigger: 'change',
        },
    ],
    code: [
        {
            validator: validateAuthCode,
            trigger: 'change',
        },
    ],
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

//验证码
let authCode = ref(randomCode());
/**
 * 获取随机code
 */
function randomCode() {
    let str = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
    let code = "";
    for (let i = 0; i < 4; i++) {
        code += str.charAt(Math.floor(Math.random() * 62))
    }
    return code;
}
/**
 * 点击刷新验证码
 */
function refreshCode() {
    authCode.value = randomCode();
}

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

    span {
        font-size: 12px;
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

    .register-con {
        background-color: #fff;
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .register-space {
            width: 70%;

            .register-button {
                width: 100%;
            }
        }

    }
}
</style>