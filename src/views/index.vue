<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="20">
        <el-row class="outer-row sale">
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-card shadow="hover">
              <p>
                <span>
                  <el-text class="mx-1 " size="large" tag="b">¥3000.00</el-text>
                </span>
                    <el-text class="mx-1" size="small" style="margin-left: 5px">昨日 2000.23</el-text>
              </p>
              <el-text class="mx-1">今日销售额</el-text>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-card shadow="hover">
              <p>
          <span>
            <el-text class="mx-1 " size="large" tag="b">¥3000.00</el-text>
          </span>
                <el-text class="mx-1" size="small" style="margin-left: 5px">昨日 2000.23</el-text>
              </p>
              <el-text class="mx-1">今日销售毛利</el-text>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-card shadow="hover">
              <p>
                <el-text class="mx-1" size="large" tag="b">100</el-text>
              </p>
              <el-text class="mx-1">今日销售笔数</el-text>
            </el-card>
          </el-col>
        </el-row>

        <el-row class="outer-row module">
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <Sell/>
                </el-icon>
              </p>
              <p>
                销售
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <SoldOut/>
                </el-icon>
              </p>
              <p>
                进货
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <TakeawayBox/>
                </el-icon>
              </p>
              <p>
                库存
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <Box/>
                </el-icon>
              </p>
              <p>
                商品
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <User/>
                </el-icon>
              </p>
              <p>
                客户
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon color="#409efc">
                  <Avatar/>
                </el-icon>
              </p>
              <p>
                供应商
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <PieChart/>
                </el-icon>
              </p>
              <p>
                销售报表
              </p>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="6">
            <el-card shadow="hover">
              <p>
                <el-icon>
                  <Printer/>
                </el-icon>
              </p>
              <p>
                打印模板
              </p>
            </el-card>
          </el-col>
        </el-row>

        <el-row class="outer-row" :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <el-card style="padding-bottom: 8px">
              <template #header>
                <div>常用功能</div>
              </template>
              <el-row class="ofen-use text-center">
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 进货单报表</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 销售单报表</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 库存查询</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 商品利润表</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 销售利润表</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 客户管理</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 商品管理</el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <el-card>
              <template #header>
                <div>汇总信息</div>
              </template>
              <el-row class="summary">
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card >
                    <div>客户总数</div>
                    <div class="summary-num">
                      11123
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 销售单报表</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 库存查询</el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card >
                    <div>
                      客户总数
                    </div>
                    <div class="summary-num">
                      11123
                    </div>
                  </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="8">
                  <el-card> 销售利润表</el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="0"  class="outer-row ">
          <el-col :xs="24" :sm="24" :md="12" :lg="24">
            <el-card>
              <template #header>
                数据概览
              </template>

              <el-carousel height="400px" indicator-position="outside">
                <el-carousel-item v-for="(chart, index) in charts" :key="index">
                  <div :ref="el => { chartRefs[index] = el }" :id="'chart' + index" style="width: 100%; height: 100%;"></div>
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-col>
        </el-row>

        <el-row class="outer-row">
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
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="4">
        <el-card class="right-card">
          <template #header>
            <div>新手向导</div>
          </template>
          三个小步骤快速上手，经营效率提升30%
          即刻开始
        </el-card>
        <el-card class="right-card">
          <template #header>
            <div>公告</div>
          </template>
          可在系统设置里设置公告信息
        </el-card>
        <el-card class="right-card">
          <template #header>
            <div>多端协作</div>
          </template>
          下载手机端。随时随地做生意。
          手机版下载
          您也可以下载我们的PC版本。
          点击这里给我发消息 微信在线客服
        </el-card>
        <el-card class="right-card">
          <template #header>
            <div>打印助手</div>
          </template>
          如有打印需求，请下载我们的打印助手。
          支持Window7及以上版本。
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
import {Sell, SoldOut, TakeawayBox, Box, User, Avatar, PieChart, Printer} from '@element-plus/icons-vue'
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';

const charts = [
  { title: '销售额1', data: [{ date: '2024-07-01', sales: 120 }, { date: '2024-07-02', sales: 132 }, { date: '2024-07-03', sales: 101 }, { date: '2024-07-04', sales: 134 }, { date: '2024-07-05', sales: 90 }, { date: '2024-07-06', sales: 230 }, { date: '2024-07-07', sales: 210 }] },
  { title: '销售额2', data: [{ date: '2024-07-01', sales: 150 }, { date: '2024-07-02', sales: 200 }, { date: '2024-07-03', sales: 170 }, { date: '2024-07-04', sales: 140 }, { date: '2024-07-05', sales: 110 }, { date: '2024-07-06', sales: 300 }, { date: '2024-07-07', sales: 250 }] }
];

const chartRefs = ref([]);

const setupChart = async () => {
  await nextTick();
  charts.forEach((chart, index) => {
    console.log('setupChart')
    const chartDom = document.getElementById('chart' + index);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: chart.title
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: chart.data.map(item => item.date)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销售额',
            type: 'line',
            data: chart.data.map(item => item.sales),
            label: {
              show: true,
              position: 'top'
            }
          }
        ]
      };
      myChart.setOption(option);
      chartRefs.value.push(myChart);
    }
  });
};

onMounted(() => {
  setupChart();
  window.addEventListener('resize', resizeCharts);
});

const resizeCharts = () => {
  chartRefs.value.forEach(chart => chart.resize());
};

const version = ref('4.0.0')

</script>

<style scoped lang="scss">
.home {
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  .module .el-card{
    @extend .el-card-common;

    p {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 22px;
      padding: 5px;
    }
  }
  .sale .el-card {
    @extend .el-card-common;
  }

  .ofen-use, .summary {
    .el-card {
      @extend .el-card-common;
      margin: 5px;
    }
    .summary-num {
      font-size: 22px;
      padding-top: 10px;
    }
  }

  .outer-row, .right-card{
    margin-bottom: 20px;
  }

  b {
    font-size: 22px;
  }

  /* 定义通用样式 */
  .el-card-common {
    cursor: pointer;

    &:hover {
      background-color: #f8f8f8;
    }
  }
}
</style>

