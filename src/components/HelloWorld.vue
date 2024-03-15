<template>
  <div>
    <renderButton />
  </div>
</template>
 
<script setup>
import { h, ref } from "vue";
const renderButton = {
  render: () => {
    return h(
      // 1. 要渲染的标签名称：第一个参数【必需】
      "button",
      // 2. 渲染标签的属性：第二个参数【可选】
      {
        style: {
          color: "#333",
          border: "1px solid #ccc",
          fontSize: num.value
        },
        class: "",
        id: "",
        onClick: changeNum,
      },
      // 3. 渲染标签的子元素数组：第三个参数【可选】
      [
        // "render函数文本" 文本内容可以直接写入
        h("p", num.value), // h()创建的VNodes
      ]
    );
  },
};
let num = ref(10);  // vue3中需要使用ref或reactive声明变量，否则无法实现双向数据绑定
const changeNum = () => {
  num.value++    // 改变ref定义的变量值需要使用.value , reactive不需要 
}
 
</script>
