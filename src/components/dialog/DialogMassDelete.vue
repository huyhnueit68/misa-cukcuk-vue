<template>
    <!-- dialog delete -->
    <div class="box-delete">
        <div class="dialog-delete" title="Xóa bản ghi">
            <div class="delete-content">
                <div class="title-delete">
                    <span id="ui-id-5" class="ui-dialog-title">Xóa bản ghi</span>
                </div>  
                <div class="content-body">
                    <div class="icon-notification"></div>
                    <div class="body-info">
                        <span>Bạn có chắc muốn xóa thông tin </span><span class="total-del">{{this.$store.state.totalMassDelete}}</span><span> bản gi này?</span> 
                    </div>
                </div>
                <div class="content-footer">
                    <button id="btn-delete-cancel" 
                    class="" 
                    Command="Continue" 
                    data-toggle="tooltip" 
                    data-placement="top" 
                    @click="closeDeleteForm"
                    title="Hủy tiến trình">Hủy</button>

                    <button id="delete-btn-form" 
                    class=""
                    Command="Cancel" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    @click="accessMassDelete"
                    title="Xóa dữ liệu">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const Swal = require('sweetalert2')

export default {
    setup() {
        
    },
    methods: {
        /**
         * close form 
         * PQ Huy 15.06.2021
         */
        closeDeleteForm(){
            this.$emit('closeDeleteForm')
        },
        /**
         * access mass delete
         * PQ Huy 20.06.2021
         * */
        accessMassDelete(){
            this.$emit('accessMassDelete')
        }
    }
}
</script>

<style>
.total-del{
    font-weight: bold
}

.box-delete {
    width: 100%;
    height: 100%;
    background-color: rgb(104 102 102 / 63%);
    position: fixed;
    top: 0;
    z-index: 10;
    left: 0;
}

.title-delete {
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    padding: 24px;
}

</style>