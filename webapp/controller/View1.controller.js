sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("project1.controller.View1", {
			onInit: function () {
				console.log("On Init")
			},
			onClick: () =>{
				MessageToast.show('Button is clicked')
			},
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
	});
