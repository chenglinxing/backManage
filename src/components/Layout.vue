<template>
  <div class="layout">
    <pe-header />

    <div class="container-menu">
      <pe-aside class="pe-aside" :menus="menus"/>

      <div class="content">
        <el-scrollbar class="main" style="height: 100%">
          <transition name="out" mode="out-in">
            <router-view />
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PeHeader: () => import("./Header"),
    PeAside: () => import("./Aside"),
  },

  data() {
    return {
      isCollapse: false,
      menus: [
        {
          path: "/home",
          menuName: "首页",
          icon: "el-icon-s-home",
        },
        {
          path: "/plugUnit",
          menuName: "插件",
          icon: "el-icon-set-up",
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.container-menu {
  display: flex;
  flex-direction: row;
  .content /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .content {
    margin: 10px 10px 0 0;
    padding: 10px;
    background-color: #fff;
    display: block;
    width: 100%;
    box-sizing: border-box;
    height: calc(100vh - 60px);
    border-radius: 4px;
  }
}
</style>