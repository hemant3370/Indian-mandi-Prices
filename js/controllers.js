
var mandiControllers = angular.module('mandiControllers', []);
var url = null;
mandiControllers.controller('ListController' , ['$scope', '$http',function($scope, $http) {
 

$scope.url = 'https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=84774f4bb9dc59c6e753bfea7e3e2e5e';
url = 'https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=84774f4bb9dc59c6e753bfea7e3e2e5e';

$http.get($scope.url).success(function(data) {
$scope.mandi = data;
});

$scope.ListController = function(){

$scope.url = 'https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=84774f4bb9dc59c6e753bfea7e3e2e5e&filters['+$scope.mandiOrder+']='+$scope.key;
url =  'https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=84774f4bb9dc59c6e753bfea7e3e2e5e&filters['+$scope.mandiOrder+']='+$scope.key;
$http.get($scope.url).success(function(data) {

 
$scope.mandi = data;
 
});

$scope.mandi = data;}
}]);



mandiControllers.controller('DetailsController' , ['$scope', '$http','$routeParams',function($scope, $http, $routeParams) {

$http.get(url).success(function(data) {



$scope.mandi = data;
$scope.whichItem = $routeParams.itemId;

if($routeParams.itemId > 0){
$scope.preItem = Number($routeParams.itemId)-1;
}
else{
$scope.preItem = $scope.mandi.records.length-1;
}
if($routeParams.itemId < $scope.mandi.records.length-1){
$scope.nextItem = Number($routeParams.itemId)+1;
}
else{
$scope.nextItem = 0;
}
);
}


}]);
