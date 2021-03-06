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

	return sap.ui.jsfragment("sap.Sonif.fragment.VizChartWeek", {
		createContent: function(controller) {

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
					name: "Bitcoin evolution in 2017",
					value: "{day}"
				}),
				measures: [
					new MeasureDefinition({
						name: "Maximum values",
						value: "{value}"
					})
				],
				data: "{/ValuesWeek}"
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
				values: [ "Bitcoin evolution in 2017" ]
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
			
			var sDataPath = jQuery.sap.getModulePath("sap.Sonif.model.data", "/PrjTestData.json");
			var oModel = new JSONModel(sDataPath);
			controller.getView().setModel(oModel);

			return oVizFrame;
		}
	});
});