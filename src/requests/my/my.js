import axiosHttp from '@api/https.js'
//登录
export const getLogin=(params)=>{
  return axiosHttp({
    method:'get',
    url:'user/queryLogin',
    params
  })
};

//热门
export const addContent=(data)=>{
  return axiosHttp({
    method:'post',
    url:'index/addpartlist',
    data,
  })
}