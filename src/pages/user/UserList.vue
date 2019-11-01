<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
     
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="姓名" width="80"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80"></el-table-column>
      <el-table-column prop="departmentId" label="部门" width="110"></el-table-column>
      <el-table-column prop="jobId" label="职务" width="110"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="160"></el-table-column>
      <el-table-column prop="phone" label="电话"  width="160"></el-table-column>
       <el-table-column prop="desc" label="描述"  width="230"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
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
          password: "8376ac810bb9f231d28fcf1f",
          sex: "0",
          email: "dsada@wqe.casd",
          phone: "11111111111",
          departmentId: "4",
          jobId: "8",
          desc: "123",
          time: 1568977941259,
          state: 0,
          userId: "null"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>