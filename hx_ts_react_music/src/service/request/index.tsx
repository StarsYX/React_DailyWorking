import axios, { AxiosInstance } from "axios";
import { HYRequestConfig } from "./type";
// import { request } from "http";

class HYRequest {
    instance: AxiosInstance

    constructor(config: HYRequestConfig) {
        this.instance = axios.create(config);

        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (err:any) => {
                return err
            }
        )

        this.instance.interceptors.request.use(
            // config.interceptors.requestSuccessFn,
            // config.interceptors.requestFailureFn
        )

        this.instance.interceptors.response.use(
            // config.interceptors.responseSuccessFn,
            // config.interceptors.responseFailureFn
        )

        // request<T = any>(config: HYRequestConfig<T>) {
        //     if(config.interceptors?.requestSuccessFn) {
        //         config = config.interceptors.requestSuccessFn(config);
        //     }
        // }

        // get<T = any>(config: HYRequestConfig<T>) {
        //     return this.request({ ...config, method: 'GET' })
        // }

        // post<T = any>(config: HYRequestConfig<T>) {
        //     return this.request({ ...config, method: 'POST' })
        // }

        // delete<T = any>(config: HYRequestConfig<T>) {
        //     return this.request({ ...config, method: 'DELETE' })
        // }

        // patch<T = any>(config: HYRequestConfig<T>) {
        //     return this.request({ ...config, method: 'PATCH' })
        // }
    }
}