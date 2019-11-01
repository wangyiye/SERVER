<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户" prop='name'>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" prop='email'>
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop='phone'>
        <el-input v-model.number="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop='QQ'>
        <el-input v-model.number="form.QQ"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop='weixin'>
        <el-input v-model="form.weixin"></el-input>
      </el-form-item>
      <el-form-item label="回访信息" prop='desc'>
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
        type: "",
        email: "",
        phone: "",
        QQ: "",
        weixin: "",
        sex: "男",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名"},
          { min: 2, max: 5, message: "长度在 2 到 5 个字符"}
        ],
        email: [
          { required: true, message: "请填写邮箱" },
          { type: "email", message: "请填写正确的邮箱" }
        ],
        phone: [
          { required: true, message: "电话不能为空" },
          { type: "number", message: "电话必须为数字值" }
        ],
        QQ: [
          { required: true, message: "QQ不能为空" },
          { type: "number", message: "QQ必须为数字值" }
        ],
         weixin: [
          { required: true, message: "请输入微信"},
          { min: 3, max: 20, message: "长度在 3 到 20 个字符"}
        ],
        desc: [{ required: true, message: "请填写回访信息", trigger: "blur" }]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.container{
    width: 100%;
    height: 100%;
    padding:20px;
}
</style>