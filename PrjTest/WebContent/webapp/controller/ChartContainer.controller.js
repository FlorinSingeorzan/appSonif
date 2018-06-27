sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/NumberFormat"
], function(Controller,NumberFormat) {
	"use strict";
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.ChartContainer", {
		onNavButtonPressed: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home");
		},
		formatJSONDate: function(date) {
			var dateT = new Date(date*1000);
			var dateFormat = 
			    sap.ui.core.format.DateFormat.getDateInstance({pattern : "dd.MMM.yyyy" });   
			var dateStr = dateFormat.format(dateT); 
	
			return dateStr;
		},
		formatNumber: function(value) {
			
			var oFloatFormatter = NumberFormat.getFloatInstance({
				style: "float",
				decimals: 4
			});
			return oFloatFormatter.format(value);
		},
	
	});
});