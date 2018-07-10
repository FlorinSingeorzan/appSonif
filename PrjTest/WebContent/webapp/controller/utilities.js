sap.ui.define([
	"./utilities"
], function() {
	"use strict";
	
	var oModel = new sap.ui.model.odata.v2.ODataModel("proxy/http/evolhebhdb.evosoft.com:8010/sap/opu/odata/sap/ZFS_SONIF_SRV/");
	sap.ui.getCore().setModel(oModel);
	console.log(oModel);
	return {

	};
});