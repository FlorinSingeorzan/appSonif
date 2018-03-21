sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Detail", {
		onInit: function() {  
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("vcoin").attachPatternMatched(this._onObjectMatched, this);
			
		},
		_onObjectMatched: function (oEvent) {
			var cc = oEvent.getParameter("arguments").currencyId;
			var textId = this.getView().byId("currencyName");
			textId.setText(cc);
			this.getView().bindElement({
				path: "/cryptocurrencyData(" + oEvent.getParameter("arguments").currencyId+")",
				model: "cryptocurrencyData"
				/*,
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						this.getView().setBusy(true);
					},
					dataReceived: function (oEvent) {
						this.getView().setBusy(false);
					}
				}
				*/
			});
		},
		_onBindingChange : function (oEvent) {
			if (!this.getView().getBindingContext()) {
				sap.ui.core.UIComponent.getRouterFor(this).getTargets().display("notFound");
			}
		}
	});
});  