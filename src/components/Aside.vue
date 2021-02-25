<template>
  <div class="aside">
    <el-menu :default-active="onRoutes" router :collapse="isCollapse">
      <template v-for="(item, index) in menus">
        <!-- <template v-if="item.childMenuList">
              <el-submenu :index="index + 'index'" :key="index">
                <template slot="title">
                  <i :class="item.icon" />
                  <span slot="title">{{ item.menuName }}</span>
                </template>
                <el-menu-item
                  v-for="(item, kIndex) in item.childMenuList"
                  :key="kIndex"
                  :index="item.menuPath"
                >
                </el-menu-item>
              </el-submenu>
            </template> -->

        <template>
          <el-menu-item :index="item.path" :key="index" class="main-menus">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.menuName }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menus: Array,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {
    console.log(this.$router.options.routes);
    this.$bus.$on("isCollapse", (res) => {
    //   console.log(res, "res");
      this.isCollapse = res;
    });
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("./", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.aside {
  background-color: #304156 !important;
  color: #fff;

  /**设置el-menu的默认宽度 */
  .el-menu {
    width: 200px;
  }
  /**设置当菜单折叠起来的宽度 */
  .el-menu--collapse {
    width: 70px;
  }
}
</style>