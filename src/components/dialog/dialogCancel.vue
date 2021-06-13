<template>
    <!-- dialog calcel -->
    <div class="box-diaglog-cancel">
        <div class="dialog-cancel" title="Đóng Form thông tin chung">
            <div class="cancel-content">
                <div class="titel-dialog-cancel">
                    <span id="ui-id-3" class="ui-dialog-title">Đóng Form thông tin chung</span>
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
        closeForm(){
            this.$emit('closeForm');
        },
        closeAllForm(){
            this.$emit('closeAllForm')
        }
    }
})
</script>


<style>
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