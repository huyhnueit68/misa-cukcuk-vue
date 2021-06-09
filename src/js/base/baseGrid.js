/**
 * Config Grid Common
 * CreatedBy: PQ Huy 01.06.2021
 */
class BaseGrid {

    constructor(gridId) {
        let me = this;
        
        //save parent grid
        me.grid = $(gridId);

        //bindding data form
        me.formDetail = null;

        //save data grid 
        me.dataGrid = null;

        //call data server
        me.getDataServer();

        //init event page
        me.initEvent();
    }

    /**
     * function init form
     * CreatedBy: PQ Huy 02.06.2021
     * @param {*} formId 
     */
    initFormDetails(formId) {
        let me = this;

        me.formDetail = new baseForm(formId);
        
    }

    /**
     * create event page
     * CreatedBy: PQ Huy 01.06.2021
     */
    initEvent() {
        let me = this;

        // init event toolbar
        me.initEventToolBar();

        //init action tool box
        me.intiActionToolBox();

        // set background color when on click
        me.eventClickRow(this);
        
    }


    /**
     * function action tool box (refresh, import and export)
     */
    intiActionToolBox(){    
        let me = this,
            toolBoxId = me.grid.attr("ToolBox"),
            toolBox = $(`#${toolBoxId}`);
        
            if(toolBox.length > 0) {
                toolBox.find('.tool-box').on('click', function(){
                    debugger
                    let commandType = $(this).attr('CommandType');
                    me.setCommandEvent(commandType);
                })
            }
    }

    /**
     * function event tool bar
     * CreatedBy: PQ Huy 02.06.2021
     */
    initEventToolBar() {
        let me = this, 
            toolBarId = me.grid.attr("ToolBar"),
            toolBar = $(`#${toolBarId}`);
    
        if (toolBar.length > 0) {
            toolBar.find('#btnAdd').on('click', function () {
                let commandType = $(this).attr("CommandType");
                me.setCommandEvent(commandType);
                $('#btnDelete').addClass('hidden-delete');
            });

            // catch event click on row show detail in table
            me.grid.on("dblclick", "tbody tr", function () {
                let commandType = resource.CommandType.Edit;
                $('#btnDelete').removeClass('hidden-delete');
                me.setCommandEvent(commandType);
            });
        }

    }

    /**
     * function set fire event
     * CreatedBy: PQ Huy 07.06.2021
     */
    setCommandEvent(commandType) {
        let me = this,
            fireEvent = null;
        
        fireEvent = me.setEventList(commandType);

        /**
         * check type of function
         */
        if (typeof (fireEvent) === 'function') {
            fireEvent = fireEvent.bind(me);
            fireEvent();
        }
    }

    /**
     * function set event for fire event
     * CreatedBy: PQ Huy 07.06.2021
     * @param {*} commandType 
     * @returns 
     */
    setEventList(commandType) {
        let me = this,
             fireEvent = null;
        switch (commandType) {
            case resource.CommandType.Add: //add new 
                fireEvent = me.addFunction;
                break;
            case resource.CommandType.Edit: //edit item 
                fireEvent = me.editFunction;
                break;
            case resource.CommandType.Delete: //delete item
                fireEvent = me.deleteFunction;
                break;
            case resource.CommandType.MassDelete: // mass delete item
            fireEvent = me.massDeleteFunction;
            break;
            case resource.CommandType.Refresh: //refresh item 
                fireEvent = me.refresh;
                break;
            case resource.CommandType.Import: //import data 
                fireEvent = me.import;
                break;
            case resource.CommandType.export: //export data 
                break;
        }

        return fireEvent
    }

    /**
     * function export data to csv, excel, ...
     * CreatedBy: PQ Huy 08.06.2021
     */
    export(){

    }

    import(){

    }

    /**
     * function mass delete item
     * CreatedBy: PQ Huy 08.06.2021
     */
    massDeleteFunction(){

    }

    /**
     * get data recoder when selected
     * CreatedBy: CreatedBy: PQ Huy 02.06.2021
     */
    getSelectedRecord() {
        let me = this,
            data = {},
            selected = me.grid.find(".selected-row");
        
        if (selected.length > 0) {
            data = selected.eq(0).data("value");
        }

        return data;
    }

    /**
     * import data in api to function load data show table
     * CreatedBy: PQ Huy 02.06.2021
     */
    getDataServer() {
        let me = this,
            url = me.grid.attr("Url"),
            urlFull = `${constant.UrlPrefix}${url}`;
        //call ajax function get data
        commonFn.Ajax(urlFull, resource.Method.Get, {}, function (response) {
            if (response) {
                me.dataGrid = response;
                me.loadDataGrid(response);
            } else {
                console.log("Something went wrong!!!");
            }
        })
        $('.icon-loader').fadeIn("fast", function(){        
            $(".icon-loader").fadeOut(1000);
        });
    }

    /**
     * change background color when selected row
     * CreatedBy: PQ Huy 01.06.2021
     * @param {*} me 
     */
    eventClickRow(me) {
        me.grid.on("click", "tbody tr", function () {
            me.grid.find(".selected-row").removeClass("selected-row");
            
            $(this).addClass("selected-row");
        });
    }

    /**
     * Function render list from data
     * CreatedBy: PQ Huy 30.5.2021
     */
    loadDataGrid(propertyData) {
        let me = this,
            tableRender = $("<table class='table' cellspacing='0' cellpadding='15' border='0'></table>"),
            theadRender = me.renderHeader(),
            tbodyRender = me.renderTbody(propertyData);
            
        // append html after render html from data
        tableRender.append(theadRender);
        tableRender.append(tbodyRender);

        // refresh old content before append new html
        me.grid.find("table").remove();
        me.grid.append(tableRender);

        //set id after binding data
        me.afterBinding();
    }

    afterBinding(){
        let me = this;

        // set id for each record
        me.ItemId = me.grid.attr("ItemId");

        // choose the first row
        // me.grid.find("tbody tr").eq(0).addClass("selected-row");
    }

    /**
     * function display header table
     * CreatedBy: PQ Huy 30.5.2021
     * @returns theader html
     */
    renderHeader() {
        let me = this,
            theadRender = $("<thead class='custom-header'></thead>"),
            rowRender = $("<tr class='custom-color'></tr>");
        // append column stt and checkbox
        let stt = `<th><input type="checkbox" id="checkall" class="custom-input" name="checkall" value="checkall" onchange="setCheckedAll()"></th><th>STT</th>`;
        rowRender.append(stt);
        // foreach row for build header
        me.grid.find(".col").each(function () {
            //get text header
            let textHeader = $(this).text(),
                dataType = $(this).attr("DataType"),
                className = me.getClassFormat(dataType),
                th = $("<th></th>");
            
            //set text header for tag th
            th.text(textHeader);
            th.addClass(className);
            rowRender.append(th);
        });

        //append for theader
        theadRender.append(rowRender);

        return theadRender;
    }


    /**
     * CreatedBy: PQ Huy 30.5.2021
     * @param {dataJson} dataJson 
     * @returns tbody html
     */
    renderTbody(dataForm) {
        var count = 0;
        let me = this,
            tbodyRender = $("<tbody class='custom-tbody' id='employeeTable'></tbody>");
        
        /* check data nan */
        if(dataForm && dataForm.length > 0){
            dataForm.filter(function(item){
                let row = $("<tr class='btn-name'></tr>");
                let checkbox = `<td><input type="checkbox" id="" name="" class="checkedValue" value="${item.EmployeeId}"></td><td>${++count}</td>`;
                row.append(checkbox);
                
                /* for loop each row and set to each field name */
                me.grid.find(".col").each(function(){
                    let column = $(this),
                        fieldName = column.attr("FieldName"),
                        dataType = column.attr("DataType"),
                        data = item[fieldName],
                        cell = $("<td></td>"),
                        className = me.getClassFormat(dataType),
                        value = me.getValue(data, dataType, column);

                    /** set value for row */
                    cell.text(value);
                    cell.addClass(className);
                    row.append(cell);
                });

                //save data recoder in tag tr for get value
                row.data("value", item);

                //append to tbody
                tbodyRender.append(row);
            });
        }

        return tbodyRender;
    }

    /**
     * function get class need add for display 
     * CreatedBy: PQ Huy 30.5.2021
     * @param {function get class} dataType 
     */
    getClassFormat(dataType) {
        let me = this,
            className = "";
        
        switch (dataType) {
            case resource.DataTypeColumn.Number:
                className = "align-right";
                break;
            case resource.DataTypeColumn.Date:
                className = "align-center";
                break;
        }

        return className;
    }

    /**
     * function get class need add for display 
     * CreatedBy: PQ Huy 30.5.2021
     * @param {function} dataType 
     * @param {function} column
     */
    getValue(data, dataType, column) {
        let me = this;

        switch (dataType) {
            case resource.DataTypeColumn.Number:
                data = commonFn.formatMoney(data);
                break;
            case resource.DataTypeColumn.Date:
                data = commonFn.formatDate(data);
                break;
            case resource.DataTypeColumn.Enum:
                let enumName = column.attr("EnumName");
                data = commonFn.getValueEnum(data, enumName);
                break;
        }
        
        return data;
    }

    /**
     * delete data
     * CreatedBy: PQ Huy 03.06.2021
     */
    deleteFunction() {
        let me = this,
            param = {
                Parent: me,
                FormMode: enumeration.FormModel.Delete,
                DataGrid: me.dataGrid,
                Record: { ...me.getSelectedRecord() },
                ItemId: me.ItemId
            };
        
        if (me.formDetail) {
            me.formDetail.form.find("[ShowForm]").each(function () {
                $(this).addClass("disabled-text");
            })
            $(".form-delete").show();
            me.formDetail.open(param);
        }
    }

    /**
     * add data
     * CreatedBy: PQ Huy 03.06.2021
     */
    addFunction() {
        let me = this,
            param = {
                Parent: me,
                FormMode: enumeration.FormModel.Add,
                DataGrid: me.dataGrid,
                Record: {}
            };
        
        if (me.formDetail) {
            me.formDetail.form.find("[ShowForm]").each(function () {
                $(this).removeClass("disabled-text");
            })
            $(".form-delete").hide();
            me.formDetail.open(param);
        }
    }

    /**
     * edit data 
     * CreatedBy: PQ Huy 03.06.2021
     */
    editFunction() {
    
        let me = this,
            param = {
                Parent: me,
                FormMode: enumeration.FormModel.Edit,
                DataGrid: me.dataGrid,
                Record: { ...me.getSelectedRecord() },
                ItemId: me.ItemId
            };
        
        if (me.formDetail) {
            me.formDetail.form.find("[ShowForm]").each(function () {
                $(this).removeClass("disabled-text");
            })
            $(".form-delete").hide();
            me.formDetail.open(param);
        }
    }

    /**
     * refresh data
     * CreatedBy: PQ Huy 03.06.2021
     */
    refresh() {
        let me = this;

        me.getDataServer();
    }
}