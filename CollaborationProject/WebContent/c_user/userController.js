'use strict';
 
app.controller('AppController as ctrl', ['$scope', 'UserService', '$location', '$rootScope', '$cookieStore', '$http','$route', function ($scope, UserService, $location, $rootScope, $cookieStore, $http,$route) {
 
    console.log("AppController as ctrl...");
 
    $scope.user = {
       firstname:'',
       lastname:'',
       username:'',
       password:''
    };
  
    $scope.getUserDetails=[];
    $scope.register=function(){
    	
    	};
    	
    	 $scope.authenticate = function (user) {
    	        console.log("authentication..");
    	        UserService
    	                .authenticate(user)
    	                .then(
    	 
    	                        function (d) {
    	                            $scope.user = d;
    	                            console
    	                                    .log("user.errorCode :"
    	                                            + $scope.user.errorCode);
    	                            if ($scope.user.errorCode == "404") {
    	                                alert("Invalid credentials..Please Try again Later");
    	                                $scope.user.email = '';
    	                                $scope.user.password = '';
    	                            } else {
    	                                console
    	                                        .log("Valid Credentials..Navigating To Home Page...");
    	 
    	                                $rootScope.currentUser = $scope.user;
    	                                $rootScope.logincheck = true;
    	                                $http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.currentUser;
    	                                $cookieStore.put('currentUser',$rootScope.currentUser);
    	                                $cookieStore.put('logincheck',$rootScope.logincheck);
    	                                if ($rootScope.currentUser.role === "admin") {
    	                                    $location.path('/sortjob');
    	                                }
    	                                else if($rootScope.currentUser.role === "superadmin") {
    	                                    $location.path('/admin');
    	                                }
    	                                else {
    	                                    $location.path('/home');
    	                                }
    	                            }
    	                        },
    	                        function (errResponse) {
    	                            console
    	                                    .error("Error while authenticating users");
    	                        });
    	    };
    	
    $scope.approve=function(){
    	
    	 console.log("acceptRequest...");
         UserService.acceptRequest(email)
                 .then(
                         function (d) {
                             $scope.friend = d;
                             $route.reload();
                         },
                         function (errResponse) {
                             console
                                     .error("Error while accepting request in controller..");
                         });
    	
    };
    $scope.reject=function(){
    	
    	console.log("rejectRequest...");
        UserService.rejectRequest(email)
                .then(
                        function (d) {
                            $scope.friend = d;
                            $route.reload();
                        },
                        function (errResponse) {
                            console
                                    .error("Error while rejecting request in controller..");
                        });
    	
    };
    $scope.fetchAllUsers=function(){
    	 
    	console.log("fetchAllUsers...");
        UserService.fetchAllUsers()
                .then(
                        function (d) {
                            $scope.users = d;
                        },
                        function (errResponse) {
                            console
                                    .error("Error while fetching Users..");
                        });
    	
    };
    $scope.logout=function(){
    	
    	console.log("logout..");
        $rootScope.currentUser = {};
        $rootScope.logincheck = false;
        $cookieStore
        .put(
                'logincheck',
                $rootScope.logincheck);
        $cookieStore.remove('currentUser');
        UserService.logout();
        $location.path('/');
    	
    };
    $scope.login=function(){
	
    	{
            console.log("login validation ???",
                    $scope.user);
            $scope.authenticate($scope.user);
        }
    	
    };
}]);
