import axiosHttp from '@api/https.js'
export const getuserinfor=(params)=>{
  return axiosHttp({
    method:'get',
    url:'index/getRandomPic',
    params
  })
};
export const hotlist=(data)=>{
  return axiosHttp({
    method:'post',
    url:'index/hotlist',
    data,
  })
}