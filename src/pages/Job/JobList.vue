<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="100"></el-table-column>
      <el-table-column prop="name" label="名称" width="400"></el-table-column>
      <el-table-column prop="desc" label="描述" width="500"></el-table-column>
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
          id: 1,
          name: "xxx",
          desc: "啥也不干",
          time: 1568989082419,
          state: 0,
          departmentId: "null"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>