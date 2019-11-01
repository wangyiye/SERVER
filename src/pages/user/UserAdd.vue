<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model.number="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="部门" prop="dep">
        <el-select v-model="form.dep" placeholder="请选择部门">
          <el-option label="部门1" value="1"></el-option>
          <el-option label="部门2" value="2"></el-option>
          <el-option label="部门3" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职务" prop="job">
        <el-select v-model="form.job" placeholder="请选择职务">
          <el-option label="职务1" value="1"></el-option>
          <el-option label="职务2" value="2"></el-option>
          <el-option label="职务3" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自我介绍" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
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
        dep: "",
        job: "",
        email: "",
        phone: "",
        sex: "男",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请填写邮箱" },
          { type: "email", message: "请填写正确的邮箱" }
        ],
        phone: [
          { required: true, message: "电话不能为空" },
          { type: "number", message: "电话必须为数字值" }
        ],
        job: [{ required: true, message: "请选择职务", trigger: "change" }],
        dep: [{ required: true, message: "请选择部门", trigger: "change" }],
        desc: [{ required: true, message: "请填写自我介绍", trigger: "blur" }]
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