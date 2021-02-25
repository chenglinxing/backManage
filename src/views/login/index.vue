<template>
  <div class="login-index">
    登录页
    <el-button size="small" type="primary" @click="loginIn">登录</el-button>
    <div
      class="row"
      id="pdfDom"
      style="padding-top: 55px; background-color: #fff"
    >
      给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分
    </div>
    <button type="button" class="btn btn-primary" v-on:click="getPdf()">
      导出PDF
    </button>
  </div>
</template>

<script>
/**eslint-disable */
export default {
  data() {
    return {
      routh: "",
    };
  },
  // watch: {
  //   $route(to, from) {
  //     let r = to.path;
  //     this.routh = r;
  //     this.a = from;
  //   },
  // },
  methods: {
    loginIn() {
      this.$router.push("/home");
    },

    handlePrintText() {
      console.log(this);
      // this.$print(this.$refs.print);
    },
  },
  created() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss">
</style>