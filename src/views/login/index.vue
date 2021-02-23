<template>
  <div class="login-index">
    登录页
    <el-button size="small" type="primary" @click="loginIn">登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginIn() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss">
</style>