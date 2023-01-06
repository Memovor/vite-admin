<script setup lang="ts">
import { reactive } from "vue";
import User from "@/api/user";

const data = reactive({
  username: "",
  password: "",
});

const login = async () => {
  const res = await User.login(data);
  console.log(res);
};
</script>

<template>
  <ElButton @click="login">
    按钮
    <p class="test">测试</p>
  </ElButton>
</template>

<style scoped lang="less">
.test {
  color: @theme-color;
}
</style>
