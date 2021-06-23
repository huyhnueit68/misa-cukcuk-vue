<template>
  <div class="filter-bar" data-app>
    <div class="filter-left">
      <input
        id="txtSearchEmployee"
        class="icon-search input-search"
        ref="searchToolBar"
        @keyup="searchData"
        type="text"
        placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
      />
      <v-autocomplete id="cbxDepartment" placeholder="Chọn/Nhập thông tin phòng ban"
        class="cbo-department m-custom-cbo" dense
        outlined v-model="valuesDepartment" :items="dataDepartment" clearable
      >
        <template #item="{item}">
          <v-list>
            <v-list-item class="custom-selected">
              <v-list-item-icon>
                <v-icon class="m-icon-check" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{item.text}}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
      </v-autocomplete>
      <!-- btn cutom combobox -->
      <v-autocomplete
        id="cbxDepartment"
        placeholder="Chọn/Nhập thông tin vị trí"
        class="cbo-department m-custom-cbo"
        dense
        outlined
        v-model="valuesPosition"
        :items="dataPosition"
        clearable
      >
        <template #item="{item}">
          <v-list>
            <v-list-item class="custom-selected">
              <v-list-item-icon>
                <v-icon class="m-icon-check" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{item.text}}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
      </v-autocomplete>
    </div>
    <!-- sub tool bar in content huy-->
    <BtnToolBarContent @setReloadData="setReloadData" />
  </div>
</template>

<script>
import BtnToolBarContent from "./buttonFeature/BtnToolBar.vue";
import CustomCbo from "../../customBox/CboSelect.vue";
const COMPLETE_SEARCH = 13;

export default {
  components: {
    BtnToolBarContent,
    CustomCbo,
  },
  data() {
    return {
      listSelectPosition: {
        1: "Tất cả vị trí",
        2: "Giám  Đốc",
        3: "Trưởng phòng",
      },
      dataDepartment: [
        {text: "Tất cả phòng ban", icon: 'mdi-check'},
        {text:"Tổng công ty", icon: 'mdi-check'},
        {text:"Phòng đào tạo công nghệ", icon: 'mdi-check'},
        {text: "Phòng nhân sự", icon: 'mdi-check'},
      ],
      valuesDepartment: ["all", "company", "training", "human"],
      dataPosition: [
        {text: "Nhân viên", icon: 'mdi-check'},
        {text:"Lập trình", icon: 'mdi-check'},
        {text:"Thực tập", icon: 'mdi-check'},
        {text: "DevOps", icon: 'mdi-check'},
      ],
      valuesPosition: ["all", "company", "training", "human"],
      employee: {},
    };
  },
  methods: {
    /**
     * reload data table
     * PQ Huy 13.06.2021
     */
    setReloadData() {
      this.$emit("setReloadData");
    },
    /**
     * search method
     * PQ Huy 18.06.2021
     */
    searchData(e) {
      let fullName = this.$refs.searchToolBar.value;
      /**
       * check if enter for complete search
       */
      if (e.keyCode == COMPLETE_SEARCH) {
        // call api search with name
        this.axios.get("http://cukcuk.manhnv.net/v1/Employees/Filter?pageSize=5&pageNumber=1&fullName=" + fullName).then((response) => {
            this.employee = response.data.Data;
            this.$emit("dataFilter", this.employee);
          }).catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
/* custom autocomplete focurs */

.v-input__icon--clear {
    padding-right: 8px;
    padding-top: 15px;
}
.v-input__icon.v-input__icon--append {
    height: 38px !important;
    padding: 0 12px 0 12px !important;
    border-left: 1px solid #bbbbbb;
}
.v-input__append-inner {
    width: 34px !important;
    height: 38px !important;
    padding-top: 0px !important;
    margin-top: 0px !important;
}
.cbo-department .v-input__slot {
  padding: 0 0 0 16px !important; 
}
/* custom icon clearn autocomplete combobox */
.cbo-department button.mdi-close {
  font-size: 12px;
  border-radius: 50%;
  background-color: #f3f3f3;
  padding: 2px;
  margin-left: 10px;
}

.cbo-department button.mdi-close:hover {
  background-color: #e5e5e5;
}

/* custom icon checked in autocomplete */
.m-icon-check {
  opacity: 0;
}

.v-list-item--active .v-list .custom-selected .v-list-item__icon .m-icon-check{
  opacity: 1 !important;
}

.m-custom-cbo:focus {
  border: 1px solid rgb(175, 8, 8);
}

.v-list-item{
  padding-left: 8px !important;
}
.v-list {
  padding: 0 !important;
}
.cbo-department {
  padding-left: 10px !important;
}
.cbo-department,
.cbo-department .v-input__control,
.cbo-department .v-input__control .v-input__slot {
  height: 40px;
}

.v-list-item--active .custom-selected .v-list-item__content {
    color: #ffffff !important;
}

.v-list-item--link:before {
  background-color: #019160 !important;
}

.v-list-item--active .custom-selected{
  z-index: 2;
  color: inherit !important;
  color: #ffffff !important;
}

i.v-icon.mdi-check {
  color: #fff !important;
} 

.theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
    opacity: 1 !important;
}

.theme--light.v-list-item.v-list-item--highlighted::before {
    opacity: 1;
}

.v-list-item--active:before {
  z-index: 1;
  color: #ffffff !important;
  color: inherit !important;
}
.cbo-department .v-input__control .v-input__slot {
  border: 1px solid #bbb;
}
.cbo-department .v-input__control .v-input__slot:hover{
  border: 1px solid #019160;
}

#cbxDepartment {
  font-size: 13px;
  width: 150px;
}

.cbo-department .v-input__control .v-input__slot fieldset {
  border: none;
}

.filter-bar {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 24px;
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
  border: 1px solid #bbbbbb;
  border-radius: 4px;
}
</style>