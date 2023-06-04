// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000
// export { BASE_URL, TIME_OUT }

// 方式二
let BASE_URL = "";
if(process.env.NODE_ENV === 'development') {
    // 开发环境
    BASE_URL = 'http://codercba.com:9002'
}else if(process.env.NODE_ENV === 'production') {
    // 生产环境
    BASE_URL = 'http://coderxxx.com:9002'
}else {
    // 测试环境
    BASE_URL = 'http://coderyyy.com:9002'
}

export { BASE_URL }