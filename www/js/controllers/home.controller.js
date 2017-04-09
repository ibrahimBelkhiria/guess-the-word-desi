/**
 * Created by harsh on 4/9/2017.
 */
'use strict';

gameModule.controller('homeController', homeController);
homeController.$inject = ['$scope', '$rootScope', 'gameService']

function homeController($scope, $rootScope, gameService) {

	$rootScope.gameConstants = {
	  	initialLevel: 0,
	  	numberOfPics: 4,
	  	maxSelectedLetters: 9,
	  	maxChoosableLetters: 18,
	  	totalGameLevels: 50
  	}
    gameService.getUserData()
	  		 .success(function(data){
	  			$rootScope.currentLevel = data.currentLevel;
	  		  })
	  		 .error(function(err){
				console.log(err, "Error while retrieving App Data")
		      });

}
