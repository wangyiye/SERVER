<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="100"></el-table-column>
      <el-table-column prop="name" label="职务" width="250"></el-table-column>
      <el-table-column prop="desc" label="描述" width="350"></el-table-column>
      <el-table-column prop="power" label="权限" width="350"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 10,
          name: "xx部门",
          desc: "啥也不干，纯养老",
          power: "userhandle|resetpassword",
          time: 1568989053635,
          state: 0,
          jobId: "null"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>