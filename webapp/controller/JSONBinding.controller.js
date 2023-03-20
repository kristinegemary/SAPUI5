sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
           
            formatter: formatter,

            onInit: function () {
                //Get view
                var oView = this.getView();

                //Get i18n model 
                var oi18n = this.getOwnerComponent().getModel("i18n");
                
                //Set i18n model (can only do 1 unnamed e.g. oAddressModel)
                oView.setModel(oi18n,"i18n");
                
                //instantiate jsonmodel
                var oAddressModel = new JSONModel();

               // var oProductDetail = new JSONModel();

                //define data
                var oAddress = {
                    "EID": "kristine.g.g.pasan",
                    "enabled": true,
                    "Address": {
                        "Street": "Crismor",
                        "City": "San Pedro",
                        "Zip": 4023,
                        "Country": "Philippines" 
                    },
                    "SalesAmount":1800,
                    "CurrencyCode":"USD"
                };

                //Set data to model
                oAddressModel.setData(oAddress);
                
                //Get the view
                var oView = this.getView();

                //Bind model to view
                oView.setModel(oAddressModel);  
            },
            onSelectProduct: function(oEvent){
                //get control list that trigger it
                var oList = oEvent.getSource();
               
                //get selected item
                var oSelItem = oList.getSelectedItem();
               
                //get context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Bind selected item to control simpleform in P4
                //get control to be used
                var oForm = this.getView().byId("idP4");
                oForm.bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })                
            }               
        });
    });
