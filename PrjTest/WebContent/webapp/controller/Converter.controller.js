sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";
	var singleCall=1;
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Converter", {

	
		onInit: function() {  
			var pes="hunn";
		},
		dollarChange: function (oEvent) {
			var dollar= this.byId("dollar").getValue();
			this.byId("bitcoin").setValue(dollar/7033.38);
			this.byId("ethereum").setValue(dollar/387.42);
			this.byId("iota").setValue(dollar*0.615);
			this.byId("ripple").setValue(dollar*1.447);
		},
		bitcoinChange: function (oEvent) {
			var bitcoin= this.byId("bitcoin").getValue();
			this.byId("dollar").setValue(bitcoin*7033.38);
			this.byId("ethereum").setValue(bitcoin*18);
			this.byId("iota").setValue(bitcoin*4992);
			this.byId("ripple").setValue(bitcoin*11736);
		},
		ethereumChange: function (oEvent) {
			var ethereum= this.byId("ethereum").getValue();
			this.byId("dollar").setValue(ethereum*387.42);
			this.byId("bitcoin").setValue(ethereum/18.2);
			this.byId("iota").setValue(ethereum*317.23);
			this.byId("ripple").setValue(ethereum*745.72);
		},
		iotaChange: function (oEvent) {
			var iota= this.byId("iota").getValue();
			this.byId("dollar").setValue(iota*1.62);
			this.byId("ethereum").setValue(iota*0.00315);
			this.byId("bitcoin").setValue(iota*0.00002);
			this.byId("ripple").setValue(iota*2.350);
		},
		rippleChange: function (oEvent) {
			var ripple= this.byId("ripple").getValue();
			this.byId("dollar").setValue(ripple*0.69);
			this.byId("bitcoin").setValue(ripple*0.000085);
			this.byId("iota").setValue(ripple*0.425);
			this.byId("ethereum").setValue(ripple*0.00134);
		},
		eth:function(){
			if (singleCall==1){
				var calle=ethereum();
			}
			
			if (singleCall==2){
				var calle=bitcoin();
			}
			if (singleCall==3){
				this.byId("coin").rerender();
				singleCall=0;
			}
			singleCall++;
		}
		
		
	});
});  