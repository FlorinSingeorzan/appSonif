sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Detail", {
		onInit: function() {  
//			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			oRouter.getRoute("vcoin").attachPatternMatched(this._onObjectMatched, this);
			
			var iOriginalBusyDelay,
			oViewModel = new JSONModel({
				busy: true,
				delay: 0
			});
			sap.ui.core.UIComponent.getRouterFor(this).getRoute("vcoin").attachPatternMatched(this._onObjectMatched, this);
			// Store original busy indicator delay, so it can be restored later on
			iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
			this.getView().setModel(oViewModel, "objectView");
//			this.getView().getModel().metadataLoaded().then(function() {
//				// Restore original busy indicator delay for the object view
//				oViewModel.setProperty("/delay", iOriginalBusyDelay);
//			});
		},
		_onObjectMatched: function (oEvent) {
//			var cc = oEvent.getParameter("arguments").currencyId;
//			var textId = this.getView().byId("currencyName");
//			textId.setText(cc);
//			this.getView().bindElement({
//				path: "/" + oEvent.getParameter("arguments").currencyId,
//				model: "cryptocurrencyData"
//				/*,
//				events : {
//					change: this._onBindingChange.bind(this),
//					dataRequested: function (oEvent) {
//						this.getView().setBusy(true);
//					},
//					dataReceived: function (oEvent) {
//						this.getView().setBusy(false);
//					}
//				}
//				*/
//			});
			var sObjectPath = "/CryptocurrencyData(" + oEvent.getParameter("arguments").currencyId + ")";
			this._bindView(sObjectPath);
			
			
		},
		
		_bindView: function(sObjectPath) {
			var oViewModel = this.getView().getModel("objectView"),
				oDataModel = this.getView().getModel();

			this.getView().bindElement({
				path: sObjectPath,
				model: "cryptocurrencyData",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function() {
						oDataModel.metadataLoaded().then(function() {
							// Busy indicator on view should only be set if metadata is loaded,
							// otherwise there may be two busy indications next to each other on the
							// screen. This happens because route matched handler already calls '_bindView'
							// while metadata is loaded.
							oViewModel.setProperty("/busy", true);
						});
					},
					dataReceived: function() {
						oViewModel.setProperty("/busy", false);
					}
				}
			});
		},
		
		
		
		_onBindingChange : function (oEvent) {
			var oView = this.getView(),
			oViewModel = oView.getModel("objectView");

		// No data for the binding
		if (!oView.getBindingContext()) {
			sap.ui.core.UIComponent.getRouterFor(this).getTargets().display("notFound");
			return;
		}

		var oResourceBundle = this.getResourceBundle(),
			oObject = oView.getBindingContext().getObject(),
			sObjectId = oObject.currencyId,
			sObjectName = oObject.name;

		// Everything went fine.
		oViewModel.setProperty("/busy", false);
		oViewModel.setProperty("/shareSendEmailSubject",
			oResourceBundle.getText("shareSendEmailObjectSubject", [sObjectId]));
		oViewModel.setProperty("/shareSendEmailMessage",
			oResourceBundle.getText("shareSendEmailObjectMessage", [sObjectName, sObjectId, location.href]));
		}
	});
});  