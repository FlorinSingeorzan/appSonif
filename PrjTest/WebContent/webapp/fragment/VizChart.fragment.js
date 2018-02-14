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

			var oVizFrame3 = new VizFrame({
				height: "700px",
				width: "100%",
				vizType: "vertical_bullet",
				uiConfig: {
					applicationSet: 'fiori'
				}
			});
			
			var oVizFrame6 = new VizFrame({
				height: "700px",
				width: "100%",
				vizType: "vertical_bullet",
				uiConfig: {
					applicationSet: 'fiori'
				}
			});
			
			var oVizFrame12 = new VizFrame({
				height: "700px",
				width: "100%",
				vizType: "vertical_bullet",
				uiConfig: {
					applicationSet: 'fiori'
				}
			});

			var oDataset3 = new FlattenedDataset({
				dimensions: new DimensionDefinition({
					name: "Bitcoin evolution in 2017",
					value: "{month}"
				}),
				measures: [
					new MeasureDefinition({
						name: "Maximum values",
						value: "{value}"
					})
				],
				data: "{/Values3}"
			});
			
			var oDataset6 = new FlattenedDataset({
				dimensions: new DimensionDefinition({
					name: "Bitcoin evolution in 2017",
					value: "{month}"
				}),
				measures: [
					new MeasureDefinition({
						name: "Maximum values",
						value: "{value}"
					})
				],
				data: "{/Values6}"
			});
			
			var oDataset12 = new FlattenedDataset({
				dimensions: new DimensionDefinition({
					name: "Bitcoin evolution in 2017",
					value: "{month}"
				}),
				measures: [
					new MeasureDefinition({
						name: "Maximum values",
						value: "{value}"
					})
				],
				data: "{/Values12}"
			});

			oVizFrame3.setDataset(oDataset3);
			
			oVizFrame6.setDataset(oDataset6);
			
			oVizFrame12.setDataset(oDataset12);

			oVizFrame3.addFeed(new FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: [ "Maximum values" ]
			}));
			
			oVizFrame6.addFeed(new FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: [ "Maximum values" ]
			}));
			
			oVizFrame12.addFeed(new FeedItem({
				uid: "valueAxis",
				type: "Measure",
				values: [ "Maximum values" ]
			}));

			oVizFrame3.addFeed(new FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: [ "Bitcoin evolution in 2017" ]
			}));
			
			oVizFrame6.addFeed(new FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: [ "Bitcoin evolution in 2017" ]
			}));
			
			oVizFrame12.addFeed(new FeedItem({
				uid: "categoryAxis",
				type: "Dimension",
				values: [ "Bitcoin evolution in 2017" ]
			}));

			oVizFrame3.setVizProperties({
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
			
			oVizFrame6.setVizProperties({
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
			
			oVizFrame12.setVizProperties({
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

			var sDataPath = jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/PrjTestData.json");
			var oModel = new JSONModel(sDataPath);
			controller.getView().setModel(oModel);

			return oVizFrame;
		}
	});
});
