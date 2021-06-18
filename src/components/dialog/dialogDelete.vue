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
const Swal = require('sweetalert2')

export default {
    setup() {
        
    },
    props:['employeeId'],
    methods: {
        /**
         * close form 
         * PQ Huy 15.06.2021
         */
        closeDeleteForm(){
            this.$emit('closeDeleteForm')
        },
        /**
         * access delete 
         * PQ Huy 15.06.2021
         */
        async accessDelete(){
            await this.axios.delete('http://cukcuk.manhnv.net/v1/employees/'+this.employeeId).then((response) => {
                this.$emit('accessDeleteRecord')
                if(response.status == 200) {
                    this.successNotification();
                } else {
                    this.errorNotification();
                }
            }).catch((error) => {
                this.$swal({
                    title: "Thông báo",
                    text: error,
                    icon: "error",
                });
            })
        },
        /**
     * show popup notification success
     * PQ Huy 17.06.2021
     */
    successNotification(){
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        customClass: "popup-success",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Xóa dữ liệu thành công!'
      })
    },
    /**
     * show popup notification error
     * PQ Huy 17.06.2021
     */
    errorNotification(){
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        customClass: "popup-error",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Xóa dữ liệu thất bại!'
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