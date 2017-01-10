angular.module('speciesCompsize').component('speciesCompsize', {
templateUrl: "/species-compsize/species-compsize.template.html",
	bindings: {
		handsize: '<',
		animalsize: '<',
		animalicon: '<',
		thematiccolor: '<'
	},
	controller: function SpeciesCompsizeController(){
		self=this;
		
		self.$onChanges = function({animalsize}){
			self.setCompSize(animalsize.currentValue, self.handsize);
		}
		
		self.setCompSize = function(speciesSize, handSize){ /* sets species and hand percentual sizes */
				var spCompSize = speciesSize/handSize;
				
				if ( spCompSize > 1 ){ /* species is bigger than hand */
					self.spRenderSize = 100;
					self.handRenderSize = 100/spCompSize;					
				} else{ 
					self.handRenderSize = 100;
					self.spRenderSize = spCompSize*100;
				}
				
			};
			
	}
});