<template>
    <div class="header-content">
        <div class="title">Danh sách nhân viên</div>
        <!-- mass delete -->
        <BtnMassDelete class="content-mass-delete" 
        v-if="this.$store.state.isMassDeleteRow" 
        v-tooltip.top="optionsMassDelete"
        :title="titleBtnDel"
        @massDelete="massDelete"
        />
        <!-- button add record -->
        <ButtonAdd v-bind:titleBtn="customTitle" @showDialog="$emit('isShowDialog')"/>
        <!-- dialog delete -->
        <DialogMassDelete v-if="isShowMassDel" @closeDeleteForm="closeDeleteForm" @accessMassDelete="accessMassDelete"/>
    </div>
</template>

<script>
import ButtonAdd from './buttonFeature/BtnAdd.vue'
import BtnMassDelete from './buttonFeature/BtnMassDelete.vue'
import DialogMassDelete from '../../dialog/DialogMassDelete.vue'

export default({
    components: {
        ButtonAdd, 
        BtnMassDelete,
        DialogMassDelete
    },
    data(){
        return {
            isShowMassDel: false,
            customTitle: "Thêm nhân viên",
            optionsMassDelete: {
                content: 'Xóa các bản ghi',
                autoHide: true,
                show: false,
                classes: 'tooltip-del-record'
            },
            titleBtnDel: "Xóa nhân viên",
        }
    },
    methods: {
        /**
         * function close form mass delete
         * PQ Huy 20.06.2021
         */
        successMassDelete(){
            this.closeDeleteForm();
        },
        /**
         * close form action
         * PQ Huy 20.06.2021
         */
        closeDeleteForm(){
            this.isShowMassDel = false;
        },
        /**
         * open dialog form mass delete
         * PQ Huy 20.06.2021
         */
        massDelete(){
            this.isShowMassDel = true;
        },
        /**
         * access mass delete
         * PQ Huy 20.06.2021
         */
        accessMassDelete(){
            this.$emit('accessMassDelete');
        }
    }
})
</script>

<style>

.tooltip-del-record .tooltip-inner {
    background: #f04a4a;
    height: 30px;
}

.tooltip-del-record .tooltip-arrow {
    border-color: #f04a4a;
}

.content-mass-delete{
    position: absolute;
    right: 174px;
}

/*Page tile*/
.content .header-content {
padding: 8px 0 16px 0;
display: flex;
align-items: center;
}

.content .header-content .title {
font-size: 20px;
font-weight: bold;
color: #000000;
}

.content .header-content .content-feature {
position: absolute;
right: 16px;
}
</style>
