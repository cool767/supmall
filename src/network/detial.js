import {request, requestadd} from './request'

export function getdetialdata(iid) {
 return request({
   url: "/detail",
   params: {
     iid
   }
 })
}

export function getRecommendShopData() {
 return request({
   url: "/recommend"
 })
}