var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	$scope.quotes = dataService.getQuote();

	$scope.quoteMaker = function() {
		dataService.addQuote($scope.newQuote);
		$scope.newQuote = "";
	}

	$scope.quoteRemove = function() {
		dataService.removeQuote($scope.str);
		$scope.str = "";
	}

});