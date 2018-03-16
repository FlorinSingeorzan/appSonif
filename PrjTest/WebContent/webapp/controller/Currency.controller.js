sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Currency", {
		onInit: function() {  
			var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/CryptocurrencyData.json");
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel, "cryptocurrencyData");
		},
		ontest: function(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			MessageToast.show(oItem.getBindingContext("cryptocurrencyData").getPath().substr(1));
			oRouter.navTo("detail", { 
				currencyPath: oItem.getBindingContext("cryptocurrencyData").getPath().substr(1)
			});
		}
	});
});  ;