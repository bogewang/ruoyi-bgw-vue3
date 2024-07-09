<template>
    <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let chartInstance = null;

const assetData = [
  { name: '账户余额', value: 1000 },
  { name: '库存总额', value: 8000 },
  { name: '应收欠款', value: 400 },
  { name: '应付欠款', value: 100 }
];

const setupChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value);
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        top: 'middle',
        left: 'left',
        orient: 'vertical'
      },
      series: [
        {
          name: '资产情况',
          type: 'pie',
          radius: '50%',
          data: assetData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    chartInstance.setOption(option);
  }
};

onMounted(() => {
  setupChart();
  window.addEventListener('resize', resizeChart);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);
  if (chartInstance) {
    chartInstance.dispose();
  }
});

const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};
</script>

<style scoped>
/* 添加必要的样式 */
</style>
