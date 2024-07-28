import request from '@/utils/request';

export function listSales(query) {
  return request({
    url: '/saleOrder/listSaleOrder.json',
    method: 'get',
    params: query,
  });
}

export function saveSaleOrder(data) {
  return request({
    url: '/saleOrder/saveSaleOrder.json',
    method: 'post',
    data: data,
  });
}
export function querySaleOrderOne(data) {
  return request({
    url: '/saleOrder/querySaleOrderOne.json',
    method: 'post',
    data: data,
  });
}

export function getSummaries({ columns, data }) {
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    if (column.property !== 'totalAmount' && column.property !== 'amount') {
      return;
    }

    const values = data.map(item => Number(item[column.property]));
    if (!values.every(value => isNaN(value))) {
      sums[index] = values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0);
    } else {
      sums[index] = 'N/A';
    }
  });
  return sums;
}
