<template>
  <el-row >

    <el-row>
      <el-col :span="2">
          当前等级: {{ this.currentLevel }}/99
      </el-col>
      <el-col style="margin-left: 3%" :span="20">
        <el-progress :percentage="expPercentage" status="success" :text-inside="true" :stroke-width="18"></el-progress>
        <p>当前经验值: {{ currentExp }} &nbsp;&nbsp;升级所需经验值: {{ upgradeExp }}</p>

      </el-col>
    </el-row>


    <el-row>
      <el-col :span="20">
        <el-row>
          <el-col :span="10">
            <el-row>
              <p>浅水滩 Lv 1</p>
              <p style="display: flex;justify-content: flex-start;">当前地图可掉落:</p>
              <ul class="item-list">
                <li v-for="item in items1" :key="item">{{ item }}</li>
              </ul>
              <el-button @click="startFishing('浅水滩')">开始钓鱼</el-button>
              <el-button @click="stopFishing">停止钓鱼</el-button>
              <el-progress v-if="currentFishItem === '浅水滩'" :percentage="progress"></el-progress>
            </el-row>
          </el-col>
          <el-col style="margin-left: 15%" :span="10">
            <el-row v-if="currentLevel>=15">
              <p>流沙河 Lv 10</p>
              <p style="display: flex;justify-content: flex-start;">当前地图可掉落:</p>
              <ul class="item-list">
                <li v-for="item in items2" :key="item">{{ item }}</li>
              </ul>
              <el-button @click="startFishing('流沙河')">开始钓鱼</el-button>
              <el-button @click="stopFishing">停止钓鱼</el-button>
              <el-progress v-if="currentFishItem === '流沙河'" :percentage="progress"></el-progress>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>

    </el-row>




  </el-row>
</template>
<script>
export default {
  computed: {
    expPercentage() {
      return (this.currentExp / this.upgradeExp) * 100; // 计算经验值百分比
    },
  },
  data(){
    return {
      currentLevel:100,
      currentExp: 0, // 当前经验值
      upgradeExp: 100, // 升级所需经验值
      backpack: [],//背包
      fishingTimer: null,//钓鱼计时器
      progressTimer:null,//钓鱼进度条计时器
      items1: ['贝壳', '虾米', '龙虾'],//浅水滩物品集
      items2: ['黑口鱼', '小鳄鱼', '火鳞鳝鱼'],//流沙河物品集
      items3: ['变异鱼', '鼠尾鱼', '洛克湖狂鱼'],//洛克湖物品集
      items4: ['彩鳍鱼', '鲶鱼', '银雪鲑鱼'],//珊瑚海物品集
      items5: ['红腮鱼', '石鳞鳕鱼', '剑鱼'],//遗忘之海物品集
      progress: 0,//钓鱼进度条
      currentFishItem:null,//标识当前钓鱼进度条是否显示
    }
  },
  methods: {
    addItemToBackpack(item) {
      const existingItem = this.$store.state.bagpack.backpack.find(i => i.name === item);
      if (existingItem) {
        existingItem.num++;
      } else {
        this.$store.commit('addItemToBackpack', { name: item, num: 1 });
      }
    },
    startFishing(type) {
      clearInterval(this.fishingTimer);
      clearInterval(this.progressTimer);
      this.currentFishItem = type
      this.progress = 0;
      this.fishingTimer = setInterval(() => {
        if(type === '浅水滩'){
          const randomItem = this.items1[Math.floor(Math.random() * this.items1.length)];
          this.addItemToBackpack(randomItem);
        }
        else if(type === '流沙河'){
          const randomItem = this.items2[Math.floor(Math.random() * this.items2.length)];
          this.addItemToBackpack(randomItem);
        }


      }, 4000); // 每4秒执行一次
      this.progressTimer = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 25;
        } else {
          this.progress = 0;
        }
      }, 1000); // 每秒增加25%
    },
    stopFishing() {
      clearInterval(this.fishingTimer);
      clearInterval(this.progressTimer);
      this.progress = 0;
    },


  },
  beforeDestroy() {
    this.stopFishing(); // 清除计时器
  },
}
</script>



<style scoped>
.item-list {
  width: 100%; /* 确保列表项占据整个宽度 */
  padding-left: 0;
  list-style-type: none;

}

.item-list li {
  margin-right: 10px; /* 设置列表项之间的间距 */
}
</style>