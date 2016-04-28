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
        });
    });
});