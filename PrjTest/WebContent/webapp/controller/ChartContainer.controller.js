sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.ChartContainer", {
		onNavButtonPressed: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home");
		},
		
		onClick: function(oEvent) {
			//var oNode = oEvent.getParameters();
			var sPath = oNode.getBindingContext().getPath() + "/quickChartView";
			
			if (!this.oQuickView) {
		
				this.oQuickView = sap.ui.xmlfragment("sap.suite.ui.commons.PrjTest.fragment.QuickChartView", this);
				this.getView().addDependent(this.oQuickView);
				
			}
			this.oQuickView.bindElement(sPath);
			this.oQuickView.open();
		},

		onExit: function () {
			if (this.oQuickView) {
				this.oQuickView.destroy();
			}
		}
	
	});
});