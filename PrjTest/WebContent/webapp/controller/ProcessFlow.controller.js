sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(jQuery, Controller, JSONModel, MessageToast) {
	"use strict";
	
	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.ProcessFlow", {

		onNavButtonPressed: function() {
			this.getOwnerComponent().getRouter().navTo("home");
		},
		
		onInit: function (evt) {
			// set explored app's demo model on this sample
			var oImgModel = new JSONModel(jQuery.sap.getModulePath("sap.suite.ui.commons.PrjTest.model.data", "/ProcessFlowData.json"));
			this.getView().setModel(oImgModel);

			// set the possible screen sizes
			var oCarouselContainer = {
				screenSizes : [
					"350px",
					"420px",
					"555px",
					"743px",
					"908px"
				]
			};
			var oScreenSizesModel = new JSONModel(oCarouselContainer);
			this.getView().setModel(oScreenSizesModel, "ScreenSizesModel");

			this._setNumberOfImagesInCarousel(3);
		},
		onArrowsPlacementSelect: function (oEvent) {
			var oCarousel = this.getView().byId("carouselSample");
			var sSelectedValue = oEvent.getSource().getSelectedButton().getText();
			if (sSelectedValue === "Content") {
				oCarousel.setArrowsPlacement(sap.m.CarouselArrowsPlacement.Content);
			} else if (sSelectedValue === "PageIndicator") {
				oCarousel.setArrowsPlacement(sap.m.CarouselArrowsPlacement.PageIndicator);
			}
		},
		onPageIndicatorPlacementSelect: function (oEvent) {
			var oCarousel = this.getView().byId("carouselSample");
			var sSelectedValue = oEvent.getSource().getSelectedButton().getText();
			if (sSelectedValue === "Bottom") {
				oCarousel.setPageIndicatorPlacement(sap.m.PlacementType.Bottom);
			} else if (sSelectedValue === "Top") {
				oCarousel.setPageIndicatorPlacement(sap.m.PlacementType.Top);
			}
		},
		onShowPageIndicatorSelect: function (oEvent) {
			var oCarousel = this.getView().byId("carouselSample");
			var sSelectedValue = oEvent.getSource().getSelectedButton().getText();
			if (sSelectedValue === "Yes") {
				oCarousel.setShowPageIndicator(true);
			} else if (sSelectedValue === "No") {
				oCarousel.setShowPageIndicator(false);
			}
		},
		onSliderMoved: function (oEvent) {
			var origingalHeight = 650;

			var screenSizesJSON = this.getView().getModel("ScreenSizesModel").getData();
			var iValue = oEvent.getParameter("value");
			var screenWidth = screenSizesJSON.screenSizes[Number(iValue) - 1];
			var oCarouselContainer = this.getView().byId("carouselContainer");
			oCarouselContainer.setWidth(screenWidth);
			var screenHeight = origingalHeight * parseFloat(screenWidth) / 1000;
			oCarouselContainer.setHeight(screenHeight + 'px');
		},
		onNumberOfImagesChange: function (oEvent) {
			var numberOfImages = oEvent.getSource().getValue();
			this._setNumberOfImagesInCarousel(Number(numberOfImages));
		},
		_setNumberOfImagesInCarousel: function (numberOfImages) {
			if (!numberOfImages || numberOfImages < 1 || numberOfImages > 9){
				return;
			}

			var oCarousel = this.getView().byId("carouselSample");
			oCarousel.destroyPages();
			numberOfImages = 5;
			for (var i = 1; i <= numberOfImages; i++) {
					if (i == 1){
						var imgSrc = "images/ProcessFlowImageContent/1.jpg";
						var imgAlt = "Example picture " + (i);
						var img = new sap.m.Image( {
							src: imgSrc,
							alt: imgAlt,
							densityAware: false,
							decorative: false
						});
						oCarousel.addPage(img);
					}
					else if (i == 2){
						var imgSrc = "images/ProcessFlowImageContent/2.jpg";
						var imgAlt = "Example picture " + (i);
						var img = new sap.m.Image( {
							src: imgSrc,
							alt: imgAlt,
							densityAware: false,
							decorative: false
						});
						oCarousel.addPage(img);
					}
					else if (i == 3){
						var imgSrc = "images/ProcessFlowImageContent/3.jpg";
						var imgAlt = "Example picture " + (i);
						var img = new sap.m.Image( {
							src: imgSrc,
							alt: imgAlt,
							densityAware: false,
							decorative: false
						});
						oCarousel.addPage(img);
					}
					else if (i == 4){
						var imgSrc = "images/ProcessFlowImageContent/4.jpg";
						var imgAlt = "Example picture " + (i);
						var img = new sap.m.Image( {
							src: imgSrc,
							alt: imgAlt,
							densityAware: false,
							decorative: false
						});
						oCarousel.addPage(img);
					}
					else if (i == 5){
						var imgSrc = "images/ProcessFlowImageContent/5.jpg";
						var imgAlt = "Example picture " + (i);
						var img = new sap.m.Image( {
							src: imgSrc,
							alt: imgAlt,
							densityAware: false,
							decorative: false
						});
						oCarousel.addPage(img);
					}
				
			}
		},


		onExit: function () {
			if (this.oQuickView) {
				this.oQuickView.destroy();
			}
		}
		
	});
});
