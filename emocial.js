//programing test for emocial
//made by Antoine Goubin

//declaration of the app
var app = angular.module('monApp', []);
app.controller('formController', function($scope, $http) {
    //initilisation of the controler
    //definition of submit function
    $scope.submit = function(){
        //getting the data as a JSON
        var data=$scope.user;
        //config definition
                var config = {
                    headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                            }
                }
                //sending data
                $http.post('http://private-e2353-js8.apiary-mock.com/posttoform', data, config)
                //succes case
            .success(function (data, status, headers, config) {
                    console.log('data sent ');
            })
                //failed case
            .error(function (data, status, header, config) {
                console.log('Data not sent')
            });
    }

});

