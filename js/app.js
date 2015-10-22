var myApp = angular.module('myApp', [
'ngRoute',
'mandiControllers',
'angular-loading-bar'
],function($provide) {
        // Prevent Angular from sniffing for the history API
        // since it's not supported in packaged apps.
        $provide.decorator('$window', function($delegate) {
            $delegate.history = null;
            return $delegate;
        });
    });
myApp.config(['$routeProvider', function($routeProvider){
$routeProvider.
when('/list', {
templateUrl: 'partials/list.html',
controller: 'ListController'
}).
when('/details/:itemId',{
templateUrl: 'partials/details.html',
controller: 'DetailsController'
}).
otherwise({
redirectTo: '/list'
});
}]);
