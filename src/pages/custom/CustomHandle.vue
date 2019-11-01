<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户" prop="name">
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
      <el-form-item label="QQ" prop="QQ">
        <el-input v-model.number="form.QQ"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="weixin">
        <el-input v-model="form.weixin"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择客户类型">
          <el-option label="重点客户" value="重点客户"></el-option>
          <el-option label="一般客户" value="一般客户"></el-option>
          <el-option label="放弃客户" value="放弃客户"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户地址" prop="address">
        <el-input type="textarea" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addCus">确认提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addCustom, updateCustom } from "../../api/custom";
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
        address: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符" }
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
          { required: true, message: "请输入微信" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符" }
        ],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        address: [
          { required: true, message: "请填写客户地址", trigger: "blur" }
        ]
      },
      lx: ""
    };
  },
  methods: {
    addCus() {
      this.$confirm(`确定提交吗？？`, "是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          (this.lx == "add" ? addCustom(this.form) : updateCustom(this.form))
            .then(result => {
              if (result.code == 0) {
                this.$message({
                  type: "success",
                  message: `${this.lx == "add" ? "添加" : "修改"}成功!`
                });
                this.$router.push("/custom/list?type=my");
                let lx = this.$route.query.lx || "my";
                this.$store.dispatch("changeCustomList", lx);
                return;
              }
              return Promise.reject(result.code);
            })
            .catch(() => {
              // console.log(rea)
              this.$message({
                type: "erroe",
                message: `${this.lx == "add" ? "添加" : "修改"}失败!`
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消添加"
          });
        });
    }
  },
  created() {
    this.lx = this.$route.query.lx || "add";
    this.form =
      this.lx === "add"
        ? {
            name: "",
            type: "",
            email: "",
            phone: "",
            QQ: "",
            weixin: "",
            sex: "男",
            address: ""
          }
        : this.$store.state.customInfo;
    if (this.form == null)
      this.form = {
        name: "",
        type: "",
        email: "",
        phone: "",
        QQ: "",
        weixin: "",
        sex: "男",
        address: ""
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