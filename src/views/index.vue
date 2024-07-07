<template>
  <div class="app-container home">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="module">
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
        <el-card class="module">
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
        <el-card class="module">
          <p>
            <el-text class="mx-1" size="large" tag="b">100</el-text>
          </p>
          <el-text class="mx-1">今日销售笔数</el-text>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 销售</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 进货</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 库存查询</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 商品</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 客户</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 供应商</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 应收</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="module" > 销售分析</el-card></el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>常用功能</div>
          <el-divider/>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 进货单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 销售单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 库存查询</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 商品利润表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 销售利润表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 客户管理</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 商品管理</el-card></el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>汇总信息</div>
          <el-divider/>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 进货单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 销售单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 库存查询</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 商品利润表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="module" > 销售利润表</el-card></el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="12" :lg="24"><el-card class="module"> 数据概览</el-card></el-col>
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
  .el-row {
    margin-bottom: 20px;
  }
  b {
    font-size: 22px;
  }
}
</style>

