<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';

const charts = [
  { title: '销售额1', data: [{ date: '2024-07-01', sales: 120 }, { date: '2024-07-02', sales: 132 }, { date: '2024-07-03', sales: 101 }, { date: '2024-07-04', sales: 134 }, { date: '2024-07-05', sales: 90 }, { date: '2024-07-06', sales: 230 }, { date: '2024-07-07', sales: 210 }] },
  { title: '销售额2', data: [{ date: '2024-07-01', sales: 120 }, { date: '2024-07-02', sales: 132 }, { date: '2024-07-03', sales: 101 }, { date: '2024-07-04', sales: 134 }, { date: '2024-07-05', sales: 90 }, { date: '2024-07-06', sales: 230 }, { date: '2024-07-07', sales: 210 }] },
  { title: '销售额3', data: [{ date: '2024-07-01', sales: 150 }, { date: '2024-07-02', sales: 200 }, { date: '2024-07-03', sales: 170 }, { date: '2024-07-04', sales: 140 }, { date: '2024-07-05', sales: 110 }, { date: '2024-07-06', sales: 300 }, { date: '2024-07-07', sales: 250 }] }
];

const chartRefs = ref([]);

const setupChart = async () => {
  await nextTick();
  charts.forEach((chart, index) => {
    const chartDom = document.getElementById('chart' + index);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: chart.title,
          left: 'center'
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

</script>

<template>
  <el-carousel height="400px" indicator-position="outside">
    <el-carousel-item v-for="(chart, index) in charts" :key="index">
      <div :ref="el => { chartRefs[index] = el }" :id="'chart' + index" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">

</style>