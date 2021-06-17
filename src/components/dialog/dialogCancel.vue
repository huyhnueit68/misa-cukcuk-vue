<template>
    <!-- dialog calcel -->
    <div class="box-diaglog-cancel">
        <div class="dialog-cancel" title="Đóng Form thông tin chung">
            <div class="cancel-content">
                <div class="titel-dialog-cancel">
                    <span id="ui-id-3" class="ui-dialog-title">Đóng Form thông tin chung</span>
                    <div class="box-cancel-btn" @click="closeForm">
                        <button type="button" class="btn-cancel" title="Close">
                            <div class="btn-cancelForm"></div>
                        </button>
                    </div> 
                </div>
                <div class="content-body">
                    <div class="icon-notification"></div>
                    <div class="body-info">
                        Bạn có chắc muốn đóng form nhập thông tin chung hay không?<b id="custom-content-info"></b>
                    </div>
                </div>
                <div class="content-footer">
                    <button id="ctn-btn-form" class="" 
                    Command="Continue" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    @click="closeForm"
                    title="Tiếp tục nhập dữ liệu">Tiếp tục nhập</button>

                    <button id="cancel-btn-form" 
                    class=""
                    Command="Cancel"
                    data-toggle="tooltip" 
                    data-placement="top" title="Hủy tiến trình" @click="closeAllForm">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    methods: {
        /**
         * close form
         * PQ Huy 15.06.2021
         */
        closeForm(){
            this.$emit('closeForm');
        },
        /**
         * access close all form
         * PQ Huy 15.06.2021
         */
        closeAllForm(){
            this.$emit('closeAllForm')
        }
    }
})
</script>


<style>
.titel-dialog-cancel{
    display: flex;
}
    .titel-dialog-cancel .box-cancel-btn{
        width: 32px;
        height: 32px;
        align-items: center;
        position: absolute;
        right: 0px;
        top: 0;
    }
    .titel-dialog-cancel .box-cancel-btn .btn-cancel{
        width: 12px;
        height: 12px;
        background-image: url("../../../public/content/icon/cancelBtn.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        border: none;
        top: 10px;
        background-color: #fff;
        right: 10px;
    }
    .titel-dialog-cancel .box-cancel-btn:hover .btn-cancel,
    .titel-dialog-cancel .box-cancel-btn:hover {
        background-color: #e9ebee;
        cursor: pointer;
    }
    .box-diaglog-cancel{
        width: 100%;
        height: 100%;
        background-color: rgb(104 102 102 / 63%);
        position: fixed;
        top: 0;
        z-index: 10;
        left: 0;
    }
    .cancel-content .titel-dialog-cancel {
        text-align: left;
        font-size: 15px;
        padding: 24px;
        font-weight: bold;
    }
    .dialog-cancel{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>