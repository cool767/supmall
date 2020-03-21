import axios from 'axios'
export function request(config) {
  const Intance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/wh",
    timeout: 5000
  })

  // 拦截器
  // 1拦截请求
  Intance.interceptors.request.use(config => {
    // console.log(config)一些拦截操作代码
    return config    //拦截后返回数据
  })
  // 2拦截响应
  Intance.interceptors.response.use(res => {
    // console.log(res)一些拦截操作代码
    return res.data   //拦截后返回数据的data
  })

  return Intance(config)
}

