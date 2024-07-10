<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const cashTrendRef = ref(null)
let cashTrendChartInstance = null;
const chartData = [
  { name: '支出', data: [{ date: '2024-07-01', cash: 120 }, { date: '2024-07-02', cash: 132 }, { date: '2024-07-03', cash: 101 }, { date: '2024-07-04', cash: 134 }, { date: '2024-07-05', cash: 90 }, { date: '2024-07-06', cash: 230 }, { date: '2024-07-07', cash: 210 }] },
  { name: '收入', data: [{ date: '2024-07-01', cash: 150 }, { date: '2024-07-02', cash: 200 }, { date: '2024-07-03', cash: 170 }, { date: '2024-07-04', cash: 140 }, { date: '2024-07-05', cash: 110 }, { date: '2024-07-06', cash: 300 }, { date: '2024-07-07', cash: 250 }] }
];

const setupChart = () => {
  if (cashTrendRef.value) {
    cashTrendChartInstance = echarts.init(cashTrendRef.value);
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: chartData.map(item => item.name)
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: chartData[0].name,
          type: 'line',
          smooth: true,
          stack: 'Total',
          color: 'lightblue',
          data: chartData[0].data.map(item => item.cash)
        },
        {
          name: chartData[1].name,
          type: 'line',
          smooth: true,
          color: 'red',
          stack: 'Total',
          data: chartData[1].data.map(item => item.cash)
        }
      ]
    }

    cashTrendChartInstance.setOption(option)
  }
}

onMounted(() => {
  setupChart();
  window.addEventListener('resize', resizeChart);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);
  if (cashTrendChartInstance) {
    cashTrendChartInstance.dispose();
  }
});

const resizeChart = () => {
  if (cashTrendChartInstance) {
    cashTrendChartInstance.resize();
  }
};
</script>

<template>
  <el-card>
    <template #header>
      现金流趋势
    </template>
    <div ref="cashTrendRef" style="width: 100%; height: 388px;"></div>
    <el-divider/>
  </el-card>
</template>

<style scoped lang="scss">

</style>