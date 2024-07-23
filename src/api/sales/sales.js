import request from '@/utils/request';

export function listSales(query) {
  return request({
    url: '/saleOrder/listSaleOrder.json',
    method: 'get',
    data: query,
  });
}

export function saveSaleOrder(data) {
  return request({
    url: '/saleOrder/saveSaleOrder.json',
    method: 'post',
    data: data,
  });
}
