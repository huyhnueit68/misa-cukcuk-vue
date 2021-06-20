<template>
    <div class="content-feature btn-name toolBarBtn" id="toolBarEmployee" v-tooltip.top="options">
        <button id="btnAdd" 
        class="m-btn m-btn-default" 
        data-toggle="tooltip" 
        data-placement="top"
        title="Thêm thông tin" >
            <div class="m-btn-icon icon-add"></div>
            <div class="btn-text" @click="enableShowDialog">{{ titleBtn }}</div>
        </button>
    </div>
</template>

<script>
export default {
  props: {
    titleBtn: String
  },
  data(){
    return {
      options: {
          content: 'Thêm mới bản ghi',
          autoHide: true,
          show: false,
          classes: 'tooltip-add-record'
      },
    }
  },
  methods: {
    /**
     * set enable show dialog
     * PQ Huy 16.06.2021
     */
    enableShowDialog(){
      this.$store.commit('FormStateAdd');
      this.$emit('showDialog')
    }
  }
}
</script>

<style>
@import url("../../../../assets/css/customTooltip.css");


.tooltip-add-record .tooltip-inner {
    height: 30px !important;
}

.toolBarBtn:hover{
  cursor: pointer;
}



.m-btn {
  display: flex;
  align-items: center;
  background-color: #019160;
  border-radius: 4px;
  height: 40px;
  font-size: 13px;
  color: #ffffff;
  font-family: GoogleSans-Regular;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 100px;
  justify-content: center;
}

.m-btn:hover,
.m-btn:focus {
  background-color: #2fbe8e;
}

.m-btn .m-btn-icon {
  background-position: center;
}

.m-btn .btn-text {
  margin-left: 8px;
}

.icon-add {
  width: 16px;
  height: 16px;
  background-image: url("../../../../../public/content/icon/add.png");
}
</style>