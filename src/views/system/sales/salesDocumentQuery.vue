<template>
  <div class="app-container">
    <el-form :inline="true" :model="queryParams" class="demo-form-inline" label-width="80px" @keyup.enter="searchQuery">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="6">
              <el-form-item size="large" label="单据号">
                <el-input v-model="queryParams.billNum" size="large" clearable />
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item size="large" label="仓库">
                <el-select v-model="queryParams.repo" size="large" clearable>
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
              <el-button-group>
                <el-button>搜索</el-button>
                <el-button>高级</el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button>便捷收款</el-button>
            <el-button>审核</el-button>
            <el-button>取消审核</el-button>
            <el-button>删除</el-button>
            <el-button>新增</el-button>
            <el-button>导出</el-button>
          </el-button-group>
        </el-col>
      </el-row>

      <el-form-item label="操作人">
        <el-select v-model="queryParams.operator" clearable>
          <el-option v-for="dict in operatorList" :key="dict.value" :label="dict.label" :value="dict.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
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

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
