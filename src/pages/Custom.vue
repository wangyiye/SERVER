<template>
  <div class="container">
    <div class="leftBox">
      <el-menu
        :default-active="activeIndex()"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link to="/custom/list?lx=my">
          <el-menu-item index="1">
            <i class="el-icon-user"></i>
            <span slot="title">我的客户</span>
          </el-menu-item>
        </router-link>
        <router-link to="/custom/list?lx=all">
          <el-menu-item index="2" v-power="allcustomer">
            <i class="el-icon-s-custom"></i>
            <span slot="title">全部客户</span>
          </el-menu-item>
        </router-link>
        <router-link to="/custom/handle?lx=add">
          <el-menu-item index="3">
            <i class="el-icon-circle-plus-outline"></i>
            <span slot="title">新增客户</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { customList } from "../api/custom";
export default {
  data() {
    return {
      allcustomer: "allcustomer"
    };
  },
  methods: {
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/custom/list?lx=all")) return "2";
      if (nowURL.includes("/custom/handle")) return "3";
      if (nowURL.includes("/custom/list")) return "1";
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  .leftBox {
    width: 15%;
    height: 100%;
    background: #545c64;
  }
  .rightBox {
    width: 85%;
    height: 100%;
  }
}
</style>