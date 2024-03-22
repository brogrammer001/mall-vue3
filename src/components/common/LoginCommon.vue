<template>
    <a-row :style="headerStyle">
        <a-col :span="16" :offset="4">
            <a-layout-header class="header-title">
                <div>
                    <a href="/"><img src="../../assets/login/logo.jpg" /></a>
                    <p>欢迎{{ typeName }}</p>
                </div>
                <slot name="hrefSlot"></slot>
            </a-layout-header>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="16" :offset="4">
            <a-layout-content class="content-style">
                <h1>欢迎{{ typeName }}</h1>
                <slot name="contentSlot"></slot>
            </a-layout-content>
        </a-col>
    </a-row>
</template>

<script setup>
const props = defineProps({
    typeName: {
        type: String
    },
})
const headerStyle = {
    paddingInline: 25,
    margin: "0",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd"
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
}
</style>