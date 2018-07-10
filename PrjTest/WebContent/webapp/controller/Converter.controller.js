sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/NumberFormat"
], function(Controller, MessageToast, JSONModel, NumberFormat) {    //tine cont de ordinea de sus
	"use strict";
	var singleCall=1;
//	var apikey="7EA2CBE9-AA04-4BBB-9AC5-09B70202D7EA";			//yahoo		
	var apikey="452D6443-C0A4-457D-BF94-079DB21CB380";			//gmail
	
	var btc_eth;
	var btc_xrp;
	var btc_iot;
	var btc_usd;
	var eth_iot;
	var eth_xrp;
	var eth_usd;
	var iot_xrp;
	var iot_usd;
	var xrp_usd;
	
	var bitcoin;
	var ethereum;
	var iota;
	var ripple;
	var dollar;
	function loadConversion(from,to){
		var conv;
		$.ajax({
		    type: 'GET',
		    url: "https://rest.coinapi.io/v1/exchangerate/"+from+"/"+to+"?apikey="+apikey, 
		    headers: {
                'Access-Control-Allow-Origin': '*'
            },
		    async: false
		  }).done(function(resp) {
			  conv=resp;	 
		  })
		  .fail(function(err) {
		    if (err !== undefined) {
		      var oErrorResponse = $.parseJSON(err.responseText);
		      sap.m.MessageToast.show(oErrorResponse.message, {
		        duration: 6000
		      });
		    } else {
		      sap.m.MessageToast.show("Unknown error!");
		    }
		  });
		return conv;
	}
	function readConversion(from,to,callback){
		var conv;
		$.ajax({
		    type: 'GET',
		    url: "https://min-api.cryptocompare.com/data/price?fsym="+from+"&tsyms="+to, 
		    async: false
		  }).done(function(resp) { 
			  callback(resp);
		  })
		  .fail(function(err) {
		    if (err !== undefined) {
		      var oErrorResponse = $.parseJSON(err.responseText);
		      sap.m.MessageToast.show(oErrorResponse.message, {
		        duration: 6000
		      });
		    } else {
		      sap.m.MessageToast.show("Unknown error!");
		    }
		  });
	}
	
	
	function convert(value,from){
		readConversion(from,"BTC,ETH,IOT,XRP,USD",function(data){
			bitcoin.setValue(value*data.BTC);
			ethereum.setValue(value*data.ETH);
			iota.setValue(value*data.IOT);
			ripple.setValue(value*data.XRP);
			dollar.setValue(value*data.USD);
		});
	}
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Converter", {
		onInit: function() {  
//			btc_eth=loadConversion("BTC","ETH");
//			btc_xrp=loadConversion("BTC","XRP");
//			btc_iot=loadConversion("BTC","IOT");
//			btc_usd=loadConversion("BTC","USD");
//			eth_iot=loadConversion("ETH","IOT");
//			eth_xrp=loadConversion("ETH","XRP");
//			eth_usd=loadConversion("ETH","USD");
//			iot_xrp=loadConversion("IOT","XRP");
//			iot_usd=loadConversion("IOT","USD");
//			xrp_usd=loadConversion("XRP","USD");
			bitcoin=this.byId("bitcoin");
			dollar=this.byId("dollar");
			ethereum=this.byId("ethereum");
			iota=this.byId("iota");
			ripple=this.byId("ripple");
			
			
		},
		dollarChange: function (oEvent) {
			var value= dollar.getValue();	
			if (value!=""){
				convert(value,"USD");
			}else{
				bitcoin.setValue("");
				ethereum.setValue("");
				iota.setValue("");
				ripple.setValue("");
			}
		},
		bitcoinChange: function (oEvent) {
			var value= bitcoin.getValue();	
			if (value!=""){
				convert(value,"BTC");
			}else{
				dollar.setValue("");
				ethereum.setValue("");
				iota.setValue("");
				ripple.setValue("");
			}
		},
		ethereumChange: function (oEvent) {
			var value= ethereum.getValue();	
			if (value!=""){
				convert(value,"ETH");
			}else{
				bitcoin.setValue("");
				dollar.setValue("");
				iota.setValue("");
				ripple.setValue("");
			}
		},
		iotaChange: function (oEvent) {
			var value= iota.getValue();	
			if (value!=""){
				convert(value,"IOT");
			}else{
				bitcoin.setValue("");
				ethereum.setValue("");
				dollar.setValue("");
				ripple.setValue("");
			}
		},
		rippleChange: function (oEvent) {
			var value= ripple .getValue();	
			if (value!=""){
				convert(value,"XRP");
			}else{
				bitcoin.setValue("");
				ethereum.setValue("");
				iota.setValue("");
				dollar.setValue("");
			}
		}
		
		
	});
});  