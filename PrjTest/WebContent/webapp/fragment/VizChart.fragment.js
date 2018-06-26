sap.ui.define([
	"jquery.sap.global",
	"sap/viz/ui5/controls/VizFrame",
	"sap/viz/ui5/data/FlattenedDataset",
	"sap/viz/ui5/data/DimensionDefinition",
	"sap/viz/ui5/data/MeasureDefinition",
	"sap/viz/ui5/controls/common/feeds/FeedItem",
	"sap/ui/model/json/JSONModel"
], function(jQuery, VizFrame, FlattenedDataset, DimensionDefinition, MeasureDefinition, FeedItem, JSONModel) {
	"use strict";

	return sap.ui.jsfragment("sap.suite.ui.commons.PrjTest.fragment.VizChart", {
		createContent: function(controller) {
			//added
//			var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/PrjTestData.json");
//			var oModel = new JSONModel(sDataPath);		//sDataPath
			var oModel = new JSONModel("https://api.blockchain.info/charts/market-price?format=json");		//sDataPath
			oModel.setSizeLimit(500);
			//console.log(oModel);
			controller.getView().setModel(oModel,"all");
			//added
			
			var oVizFrame = new VizFrame({
				height: "450px",
				width: "60%",
				vizType: "line",
				uiConfig: {
					applicationSet: 'fiori'
				}
			});
			
			var oDataset = new FlattenedDataset({
				dimensions: new DimensionDefinition({
					name: "Bitcoin evolution",
					value: "{y}"
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
			console.log(oDataset);
			
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
			
			//var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/PrjTestData.json");
//			var oModel = new JSONModel("https://api.blockchain.info/charts/market-price?format=json");		//sDataPath
//			console.log(oModel);
//			controller.getView().setModel(oModel);

			return oVizFrame;
		}
	});
});
