import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 声明接口 HYRequestInterceptors 
// 主要是为了interceptor拦截器能从类实例化的时候自己声明一个外部的拦截器
export interface HYRequestInterceptors<T = AxiosResponse> {
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (err: any) => any
    responseInterceptor: (res: T) => T
    responseInterceptorCatch?: (err: any) => any
}


// 声明接口 HYRequestConfig 是继承于Axios的类 AxiosRequestConfig 然后将我们需要的接口在写进接口
// 例如 interceptors , showLoading 后期就可以有需求就往里面加接口
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: HYRequestInterceptors<T>
    showLoading?: boolean
  }