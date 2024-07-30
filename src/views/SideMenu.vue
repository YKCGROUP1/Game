<template>
  <el-row>
    <el-menu background-color="#FFFFFF"
             text-color="#000000" active-text-color="#000000">
      <el-submenu :index="menu.name" v-for="menu in menuList" :key="menu.name" default-opend style="min-width: 160px" >
        <template slot="title"><i :class="menu.icon"></i>{{menu.title}}</template>  <!--导航1-->
        <template v-if="menu.children">
          <el-menu-item v-for="item in menu.children" :key="item.name" :index="item.name" style="min-width: 140px" @click="handleItemClick(item.name)">
            <i :class="item.icon"></i>{{item.title}}
          </el-menu-item>
        </template>
      </el-submenu>
    </el-menu>

  </el-row>
</template>
<script>
export default {
  data(){
    return{
      menuList:[
        {
          name:"角色",
          title:"角色",
          children:[
            {
              name:"背包",
              title:"背包",
            },
            {
              name:"商店",
              title:"商店",
            },
          ]
        },

        {
          name:"战斗",
          title:"战斗",
          children:[
            {
              name:"区域",
              title:"区域",
              icon:"el-icon-s-home"
            }
          ]
        },
        {
          name:"生活",
          title:"生活",
          children:[
            {
              name:"钓鱼",
              title:"钓鱼",
              icon:"el-icon-s-home"
            },
            {
              name:"烹饪",
              title:"烹饪",
              icon:"el-icon-s-home"
            },
            {
              name:"采矿",
              title:"采矿",
              icon:"el-icon-s-home"
            },
            {
              name:"锻造",
              title:"锻造",
              icon:"el-icon-s-home"
            },
            {
              name:"科技",
              title:"科技",
              icon:"el-icon-s-home"
            },
          ]
        }
      ],


    }
  },
  methods:{
    handleItemClick(name) {
      this.$emit('menu-item-click', name);
    },
  }
}
</script>


<style scoped>

</style>