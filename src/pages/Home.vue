<template>
  <div class="container">
    <div class="leftBox">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>员工管理</span>
          </template>
          <el-menu-item-group>
            <router-link to='/home/userList'><el-menu-item index="1-1">员工列表</el-menu-item></router-link>
           <router-link to='/home/userAdd'> <el-menu-item index="1-2">新增员工</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>部门管理</span>
          </template>
          <el-menu-item-group>
             <router-link to='/home/jobList'><el-menu-item index="1-1">部门列表</el-menu-item></router-link>
            <router-link to='/home/jobAdd'><el-menu-item index="1-2">新增部门</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-postcard"></i>
            <span>职务管理</span>
          </template>
          <el-menu-item-group>
           <router-link to='/home/depList'> <el-menu-item index="1-1">职务列表</el-menu-item></router-link>
           <router-link to='/home/depAdd'> <el-menu-item index="1-2">新增职务</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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