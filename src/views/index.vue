<template>
  <div class="app-container home">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="module" shadow="hover">
          <p>
            <span>
              <el-text class="mx-1 " size="large" tag="b">¥3000.00</el-text>
            </span>
            <el-text class="mx-1" size="small">昨日 2000.23</el-text>
          </p>
          <el-text class="mx-1">今日销售额</el-text>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="module" shadow="hover">
          <p>
          <span>
            <el-text class="mx-1 " size="large" tag="b">¥3000.00</el-text>
          </span>
            <el-text class="mx-1" size="small">昨日 2000.23</el-text>
          </p>
          <el-text class="mx-1">今日销售毛利</el-text>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="module" shadow="hover">
          <p>
            <el-text class="mx-1" size="large" tag="b">100</el-text>
          </p>
          <el-text class="mx-1">今日销售笔数</el-text>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><Sell /></el-icon>
          </p>
          <p class="center-content">
            销售
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><SoldOut /></el-icon>
          </p>
          <p class="center-content">
            进货
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><TakeawayBox /></el-icon>
          </p>
          <p class="center-content">
            库存
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><Box /></el-icon>
          </p>
          <p class="center-content">
            商品
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><User /></el-icon>
          </p>
          <p class="center-content">
            客户
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><Avatar /></el-icon>
          </p>
          <p class="center-content">
            供应商
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><PieChart /></el-icon>
          </p>
          <p class="center-content">
            销售报表
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="module" shadow="hover">
          <p class="center-content">
            <el-icon><Printer /></el-icon>
          </p>
          <p class="center-content">
            打印模板
          </p>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <template #header>
            <div>常用功能</div>
          </template>

          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 进货单报表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 销售单报表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 库存查询</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 商品利润表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 销售利润表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 客户管理</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 商品管理</el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>汇总信息</div>
          <el-divider/>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 进货单报表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 销售单报表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 库存查询</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 商品利润表</el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
              <el-card class="module"> 销售利润表</el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="12" :lg="24">
        <el-card class="module"> 数据概览</el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>资产情况</div>
          <el-divider/>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>现金流趋势</div>
          <el-divider/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
import { Sell, SoldOut, TakeawayBox, Box, User, Avatar, PieChart, Printer } from '@element-plus/icons-vue'

const version = ref('4.0.0')

function goTarget(url) {
  window.open(url, '__blank')
}

const handleTodaySale = () => {
  console.log('今日销售情况')
}

</script>

<style scoped lang="scss">
.home {
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  .module {
    cursor: pointer;

    &:hover {
      background-color: #f8f8f8;
    }
  }

  .module .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 22px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  b {
    font-size: 22px;
  }
}
</style>

