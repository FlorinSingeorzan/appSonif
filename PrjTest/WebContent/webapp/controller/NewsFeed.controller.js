sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(jQuery, Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.NewsFeed", {
		onInit: function() {
			var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/News.json");
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel, "news");
		},
		onNavButtonPressed: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home");
		},
		onOriginalPostPage: function(oEvent) {                 // nu conteaza numele parametrului
			switch(oEvent.getSource().getSender()) {
			    case "European Central Bank want to ban bitcoin":
			    	window.open("http://fortune.com/2018/02/14/bitcoin-posts-biggest-surge-in-weeks/","_blank");
			        break;
			    case "Cryptocurrency news":
			    	window.open("https://www.cnbc.com/2018/02/15/bitcoin-recovering-10000-could-bring-in-new-buyers.html","_blank");
			        break;
			    case "The best value!":
			    	window.open("https://www.theguardian.com/technology/2018/feb/02/bitcoin-biggest-bubble-in-history-says-economist-who-predicted-2008-crash","_blank");
			    	break;
			    default:   
			}
		}
	});
});  