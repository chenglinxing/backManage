<template>
  <div class="header-index">
    <!--折叠菜单-->
    <div class="collapse">
      <i
        :class="{
          'el-icon-s-unfold': isCollapse,
          'el-icon-s-fold': !isCollapse,
        }"
        type="text"
        @click="handleCollapse"
      ></i>
    </div>

    <!--导航栏--面包屑-->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--头部右边-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    //点击折叠
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("isCollapse", this.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-index {
  height: 50px;
  width: 100%;
  color: #000;
  background-color: #fff;
  display: flex;
  align-items: center;

  .collapse {
    margin: 30px;
    font-size: 20px;
    color: #000;
    text-align: center;
    cursor: pointer;
  }
}
</style>