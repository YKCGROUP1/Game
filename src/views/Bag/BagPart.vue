<template>
  <el-row>
    <el-col :span="24">
      <el-row>
        <p>背包内容:</p>
        <ul>
          <li v-for="(item, index) in backpack" :key="index">{{ item.name }} - 数量: {{ item.num }}</li>
        </ul>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  computed: {
    backpack() {
      return this.$store.state.bagpack.backpack;
    },
  },
};
</script>