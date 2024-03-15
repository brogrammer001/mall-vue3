<template>
    <a-config-provider :theme="{ token: { colorPrimary: '#ec5353' } }">
        <a-row :style="headerStyle">
            <a-col :span="16" :offset="4">
                <a-layout-header class="header-title">
                    <div>
                        <a href="/"><img src="src/assets/login/logo.jpg" /></a>
                        <p>找回密码</p>
                    </div>
                    <a href="/">返回首页</a>
                </a-layout-header>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="16" :offset="4">
                <a-layout-content class="content-style">
                    <div class="retrieve-password-title">
                        <h2 class="mtb5">找回密码</h2>
                        <h5>为了保障您的帐户安全，请谨慎填写</h5>
                    </div>
                    <a-steps :current="current" :items="items"></a-steps>
                    <div class="steps-content">
                        <a-form ref="retrievePasswordRef" :model="retrievePasswordForm" name="basic"
                            :label-col="{ span: 8 }" :wrapper-col="{ span: 8 }" autocomplete="off" :rules="rules">
                            <template v-if="items[current].key == 'first'">
                                <a-form-item label="登录账号" name="userName">
                                    <a-input size="large" v-model:value="retrievePasswordForm.userName"
                                        placeholder="登录账号" allow-clear>
                                        <template #prefix>
                                            <UserOutlined />
                                        </template>
                                    </a-input>
                                </a-form-item>
                            </template>

                            <template v-else-if="items[current].key == 'second'">
                                <a-form-item label="邮箱" name="mail">
                                    <a-input size="large" v-model:value="retrievePasswordForm.mail" placeholder="邮箱"
                                        allow-clear>
                                        <template #prefix>
                                            <MailOutlined />
                                        </template>
                                    </a-input>
                                </a-form-item>

                                <a-form-item label="验证码" name="code">
                                    <a-input size="large" v-model:value="retrievePasswordForm.code" placeholder="验证码"
                                        allow-clear style="width: calc(100% - 120px)">
                                        <template #prefix>
                                            <SafetyCertificateOutlined />
                                        </template>
                                    </a-input>
                                    <a-button size="large" type="primary" @click="sendCode()"
                                        class="send-code">发送验证码</a-button>
                                </a-form-item>
                            </template>

                            <template v-else-if="items[current].key == 'thirdly'">
                                <a-form-item label="新密码" name="password">
                                    <a-input-password size="large" v-model:value="retrievePasswordForm.password"
                                        placeholder="设置密码" allow-clear>
                                        <template #prefix>
                                            <LockOutlined />
                                        </template>
                                    </a-input-password>
                                </a-form-item>

                                <a-form-item label="确认密码" name="affirmPassword">
                                    <a-input-password size="large" v-model:value="retrievePasswordForm.affirmPassword"
                                        placeholder="确认密码" allow-clear>
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
                            </template>

                            <template v-else>
                                <a-result status="success" title="恭喜您，修改密码成功！">
                                </a-result>
                            </template>

                            <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
                                <a-button size="large" v-if="current < steps.length - 1 && current != steps.length - 2"
                                    type="primary" @click="next()">下一步</a-button>
                                <a-button size="large" v-if="current == steps.length - 2" type="primary"
                                    @click="next()">完成</a-button>
                                <a-button size="large" v-if="current > 0 && current != steps.length - 1"
                                    style="margin-left: 8px" @click="prev">返回上一步</a-button>
                                <a-button size="large" v-if="current == steps.length - 1" type="primary">
                                    <router-link to="/login">返回登录</router-link>
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-layout-content>
            </a-col>
        </a-row>
    </a-config-provider>

</template>

<script setup>
import Icon, {
    UserOutlined,
    LockOutlined,
    ExpandOutlined,
    MailOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons-vue';
import { message, theme } from 'ant-design-vue';
import { h, ref, reactive } from 'vue';
const headerStyle = {
    paddingInline: 25,
    margin: "0",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd"
};

//标识form表单
const retrievePasswordRef = ref();

//表单数据
const retrievePasswordForm = reactive({
    userName: '',
    password: '',
    affirmPassword: '',
    mail: '',
    code: ''
});

const current = ref(0);

const next = async () => {
    await retrievePasswordRef.value.validateFields();
    current.value++;
};

const prev = () => {
    current.value--;
};

const steps = [
    {
        title: '输入账号',
        key: 'first',
    },
    {
        title: '邮箱验证',
        key: 'second',
    },
    {
        title: '填写新密码',
        key: 'thirdly',
    },
    {
        title: '完成',
        key: 'last',
    },
];

const items = steps.map(item => ({
    key: item.key,
    title: item.title,
}));

const validateUserName = async (_rule, value) => {
    if (value === '') {
        return Promise.reject('请填写要找回密码的账号');
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

const validateMail = async (_rule, value) => {
    if (value === '') {
        return Promise.reject('请填写邮箱');
    } else {
        return Promise.resolve();
    }
};

const validateAuthCode = async (_rule, value) => {
    if (value === '') {
        return Promise.reject('请填写验证码');
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
    console.log(111)
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

/**
 * 发送验证码
 */
function sendCode() {

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

    a {
        color: red;
        font-size: 12px;
    }
}

.content-style {
    margin-top: 5px;
    width: 100%;
    height: 500px;

    .retrieve-password-title {
        text-align: center;
        margin-bottom: 50px;

        h5 {
            font-size: 12px;
            color: #999;
        }
    }

    .steps-content {
        margin-top: 16px;
        text-align: center;

        .send-code {
            width: 110px;
            margin-left: 10px;
        }
    }

    [data-theme='dark'] .steps-content {
        background-color: #2f2f2f;
        border: 1px dashed #404040;
    }
}
</style>