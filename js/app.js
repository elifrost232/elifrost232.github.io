/* Routing Configs */

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/Login/', {
				templateUrl: 'partials/loginPage.html',
				controller: 'LoginController',
				controllerAs: 'loginData'
			}).
			when('/Question/:question_id?', {
				templateUrl: 'partials/questionPage.html',
				controller: 'QuestionController',				
				controllerAs: 'questionData'
			}).
			when('/Search/', {
				templateUrl: 'partials/searchPage.html',
				controller: 'SearchController',
				controllerAs : 'searchData'
			}).
			when('/Home/', {
				templateUrl: 'partials/homePage.html',
				controller: 'HomeController',
				controllerAs : 'homeData',
			}).
			otherwise({
				redirectTo: '/Login'
			});
}]);

//TagCloud Settings
$.fn.tagcloud.defaults = {
    size: {start: 14, end: 24, unit: 'pt'},
    color: {start: '#fff', end: '#2a6496'}
};
