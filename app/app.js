'use strict';

// Declare app level module which depends on views, and components
angular.module('speciesguideApp', [
  'ngRoute',
  'speciesDetail',
  'speciesList',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
	when('/', {templateUrl: 'base.template.html'}).
	when('/species', {template: '<species-list></species-list>'}).
	when('/species/:speciesSlug', {template: '<species-detail></species-detail>'}).
  otherwise({redirectTo: '/species'});
}]);
