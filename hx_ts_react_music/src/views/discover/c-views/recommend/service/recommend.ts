import hyRequest from "@/service/index";

export function getBanners() {
    console.log("---我要请求数据了。。。")
    return hyRequest.get({
       url: '/banner'
    }).then((res: any) => {
        console.log("--res:",res);
        return res;
    });
}