sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(UIComponent,JSONModel,Device) {
	"use strict";

	return UIComponent.extend("sap.suite.ui.commons.PrjTest.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();
			
			
			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
			
		},
		createContent: function() {
			// create root view
			return sap.ui.view("AppView", {
				viewName: "sap.suite.ui.commons.PrjTest.view.App",
				type: "XML"
			});
		}
	});
});
