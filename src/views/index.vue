<template>
  <div class="app-container home">
    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log"> 今日销售额1000</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log"> 今日销销售毛利200</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log"> 今日销销售笔数</el-card></el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 销售</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 进货</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 库存查询</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 商品</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 客户</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 供应商</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 应收</el-card></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6"><el-card class="update-log" > 销售分析</el-card></el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>常用功能</div>
          <el-divider/>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 进货单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 销售单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 库存查询</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 商品利润表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 销售利润表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 客户管理</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 商品管理</el-card></el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card>
          <div>汇总信息</div>
          <el-divider/>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 进货单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 销售单报表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 库存查询</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 商品利润表</el-card></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8"><el-card class="update-log" > 销售利润表</el-card></el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :xs="24" :sm="24" :md="12" :lg="24"><el-card class="update-log"> 数据概览</el-card></el-col>
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
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    cursor: pointer;
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
}
</style>

