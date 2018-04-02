sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Convertor", {
		onInit: function() {  
		},
		dollarChange: function (oEvent) {
			var dollar= this.byId("dollar").getValue();
			this.byId("bitcoin").setValue(dollar/7033);
			this.byId("ethereum").setValue(dollar/387);
		},
		bitcoinChange: function (oEvent) {
			var bitcoin= this.byId("bitcoin").getValue();
			this.byId("dollar").setValue(bitcoin*7033);
			this.byId("ethereum").setValue(bitcoin*18);
		},
		ethereumChange: function (oEvent) {
			var ethereum= this.byId("ethereum").getValue();
			this.byId("dollar").setValue(ethereum/378);
			this.byId("bitcoin").setValue(ethereum/18.2);
		}
	});
});  