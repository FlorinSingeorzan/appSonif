sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat",
	"sap/m/library"
], function(jQuery, Controller, JSONModel, NumberFormat, MobileLibrary) {
	"use strict";

	return Controller.extend("sap.Sonif.controller.Startpage", {
		onInit: function() {
			var sDataPath = jQuery.sap.getModulePath("sap.Sonif.model.data", "/News.json");
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel, "news");
		},
		navHome: function(){
			this.getOwnerComponent().getRouter().navTo("home");
		},

		getProgress: function(aNodes) {
			if (!aNodes || aNodes.length === 0) {
				return 0;
			}
			var iSum = 0;
			for (var i = 0; i < aNodes.length; i++) {
				iSum += aNodes[i].state === "Positive";
			}
			var fPercent = (iSum / aNodes.length) * 100;
			return fPercent.toFixed(0);
		},

		getEntityCount: function(entities) {
			return entities && entities.length || 0;
		},

		formatNumber: function(value) {
			var oFloatFormatter = NumberFormat.getFloatInstance({
				style: "short",
				decimals: 1
			});
			return oFloatFormatter.format(value);
		},

		formatJSONDate: function(date) {
			var oDate = new Date(Date.parse(date));
			return oDate.toLocaleDateString();
		},

		onNavToProcessFlow: function() {
			this.getRouter().navTo("processFlow");
		},

		onNavToChartContainer: function() {
			this.getRouter().navTo("chartContainer");
		},

		onNavToReviews: function (event) {
				this.getRouter().navTo("reviews");
			
		},
		onNavToNewsFeed: function (event) {
			if (event.getSource().getState() === MobileLibrary.LoadState.Loaded) {
				this.getRouter().navTo("newsFeed");
			}
		},
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},
		externalLinkWhatIsCrypto: function() {
			window.open("https://cointelegraph.com/bitcoin-for-beginners/what-are-cryptocurrencies#invest","_blank");
		},
		externalLinkExchanges: function() {
			window.open("https://www.investopedia.com/articles/investing/111914/look-most-popular-bitcoin-exchanges.asp","_blank");
		},
		externalLink: function(){
			window.open("https://stackoverflow.com/questions/18402522/button-action-to-navigate-another-url-link-in-sapui5","_blank");
		},
		onNavToCurrency: function(){
			this.getRouter().navTo("vcurrency");
		},
		onNavToMarket : function(){
			this.getRouter().navTo("market");
		},
		onNavToConvertor : function(){
			this.getRouter().navTo("converter");
		},
		onNavToFaq : function(){
			this.getRouter().navTo("faq");
		},
		onNavToAboutUs : function(){
			this.getRouter().navTo("about");
		},
		onNavToMasters : function(){
			this.getRouter().navTo("masters");
		}
	});
});