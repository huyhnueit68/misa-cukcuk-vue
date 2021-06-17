<template>
    <div class="filter-bar">
        <div class="filter-left">
            <input id="txtSearchEmployee" class="icon-search input-search" type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" />
            <select id="cbxDepartment" fieldName="CustomerGroupName" fieldValue="CustomerGroupId" api="" class="m-control">
                <option value="">Tất cả phòng ban</option>
                <option value="">Văn phòng Tổng công ty</option>
                <option value="">Phong đào tạo công nghệ</option>
                <option value="">Phòng Nhân sự</option>
            </select>
            <!-- btn cutom combobox -->
          <CustomCbo :listSelectPosition="listSelectPosition"/>
        </div>
        <!-- sub tool bar in content huy-->
        <BtnToolBarContent @setReloadData="setReloadData"/>
    </div>
</template>

<script>
import BtnToolBarContent from './buttonFeature/BtnToolBar.vue'
import CustomCbo from '../../customBox/CboSelect.vue'

export default({
    components: {
        BtnToolBarContent,
        CustomCbo
    },
    data(){
      return{
        listSelectPosition: {
          1: "Tất cả vị trí",
          2: "Giám  Đốc",
          3: "Trưởng phòng",
        },
      }
    },
    methods: {
      /**
       * reload data table
       * PQ Huy 13.06.2021
       */
      setReloadData(){
        this.$emit('setReloadData');
      }
    }
})

</script>


<style>
    .filter-bar {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
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

.paging-bar {
  border-top: 2px solid #bbbbbb;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}
.paging-bar .paging-record-info {
  position: absolute;
  left: 16px;
}

.paging-bar .paging-record-option {
  position: absolute;
  right: 16px;
}

.paging-bar .paging-option button {
  outline: none;
  cursor: pointer;
}
.paging-bar .paging-option {
  display: flex;
}


.filter-left {
  display: flex;
}
.filter-left select {
  margin-left: 10px;
  margin-right: 10px;
}

input::placeholder {
  font-size: 11px;
}

.custom-input {
  margin: 0;
  width: 100%;
  height: 42px;
}

#txtSearchEmployee {
  min-width: 300px;
}

.icon-search {
  background-image: url("../../../../public/content/icon/search.png");
  background-repeat: no-repeat;
  background-position: 16px center;
}

.input-search {
  padding-left: 40px;
}


</style>