sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/NumberFormat",
	"sap/ui/model/json/JSONModel",
	'sap/m/Dialog',
	'sap/m/Button',
	'sap/m/Text'
	
], function(Controller,NumberFormat,JSONModel,Dialog,Button,Text) {
	"use strict";
	return Controller.extend("sap.Sonif.controller.ChartContainer", {
		onInit: function(){
//			var th=this;
//			
//			$.ajax({
//			    type: 'GET',
//			    url: "https://api.blockchain.info/charts/market-price?timespan=1days&format=json", 
//			    async: false
//			  }).done(function(resp) {
//			  })
//			  .fail(function(err) {
//			    console.log("error");
//			    th.fnError();
//			  });


		},
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
		fnError: function () {
			var dialog = new Dialog({
				title: 'Error',
				type: 'Message',
				state: 'Error',
				content: new Text({
					text: 'The only error you can make is not even trying.'
				}),
				beginButton: new Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
		},
		fnSuccess: function(data){
			console.log("ok");
		},
	
	});
});