<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="职务名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="职务描述" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="拥有权限">
        <el-checkbox-group v-model="form.handle">
          <el-checkbox label="员工操作权" name="type"></el-checkbox>
          <el-checkbox label="部门操作权" name="type"></el-checkbox>
          <el-checkbox label="职务操作权" name="type"></el-checkbox>
          <el-checkbox label="部门全部客户" name="type"></el-checkbox>
          <el-checkbox label="公司全部客户" name="type"></el-checkbox>
          <el-checkbox label="重置密码" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc: "",
        handle: []
      },
      rules: {
        name: [
          { required: true, message: "请输入职务名称" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符" }
        ],
        desc: [{ required: true, message: "请填写职务描述", trigger: "blur" }]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>