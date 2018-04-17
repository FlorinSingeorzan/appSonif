sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {    
	"use strict";

	return Controller.extend("sap.suite.ui.commons.PrjTest.controller.Masters", {
	
	onInit: function(){
		
	},

	onOrientationChange: function(oEvent) {
		var bLandscapeOrientation = oEvent.getParameter("landscape"),
			sMsg = "Orientation now is: " + (bLandscapeOrientation ? "Landscape" : "Portrait");
		MessageToast.show(sMsg, {duration: 5000});
	},

	onPressNavToDetailJack : function(oEvent) {
		this.getSplitAppObj().to(this.createId("detailsJack"));
	},
	
	onPressNavToDetailSteve : function(oEvent) {
		this.getSplitAppObj().to(this.createId("detailsSteve"));
	},

	onPressDetailBack : function() {
		this.getSplitAppObj().backDetail();
	},

	onPressMasterBack : function() {
		this.getSplitAppObj().backMaster();
	},

	onPressGoToSteve : function() {
		this.createId("masterSteve");
	},
	
	onPressGoToJack : function() {
		this.createId("masterJack");
	},

	onListItemPress : function(oEvent) {
		var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

		this.getSplitAppObj().toDetail(this.createId(sToPageId));
	},

	onPressModeBtn : function(oEvent) {
		var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

		this.getSplitAppObj().setMode(sSplitAppMode);
		MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, {duration: 5000});
	},

	getSplitAppObj : function() {
		var result = this.byId("masters");
		if (!result) {
			jQuery.sap.log.info("SplitApp object can't be found");
		}
		return result;
	}
	});

});  