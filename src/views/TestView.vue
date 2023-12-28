<template>
  <el-container style="height: 100%; border: 1px solid #eee">
      <el-main>
        <!--上传按钮大全-->
        <div class="button-container">
          <el-button class = "button2" @click="openDateReport">上传日期范围报告</el-button>
          <el-button class = "button2" @click="openAdReport">上传广告搜索词报告</el-button>
          <el-button class = "button2" @click="openProductAd">上传商品推广报告</el-button>
          <el-button class = "button2" @click="openBoxReport">上传月度仓储费报告</el-button>
          <el-button class = "button2" @click="openBox2Report">上传长期仓储费报告</el-button>
          <el-button class = "button2" @click="openYewuReport">上传业务报告</el-button>
          <el-button class = "button2" @click="openHuanhuoReport">上传买家换货报告</el-button>
          <el-button class = "button2" @click="openTuihuoReport">上传买家退货报告</el-button>
          <el-button class = "button2" @click="openAmazonKucunReport">上传亚马逊库存报告</el-button>
          <el-button class = "button2" @click="openProductTable">上传产销表</el-button>
          <el-button class = "button2" @click="openProductPrice">上传产品成本表</el-button>

        </div>
        <!--日期范围报告-->
        <div>
          <template>
            <el-dialog :visible.sync="openDateReportDialogSign" @close="cancelDateReportForm" title="上传日期范围报告">
              <el-upload
                  ref="upload1"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台日期范围报告并核对好日期，一次上传一个报告，大小不得超过40MB如果超过请联系管理员</p>
              </el-upload>
              <el-button class="button1" @click="uploadDateReport">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--广告搜索词-->
        <div>
          <template>
            <el-dialog :visible.sync="openAdReportDialogSign" @close="cancelAdReportForm" title="上传广告搜索词报告">
              <el-upload
                  ref="uploadAd1"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载搜索词报告并核对好日期，一次上传一个报告</p>
              </el-upload>
              <el-button class="button1" @click="uploadAdReport">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--月度仓储费-->
        <div>
          <template>
            <el-dialog :visible.sync="openBoxReportDialogSign" @close="cancelBoxReportForm" title="上传月度仓储费报告">
              <el-upload
                  ref="uploadBox1"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台月度仓储费报告并核对好日期，一次上传一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadBox1Report">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--长期仓储费-->
        <div>
          <template>
            <el-dialog :visible.sync="openBox2ReportDialogSign" @close="cancelBox2ReportForm" title="上传长期仓储费报告">
              <el-upload
                  ref="uploadBox2"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台长期仓储费报告并核对好日期，一次上传一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadBox2Report">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--业务报告-->
        <div>
          <template>
            <el-dialog :visible.sync="openYewuReportDialogSign" @close="cancelYewuReportForm" title="上传业务报告">
              <el-upload
                  ref="uploadYewu"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台业务报告并核对好日期，一次上传一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadYewuReport">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--买家换货-->
        <div>
          <template>
            <el-dialog :visible.sync="openHuanhuoReportDialogSign" @close="cancelHuanhuoReportForm" title="上传买家换货报告">
              <el-upload
                  ref="uploadHuanhuo"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台买家换货报告并核对好日期，一次上传一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadHuanhuoReport">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--买家退货-->
        <div>
          <template>
            <el-dialog :visible.sync="openTuihuoReportDialogSign" @close="cancelTuihuoReportForm" title="上传买家退货报告">
              <el-upload
                  ref="uploadTuihuo"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台买家退货报告并核对好日期，一次上传一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadTuihuoReport">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--亚马逊库存-->
        <div>
          <template>
            <el-dialog :visible.sync="openAmazonKucunReportDialogSign" @close="cancelAmazonKucunReportForm" title="上传亚马逊库存报告">
              <el-upload
                  ref="uploadBox3"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请下载后台亚马逊库存报告并核对好日期，一次上传一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadBox3Report">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--产销表-->
        <div>
          <template>
            <el-dialog :visible.sync="openProductTableDialogSign" @close="cancelProductTableForm" title="上传产销表">
              <el-upload
                  ref="uploadProductTable"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请上传你部门产品销售表:包含sku asin 运营对照信息的表</p>
              </el-upload>

              <el-button class="button1" @click="uploadProductTable">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--成本表-->
        <div>
          <template>
            <el-dialog :visible.sync="openProductPriceDialogSign" @close="cancelProductPriceForm" title="上传产品成本表">
              <el-upload
                  ref="uploadProductPrice"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请上传该店产品成本表:包含头程 成本信息的表</p>
              </el-upload>

              <el-button class="button1" @click="uploadProductPrice">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--商品推广报告-->
        <div>
          <template>
            <el-dialog :visible.sync="openProductAdDialogSign" @close="cancelProductAdForm" title="上传商品推广报告">
              <el-upload
                  ref="uploadAd2"
                  class="upload-demo"
                  :on-success="UploadSuccess"
                  :before-upload="beforeUpload"
                  :auto-upload="false"
                  style="margin-bottom: 20px"
              >
                <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
                <p>注:请上传亚马逊后台商品推广报告，一次上床一个报告</p>
              </el-upload>

              <el-button class="button1" @click="uploadProductAd">上传</el-button>
            </el-dialog>
          </template>
        </div>

        <!--数据主题-->
        <el-table :data="tableData" style="width:100%">
          <el-table-column  prop="name" label="姓名"></el-table-column>
          <el-table-column  prop="department" label="部门"></el-table-column>
          <el-table-column  prop="dpid" label="店铺"></el-table-column>
          <el-table-column  prop="xingwei" label="操作"></el-table-column>
          <el-table-column  prop="originfilename" label="文件名"></el-table-column>
          <el-table-column  prop="time" label="日期"></el-table-column>
        </el-table>

        <!--分页查询-->
        <div  >
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-sizes="[20, 40, 60, 80]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total=total>
          </el-pagination>
        </div><!-- 分页设置 -->

      </el-main>


    </el-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";


export default {
  name: 'TestView' ,
  components: {
    HelloWorld
  },
  data() {
    return {
      tableData:[],
      pageNum: 1,
      pageSize:20,
      openDateReportDialogSign:false,
      openAdReportDialogSign:false,
      openBoxReportDialogSign:false,
      openBox2ReportDialogSign:false,
      openYewuReportDialogSign:false,
      openHuanhuoReportDialogSign:false,
      openTuihuoReportDialogSign:false,
      openProductTableDialogSign:false,
      openProductPriceDialogSign:false,
      openAmazonKucunReportDialogSign:false,
      openProductAdDialogSign:false,
      dateReportFile:null,
    }
  },
  created: function () {
    //请求分页查询所需的数据
    this.load();
  },
  methods: {
    //加载界面函数
    load() {


      let url =
          "http://localhost:9090/api/datereportlogpage?pageNum=" +
          this.pageNum +
          "&pageSize=" +
          this.pageSize ;
      axios.get(url,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            //console.log(response.data);
            this.tableData = response.data.data;
            this.total = response.data.total;
          })
          .catch(error => {
            console.error(error);
          });
      // fetch(url)
      //     .then((res) => res.json())
      //     .then((res) => {
      //       //console.log(res);
      //       this.tableData = res.data;
      //       this.total = res.total;
      //     });
    },
    //日期范围报告
    openDateReport(){
      this.openDateReportDialogSign = true;
    },
    //搜索词报告
    openAdReport(){
      this.openAdReportDialogSign = true;
    },
    //商品推广报告
    openProductAd(){
      this.openProductAdDialogSign = true;
    },
    //月度仓储费
    openBoxReport(){
      this.openBoxReportDialogSign = true;
    },
    //长期仓储费
    openBox2Report(){
      this.openBox2ReportDialogSign = true;
    },
    //业务报告
    openYewuReport(){
      this.openYewuReportDialogSign = true;
    },
    //换货
    openHuanhuoReport(){
      this.openHuanhuoReportDialogSign = true;
    },
    //退货
    openTuihuoReport(){
      this.openTuihuoReportDialogSign = true;
    },
    //亚马逊库存
    openAmazonKucunReport(){
      this.openAmazonKucunReportDialogSign = true;
    },
    //产销表
    openProductTable(){
      this.openProductTableDialogSign = true;
    },
    //产品成本表
    openProductPrice(){
      this.openProductPriceDialogSign = true;
    },
    //日期范围报告
    cancelDateReportForm(){
      this.openDateReportDialogSign = false;
      this.$refs.upload1.clearFiles();
    },
    //商品推广报告
    cancelProductAdForm(){
      this.openProductAdDialogSign = false;
      this.$refs.uploadAd2.clearFiles();
    },
    //搜索词
    cancelAdReportForm(){
      this.openAdReportDialogSign = false;
      this.$refs.uploadAd1.clearFiles();
    },
    //月度仓储费
    cancelBoxReportForm(){
      this.openBoxReportDialogSign = false;
      this.$refs.uploadBox1.clearFiles();
    },
    //长期仓储费
    cancelBox2ReportForm(){
      this.openBox2ReportDialogSign = false;
      this.$refs.uploadBox3.clearFiles();
    },
    //业务报告上传界面按钮函数
    cancelYewuReportForm(){
      this.openYewuReportDialogSign = false;
      this.$refs.uploadYewu.clearFiles();
    },
    //换货上传界面按钮函数
    cancelHuanhuoReportForm(){
      this.openHuanhuoReportDialogSign = false;
      this.$refs.uploadHuanhuo.clearFiles();
    },
    //退货上传界面按钮函数
    cancelTuihuoReportForm(){
      this.openTuihuoReportDialogSign = false;
      this.$refs.uploadTuihuo.clearFiles();
    },
    //亚马逊库存上传界面按钮函数
    cancelAmazonKucunReportForm(){
      this.openAmazonKucunReportDialogSign = false;
      this.$refs.uploadBox3.clearFiles();
    },
    //产销表上传界面按钮函数
    cancelProductTableForm(){
      this.openProductTableDialogSign = false;
      this.$refs.uploadProductTable.clearFiles();
    },
    //库存表上传界面按钮函数
    cancelProductPriceForm(){
      this.openProductPriceDialogSign = false;
      this.$refs.uploadProductPrice.clearFiles();
    },
    //搜索词报告上传请求
    uploadAdReport(){
      if (!this.$refs.uploadAd1.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const sousuociFile = this.$refs.uploadAd1.uploadFiles[0];
      formData.append('sousuociFile', sousuociFile.raw);
      axios.post('http://localhost:9090/uploadfile/searchkeyreport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openAdReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //日期范围报告上传请求
    uploadDateReport(){
      if (!this.$refs.upload1.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const dateReportFile = this.$refs.upload1.uploadFiles[0];
      formData.append('dateReportFile', dateReportFile.raw);
      axios.post('http://localhost:9090/uploadfile/datereport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openDateReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //月度仓储费报告上传请求
    uploadBox1Report(){
      if (!this.$refs.uploadBox1.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const box1File = this.$refs.uploadBox1.uploadFiles[0];
      formData.append('box1File', box1File.raw);
      axios.post('http://localhost:9090/uploadfile/yueducangchureport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openBoxReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //长期仓储费报告上传请求
    uploadBox2Report(){
      if (!this.$refs.uploadBox2.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const box2File = this.$refs.uploadBox2.uploadFiles[0];
      formData.append('box2File', box2File.raw);
      axios.post('http://localhost:9090/uploadfile/changqicangchureport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openBox2ReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //亚马逊库存报告上传请求
    uploadBox3Report(){
      if (!this.$refs.uploadBox3.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const box3File = this.$refs.uploadBox3.uploadFiles[0];
      formData.append('box3File', box3File.raw);
      axios.post('http://localhost:9090/uploadfile/amazonkucunreport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openAmazonKucunReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //买家退货报告上传请求
    uploadTuihuoReport(){
      if (!this.$refs.uploadTuihuo.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const tuiHuoFile = this.$refs.uploadTuihuo.uploadFiles[0];
      formData.append('tuiHuoFile', tuiHuoFile.raw);
      axios.post('http://localhost:9090/uploadfile/tuihuoreport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openTuihuoReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //买家换货报告上传请求
    uploadHuanhuoReport(){
      if (!this.$refs.uploadHuanhuo.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const huanHuoFile = this.$refs.uploadHuanhuo.uploadFiles[0];
      formData.append('huanHuoFile', huanHuoFile.raw);
      axios.post('http://localhost:9090/uploadfile/huanhuoreport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openHuanhuoReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //业务报告上传请求
    uploadYewuReport(){
      if (!this.$refs.uploadYewu.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const yewuReportFile = this.$refs.uploadYewu.uploadFiles[0];
      formData.append('yewuReportFile', yewuReportFile.raw);
      axios.post('http://localhost:9090/uploadfile/yewureport', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openYewuReportDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //产销表上传请求
    uploadProductTable(){
      if (!this.$refs.uploadProductTable.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const productTableFile = this.$refs.uploadProductTable.uploadFiles[0];
      formData.append('productTableFile', productTableFile.raw);
      axios.post('http://localhost:9090/uploadfile/chanxiaobiao', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openProductTableDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //产品成本表上传请求
    uploadProductPrice(){
      if (!this.$refs.uploadProductPrice.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const productPriceFile = this.$refs.uploadProductPrice.uploadFiles[0];
      formData.append('productPriceFile', productPriceFile.raw);
      axios.post('http://localhost:9090/uploadfile/chengbenbiao', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openProductPriceDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    //商品推广报告上传请求
    uploadProductAd(){
      if (!this.$refs.uploadAd2.uploadFiles[0]) {
        this.$message.error('请选择要上传的文件');
        return;
      }

      const formData = new FormData();
      const productAdFile = this.$refs.uploadAd2.uploadFiles[0];
      formData.append('productAdFile', productAdFile.raw);
      axios.post('http://localhost:9090/uploadfile/productad', formData,{
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
          .then(response => {
            // 处理上传成功后的逻辑
            this.$message.success('文件上传成功');
            this.openProductAdDialogSign = false;
            this.load();
          })
          .catch(error => {
            // 处理上传失败后的逻辑
            console.error(error);
            this.$message.error('文件上传失败');
          });

    },
    beforeUpload(){
       const fileType = this.dateReportFile.type;
       if (fileType !== 'text/csv') {
         this.$message.error('请上传CSV文件');
         return false; // 阻止文件上传
       }
       console.log("beforeload执行了")
       return true; // 允许文件上传
    },
      uploadSuccess(response, file, fileList) {
      // 上传成功后的逻辑处理
      // response为服务器返回的响应数据
      // file为当前上传的文件对象
      // fileList为已上传的文件列表
     },



    //分页查询函数
    handleSizeChange(pageSize) {
       this.pageSize=pageSize
       this.load()
    },
    //分页查询函数
    handleCurrentChange(pageNum) {
       this.pageNum=pageNum
       this.load()
    },




    },


}
</script>
