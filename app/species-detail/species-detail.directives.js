angular.module('speciesDetail')
	.directive('distMap', ['$compile', function($compile){
		return{
			restrict: 'A',
			templateUrl: 'species-distmap/brazil_basemap_simp.svg',
			
			link: function(scope, element, attrs){			
				var regions = element[0].querySelectorAll('g');
				
				angular.forEach(regions, function(path, idx){
					var regionElmt = angular.element(path);
					regionElmt.attr("region", "");
					$compile(regionElmt)(scope);
				});
				
			}
		}
	}])
	
	.directive('region', ['$compile', function($compile){
		return{
			restrict: 'A',
			
			
			
			link: function(scope, element, attrs){
				scope.elementId = element.attr("id");
				
				element.attr("ng-class", "{ active: ( $ctrl.occStates.indexOf(\"" + scope.elementId +"\") > -1)}");
				element.removeAttr("region");
				$compile(element)(scope);
			}
		}
	}]);