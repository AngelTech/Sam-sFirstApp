define(["jQuery", "grid"], function ($, grid) 
    {
       function initGrid() {
            var crudServiceBaseUrl = "http://demos.telerik.com/kendo-ui/service";
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read:  {
                        url: crudServiceBaseUrl + "/Products",
                        dataType: "jsonp"
                    },
                    update: {
                        url: crudServiceBaseUrl + "/Products/Update",
                        dataType: "jsonp"
                    },
                    destroy: {
                        url: crudServiceBaseUrl + "/Products/Destroy",
                        dataType: "jsonp"
                    },
                    create: {
                        url: crudServiceBaseUrl + "/Products/Create",
                        dataType: "jsonp"
                    },
                    parameterMap: function(options, operation) {
                        if (operation !== "read" && options.models) {
                            return {models: kendo.stringify(options.models)};
                        }
                    }
                },
                batch: true,
                pageSize: 20,
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { editable: false, nullable: true },
                            ProductName: { validation: { required: true } },
                            UnitPrice: { type: "number", validation: { required: true, min: 1} },
                            Discontinued: { type: "boolean" },
                            UnitsInStock: { type: "number", validation: { min: 0, required: true } }
                        }
                    }
                }
            });

            $("#grid").kendoGrid({
                dataSource: dataSource,
                pageable: true,
                mobile: "phone",
                height: "24em",
                resizable: true,
                toolbar: ["create"],
                columns: [
                    { field:"ProductName", title: "Product Name" },
                    { field: "UnitPrice", title:"Unit Price", format: "{0:c}", width: "100px" },
                    { field: "UnitsInStock", title:"Units In Stock", width: "100px" },
                    { field: "Discontinued", width: "100px" },
                    { command: ["edit", "destroy"], title: "&nbsp;", width: "160px" }
                ],
                editable: "popup",
                filterable: true,
                sortable: true,
                columnMenu: true
            });
        }
    });

    return 
        {
        };

