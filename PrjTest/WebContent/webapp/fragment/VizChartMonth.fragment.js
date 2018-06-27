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

	return sap.ui.jsfragment("sap.suite.ui.commons.PrjTest.fragment.VizChartMonth", {
		createContent: function(controller) {
			
			//var sDataPath = jQuery.sap.getModulePath("https://api.blockchain.info/charts/market-price?timespan=30days&format=json");
			var oModel = new JSONModel("https://api.blockchain.info/charts/market-price?timespan=30days&format=json");
			controller.getView().setModel(oModel,"month");
			
			
			var oVizFrame = new VizFrame({
				height: "600px",
				width: "100%",
				vizType: "line",
				uiConfig: {
					applicationSet: 'fiori'
				}
			});
			
			var oDataset = new FlattenedDataset({
				dimensions: new DimensionDefinition({
					name: "Bitcoin evolution: Last Month",
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
				data: "{month>/values}"
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
				values: [ "Bitcoin evolution: Last Month" ]
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
			

			return oVizFrame;
		}
	});
});
