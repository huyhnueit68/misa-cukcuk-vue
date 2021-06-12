<template>
    <div class="header-content">
        <div class="title">Danh sách nhân viên</div>
        <!-- button add record -->
        <ButtonAdd v-bind:titleBtn="customTitle" @showDialog="$emit('isShowDialog')"/>
    </div>
</template>

<script>
import ButtonAdd from './ButtonFeature/BtnAdd'

export default({
    components: {
        ButtonAdd, 
    },
    data(){
        return {
            customTitle: "Thêm nhân viên"
        }
    }
})
</script>

<style>

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
