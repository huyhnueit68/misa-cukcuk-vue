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
                        Bạn có chắc muốn xóa thông tin bản gi này?<b id="custom-content-info"></b>
                    </div>
                </div>
                <div class="content-footer">
                    <button id="btn-delete-cancel" 
                    class="" 
                    Command="Continue" 
                    data-toggle="tooltip" 
                    data-placement="top" 
                    @click="closeDeleteForm"
                    title="Tiếp tục nhập dữ liệu">Hủy</button>

                    <button id="delete-btn-form" 
                    class="" 
                    Command="Cancel" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    @click="accessDelete"
                    title="Hủy tiến trình">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    props:['employeeId'],
    methods: {
        closeDeleteForm(){
            this.$emit('closeDeleteForm')
        },
        accessDelete(){
            this.axios.delete('http://cukcuk.manhnv.net/v1/employees/'+this.employeeId).then((response) => {
                this.$emit('accessDeleteRecord')
            })
        }, 
    }
}
</script>

<style>
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