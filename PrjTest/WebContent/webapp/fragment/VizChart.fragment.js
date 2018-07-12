sap.ui.define([
	"jquery.sap.global",
	"sap/viz/ui5/controls/VizFrame",
	"sap/viz/ui5/data/FlattenedDataset",
	"sap/viz/ui5/data/DimensionDefinition",
	"sap/viz/ui5/data/MeasureDefinition",
	"sap/viz/ui5/controls/common/feeds/FeedItem",
	'sap/viz/ui5/format/ChartFormatter',
	"sap/ui/model/json/JSONModel"
], function(jQuery, VizFrame, FlattenedDataset, DimensionDefinition, MeasureDefinition, FeedItem,ChartFormatter, JSONModel) {
	"use strict";

	return sap.ui.jsfragment("sap.Sonif.fragment.VizChart", {
		createContent: function(controller) {
			//added
//			var sDataPath = jQuery.sap.getModulePath("sap.Sonif.model.data", "/PrjTestData.json");
//			var oModel = new JSONModel(sDataPath);		//sDataPath
			var oModel = new JSONModel("https://api.blockchain.info/charts/market-price?format=json&cors=true");		//sDataPath
			oModel.setSizeLimit(500);
			//console.log(oModel);
			controller.getView().setModel(oModel,"year");
			//added
			
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
					name: "Bitcoin evolution: 1 year",
					value:{
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
				data: "{year>/values}"
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
				values: [ "Bitcoin evolution: 1 year" ]
			}));

			oVizFrame.setVizProperties({
				plotArea: {
					 window: {			//fit the content chart
                         start: "firstDataPoint",
                         end: "lastDataPoint"
                     },
                     dataLabel: {			//for points label *optional
                         formatString:ChartFormatter.DefaultPattern.SHORTFLOAT,
                         visible: false
                     },
					showGap: true
				},
				toolTip : {  

		            visible : false 

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
			
			//var sDataPath = jQuery.sap.getModulePath("sap.Sonif.model.data", "/PrjTestData.json");
//			var oModel = new JSONModel("https://api.blockchain.info/charts/market-price?format=json");		//sDataPath
//			console.log(oModel);
//			controller.getView().setModel(oModel);

			return oVizFrame;
		}
	});
});
