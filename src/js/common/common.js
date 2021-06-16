var commonFn = commonFn || {};

/**
 * function fomat money
 * PQ Huy 02.06.2021
 * @param {*} money 
 * @returns 
 */
commonFn.formatMoney = money => {
    if (money && !isNaN(money)) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.");
    } else {
        return money;
    }
}

/**
 * function fomat date
 * PQ Huy 02.06.2021
 * @param {*} dateSrc 
 * @returns 
 */
commonFn.formatDate = dateSrc => {
    let date = new Date(dateSrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = (date.getDate()).toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
}

/**
 * validate date fomatData
 * PQ Huy 03.06.2021
 * @param {*} date 
 * @returns 
 */
commonFn.isDateFormat = (date) => {
    let regex = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");

    return regex.test(date);
}

/**
 * convert data to date format
 * PQ Huy 03.06.2021
 * @param {*} dateSrc 
 * @returns 
 */
commonFn.convertDate = dateSrc => {
    let date = new Date(dateSrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

/**
 * function get value of a enum
 * @param {*} data 
 * @param {*} enumName 
 * @returns 
 */
commonFn.getValueEnum = (data, enumName) => {
    let enumGetData = enumeration[enumName], //get the corresonding enum in the enum File, return array
        resourceData = resource[enumName];

    for (value in enumGetData) {
        if (enumGetData[value] == data) {
            data = resourceData[value];
        }
    }

    return data;
}

/**
 * function get ajax  by url and return json data
 * PQ Huy 02.06.2021
 * 
 * @param {*} url 
 * @param {*} method 
 * @param {*} data 
 * @param {*} fnCallback 
 * @param {*} async 
 */
commonFn.Ajax = (url, method, data, fnCallback, async = true) => {
    $.ajax({
        url: url,
        method: method,
        async: async,
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        crossDomain: true, //connect frontend and backend and pass to server,
        connectType: "application/json;charset=utf-8",
        dataType: "json",
        success: function(response) {
            fnCallback(response);
        },
        error: function(errormessage) {
            console.log("Lỗi nè " + errormessage.responseText);
        }
    })
}


/**
 * select all checkboxes
 * PQ Huy 31.5.2021
 */
function setCheckedAll() {
    $('.custom-header').find('th').each(function() {
        $(this).find('input[type="checkbox"]').each(function() {
            if (this.checked) {
                $('tbody').find('td').each(function() {
                    $(this).find('input[type="checkbox"]').each(function() {
                        $(this).prop('checked', true);
                    });
                });
            } else {
                $('tbody').find('td').each(function() {
                    $(this).find('input[type="checkbox"]').each(function() {
                        $(this).prop('checked', false);
                    });
                    $('tbody').find(".selected-row").removeClass("selected-row");
                });
            }
        });
    });
}

/**
 * convert first key of string to upper case
 * PQ Huy 04.06.2021
 */
$(document).ready(function() {
    $("#txtFullName").keypress(function() {
        $(this).val(capitalizeFirstLetter($(this).val()));
    });

    $("#txtSalary").keyup(function() {
        $(this).val(numberWithCommas($(this).val()));
    });

    $('.checkedValue, .custom-header').on('click', function() {
        let check = $('tbody').find('td').find('input[type=checkbox]:checked').length;
        if (check > 0) {
            $('#btnMassDelete').show();
        } else {
            $('#btnMassDelete').hide();
        }
    })
});


/**
 * convert first key of string to upper case
 * PQ Huy 04.06.2021
 * @param {*} string 
 * @returns 
 */
function capitalizeFirstLetter(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

/**
 * automaticaly add comma when pe
 */
function numberWithCommas(string) {
    string = string.toString().replace(/,/g, '').replace(/\D/g, '').split(' ').join('');
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/**
 * format dữ liệu ngày tháng
 * PQ Huy 06.06.2021
 * @param {*} date 
 * @returns 
 */
function formatDate(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return "";
    } else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        return day + '/' + month + '/' + year;
    }
}

/**
 * fomat dữ liệu tiền tệ
 * PQ Huy 06.06.2021
 * @param {Number} money 
 * @returns 
 */
function formatMoney(money) {
    if (money) {
        return money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
    return "";
}

/**
 * function show message success
 * PQ Huy 06.06.2021
 */
function showSuccessMessenger() {
    var html = `<div class="box-toast-msg">Thành công</div>`;
    if ($('body').find('.box-toast-msg').length == 0) {
        $('body').append(html);
    }
    $('.box-toast-msg').toggle();
    setTimeout(function() {
        $('.box-toast-msg').toggle();
    }, 2000)

}

/**
 * set tooltip for button
 */
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
    $('.nav-item').on('click', function() {
        let me = this;
        resetSelectedMenu();
        $(me).addClass('selected-sub-menu');
    })
})

/**
 * function reset class when selected menu
 * PQ Huy 07.06.2021
 */
function resetSelectedMenu() {
    $('.navbar-content').find('.nav-item').each(function() {
        $(this).removeClass('selected-sub-menu');
    })
}