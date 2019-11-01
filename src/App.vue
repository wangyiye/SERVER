<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="headerBox">
      <h1>CRM客户管理系统</h1>
      <el-menu
        :default-active="activeIndex()"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link to="/custom">
          <el-menu-item index="1">客户管理</el-menu-item>
        </router-link>
        <router-link to="/home">
          <el-menu-item index="2">系统设置</el-menu-item>
        </router-link>
      </el-menu>
      <div class="title" v-html="name"></div>
      <el-button round @click="edit" type="primary">修改密码</el-button>
      <el-button round @click="exit" type="danger">安全退出</el-button>
    </header>
    <!-- 展示一级路由中各组件的内容(呈现组件的是容器 router-view) -->
    <router-view></router-view>
    <!-- DIALOG -->
    <el-dialog
      :visible="dialogVisible"
      title="修改密码"
      width="30%"
      :before-close="closeDialog"
      :close-on-click-modal="false"
    >
      <el-form :model="modePass">
        <el-form-item label="新密码">
          <el-input type="password" v-model="modePass.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="modePass.pass2"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="xiu">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { tuichu, xiugai } from "./api/login.js";
import { exit, edit } from "./api/login.js";
import md5 from 'blueimp-md5';
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      modePass: {
        pass: "",
        pass2: ""
      }
    };
  },
  computed: {
    name() {
      return "您好： " + this.$store.state.userXinxi.name;
    }
  },
  methods: {
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/custom")) return "1";
      if (nowURL.includes("/home")) return "2";
    },
    exit() {
      exit()
        .then(result => {
          if (result.code == 0) {
            this.$confirm("此操作将退出系统, 是否继续?", "警告", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            }).then(() => {
              location.href = location.origin + "/login.html";
              this.$message({
                type: "success",
                message: "退出成功!"
              });
            });
            return;
          }
          return Promise.reject();
        })
        .catch(res => {
          this.$message.error("退出错误");
        });
    },
    edit() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    xiu() {
      let reg = /^\w{6,16}$/;
      if (!reg.test(this.modePass.pass) || !reg.test(this.modePass.pass2)) {
        this.$message.error("密码格式不正确，请重新输入！");
        this.modePass.pass = "";
        this.modePass.pass2 = "";
        return;
      }
      if (this.modePass.pass !== this.modePass.pass2) {
        this.$message.error("两次密码不一样,请重新输入");
        this.modePass.pass = "";
        this.modePass.pass2 = "";
        return;
      }
      this.$alert("确认修改此密码？", "温馨提示", {
        confirmButtonText: "确定",
        callback: action => {
          edit(md5(this.modePass.pass))
            .then(result => {
              if (result.code == 0) {
                this.$message({
                  type: "success",
                  message: "修改成功!"
                });
                this.dialogVisible = false;
                return;
              }
              return Promise.reject(result.codeText);
            })
            .catch(rea => {
              this.$message.error("修改失败");
            });
        }
      });
    }
  }
};
</script>

<style lang='less'>
html,
body,
#app {
  height: 100%;
  font-size: 14px;
  overflow: hidden;
}
.headerBox {
  position: relative;
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    width: 300px;
    text-align: center;
    font-size: 22px;
    color: white;
    z-index: 999;
    line-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-menu-demo {
    padding-left: 300px;
    display: flex;
    li {
      font-size: 16px;
    }
  }

  .el-button {
    width: 80px;
    height: 30px;
    font-size: 16px;
    position: absolute;
    top: 13px;
    padding: 0px;
    span {
      position: absolute;
      left: 8px;
      top: 8px;
    }
  }
  .el-button--danger {
    right: 0px;
  }
  .el-button--primary {
    right: 90px;
  }
  .title {
    width: 180px;
    text-align: center;
    line-height: 55px;
    font-size: 18px;
    position: absolute;
    top: 0px;
    right: 180px;
    color: white;
  }
}
</style>