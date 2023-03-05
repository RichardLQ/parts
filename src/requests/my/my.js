import axiosHttp from '@api/https.js'
//登录
export const getLogin=(params)=>{
  return axiosHttp({
    method:'get',
    url:'user/queryLogin',
    params
  })
};

