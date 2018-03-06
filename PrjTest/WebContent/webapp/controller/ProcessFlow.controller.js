sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
   	"sap/ui/vk/ContentResource",
   	"sap/ui/vk/ContentConnector",
	 "sap/ui/vk/dvl/ViewStateManager"
], function(Controller, JSONModel, ContentResource, ContentConnector, ViewStateManager) {
	"use strict";
	
	var contentResource = new sap.ui.vk.ContentResource({
		//specifying the resource to load
		source: "model/boxTestModel.vds",
		sourceType: "vds",
		id: "abc123"
	});

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.ProcessFlow", {

		onNavButtonPressed: function() {
			this.getOwnerComponent().getRouter().navTo("home");
		},
		
		onInit: function () {
			var view = this.getView();
			var oViewport = view.byId("viewport");
			
			//Constructor for a new content resource. procides an object that owns content resouces, tracks changes, loads and destroys
			//content built from the content resource.
			var contentResource = new sap.ui.vk.ContentResource({
				//specifying the resource to load
				source: "model/boxTestModel.vds",
				sourceType: "vds",
				sourceId: "abc123"
			});
			//Constructor for a new content connector
			var contentConnector = new ContentConnector("abcd");

			//Manages the visibility and the selection states of nodes in the scene.
			var viewStateManager = new ViewStateManager("vsmA", {
				contentConnector: contentConnector
			});
		
			//set content connector and viewStateManager for viewport
			oViewport.setContentConnector(contentConnector);
			oViewport.setViewStateManager(viewStateManager);
			
			view.addDependent(contentConnector).addDependent(viewStateManager);

			//Add resource to load to content connector
			contentConnector.addContentResource(contentResource);
			}
		});
	});
