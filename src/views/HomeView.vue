<template>
  <el-container>
    <el-aside  width="200px" >
      <SideMenu></SideMenu>
    </el-aside>
    <el-container>
      <el-header>
        <strong>YKC后台(demo)</strong>
        <div class="header-avatar">
          <el-avatar class="avatar1" icon="el-icon-user-solid"></el-avatar>

          <el-dropdown>
              <span class="el-dropdown-link">
                  {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="{name: 'UserCenter'}" >
                <el-dropdown-item >
                  部门: {{userInfo.department}}
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>


      <el-main>
        <TabsMenu></TabsMenu>
       <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>


<script>
import SideMenu from "@/views/inc/SideMenu.vue";
import TabsMenu from "@/views/inc/TabsMenu.vue";
export default {
  name: 'HomeView',
  components : {
    SideMenu,
    TabsMenu

  },
  data() {
    return {
       userInfo: {
         id: '',
         department: '',
         name: '',
         writeaut: '',
       },
       userCenterItem:{
         title: '用户中心',
         name:'UserCenter',
         path: '/userCenter',
         component: 'UserCenter',
         children:[]
       }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.$axios.get('/api/userInfo',{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res=>{
        this.userInfo = res.data.data
        this.$store.commit("SET_USERINFO",res.data.data)
      })
    },
    logout() {
        localStorage.clear()
        sessionStorage.clear()

        this.$store.commit("resetState")
        this.$router.replace('/')

    },
    selectMenu(item) {
      this.$store.commit("addTabsMenu",item)
    },
  },
}
</script>

<style scoped>
.el-container{
  padding: 0;
  margin: 0;
  height: 100%;
}

.header-avatar {
  float:right;
  justify-content: space-around;
  display: flex;
  align-items: center;
}
.el-header, .el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}


.avatar1 {
  margin-right: 5px;
}
.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  //line-height: 160px;
  height: 100%;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>