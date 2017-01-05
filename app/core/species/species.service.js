angular.module('core.species').factory('Species', ['$resource', function($resource){
		return $resource('species/:speciesSlug.json', {}, {
			
			// method defined for querying 'species/species.json', used in species-list component
			query: {method: 'GET',
					params: {speciesSlug: 'species'}, // assigns to :speciesSlug parameter value 'species'
					isArray: true}
		});
	}
]);