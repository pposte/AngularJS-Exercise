/**
 * Created by prateekposte on 4/27/16.
 */
var app = angular.module('myApp', []);
app.controller('ctrl', function($scope, $http ,$filter){
    $http.get('data/Contacts.json').success(function(response){
        $scope.myData = response;
        $http.get('data/Outlets.json').success(function(response1){
            $scope.outlets= response1;

            $scope.getOutletName = function(contact){
                var len = response1.length;
                console.log(len);
                for(var i=0; i<len;i++){
                    //console.log(response1[i].id);
                    if(response1[i].id==contact.outletId){
                        return response1[i].name;
                    }
                }
            };
            $scope.orderByField = 'firstName';
            $scope.reverseSort = false;
            $scope.currentPage = 0;
            $scope.pageSize = 25;
            $scope.data = [];
            $scope.numberOfPages=function(){
                return Math.ceil($scope.myData.length/$scope.pageSize);
            }
            for (var i=0; i<myData.length; i++) {
                $scope.data.push("Item "+i);
            }
        });
    });
});


//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
