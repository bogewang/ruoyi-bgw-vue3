<template>
  <div class="app-container">
    <el-row :gutter="24">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="单据号">
          <el-input v-model="queryParams.billNum" clearable />
        </el-form-item>
        <el-form-item label="仓库">
          <el-select v-model="queryParams.repo" clearable>
            <el-option v-for="dict in receiptType" :key="dict.value" :label="dict.label" :value="dict.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="客户">
          <el-select v-model="queryParams.customer" clearable>
            <el-option v-for="dict in customerList" :key="dict.value" :label="dict.label" :value="dict.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="操作人">
          <el-select v-model="queryParams.operator" clearable>
            <el-option v-for="dict in operatorList" :key="dict.value" :label="dict.label" :value="dict.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script setup name="SalesDocumentQuery">
import { reactive } from 'vue'
import { listRepository } from '@/api/repository/repository.js'
import { listCustomer } from '@/api/customer/customer.js'
import { listUser } from '@/api/system/user.js'

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

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
