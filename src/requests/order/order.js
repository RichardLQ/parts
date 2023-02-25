import axiosHttp from '@api/https.js'
//支付
export const getOrders=(params)=>{
  return axiosHttp({
    method:'get',
    url:'index/order',
    params
  })
};
//热门
export const hotlist=(data)=>{
  return axiosHttp({
    method:'post',
    url:'index/hotlist',
    data,
  })
}