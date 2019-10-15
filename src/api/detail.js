import request from '@/utils/request'
// console.log(request)
export function gettableDate (data) {
  return request.request({
    url: '/platform/info/selectById',
    method: 'post',
    data
  })
}
