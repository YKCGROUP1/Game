<template>
  <div class="container">
    <el-row class="scrollable-row">
      <el-row>
        <el-col :span="20">
          <el-row>
            <el-col :span="10">
              <el-row>
                <p>落日村 Lv 1</p>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="fixed-row">
      <div style="height: 300px">
        <el-divider></el-divider>
        <el-row>
          <el-col :span="10">
            <span>生命:{{this.currentXp}}/{{this.maxXp}}<el-progress :percentage="xpPercentage"></el-progress></span>
          </el-col>
          <el-col :span="10">

          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script>
    export default {
      data(){
        return{
          skillBox:['普通攻击','横扫'],//当前配备技能组
          currentXp:10,//当前血量
          maxXp:100,//最大血量
          currentFP:100,//当前能量
          maxFp:100,//最大能量
        }
      },
      computed:{
        xpPercentage(){
          return this.currentXp/this.maxXp *100
        }
      },
      methods:{

      }
    }
</script>
<style>
.container {
  height: 100vh; /* 设置容器高度为视窗高度 */
}

.scrollable-row {
  max-height: calc(100vh - 40px); /* 设置最大高度，留出底部固定行的空间 */

}

.fixed-row {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
}
</style>