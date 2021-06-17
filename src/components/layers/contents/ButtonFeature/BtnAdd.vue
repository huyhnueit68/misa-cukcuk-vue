<template>
    <div class="content-feature btn-name toolBarBtn" id="toolBarEmployee" v-tooltip.bottom="huyyyyyy">
        <button id="btnAdd" 
        class="m-btn m-btn-default" 
        v-tooltip.bottom="options"
        data-toggle="tooltip" 
        data-placement="top" 
        title="Thêm thông tin" >
            <div class="m-btn-icon icon-add" v-tooltip.bottom="huyyyyyy"></div>
            <div class="btn-text" @click="enableShowDialog" v-tooltip.bottom="huyyyyyy">{{ titleBtn }}</div>
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
          autoHide: false,
          show: true,
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
/**
  custom tool tip
*/
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: #019160;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
  height:20px;
  font-size: 13px;
  text-align: center;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #019160;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
/**
 */


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