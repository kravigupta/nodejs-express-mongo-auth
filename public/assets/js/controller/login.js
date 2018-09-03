angular.module("server")

	.controller("LoginController", function ($scope, loginService) {
		$scope.page = {};
		$scope.page.title = "Login to server";
		$scope.page.lastUpdated = new Date();
	});