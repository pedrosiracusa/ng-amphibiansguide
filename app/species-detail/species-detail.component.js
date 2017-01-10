angular.module('speciesDetail').component('speciesDetail', {
	templateUrl: 'species-detail/species-detail.template.html',
	controller: ['$routeParams', 'Species', function SpeciesDetailController($routeParams, Species){
			var self=this;
			
			self.species = Species.get(
				{speciesSlug: $routeParams.speciesSlug}, 
				function(species){ 
					self.setImage(species.images[0]); // call setImage function as soon as species is retrieved
					self.setOccStates(species.occurrenceStates);
					self.setThematicColor(species.family_thematic_color);
				}
			);
			
			self.setImage=function setImage(imageUrl){
				self.mainImageUrl=imageUrl;
			}
			
			self.setOccStates=function(statesArr){
				self.occStates=statesArr;
			}
			
			self.setThematicColor=function(color){
				
				hexToGray = function(color){					
					if (color[0]=="#"){
						var color = color.replace("#", "");						
						if(color.length===6){
							r=parseInt(color.substring(0,2), 16);
							g=parseInt(color.substring(2,4), 16);
							b=parseInt(color.substring(4,6), 16);
							
							grayscale = Math.floor((r+g+b)/3);
							return grayscale;
						}
					}			
					throw new Error('Bad Hex');
				}
								
				self.fgThemColor={"fill": color, "color": color}
				self.bgThemColor={"background-color": color}
				
				if(hexToGray(color)<127)
					self.bgThemColor["color"]="white";	
				
			}		
			
		}
	]
});



