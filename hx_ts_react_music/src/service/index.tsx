import axios from "axios";
import { BASE_URL, TIME_OUT} from "./config/index";

axios.interceptors.request.use((config) => {
  // console.log("请求成功的拦截.")
  return config;
}, (err) => {
  // console.log("请求失败的拦截.")
  return err;
})

axios.interceptors.response.use((res) => {
  // console.log("响应成功的拦截")
  return res;
}, (err) => {
  // console.log("响应失败的拦截", err)
  return err;
})

class HYRequest {
  constructor(baseURL:string, timeout=10000) {
    axios.defaults.baseURL = baseURL,
    axios.defaults.timeout = timeout
    // this.instance = axios.create({
    //   baseURL,
    //   timeout
    // })
  }

   request(config: any) {
    return new Promise((resolve, reject) => {
      axios.request(config).then((res: any) => {
        // console.log("---请求结果:",res);
        resolve(res.data || []);
      }).catch((err: any) => {
        console.log("--请求失败:",err)
        reject(err);
      })
    })
   }

   get(config: any) {
    return this.request({ ...config, method: "get" })
   }

   post(config: any) {
    return this.request({ ...config, method: "post"})
   }
    
}

export default new HYRequest("http://codercba.com:9002");