<template>
  <el-menu
      default-active="this.$store.state.menus.editableTabsValue"
  >
    <el-submenu :index="menu.name" v-for="menu in menuList" :key="menu.name">
      <template slot="title"><i ></i>{{menu.title}}</template>  <!--导航1-->

      <router-link :to="item.path" v-for="item in menu.children" :key="item.name">
        <el-menu-item :index="item.name" @click = "selectMenu(item)">{{item.title}}</el-menu-item>
      </router-link>
    </el-submenu>

<!--    <el-submenu :index="menu.name" v-for="menu in menuList" :key="menu.name">-->
<!--      <template slot="title"><i ></i>{{menu.title}}</template>  &lt;!&ndash;导航1&ndash;&gt;-->

<!--      <router-link :to="item.path" v-for="item in menu.children" :key="item.name">-->
<!--        <el-menu-item :index="item.name" @click = "selectMenu(item)">{{item.title}}</el-menu-item>-->
<!--      </router-link>-->
<!--    </el-submenu>-->


  </el-menu>
</template>

<script>
    import index from "vuex";

    export default {
      name: "SideMenu",
      computed: {
        menuList: {
          get() {
            return this.$store.state.menus.menuList
          }
        }
      },
      data() {
        return {

        }
      },

      methods : {
        logout() {
          //this.$store.commit('setUserInfo', null);

          this.$router.replace('/login');
        },
        selectMenu(item) {
          this.$store.commit("addTabsMenu",item)
        },

      }
    }
</script>

<style scoped>
.el-aside {
  background-color: white;
  color: white;
  text-align: center;
  line-height: 200px;

}
.router-link-active {
  text-decoration: none;
}
a{
  text-decoration: none;
}

.el-menu-item {
  text-decoration: none;
}
</style>