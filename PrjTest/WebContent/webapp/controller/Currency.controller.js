sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.Sonif.controller.Currency", {
		onInit: function() {  
			var sDataPath = jQuery.sap.getModulePath("sap.Sonif.model.data", "/CryptocurrencyData.json");
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel, "cryptocurrencyData");
		},
		ontest: function(oEvent) {
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("cryptocurrencyData");
			sap.ui.core.UIComponent.getRouterFor(this).navTo("vcoin",{
				currencyId : oCtx.getProperty("currencyId")
			});
			
		}
	});
});  
