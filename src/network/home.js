import {request} from './request'
export function githomedata() {
  return request({
    url:"/home/multidata"
  })
}

export function homegoodsdata(type,page) {
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
  
}