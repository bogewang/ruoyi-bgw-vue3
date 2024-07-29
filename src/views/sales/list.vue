<template>
  <div class="app-container">
    <el-card :body-style="{ padding: '10px !important' }">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline" label-width="80px" @keyup.enter="list">
        <el-row class="btn-row">
          <el-col :span="6">
            <el-form-item label="单据号">
              <el-input v-model="queryParams.code" clearable />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="仓库">
              <el-select v-model="queryParams.scId" clearable>
                <el-option v-for="dict in repoList" :key="dict.value" :label="dict.label" :value="dict.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户">
              <el-select v-model="queryParams.customerId" clearable>
                <el-option v-for="dict in customerList" :key="dict.value" :label="dict.label" :value="dict.value" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="状态">
              <el-input v-model="queryParams.status" clearable />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row justify="center">
          <el-button type="primary" @click="doSearch">搜索</el-button>
          <el-button @click="reset">重置</el-button>
        </el-row>
      </el-form>
    </el-card>

    <el-card>
      <el-button-group class="operate-btn-group">
        <el-button>删除</el-button>
        <el-button type="primary" @click="add(null)">新增</el-button>
        <el-button>导出</el-button>
      </el-button-group>

      <el-table
        :data="tableData"
        show-summary
        :summary-method="getSummaries"
        style="width: 100%"
        index
        fit
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column fixed type="selection" width="55" />
        <el-table-column v-if="false" prop="id" label="ID" width="200" />
        <el-table-column sortable prop="code" label="单据编号" width="200" />
        <el-table-column sortable prop="scId" label="仓库" width="150" />
        <el-table-column sortable prop="customerId" label="客户" width="100" :formatter="formatCustomer" />
        <el-table-column sortable prop="salerId" label="销售人员" width="200" :formatter="formatSaler" />
        <el-table-column sortable prop="totalNum" label="销售数量" width="200" />
        <el-table-column sortable prop="totalGiftNum" label="赠品数量" width="200" />
        <el-table-column sortable prop="totalAmount" label="总金额" width="200" />
        <el-table-column sortable prop="description" label="备注" width="200" />
        <el-table-column sortable prop="approveBy" label="审核人" width="200" />
        <el-table-column sortable prop="createTime" label="创建时间" width="200" />
        <el-table-column sortable prop="approveTime" label="审核时间" width="200" />
        <el-table-column sortable prop="status" label="状态" width="200" />
        <el-table-column sortable prop="refuseReason" label="拒绝原因" width="200" />
        <el-table-column sortable prop="needDeliver" label="需要送货" width="200" />
        <el-table-column sortable prop="needInvoice" label="需要发票" width="200" />
        <el-table-column sortable prop="deliverDate" label="送货日期" width="200" />
        <el-table-column sortable prop="linkMan" label="联系人" width="200" />
        <el-table-column sortable prop="mobile" label="联系方式" width="200" />
        <el-table-column sortable prop="maker" label="制单人" width="200" />
        <el-table-column sortable prop="otherCost" label="其他费用" width="200" />
        <el-table-column sortable prop="orderTime" label="订单时间" width="200" />
        <el-table-column fixed="right" prop="operate" label="操作" width="250">
          <template #default="scope">
            <el-button-group>
              <el-button class="row-operate-btn">查看</el-button>
              <el-button class="row-operate-btn" @click="add(scope.row.id)">修改</el-button>
              <el-button class="row-operate-btn">删除</el-button>
              <el-button class="row-operate-btn">审核</el-button>
              <el-button class="row-operate-btn">打印</el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页-->
      <div class="demo-pagination-block">
        <el-pagination
          :current-page="pageNum"
          :page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="prev, pager, next, total, sizes"
          :total="totalRows"
          style="justify-content: flex-end; margin-right: 10px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup name="SalesDocumentQuery">
import { listRepository } from '@/api/repository/repository.js';
import { listCustomer } from '@/api/customer/customer.js';
import { listSales, getSummaries, getSalerList } from '@/api/sales/sales.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { proxy } = getCurrentInstance();
const router = useRouter();
const pageNum = ref(1);
const pageSize = ref(10);
const totalRows = ref(0);
const tableData = ref([]);
const handleCurrentChange = currentPage => {
  pageNum.value = currentPage;
  list();
};

const handleSizeChange = size => {
  pageSize.value = size;
  list();
};

const repoList = listRepository();
const customerList = listCustomer();
const queryParams = ref({
  code: null,
  status: null,
  scId: null,
  customerId: null,
});
const reset = () => {
  queryParams.value = {};
};

const doSearch = () => {
  pageNum.value = 1;
  pageSize.value = 10;
  list();
};

const list = () => {
  queryParams.value.pageNum = pageNum.value;
  queryParams.value.pageSize = pageSize.value;
  listSales(queryParams.value).then(res => {
    tableData.value = res.list || [];
    totalRows.value = res.total || 0;
  });
};

const add = id => {
  if (id) {
    router.push(`/sales/add?id=${id}`);
  } else {
    router.push(`/sales/add`);
  }
};
list();

const formatCustomer = (row, column, cellValue) => {
  return proxy.selectDictLabel(customerList, cellValue);
};
const formatSaler = (row, column, cellValue) => {
  return proxy.selectDictLabel(getSalerList(), cellValue);
};
</script>

<style lang="scss" scoped>
.app-container {
  .el-form-item {
    width: 100%;
  }
  .row-operate-btn {
    padding: 0 5px !important;
  }

  .demo-pagination-block {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
  /* 使合计行文字居中 */
  ::v-deep .el-table__footer .cell {
    text-align: center;
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
  .el-card:last-child {
    margin-bottom: 0;
  }
}
</style>
