<template>
  <div class="app-container">
    <el-card>
      <template #header>
        <div class="header">
          <el-icon size="large" style="color: #1ab394">
            <List />
          </el-icon>
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

      <el-form label-width="80px" :model="form">
        <el-row>
          <el-col :span="4">
            <el-form-item label="客户">
              <el-select v-model="form.customerId" clearable>
                <el-option v-for="dict in customerList" :key="dict.id" :label="dict.name" :value="dict.id" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="单据日期">
              <el-date-picker v-model="form.orderTime" type="datetime" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="单据编号">
              <el-input v-model="form.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="10px">
              <el-checkbox v-model="form.needInvoice" label="需要发票" />
              <el-checkbox v-model="form.needDeliver" label="送货" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="form.needDeliver">
          <el-col :span="4">
            <el-form-item label="送货日期">
              <el-date-picker v-model="form.deliverDate"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="联系人">
              <el-input v-model="form.linkman"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="联系方式">
              <el-input v-model="form.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button class="use-customer-address" @click="useCustomerAddress">使用客户地址</el-button>
          </el-col>
        </el-row>

        <el-row>
          <el-table
            :data="form.detailList"
            border
            show-summary
            style="width: 100%"
            fit
            :header-cell-style="{ 'text-align': 'center' }"
            :cell-style="{ 'text-align': 'center' }"
          >
            <el-table-column label="序号" type="index" width="55" />
            <el-table-column label="操作" type="index" width="100">
              <el-icon size="large" style="color: #64ee64; margin-right: 10px">
                <CirclePlusFilled />
              </el-icon>
              <el-icon size="large" style="color: red">
                <RemoveFilled />
              </el-icon>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" width="200">
              <template #default="scope">
                <el-select v-model="scope.row.productId" clearable>
                  <el-option v-for="dict in productList" :key="dict.id" :label="dict.name" :value="dict.id" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="unit" label="单位" width="200">
              <template #default="scope">
                <el-input v-model="scope.row.unit"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="orderNum" label="数量" width="200">
              <template #default="scope">
                <el-input v-model="scope.row.orderNum"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="cost" label="成本价(元)" width="200">
              <template #default="scope">
                <el-input v-model="scope.row.cost"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="oriPrice" label="售价(元)" width="200">
              <template #default="scope">
                <el-input v-model="scope.row.oriPrice"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="amount" label="金额(元)" width="200">
              <template #default="scope">
                <el-input v-model="scope.row.amount"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="备注" width="200">
              <template #default="scope">
                <el-input v-model="scope.row.description"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="业务员">
              <el-select v-model="form.salerId" clearable>
                <el-option v-for="dict in salesManList" :key="dict.id" :label="dict.name" :value="dict.id" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="制单人">
              <el-select v-model="form.maker" clearable>
                <el-option v-for="dict in employList" :key="dict.id" :label="dict.name" :value="dict.id" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="其他费用">
              <el-input v-model="form.otherCost"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="备注信息">
              <el-input v-model="form.description"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button>上传附件</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="6" class="save-btn">
            <el-checkbox v-model="form.needDeliver" label="保存后打印" />
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
import { useUserStore } from '@/store/modules/user.js';
import { storeToRefs } from 'pinia';
import { listProduct } from '@/api/product/product.js';
import { saveSaleOrder } from '@/api/sales/sales.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.query.id;

const productList = listProduct();

//  制单人
const userStore = useUserStore();
const { userId, name } = storeToRefs(userStore);
const form = ref({
  orderTime: new Date(),
  deliverDate: new Date(),
  code: 'XSD' + format(new Date(), 'yyyyMMddHHmmss'),
  needDeliver: false,
  maker: { id: userId, name: name },
  detailList: [{}, {}, {}, {}, {}, {}, {}, {}],
});

const customerList = listCustomer();
const useCustomerAddress = () => {
  if (!form.value.customerId) {
    ElMessage({
      message: '请先选择客户',
      type: 'error',
      plain: true,
    });
    return;
  }
  const customer = customerList.find(item => item.id === form.value.customerId);
  form.value.linkman = customer.linkman;
  form.value.mobile = customer.mobile;
};

const price = ref();

const employList = [
  { id: 1, name: 'admin' },
  { id: 2, name: '员工1' },
  { id: 3, name: '员工2' },
];

const salesManList = [
  { id: 1, name: '销售员1' },
  { id: 2, name: '销售员2' },
  { id: 3, name: '销售员3' },
];

const onSubmit = () => {
  console.log('保存订单');
  const param = { ...form.value };
  param.maker = param.maker.id;
  param.detailList = param.detailList.filter(item => item.productId !== null);
  console.log(param);
  saveSaleOrder(param).then(res => {
    console.log('order_id' + res);
    ElMessage({
      message: '保存成功!',
      type: 'success',
      plain: true,
    });
  });
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
