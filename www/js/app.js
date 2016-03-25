var app = angular.module('tvchat', [
	'ionic','ionic.service.core',
	'ngCordova',
	'firebase',
	'angularMoment',
	'tvchat.controllers',
	'tvchat.services',
	'tvchat.filters',
	'tvchat.utils',
	'ionic.service.analytics'
]);


app.constant("FIREBASE_URL", 'https://tvchat-prod-nncl.firebaseio.com');
app.constant("FACEBOOK_APP_ID", '1582081322109343');

app.run(function ($rootScope, $ionicPlatform, $cordovaStatusbar, $ionicPlatform, $ionicAnalytics) {


		$ionicPlatform.ready(function () {

			$ionicAnalytics.register();

			// Hide the accessory bar by default
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			// Color the iOS status bar text to white
			if (window.StatusBar) {
				$cordovaStatusbar.overlaysWebView(true);
				$cordovaStatusbar.style(0); //Light
			}

			// DEPLOY
			var deploy = new Ionic.Deploy();

			deploy.watch().then(

				function noop(){

				},

				function noop(){

				},

				function hasUpdate(hasUpdate){
					console.log('Has update: ' + hasUpdate);

					deploy.update().then(function(deployResult){
						// deployResult will be true when successfull
						// and false otherwise
					}, function(deployUpdateError){
						console.log('Ionic deploy: Update Error: ' + deployUpdateError);
					}, function(deployProgress){
						console.log('Ionic deploy progress... ' + deployProgress);
					});
				}

			);
		});
	});

app.config(function ($stateProvider, $urlRouterProvider, FACEBOOK_APP_ID) {
	openFB.init({appId: FACEBOOK_APP_ID});
});

app.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('intro', {
				url: '/',
				templateUrl: 'templates/intro.html',
				controller: 'IntroCtrl'
			})

			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: 'MenuCtrl'
			})

			.state('app.search', {
				url: "/search",
				views: {
					'menuContent': {
						templateUrl: "templates/search.html",
						controller: 'SearchCtrl'
					}
				}
			})

			.state('app.show', {
				url: "/show/:showId",
				cache: false,
				views: {
					'menuContent': {
						templateUrl: "templates/show.html",
						controller: 'ShowCtrl'
					}
				}
			})
		;

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/');

	});
