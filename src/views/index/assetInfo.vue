<template>
  <el-card>
    <template #header>
      资产情况
    </template>
    <div>
      总资产 = (账户余额 + 库存总额 + 应收欠款 - 应付欠款)
    </div>
    <p class="font22">
      131,507.10
    </p>
    <div ref="chartRef" style="width: 100%; height: 350px;"></div>
  </el-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let chartInstance = null;

const assetData = [
  { name: '库存总额', value: 8000 },
  { name: '账户余额', value: 1000 },
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
        orient: 'vertical',
        formatter: name => {
          const item = assetData.find(data => data.name === name);
          return `${name} (${item.value})`;
        }
      },
      series: [
        {
          name: '资产情况',
          type: 'pie',
          radius: '50%',
          data: assetData,
          center: ['60%', '50%'],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            formatter: '{b}: {d}%'
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

<style scoped lang="scss">
/* 添加必要的样式 */
.font22 {
  font-size: 22px;
}
</style>
