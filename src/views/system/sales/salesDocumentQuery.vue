<template>
  <div class="app-container">
    <el-form :inline="true" :model="queryParams" class="demo-form-inline" label-width="80px" @keyup.enter="searchQuery">
      <el-row class="btn-row">
        <el-col :span="4">
          <el-form-item size="large" label="单据号">
            <el-input v-model="queryParams.billNum" size="large" clearable />
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item size="large" label="仓库">
            <el-select v-model="queryParams.repo" size="large" clearable>
              <el-option v-for="dict in receiptType" :key="dict.value" :label="dict.label" :value="dict.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="客户">
            <el-select v-model="queryParams.customer" size="large" clearable>
              <el-option v-for="dict in customerList" :key="dict.value" :label="dict.label" :value="dict.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button-group size="large">
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            <el-button>高级</el-button>
          </el-button-group>
        </el-col>

        <el-col :span="8">
          <el-button-group size="large" class="operate-btn-group">
            <el-button color="#009688">便捷收款</el-button>
            <el-button color="#009688">审核</el-button>
            <el-button color="#009688">取消审核</el-button>
            <el-button color="#009688">删除</el-button>
            <el-button type="primary">新增</el-button>
            <el-button>导出</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup name="SalesDocumentQuery">
import { reactive } from 'vue'
import { listRepository } from '@/api/repository/repository.js'
import { listCustomer } from '@/api/customer/customer.js'
import { listUser } from '@/api/system/user.js'

const searchQuery = () => {
  console.log('搜索')
}

const receiptType = listRepository()
const customerList = listCustomer()
const operatorList = listUser({})
const queryParams = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss">
.app-container {
  .btn-row {
    background: #ffffff;
    padding: 10px 0;
    margin: 0 15px;
  }
  .operate-btn-group {
    display: inline-block;
    text-align: right;
  }
}
</style>
