sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    
	"use strict";
	var singleCall=1;
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.VCurrency", {
		onInit: function() {  
			var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/CryptocurrencyData.json");
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel, "cryptocurrencyData");
			console.log(oModel);
		},
		eth:function(){
			if (singleCall==1){
				var calle=ethereum();
			}
			
			if (singleCall==2){
				var calle=bitcoin();
			}
			if (singleCall==3){
				this.byId("coin").rerender();
				singleCall=0;
			}
			singleCall++;
		}
	});
});  
