import axiosHttp from '@api/https.js'
//创建订单
export const uploadImage=(data)=>{
  return axiosHttp({
    method:'post',
    url:'index/uploads',
    data,
  })
};

//热门
export const addContent=(data)=>{
    return axiosHttp({
      method:'post',
      header:{
        'content-type': 'multipart/form-data',
      },
      url:'index/addpartlist',
      data,
    })
  }