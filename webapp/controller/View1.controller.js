sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Page"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("project1.controller.View1", {
			onInit: () => {
				console.log("On Init")
			},
			onClick: () => {
				var name = document.getElementById("container-project1---View1--productInput-inner").value;

				if(name === ''){
					MessageToast.show('Any name inserted')
				}else{
					MessageToast.show('this is the name: ' + name)
				}
			},
			onPress: () =>{
				MessageToast.show('there aren\'t a second page yet')
				//Controller.goToSecondPage()
			},

			/*goToSecondPage: function(oEvent){

			},*/

			/**
			 * @override
			 */
			/*onBeforeRendering: function() {
				Controller.prototype.onBeforeRendering.apply(this, arguments);
			},
			/**
			 * @override
			 */
			onAfterRendering: function() {
				Controller.prototype.onAfterRendering.apply(this, arguments);
			},
			/**
			 * @override
			 */
			onExit: function() {
				Controller.prototype.onExit.apply(this, arguments);
			}
		});
		/*createContent: function(Controller){
			var oSecondPage = new sap.m.Page()({
				title: 'secondPage'
			})		
			return oSecondPage
		}*/
		
	});
