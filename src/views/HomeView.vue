<template>
  <el-container>
    <el-aside  width="160px" style="background-color: #ffffff" ref="asideRef">
      <SideMenu  @menu-item-click="handleMenuItemClick"></SideMenu>
    </el-aside>
    <el-main>
      <el-row style="margin-top: 3%">
        <el-col :span="20">
          <component :is="currentComponent"></component>
        </el-col>
        <el-col :span="4">
          日志模块
        </el-col>
      </el-row>

    </el-main>
  </el-container>

</template>


<script>
import SideMenu from "@/views/SideMenu.vue";
import FishPart from "@/views/Fish/FishPart.vue"
import BagPart from "@/views/Bag/BagPart.vue";
import BattlePart from "@/views/Battle/BattlePart.vue";
export default {
  name: 'HomeView',
  computed: {

  },
  components : {
    SideMenu,
    FishPart,
    BagPart,
    BattlePart,

  },
  data() {
    return {
      currentComponent: '', // 当前要渲染的组件名
    }
  },
  methods: {
    //点击渲染组件函数
    handleMenuItemClick(name) {
      if (name === '钓鱼') {
        this.currentComponent = 'FishPart';
      } else if (name === '背包') {
        this.currentComponent = 'BagPart';
      }else if (name ==='区域'){
        this.currentComponent = 'BattlePart'
      }
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
.header-container{
  background-color: #ffffff;
  height: 55px;
  color: #000000;
}
.resize1{
  float: left;
}
.custom-icon::before {
  content: "\e7bb"; /* 修改为您想要的图标代码 */
  font-size: 24px; /* 修改为您想要的图标大小 */
  margin-right: 10px;
}
.el-aside {
  transition: width 0.3s ease;
}
</style>