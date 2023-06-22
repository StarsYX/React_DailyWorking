;(function(window, $){

    //公共的请求
    function request(config = {}) {
      return $.ajax({
            url: config.url || "",
            method: config.method || "GET",
            timeout: config.timeout || 5000,
            data: config.data || {},
            headers: config.headers || {},
            ...config
        })
    }

    //get 映射到ajax的get方法
    function get(url, data, config) {
        console.log("-0---get-方法");
        return request({
            url,
            method: 'GET',
            data,
            ...config,
        })
    }

    //POSt 映射到ajax的post方法
    function post(url, data, config) {
        return request({
            url,
            method: 'post',
            data,
            ...config,
        })
    }

    window.HYReq = {
        request,
        get,
        post,
    }

})(window, jQuery);