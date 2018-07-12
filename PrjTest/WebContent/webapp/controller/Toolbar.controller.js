sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";

sap.ui.controller("sap.Sonif.controller.Toolbar", {
	onInit: function() {  
		var oModel = new JSONModel("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");		
		this.getView().setModel(oModel,"actualv");
//		this.updateData ();
		var th =this;
		setInterval( function() { th.updateData (); }, 10000 );
	},
	updateData: function(){
		var oModel = new JSONModel("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");
		this.getView().setModel(oModel,"actualv");
		this.byId("avalue").rerender();
	},
	

	navHome: function(){
		this.getOwnerComponent().getRouter().navTo("home");
	},
	
	toggleShell : function (){
		MessageToast.show(this.getView());
	}
});
});  
