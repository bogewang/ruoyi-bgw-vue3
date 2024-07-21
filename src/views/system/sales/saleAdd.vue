<template>
  <div class="app-container">
    <el-card>
      <template #header>
        <div class="header">
          <el-icon size="large" style="color: #1ab394"><List /></el-icon>
          <el-text size="large" style="margin: 10px">销售单</el-text>

          <el-button-group class="product-btn-group">
            <el-button type="primary">选择商品</el-button>
            <el-button>导入商品</el-button>
            <el-button>扫码录入</el-button>
            <el-button>选择模板</el-button>
          </el-button-group>

          <el-text class="sale-price">销售价格</el-text>
          <el-radio-group v-model="price">
            <el-radio value="wholesale">批发价</el-radio>
            <el-radio value="retail">零售价</el-radio>
          </el-radio-group>
        </div>
      </template>

      <el-form label-width="80px" :model="order">
        <el-row>
          <el-col :span="4">
            <el-form-item label="客户">
              <el-select v-model="order.customer" clearable>
                <el-option v-for="dict in customerList" :key="dict.id" :label="dict.name" :value="dict.id" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="单据日期">
              <el-date-picker v-model="order.orderTime" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="单据编号">
              <el-input v-model="order.orderNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="10px">
              <el-checkbox v-model="order.needInvoice" label="需要发票" />
              <el-checkbox v-model="order.needDeliver" label="送货" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="order.needDeliver">
          <el-col :span="4">
            <el-form-item label="送货日期">
              <el-date-picker v-model="order.deliverDate"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="联系人">
              <el-input v-model="order.linkman"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="联系方式">
              <el-input v-model="order.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button class="use-customer-address" @click="useCustomerAddress">使用客户地址</el-button>
          </el-col>
        </el-row>

        <el-row>
          <el-table
            :data="tableData"
            border
            show-summary
            style="width: 100%"
            fit
            :header-cell-style="{ 'text-align': 'center' }"
            :cell-style="{ 'text-align': 'center' }"
          >
            <el-table-column label="序号" type="index" width="55" />
            <el-table-column label="操作" type="index" width="100">
              <el-icon size="large" style="color: #64ee64; margin-right: 10px"><CirclePlusFilled /></el-icon>
              <el-icon size="large" style="color: red"><RemoveFilled /></el-icon>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" width="200">
              <el-input @click="handleProductClick"></el-input>
            </el-table-column>
            <el-table-column prop="unit" label="单位" width="200">
              <el-input></el-input>
            </el-table-column>
            <el-table-column prop="cost" label="成本价(元)" width="200">
              <el-input></el-input>
            </el-table-column>
            <el-table-column prop="salePrice" label="售价(元)" width="200">
              <el-input></el-input>
            </el-table-column>
            <el-table-column prop="amount" label="金额(元)" width="200">
              <el-input></el-input>
            </el-table-column>
            <el-table-column prop="remark" label="备注" width="200">
              <el-input></el-input>
            </el-table-column>
          </el-table>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="业务员">
              <el-select v-model="order.salesMan" clearable>
                <el-option v-for="dict in salesManList" :key="dict.id" :label="dict.name" :value="dict.id" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="制单人">
              <el-select v-model="order.maker" clearable>
                <el-option v-for="dict in employList" :key="dict.id" :label="dict.name" :value="dict.id" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="其他费用">
              <el-input v-model="order.otherExpenses"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="备注信息">
              <el-input v-model="order.remark"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button>上传附件</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="6" class="save-btn">
            <el-checkbox v-model="order.needDeliver" label="保存后打印" />
            <el-button type="primary" style="flex: 0 0 70%" size="large" @click="onSubmit">保存</el-button>
          </el-col>
        </el-row>
        <el-row></el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { CirclePlusFilled, RemoveFilled } from '@element-plus/icons-vue';
import { listCustomer } from '@/api/customer/customer.js';
import { format } from 'date-fns';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/store/modules/user';
import { storeToRefs } from 'pinia';
import { listProduct } from '@/api/product/product.js';

//  制单人
const userStore = useUserStore();
const { id, name } = storeToRefs(userStore);
const order = ref({
  orderTime: new Date(),
  deliverDate: new Date(),
  orderNum: 'XSD' + format(new Date(), 'yyyyMMddHHmmss'),
  needDeliver: false,
  maker: { id: id, name: name },
});

const customerList = listCustomer();
const useCustomerAddress = () => {
  if (!order.value.customer) {
    ElMessage({
      message: '请先选择客户',
      type: 'error',
      plain: true,
    });
    return;
  }
  order.value.linkman = customerList.find(item => item.id === order.value.customer).linkman;
  order.value.mobile = customerList.find(item => item.id === order.value.customer).mobile;
};
const price = ref();

const employList = [
  { id: 1, name: 'admin' },
  { id: 2, name: '员工1' },
  { id: 3, name: '员工2' },
];

// 商品信息
const productList = listProduct();
// console.log(productList);

// 订单商品信息
const tableData = ref([{}, {}, {}, {}, {}, {}, {}, {}]);

const handleProductClick = () => {
  console.log('点击商品名称');
};

// 业务员
const salesManList = [
  { id: 1, name: '销售员1' },
  { id: 2, name: '销售员2' },
  { id: 3, name: '销售员3' },
];

const onSubmit = () => {
  console.log('保存订单');
  console.log(order.value);
  console.log(tableData);
};
</script>

<style lang="scss" scoped>
.app-container {
  .save-btn {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .el-table {
    margin-bottom: 20px;
  }
  .use-customer-address {
    margin-left: 10px;
  }
  .sale-price {
    margin: 10px;
  }
  .product-btn-group {
    margin: 0 10px;
  }
}
</style>
