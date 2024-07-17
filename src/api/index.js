import request from '@/utils/request'

export function queryHome(data) {
  return request({
    url: '/home/index.json',
    headers: {
      isToken: true,
    },
    method: 'post',
    data: data,
  })
}
