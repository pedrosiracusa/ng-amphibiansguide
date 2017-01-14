angular.module('sidebar').component('sidebar', {
	templateUrl: "nav-sidebar/sidebar.template.html",
	require: {
		parentCtrl: '^speciesDetail'
	},
	controller: function SidebarController(){

		this.$onInit = function(){
			
			this.parentCtrl.openSidebar = function(){
				this.isToggled = true;
			};
			
		}
		
		this.closeSidebar = function(){
			this.parentCtrl.isToggled = false;
		}
		
		
	}
});