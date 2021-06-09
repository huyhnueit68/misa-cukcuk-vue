$(document).ready(function () {
    //set action for djanlog detail 
    dialogDetail = $(".m-dialog").dialog({
        autoOpen: false,
        fluid: true,
        //height: 400,
        //width: '700px',
        minWidth: 700,
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
        position: ({ my: "center", at: "center", of: window }),
        modal: true,
    });
})