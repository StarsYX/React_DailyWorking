(function(window, $){
    //在jquery的对象上添加了一个showlinklocation
    // $.fn.showLinklocation = function() {
    //     console.log(this); //this为jQuery对象
    //     this.append('http://www.xxx.com')
    // }

    //完善1
    // $.fn.showLinklocation = function() {
    //     console.log(this); //this为jQuery对象
    //     this.filter('a').append('(http://www.xxx.com)')
    // }

    //
    $.fn.showLinklocation = function() {
        console.log(this); //this为jQuery对象
        this.filter('a').each(function() {
            var $a = $(this)//for each里的element
            var link = $a.attr('href')
            $a.append(`(${link})`)
        })
        return this
    }
})(window, jQuery);