<template>
  <div class="app-container">
    <el-card :body-style="{ padding: '10px !important' }">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline" label-width="80px" @keyup.enter="doSearch">
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
                <el-option v-for="dict in customerList" :key="dict.id" :label="dict.name" :value="dict.id" />
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
          <el-button type="primary" @click="doSearch">搜索</el-button>
          <el-button>重置</el-button>
        </el-row>
      </el-form>
    </el-card>

    <el-card>
      <el-button-group class="operate-btn-group">
        <!--<el-button>便捷收款</el-button>-->
        <!--<el-button>审核</el-button>-->
        <!--<el-button>取消审核</el-button>-->
        <el-button>删除</el-button>
        <el-button type="primary" @click="add">新增</el-button>
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
        <el-table-column sortable prop="code" label="单据编号" width="200" />
        <el-table-column sortable prop="scId" label="仓库" width="150" />
        <el-table-column sortable prop="customerId" label="客户" width="100" />
        <el-table-column sortable prop="salerId" label="销售人员" width="200" />
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
          <el-button-group>
            <el-button class="row-operate-btn">查看</el-button>
            <el-button class="row-operate-btn">修改</el-button>
            <el-button class="row-operate-btn">删除</el-button>
            <el-button class="row-operate-btn">审核</el-button>
            <el-button class="row-operate-btn">打印</el-button>
          </el-button-group>
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
import { listSales } from '@/api/sales/sales.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pageNum = ref(1);
const pageSize = ref(10);
const totalRows = ref(0);
const tableData = ref([]);
const handleCurrentChange = currentPage => {
  pageNum.value = currentPage;
  doSearch();
};

const handleSizeChange = size => {
  pageSize.value = size;
  doSearch();
};

const receiptType = listRepository();
const customerList = listCustomer();
const queryParams = {
  user: '',
  region: '',
  date: '',
};

const doSearch = () => {
  queryParams.pageNum = pageNum.value;
  queryParams.pageSize = pageSize.value;
  queryParams.id = 1;
  listSales(queryParams).then(res => {
    tableData.value = res.list;
    totalRows.value = res.total;
  });
};

const getSummaries = ({ columns, data }) => {
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    if (column.property !== 'totalAmount') {
      return;
    }

    const values = data.map(item => Number(item[column.property]));
    if (!values.every(value => isNaN(value))) {
      sums[index] = values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0);
    } else {
      sums[index] = 'N/A';
    }
  });
  return sums;
};

const add = () => {
  router.push('/sales/add');
};
doSearch();
</script>

<style lang="scss" scoped>
.app-container {
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
