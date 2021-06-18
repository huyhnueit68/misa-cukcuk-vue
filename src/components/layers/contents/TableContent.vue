<template>
    <div class="grid grid-employee el-table el-table--fit el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition" 
        id="gridEmployee" Url="v1/Employees" ToolBar="toolBarEmployee" ItemId="EmployeeId" ToolBox = "toolBoxEmployee">
        <!-- table content -->
        <table class="table" cellspacing="0" cellpadding="15" border="0">
         <!-- header table  -->
          <HeaderTable/>
         <!-- content table -->
          <ContentTable @showDialogEdit="showDialogEdit" ref="contentTable" @reloadData="reloadData"/>
        </table>
    </div>
</template>

<script>
import HeaderTable from "./table/HeaderTable"
import ContentTable from "./table/ContentTable"

export default {
  components: {
    HeaderTable,
    ContentTable
  },
  methods: {
    reloadData(){
      this.$emit('reloadData');
    },
    /**
     * get data filter
     * PQ Huy 18.06.2021
     */
    getDataFilter(employeeDataFilter){
      this.$refs.contentTable.getDataFilter(employeeDataFilter);
    },
    /**
     * show dialog edit
     * PQ Huy 13.06.2021
     */
    showDialogEdit(employeeId){
      this.$emit('showDialogEdit', employeeId)
    },
    /**
     * get data table content
     * PQ Huy 13.06.2021
     */
    getDataTableContent(){
      this.$refs.contentTable.getDataContentTable();
    }
  }
}
</script>

<style>
/* Grid */
.grid {
  width: 100%;
  overflow-x: auto;
  /* overflow-y: hidden; */
}

.grid .grid-header {
  height: 50px;
}

.grid .hide-item {
  display: none;
}

/*
  custom table
*/

table {
  width: 100%;
  position: relative;
  text-align: left;
}

table > tbody > tr > td,
table > thead > tr > th {
  padding: 0 0 0 10px;
}

.table thead {
  height: 48px;
  background-color: #ffffff;
}

.table thead tr th {
  position: sticky;
  top: 0;
  background-color: #ffffff;
}

.custom-input,
.checkedValue {
  margin: 0;
  width: 50px;
  height: 16px;
}

.custom-header .custom-color {
  text-align: justify;
}

.custom-header .custom-color > :first-child {
  width: 42px;
}

.custom-header .custom-color .custom-input {
  margin: 2px 10px 0 16px;
}

.custom-tbody tr {
  height: 48px;
}

.custom-tbody tr td input {
  margin: 2px 10px 0 16px;
}

.grid .grid-content,
.tablescroll_wrapper,
.tablescroll {
  height: calc(100% - 25px);
}

.grid-employee {
  margin-top: 10px;
  height: calc(100vh - 234px);
}

.custom-tbody {
  overflow: auto;
}

.grid tbody tr:nth-child(2n + 1) {
  background-color: #fafafa;
}

.grid tbody tr:hover {
  background-color: #d9d9d9;
  cursor: pointer;
}

.align-right {
  text-align: right;
}

.selected-row {
  background-color: rgba(227, 244, 238) !important;
}

/* create scroll in table */
#gridProperty {
  overflow-y: auto;
}

.custom-input:checked:before {
  background-color: red !important;
}

.hidden-delete {
  display: none;
}

</style>

