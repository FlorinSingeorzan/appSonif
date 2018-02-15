sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(jQuery, Controller, JSONModel, NumberFormat) {
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
		}
	});
});  