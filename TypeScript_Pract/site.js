var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("---test Site");
    };
    return Site;
}());
var obj = new Site();
obj.name();
