<template>
    <!-- content chính -->
    <div class="content">
        <!-- header content -->
        <HeaderContent @isShowDialog="showDialog" @accessMassDelete="accessMassDelete" ref="headerContent"/>
        <!-- filter tool bar-->
        <ToolBarContent @setReloadData="setReloadData" @dataFilter="dataFilter"/>
        <!-- table content -->
        <TableContent @showDialogEdit="showDialogEdit"
         ref="tableContent"
         @reloadData="setReloadData"
         @successMassDelete="successMassDelete"
         :employeeDataFilter="employeeDataFilter"
         />
        <!-- padding bar show list  -->
        <PagingContent/>
        <!-- dialog detail -->
        <DialogDetail @reloadData="setReloadData" 
                      v-if="enableShowDialog" 
                      @disableDialog = "isDialog" 
                      :employeeId="employeeId"/>
        <LoaderEffect v-if="this.$store.state.isLoading"/>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'
import ToolBarContent from './ToolBarContent.vue'
import PagingContent from './PaddingContent.vue'
import TableContent from './TableContent.vue'
import DialogDetail from '../../dialog/DialogDetail.vue'
import LoaderEffect from './buttonFeature/LoaderEffect.vue'

export default({
    components: {
        HeaderContent,
        ToolBarContent,
        TableContent,
        PagingContent,
        DialogDetail,
        LoaderEffect
    },
    data(){
      return  {
        enableShowDialog: false,
        isShowLoader: false,
        employeeId: null,
        employeeDataFilter: {}
      }
    },
    methods: {
      /**
       * function close form mass delete
       * PQ Huy 20.06.2021
       */
      async successMassDelete(){
        // close form
        await this.$refs.headerContent.successMassDelete();
        // reload data
        this.setReloadData();
      },
      /**
       * action access mass delete
       * PQ Huy 20.06.2021
       */
      accessMassDelete(){
        this.$refs.tableContent.accessMassDelete();
      },
      /**
       * get data filter
       * PQ Huy 18.06.2021
       */
      dataFilter(employeeDataFilter){
        this.employeeDataFilter = employeeDataFilter;
        this.$refs.tableContent.getDataFilter(this.employeeDataFilter);
      },
      /**
       * get data table
       * PQ Huy 13.06.2021
       */
      getData(){
        this.$refs.tableContent.getDataTableContent();
      },
      /**
       * set reload data
       * PQ Huy 13.06.2021
       */
      setReloadData(){
        this.getData();
      },
      /**
       * enable show dialog
       * PQ Huy 13.06.2021
       */
      showDialog(){
        this.enableShowDialog = true;
        this.employeeId = "";
      },
      /**
       * is show dialog
       * PQ Huy 13.06.2021
       */
      isDialog(){
        this.enableShowDialog = false;
      },
      /**
       * show dialog edit
       * PQ Huy 13.06.2021
       */
      showDialogEdit(employeeId){
        this.enableShowDialog = true;
        this.employeeId = employeeId;
      }
    }
})
</script>

<style>
.content {
  position: absolute;
  top: 60px;
  left: 220px;
  width: calc(100% - 221px);
  background-color: #ffffff;
  padding: 16px 16px 0 16px;
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
}

.content .header-content .content-feature {
  position: absolute;
  right: 16px;
}

/* Paging */
.content .paging-bar {
  height: 56px;
}


</style>
