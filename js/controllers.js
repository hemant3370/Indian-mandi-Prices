var mandiControllers = angular.module('mandiControllers', []);

mandiControllers.controller('ListController' , ['$scope', '$http',function($scope, $http) {
$http.get('https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=YOUR KEY').success(function(data) {
$scope.mandi = data;
$scope.mandiOrder = 'commodity';
});

}]);

mandiControllers.controller('DetailsController' , ['$scope', '$http','$routeParams',function($scope, $http, $routeParams) {
$http.get('https://data.gov.in/api/datastore/resource.json?resource_id=9ef84268-d588-465a-a308-a864a43d0070&api-key=YOUR KEY').success(function(data) {
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
});

}]);
