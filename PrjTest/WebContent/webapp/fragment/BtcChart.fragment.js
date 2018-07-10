sap.ui.define([
	"jquery.sap.global",
	"sap/viz/ui5/controls/VizFrame",
	"sap/viz/ui5/data/FlattenedDataset",
	"sap/viz/ui5/data/DimensionDefinition",
	"sap/viz/ui5/data/MeasureDefinition",
	"sap/viz/ui5/controls/common/feeds/FeedItem",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/m/MessageToast"
], function(jQuery, VizFrame, FlattenedDataset, DimensionDefinition, MeasureDefinition, FeedItem, JSONModel,ODataModel,MessageToast) {
	"use strict";

	return sap.ui.jsfragment("sap.suite.ui.commons.PrjTest.fragment.BtcChart", {
		createContent: function(controller) {
			
			//var sDataPath = jQuery.sap.getModulePath("https://api.blockchain.info/charts/market-price?timespan=30days&format=json");
			var oModel = new JSONModel("https://api.blockchain.info/charts/market-price?timespan=all&format=json&cors=true");
//			var oModel = new ODataModel({serviceUrl: "https://api.blockchain.info/charts/market-price?timespan=all&format=json"},{
//			    headers: {
//			    	'Access-Control-Allow-Origin': '*'
//			    }
//			});
//			
////			oModel.setHeaders({ 'Access-Control-Allow-Origin': '*'});
//			
//			oModel.read("\all", {
//				succsess : function(oData,response){
//					console.log(oData);
//			},
//				error : function(oData,response){
//				
//			}
//			});
//			console.log(oModel);
//			var oModel=new JSONModel();
//			$.ajax({
//			    type: 'GET',
//			    url: "https://api.blockchain.info/charts/market-price?timespan=all&format=json", 
//			    headers: {
//	                'Access-Control-Allow-Origin': '*'
//	            },
//			    async: false
//			  }).done(function(resp) {
//				 console.log(resp);
//				 oModel.setData(resp);  
//				  
//			  })
//			  .fail(function(err) {
//			    if (err !== undefined) {
//			      var oErrorResponse = JSON.parse(err.responseText || '{}');
//			      sap.m.MessageToast.show(oErrorResponse.message, {
//			        duration: 6000
//			      });
//			    } else {
//			      sap.m.MessageToast.show("Unknown error!");
//			    }
//			  });
//			var ojsonModel = new sap.ui.model.json.JSONModel();
//			var oHeaders = {
//					'Access-Control-Allow-Origin': '*',
//					'accept':'*'
//				};	
//			ojsonModel.loadData("https://api.blockchain.info/charts/market-price", null, true, "GET", null, false, oHeaders);
//			console.log(ojsonModel);
//			
			
			
//			$.ajax({
//			    type: 'GET',
//			    url: "https://api.blockchain.info/charts/market-price?timespan=all&format=json&cors=true", 
////			    headers: {
////			    	'Access-Control-Allow-Origin': '*',
////			    	'Access-Control-Allow-Headers': 'Content-Type',
////			    	'Access-Control-Allow-Methods': 'GET',
////			    	'content-type': 'application/json'	
////	                //'Access-Control-Allow-Credentials': 'true',
////	               
////	                
////	            },
//			    async: false
//			  }).done(function(resp) {
//				 console.log(resp);
//				 //oModel.setData(resp);  
//				  
//			  })
//			  .fail(function(err) {
//			    if (err !== undefined) {
//			      var oErrorResponse = JSON.parse(err.responseText || '{}');
//			      sap.m.MessageToast.show(oErrorResponse.message, {
//			        duration: 6000
//			      });
//			    } else {
//			      sap.m.MessageToast.show("Unknown error!");
//			    }
//			  });
//			
			
			
			
			controller.getView().setModel(oModel,"all");
			
			
			var oVizFrame = new VizFrame({
				height: "600px",
				width: "100%",
				vizType: "column",
				uiConfig: {
					applicationSet: 'fiori'
				}
			});
			
			var oDataset = new FlattenedDataset({
				dimensions: new DimensionDefinition({
					name: "Bitcoin evolution",
					value: {
				          path:'x',
				          formatter: controller.formatJSONDate
				            }
				}),
				measures: [
					new MeasureDefinition({
						name: "Maximum values",
						value: "{y}"
					})
				],
				data: "{all>/values}"
			});
			
			oVizFrame.setDataset(oDataset);

			oVizFrame.addFeed(new FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: [ "Maximum values" ]
			}));
			
			oVizFrame.addFeed(new FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: [ "Bitcoin evolution" ]
			}));

			oVizFrame.setVizProperties({
				plotArea: {
					 window: {			//fit the content chart
                        start: "firstDataPoint",
                        end: "lastDataPoint"
                    },
					showGap: true
				},
				title: {
					visible: false
				},
				valueAxis: {
					title: {
						text: controller.getOwnerComponent().getModel("i18n").getResourceBundle().getText("chartContainerBitcoinValues")
					}
				}
			});
			

			return oVizFrame;
		}
	});
});
