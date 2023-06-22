;(function(g) {

    // g：browser 中是window 全局对象
    //node中 是global 全局对象
    //globalThis -> ES11

    g = typeof globalThis !== 'undefined' ? globalThis : g || self

    //构造函数
    function Dayjs() {
        var date = new Date()
        this.$Y = date.getFullYear()
        this.$M = date.getMonth()
        this.$D = date.getDate()
    }

    Dayjs.prototype.format = function() {
        return `${this.$Y}-${(this.$M + 1)}-${this.$D}`
    }

    //工厂函数
    function dayjs() {
        return new Dayjs();
    }

    //统一导出
    g.dayjs = dayjs
})(this)