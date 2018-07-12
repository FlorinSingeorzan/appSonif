sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

	return Controller.extend("sap.Sonif.controller.Detail", {
		onInit: function() {  
			var iOriginalBusyDelay,
			oViewModel = new JSONModel({
				busy: true,
				delay: 0
			});
			sap.ui.core.UIComponent.getRouterFor(this).getRoute("vcoin").attachPatternMatched(this._onObjectMatched, this);
			iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
			this.getView().setModel(oViewModel, "objectView");
		},
		_onObjectMatched: function (oEvent) {
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

			if (!oView.getBindingContext()) {
				sap.ui.core.UIComponent.getRouterFor(this).getTargets().display("notFound");
				return;
			}
	
			var oResourceBundle = this.getResourceBundle(),
				oObject = oView.getBindingContext().getObject(),
				sObjectId = oObject.currencyId,
				sObjectName = oObject.name;

			oViewModel.setProperty("/busy", false);
			oViewModel.setProperty("/shareSendEmailSubject",
				oResourceBundle.getText("shareSendEmailObjectSubject", [sObjectId]));
			oViewModel.setProperty("/shareSendEmailMessage",
				oResourceBundle.getText("shareSendEmailObjectMessage", [sObjectName, sObjectId, location.href]));
		}
	});
});  