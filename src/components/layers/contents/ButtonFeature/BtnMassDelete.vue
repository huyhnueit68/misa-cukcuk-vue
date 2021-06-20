<template>
    <button id="btnDelete" 
        class="m-btn-del m-btn-delete action-form" 
        Command="Delete" 
        data-toggle="tooltip" 
        data-placement="top"
        @click="massDelete"
        title="Xóa thông tin bản ghi">
        <i class="icon-delete-detail"></i>
        <span class="btn-text">{{title}}</span>
    </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        title: String,
    },
    setup() {
        
    },
    methods: {
        /**
         * access delete record
         * PQ Huy 16.06.2021
         */
        massDelete(){
            this.$emit('massDelete');
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
    margin-right: 8px;
    height: 16px;
}
</style>
