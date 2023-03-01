import axiosHttp from '@api/https.js'
//创建订单
export const getOrders=(params)=>{
  return axiosHttp({
    method:'get',
    url:'index/order',
    params
  })
};


export const payOrders=(params)=>{
  return axiosHttp({
    method:'get',
    url:'index/payStatus',
    params
  })
};


//openid
export const getOpeind=(params)=>{
  return axiosHttp({
    method:'get',
    url:'index/getOpenid',
    params
  })
};
//sign
export const getSign=(params)=>{
  return axiosHttp({
    method:'get',
    url:'index/getSign',
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