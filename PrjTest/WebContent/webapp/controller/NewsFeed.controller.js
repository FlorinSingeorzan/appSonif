sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(jQuery, Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.Sonif.controller.NewsFeed", {
		onInit: function() {
			var sDataPath = jQuery.sap.getModulePath("sap.Sonif.model.data", "/News.json");
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
			    case "Bitcoin PRICE SHOCK: Stark warning cryptocurrency could CRASH faster than dot-com bubble":
			    	window.open("https://www.express.co.uk/finance/city/934214/Bitcoin-price-shock-cryptocurrency-value-crash-warning-latest-BTC-to-USD-market-prediction","_blank");
			    	break;
			    case "Making Sense of the World's Cryptocurrency Rules":
			    	window.open("https://www.bloomberg.com/news/articles/2018-03-19/is-this-legal-making-sense-of-the-world-s-cryptocurrency-rules","_blank");
			    	break;
			    default:   
			}
		}
	});
});  