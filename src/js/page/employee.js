/**
 * create class show property
 * PQ HUY 31.5.2021
 */
class Employee extends BaseGrid{

    constructor(gridId) {
        super(gridId)

        let me = this;
        
        //save parent grid property
        me.grid = $(gridId);

        this.config();
    }

    // Cấu hình các url 
     config(){
        let me = this,
            config = {
                urlAdd: "v1/Employees",
                urlEdit: "v1/Employees",
                urlDelete: "v1/Employees"
            };
 
        Object.assign(me, config);
     }

    /**
     * function init form
     * PQ Huy 02.06.2021
     * @param {*} formId 
     */
    initFormDetails(formId) {
        let me = this;

        me.formDetail = new employeeDetail(formId);
    }
}

// init object status property
let employee = new Employee("#gridEmployee");

employee.initFormDetails("#modalAction");


/**
 * function disable dialog
 * PQ Huy 06.06.2021
 */
$(document).ready(function () {
    dialogDetail = $(".m-dialog").dialog({
        autoOpen: false,
        fluid: true,
        minWidth: 800,
        resizable: true,
        position: ({ my: "center", at: "center", of: window }),
        modal: true,
    });
    
    //set djanlog for show message confirm
    dialogCancel = $(".dialog-cancel").dialog({
        autoOpen: false,
        fluid: true,
        minWidth: 500,
        resizable: true,
        dialogClass: 'cancel-dialog-custom',
        position: ({ my: "center", at: "center", of: window }),
        modal: true,
    });

    //set djanlog for show message confirm delete
    dialogDelete = $(".dialog-delete").dialog({
        autoOpen: false,
        fluid: true,
        minWidth: 500,
        resizable: true,
        dialogClass: 'delete-dialog-custom',
        position: ({ my: "center", at: "center", of: window }),
        modal: true,
    });
});

/**
 * Function chọn datepicker
 * PQ Huy 06.06.2021
 */
$(function () {
    $("#dtDateOfBirth").datepicker({
        showOn: "button",
        buttonImage: "../content/icon/date-picker.svg",
        buttonImageOnly: true,
        buttonText: "Chọn ngày",
        dateFormat: "dd/mm/yy"
    });
});