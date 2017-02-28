var app = angular.module('analysys', ["ui.router"]);

app.config(['$stateProvider',"$locationProvider","$urlRouterProvider",function($stateProvider,$locationProvider,$urlRouterProvider) {
	$locationProvider.hashPrefix("");
//	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("index");
	$stateProvider.state("index",{
		url:'/index',
		views:{
			main:{
				templateUrl:'./templates/home.tpl.html'	
			}
		}
	}).state("about",{
		url:'/about',
		views:{
			main:{
				templateUrl:'./templates/about.tpl.html'	
			}
		}
	}).state("support",{
		url:'/support',
		views:{
			main:{
				templateUrl:'./templates/support.tpl.html'	
			}
		}
	}).state("analysys",{
		url:'/analysys',
		views:{
			main:{
				templateUrl:'./templates/analysys.tpl.html'	
			}
		}
	})
}])