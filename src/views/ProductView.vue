<template>
  <el-container style="height: 100%; border: 1px solid #eee">

    <h1>您无权访问，请联系管理员</h1>
<!--      <el-main>-->
<!--        <template>-->
<!--          <div class="input-container">-->
<!--            <el-input type="text" style="width: 300px" placeholder="按sku查询" v-model="sku" @keyup.native.enter="load"></el-input>-->
<!--            <el-button type="primary" @click="load">搜索</el-button>-->
<!--          </div>-->
<!--          <div class="input-container">-->
<!--            <el-input type="text" style="width: 300px" placeholder="按姓名查询" v-model="yunying" @keyup.native.enter="load"></el-input>-->
<!--            <el-button type="primary" @click="load">搜索</el-button>-->
<!--          </div>-->
<!--        </template>-->

<!--        <el-table :data="tableData" style="width:100%">-->
<!--          <el-table-column  prop="product" label="产品"></el-table-column>-->
<!--          <el-table-column  prop="sku" label="sku"></el-table-column>-->
<!--          <el-table-column  prop="department" label="部门"></el-table-column>-->
<!--          <el-table-column  prop="dpid" label="店铺"></el-table-column>-->
<!--          <el-table-column  prop="yunying" label="运营"></el-table-column>-->
<!--          <el-table-column  prop="date" label="日期"></el-table-column>-->
<!--        </el-table>-->

<!--        <div  >-->
<!--          <el-pagination-->
<!--              @size-change="handleSizeChange"-->
<!--              @current-change="handleCurrentChange"-->
<!--              :current-page="pageNum"-->
<!--              :page-sizes="[20, 40, 60, 80]"-->
<!--              :page-size="pageSize"-->
<!--              layout="total, sizes, prev, pager, next, jumper"-->
<!--              :total=total>-->
<!--          </el-pagination>-->
<!--        </div>&lt;!&ndash; 分页设置 &ndash;&gt;-->

<!--      </el-main>-->
    </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios, {request} from "axios";
import store from "@/store";
import {mapState} from "vuex";


export default {
  name: 'ProductView' ,
  components: {
  },
  data() {
    return {
      tableData:[],
      pageNum: 1,
      pageSize:20,
      sku:'',
      yunying:'',
    }
  },
  created: function () {
    //请求分页查询所需的数据
    //this.load();
  },
  methods: {
    load() {
      let url =
          "http://localhost:9090/api/productpage?pageNum=" +
          this.pageNum +
          "&pageSize=" +
          this.pageSize +
          "&sku=" +
          this.sku +
          "&yunying=" +
          this.yunying;

      fetch(url)
          .then((res) => res.json())
          .then((res) => {
            //console.log(res);
            this.tableData = res.data;
            this.total = res.total;
          });
    },
    logout() {
      this.$store.commit('setUserInfo', null);
      this.$router.replace('/login');
    },
    changeDataPage(){
      this.$router.push('/data');
    },
    changeUploadPage(){
      this.$router.push('/test')
    },
    handleSizeChange(pageSize) {
      this.pageSize=pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      this.pageNum=pageNum
      this.load()
    },




  },

  computed: {
    ...mapState(['userInfo'])
  }

}
</script>
