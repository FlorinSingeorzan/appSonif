sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(jQuery, Controller, JSONModel, MessageToast) {
	"use strict";
	
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.ProcessFlow", {

		onNavButtonPressed: function() {
			this.getOwnerComponent().getRouter().navTo("home");
		},
		
		onInit: function () {
			var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/ProcessFlowData.json");
			var oModel = new JSONModel(sDataPath);
			this.getView().setModel(oModel);

			this.oProcessFlow = this.getView().byId("processflow");
			this.oProcessFlow.updateModel();
		},

		onZoomIn: function () {
			this.oProcessFlow.zoomIn();

			MessageToast.show("Zoom level changed to: " + this.oProcessFlow.getZoomLevel());
		},

		onZoomOut: function () {
			this.oProcessFlow.zoomOut();

			MessageToast.show("Zoom level changed to: " + this.oProcessFlow.getZoomLevel());
		},

		onNodePress: function(oEvent) {
			var oNode = oEvent.getParameters();
			var sPath = oNode.getBindingContext().getPath() + "/quickView";
			
			if (!this.oQuickView) {
		
				this.oQuickView = sap.ui.xmlfragment("sap.suite.ui.commons.PrjTest.fragment.QuickView", this);
				MessageToast.show("Merge la press.");
				this.getView().addDependent(this.oQuickView);
				
			}
			this.oQuickView.bindElement(sPath);
			this.oQuickView.openBy(oNode);
		},

		onExit: function () {
			if (this.oQuickView) {
				this.oQuickView.destroy();
			}
		}
	});
});
