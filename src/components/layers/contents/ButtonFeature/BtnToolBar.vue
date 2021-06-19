<template>
    <div class="filter-right" id="toolBoxEmployee">
        <button id="btnMassDelete" class="m-second-button tool-box" CommandType="MassDelete" data-toggle="tooltip"
          data-placement="top" 
          title="Xóa thông tin bản ghi này">
          <i class="fa fa-minus-circle"></i>
          <span class="btn-text">Xóa</span>
        </button>
        <button id="btnRefresh" 
          class="m-second-button m-btn-refresh tool-box" 
          data-toggle="tooltip" 
          data-placement="top" 
          title="Làm mới thông tin" 
          v-tooltip.bottom="optionsReload"
          @click="reloadData">
        </button>
        <button id="btnImport" 
          class="m-second-button m-btn-import" 
          CommandType="Import" 
          v-tooltip.bottom="optionsImport"
          data-toggle="tooltip tool-box" 
          data-placement="top" 
          title="Nhập khẩu dữ liệu">
        </button>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
  data(){
    return {
      optionsReload: {
          content: 'Làm mới dữ liệu',
          autoHide: false,
          show: false,
          classes: 'tooltip-reload'
      },
      optionsImport: {
          content: 'Làm mới dữ liệu',
          autoHide: false,
          show: false,
          classes: 'tooltip-reload'
      },
    }
  },
  methods: {
    /**
     * set reload 
     * PQ Huy 16.06.2021
     */
    reloadData(){
      this.$store.commit('EnableReloading');
      this.$emit('setReloadData');
    }
  }
})
</script>


<style>

/**
  custom tooltip
*/
.tooltip-reload .tooltip-inner {
    background: #515252;
    color: white;
    height: 30px;
}

.tooltip-reload .tooltip-arrow {
    border-color: #515252;
}
    
.filter-bar .filter-right {
  position: absolute;
  display: flex;
  right: 16px;
}

.filter-bar .filter-right #btnMassDelete {
  background-color: rgb(224, 47, 47);
  color: #ffffff;
  display: none;
}

.filter-bar .filter-right #btnMassDelete:hover {
  cursor: pointer;
  background-color: rgb(214, 110, 110);
}


.m-second-button {
  border: 1px solid #bbbbbb;
  background-color: #ffffff;
  border-radius: 4px;
  height: 40px;
  color: #000000;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  outline: none;
  cursor: pointer;
}

.m-second-button:hover {
  background-color: #e9ebee;
}

.m-btn-refresh {
  background-image: url("../../../../../public/content/icon/refresh.png");
  background-repeat: no-repeat;
  width: 40px;
  background-position: center;
  margin: 0 5px 0 5px;
}

.m-mass-delete {
  background-image: url("../../../../../public/content/icon/delete.png");
  background-repeat: no-repeat;
  width: 40px;
  background-position: center;
  background-size: center;
}

.m-btn-import {
  background-image: url("../../../../../public/content/icon/import.png");
  background-repeat: no-repeat;
  width: 40px;
  background-position: center;
  background-size: 20px;
}

</style>