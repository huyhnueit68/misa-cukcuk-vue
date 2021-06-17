<template>
    <button id="btnDelete" 
        class="m-btn-del m-btn-delete action-form" 
        Command="Delete" 
        data-toggle="tooltip" 
        data-placement="top"
        @click="deleteRecord"
        title="Xóa thông tin bản ghi này">
        <i class="icon-delete-detail"></i>
        <span class="btn-text">Xóa</span>
    </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    methods: {
        /**
         * access delete record
         * PQ Huy 16.06.2021
         */
        deleteRecord(){
            this.$emit('deleteRecord')
        }
    }
})
</script>

<style>
.icon-delete-detail {
    background-image: url("../../../../../public/content/icon/delete-16.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: content;
    width: 16px;
    padding-right: 10px;
    height: 16px;
}
</style>
