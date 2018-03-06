sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
   	"sap/ui/vk/ContentResource",
   	"sap/m/MessageToast"
], function(Controller, JSONModel, ContentResource, MessageToast) {
	"use strict";
	
	var handleEmptyUrl = function (view) {
		var oBundle = view.getModel("i18n").getResourceBundle();
		var msg = oBundle.getText("missingUrl");
		MessageToast.show(msg);
	};
	
	var loadModelIntoViewer = function (viewer, remoteUrl, sourceType, localFile) {
		//what is currently loaded in the view is destroyed
		viewer.destroyContentResources();

		var source = remoteUrl || localFile;
		
		if (source) {
			//content of viewer is replaced with new data
			var contentResource = new ContentResource({
				source: source,
				sourceType: sourceType,
				sourceId: "abc"
			});

			//content: chosen path. content added to the view
			viewer.addContentResource(contentResource);
		}
	};

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.ProcessFlow", {

		onNavButtonPressed: function() {
			this.getOwnerComponent().getRouter().navTo("home");
		},
		
		onInit: function () {
			var sourceData = {
				localFile: undefined,
					remoteUrl: undefined
				};
				var model = new JSONModel();
				model.setData(sourceData);
				this.getView().setModel(model, "source");
			},

			onPressLoadRemoteModel: function (event) {
				var view = this.getView();
				var sourceData = view.getModel("source").oData;
				var viewer = view.byId("viewer");
				if (sourceData.remoteUrl) {
					loadModelIntoViewer(viewer, sourceData.remoteUrl, "vds");
				} else {
					handleEmptyUrl(view);
				}
			},

			onPressLoadRemoteImage: function (event) {
				var view = this.getView();
				var sourceData = view.getModel("source").oData;
				var viewer = view.byId("viewer");
				if (sourceData.remoteUrl) {
					loadModelIntoViewer(viewer, sourceData.remoteUrl, "jpg");
				} else {
					handleEmptyUrl(view);
				}
			},

			onChangeFileUploader: function (event) {
			var view = this.getView();
			var viewer = view.byId("viewer");
			var localFile = event.getParameter("files")[0];
			//if user selects a local file
			if (localFile) {
				var fileName = localFile.name;
				var index = fileName.lastIndexOf(".");
				if (index >= 0 && index < fileName.length - 1) {
					var sourceType = fileName.substr(index + 1);
					loadModelIntoViewer(viewer, null, sourceType, localFile);
				}
			}
			}
		});
});
/*
sap.ui.define([
           	"sap/ui/core/mvc/Controller",
           	"sap/ui/model/json/JSONModel",
           	"sap/ui/vk/ContentResource",
           	"sap/ui/vk/ContentConnector",
           	 "sap/ui/vk/dvl/ViewStateManager",
           ], function (Controller, JSONModel, ContentResource, ContentConnector, ViewStateManager) {
           	"use strict";

           	var contentResource = new sap.ui.vk.ContentResource({
           		//specifying the resource to load
           		source: "models/boxTestModel.vds",
           		sourceType: "vds",
           		id: "abc123"
           	});

           	return Controller.extend("standaloneViewport.controller.App",{

           		onInit: function() {
           	 
           		var view = this.getView();
           		var oViewport = view.byId("viewport");
           		
           		//Constructor for a new content resource. procides an object that owns content resouces, tracks changes, loads and destroys
           		//content built from the content resource.
           		var contentResource = new sap.ui.vk.ContentResource({
           			//specifying the resource to load
           			source: "models/boxTestModel.vds",
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
           		},

        		getValuesDelta: function(fFirstValue, fSecondValue) {
        			return fSecondValue - fFirstValue;
        		},

        		onNodePressed: function(oEvent) {
        			var sItemTitle = oEvent.getParameters().getTitle();
        			MessageToast.show(this.getResourceBundle().getText("processFlowNodeClickedMessage", [sItemTitle]));
        		},

        		getResourceBundle: function() {
        			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        		}
           	});
           });*/
