namespace FitnessForumProject {

    angular.module('FitnessForumProject', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: FitnessForumProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('topics', {
                url: '/topics',
                templateUrl: '/ngApp/views/topics.html',
                controller: FitnessForumProject.Controllers.TopicsController,
                controllerAs: 'controller'
            })
            .state('addtopic', {
                url: '/addtopic',
                templateUrl: '/ngApp/views/addtopic.html',
                controller: FitnessForumProject.Controllers.AddTopicController,
                controllerAs: `controller`
            })
            .state('addsubtopic', {
                url: '/addsubtopic/:id',
                templateUrl: '/ngApp/views/addsubtopic.html',
                controller: FitnessForumProject.Controllers.AddSubTopicController,
                controllerAs: 'controller'
            })
            .state('subtopics', {
                url: '/subtopics/:id',
                templateUrl: '/ngApp/views/subtopics.html',
                controller: FitnessForumProject.Controllers.SubTopicsController,
                controllerAs: 'controller'
            })
            .state('comments', {
                url: '/comments/:id',
                templateUrl: '/ngApp/views/comments.html',
                controller: FitnessForumProject.Controllers.CommentsController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: FitnessForumProject.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: FitnessForumProject.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: FitnessForumProject.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: FitnessForumProject.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            }) 
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: FitnessForumProject.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('FitnessForumProject').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('FitnessForumProject').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
