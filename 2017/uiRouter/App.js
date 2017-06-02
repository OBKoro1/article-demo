/**
 * Created by OB、koro1 on 2017/4/10.
 */

var myApp = angular.module("myApp", ["ui.router"]);//声明AngularJS模块, 并把ui-router传入AngularJS主模块，这里叫做App模块，告诉html，这是angular JS作用的页面
myApp.config(function ($stateProvider, $urlRouterProvider) {
    //这一行声明了把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了.
    $urlRouterProvider.when("", "/PageTab");
    //如果没有路由引擎能匹配当前的导航状态，默认将路径路由至 PageTab.html, 这个页面就是状态名称被声明的地方. 只要理解了这个，那它就像switch case语句中的default选项.就是一个默认的视图选项
    $stateProvider
        //这一行定义了会在main.html页面第一个显示出来的状态（就是进入页面先加载的html），作为页面被加载好以后第一个被使用的路由.
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {//引号里面代表Page1是PageTab的子页面，用.隔开
            url:"/Page1",
            templateUrl: "Page-1.html"
        })
        .state("PageTab.Page2", {//需要跳转页面的时候，就是用这双引号里面的地址
            url:"/Page2",
            templateUrl: "Page-2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        });
});