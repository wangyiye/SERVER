<template>
  <div class="box">
    <div class="filterBox">
      <select
        class="selectBox"
        v-model="type"
        @change="()=>{
		  this.page=1;
		  this.queryData();
		}"
      >
        <option value>全部客户</option>
        <option value="重点客户">重点客户</option>
        <option value="一般客户">一般客户</option>
        <option value="放弃客户">放弃客户</option>
      </select>
      <input
        v-model="search"
        type="text"
        class="searchInp"
        placeholder="客户综合信息模糊查询"
        @keydown.enter="chaxun"
      />
    </div>

    <div v-if="customList">
      <el-table stripe :data="customList.data" style="width:100%">
        <el-table-column label="姓名" min-width="8%" prop="name"></el-table-column>
        <el-table-column label="性别" min-width="5%" prop="sex" :formatter="formatSex"></el-table-column>
        <el-table-column label="邮箱" min-width="10%" prop="email" show-overflow-tooltip></el-table-column>
        <el-table-column label="电话" min-width="10%" prop="phone" show-overflow-tooltip></el-table-column>
        <el-table-column label="微信" min-width="10%" prop="weixin" show-overflow-tooltip></el-table-column>
        <el-table-column label="QQ" min-width="10%" prop="QQ" show-overflow-tooltip></el-table-column>
        <el-table-column label="类型" min-width="10%" prop="type"></el-table-column>
        <el-table-column label="隶属人" min-width="8%" prop="userName"></el-table-column>
        <el-table-column label="地址" min-width="15%" prop="address" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" min-width="14%">
          <template slot-scope="scope">
            
              <el-button type="text" size="small" @click="bianji(scope)">编辑</el-button>
           
            <el-button type="text" size="small" @click="shanchu(scope)">删除</el-button>
            <router-link to="/custom/visit">
              <el-button type="text" size="small">回访</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(customList.total)"
        :page-size="limit"
        :current-page="page"
        @current-change="currentHandle"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { customList, deleteCustom } from "../../api/custom";
export default {
  data() {
    return {
      customList: null,
      type: "",
      search: "",
      limit: 7,
      page: 1
    };
  },
  watch: {
    ["$store.state.myCustomList"](val) {
      this.customList = val;
    },
    ["$store.state.allCustomList"](val) {
      this.customList = val;
    },
    ["$route"](val) {
      let { myCustomList, allCustomList } = this.$store.state;
      let lx = this.$route.query.lx || "my",
        customList = lx === "my" ? myCustomList : allCustomList;
      if (customList === null) {
        this.$store.dispatch("changeCustomList", lx);
      } else {
        this.customList = customList;
      }
    }
  },
  methods: {
    chaxun() {
      this.page = 1;
      this.queryData();
    },
    formatSex(item) {
      return parseInt(item.sex) === 0 ? "男" : "女";
    },
    queryData() {
      customList({
        lx: this.$route.query.lx || "my",
        type: this.type,
        search: this.search,
        limit: this.limit,
        page: this.page
      }).then(result => {
        if (result.code == 0) {
          this.customList = result;
        }
      });
    },
    currentHandle(page) {
      this.page = page;
      this.queryData();
    },
    shanchu(item) {
      this.$confirm(`确定要删除${item.row.name}吗？？`, "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteCustom(item.row.id).then(result => {
            if (result.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              let lx = this.$route.query.lx || "my";
              this.$store.dispatch("changeCustomList", lx);
              return
            }
            return Promise.reject()
          }).catch(() => {
          this.$message({
            type: "error",
            message: "删除失败"
          });
        });;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    bianji(item){
      this.$store.dispatch('changeCustomInfo',item.row);
      this.$router.push('/custom/handle?lx=bj')
    }
  },
  created() {
    let { myCustomList, allCustomList } = this.$store.state;
    let lx = this.$route.query.lx || "my",
      customList = lx === "my" ? myCustomList : allCustomList;
    if (customList === null) {
      this.$store.dispatch("changeCustomList", lx);
    } else {
      this.customList = customList;
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

/* ==filterBox== */
.filterBox {
  padding: 10px;
  text-align: right;
}

.selectBox,
.searchInp,
.deleteAll {
  box-sizing: border-box;
  margin-right: 10px;
  padding: 0 5px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
  vertical-align: middle;
}

.searchInp {
  padding: 0 10px;
  width: 250px;
}

.deleteAll {
  background: #eee;
  padding: 0;
  cursor: pointer;
}
</style>