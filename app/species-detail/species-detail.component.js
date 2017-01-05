angular.module('speciesDetail').component('speciesDetail', {
	templateUrl: 'species-detail/species-detail.template.html',
	controller: ['$routeParams', 'Species', function SpeciesDetailController($routeParams, Species){
			var self=this;
			
			self.species = Species.get(
				{speciesSlug: $routeParams.speciesSlug}, 
				function(species){ 
					self.setImage(species.images[0]); // call setImage function as soon as species is retrieved
					self.setOccStates(species.occurrenceStates);
				}
			);
			
			self.setImage=function setImage(imageUrl){
				self.mainImageUrl=imageUrl;
			};
			
			self.setOccStates=function(statesArr){
				self.occStates=statesArr;
			}
			
			self.getCompSize = function(handSize, renderSize){
				
				if ( self.species.size > handSize ){ return { 
						handSize: (handSize / self.species.size) * renderSize,
						specSize: renderSize
					};
					
				} else{ return{
						handSize: renderSize,
						specSize: (self.species.size / handSize) * renderSize
					};
				}		
			};
			
			
		}
	]
});



