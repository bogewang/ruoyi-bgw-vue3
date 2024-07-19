<template>
  <div class="app-container">
    <el-card :body-style="{ padding: '10px !important' }">
      <el-form
        :inline="true"
        :model="queryParams"
        class="demo-form-inline"
        label-width="80px"
        size="large"
        @keyup.enter="searchQuery"
      >
        <el-row class="btn-row">
          <el-col :span="6">
            <el-form-item label="单据号">
              <el-input v-model="queryParams.billNum" clearable />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="仓库">
              <el-select v-model="queryParams.repo" clearable>
                <el-option v-for="dict in receiptType" :key="dict.value" :label="dict.label" :value="dict.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户">
              <el-select v-model="queryParams.customer" clearable>
                <el-option v-for="dict in customerList" :key="dict.value" :label="dict.label" :value="dict.value" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="审核状态">
              <el-input v-model="queryParams.billNum" clearable />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row justify="center">
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button>重置</el-button>
        </el-row>
      </el-form>
    </el-card>

    <el-card>
      <el-button-group class="operate-btn-group" size="large">
        <el-button>便捷收款</el-button>
        <el-button>审核</el-button>
        <el-button>取消审核</el-button>
        <el-button>删除</el-button>
        <el-button type="primary">新增</el-button>
        <el-button>导出</el-button>
      </el-button-group>

      <el-table :data="tableData" border show-summary style="width: 100%" :height="tableHeight">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="320" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" />
      </el-table>

      <!-- 分页-->
      <div class="demo-pagination-block">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          size="large"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup name="SalesDocumentQuery">
import { reactive } from 'vue'
import { listRepository } from '@/api/repository/repository.js'
import { listCustomer } from '@/api/customer/customer.js'
import { listSales } from '@/api/sales/sales.js'
import { computed, ref } from 'vue'

const currentPage4 = 2
const pageSize4 = 100
const searchQuery = () => {
  console.log('搜索')
}
const handleSizeChange = () => {
  console.log('size发生变化!')
}
const handleCurrentChange = () => {
  console.log('当前页发生变化')
}
const tableData = ref([])
const receiptType = listRepository()
const customerList = listCustomer()
const queryParams = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}

tableData.value = listSales()
const minHeight = 400 // 最小高度
const tableHeight = computed(() => {
  debugger
  const rowHeight = 48 // 估算每行的高度
  const numberOfRows = tableData.value.length
  const totalHeight = rowHeight * numberOfRows
  return totalHeight < minHeight ? minHeight : totalHeight
})
</script>

<style lang="scss" scoped>
.app-container {
  .demo-pagination-block {
    margin-top: 10px;
  }

  .el-table {
    margin-top: 10px;
  }

  .btn-row {
    padding: 10px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .el-card {
    margin-bottom: 10px;
    background: #ffffff;
  }
}
</style>
