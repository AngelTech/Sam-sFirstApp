define(["jQuery", "kendo", "inventory"], function ($, kendo, inventory) 
    {
        return
        {
                  
        onShow: function initInventory() {
                
                $("#grid").kendoGrid({
                    columns: 
                    [
                        {
                            field: "ContactName",
                            title: "Contact Name",
                            width: 140
                        }, 
                        {
                            field: "ContactTitle",
                            title: "Contact Title",
                            width: 190
                        }, 
                        {
                            field: "CompanyName",
                            title: "Company Name"
                        }, 
                        {
                            field: "Country",
                            title: "Country",
                            width: 110
                        }
                    ],
                    dataSource: 
                        {
                            type: "odata",
                            transport: {
                                read: "http://demos.kendoui.com/service/Northwind.svc/Customers"
                            },
                            pageSize: 10
                        },
                    groupable: true,
                    sortable: true,
                    pageable: 
                        {
                            refresh: true,
                            pageSizes: true,
                            buttonCount: 5    
                        }
                });
            };
        };
    });

 