sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    
	"use strict";
//	var singleCall=1;
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.VCurrency", {
		onInit: function() {  
		},
		eth:function(){
			this.byId("coin").rerender();
			var calle=ethereum();
//			if (singleCall==1){
//				var calle=ethereum();
//			}
//			
//			if (singleCall==2){
//				var calle=bitcoin();
//			}
//			if (singleCall==3){
//				this.byId("coin").rerender();
//				singleCall=0;
//			}
//			singleCall++;
		},
		btc:function(){
			this.byId("coin").rerender();
			var calle=bitcoin();
		},
		eos:function(){
			this.byId("coin").rerender();
			var calle=eos();
		},
		ltc:function(){
			this.byId("coin").rerender();
			var calle=litecoin();
		},
		neo:function(){
			this.byId("coin").rerender();
			var calle=neo();
		},
		iota:function(){
			this.byId("coin").rerender();
			var calle=iota();
		},
		trx:function(){
			this.byId("coin").rerender();
			var calle=tron();
		},
		bth:function(){
			this.byId("coin").rerender();
			var calle=bcash();
		},
		zec:function(){
			this.byId("coin").rerender();
			var calle=zcash();
		},
		xmr:function(){
			this.byId("coin").rerender();
			var calle=monero();
		},
		dash:function(){
			this.byId("coin").rerender();
			var calle=dash();
		},
		xrp:function(){
			this.byId("coin").rerender();
			var calle=ripple();
		}
	});
});  
