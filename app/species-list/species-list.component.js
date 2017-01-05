angular.module('speciesList').component('speciesList', {
	templateUrl: 'species-list/species-list.template.html',
	controller: ['Species', function SpeciesListController(Species){
			this.speciess = Species.query();
			this.orderProp = 'scientificName';
			}
		]
	
});