<template>
    <!-- content chính -->
    <div class="content">
        <!-- header content -->
        <HeaderContent @enableDialog="showDialog" />
        <!-- filter tool bar-->
        <ToolBarContent/>
        <!-- table content -->
        <TableContent/>
        <!-- padding bar show list  -->
        <PagingContent/>
        <!-- dialog detail -->
        <DialogDetail v-if="isShowDialog"/>
    </div> 
</template>

<script>
import HeaderContent from './HeaderContent.vue'
import ToolBarContent from './ToolBarContent.vue'
import PagingContent from './PaddingContent.vue'
import TableContent from './TableContent.vue'
import DialogDetail from '../../../components/dialog/dialogDetail.vue'


export default({
    components: {
        HeaderContent,
        ToolBarContent,
        TableContent,
        PagingContent,
        DialogDetail
    },
    data(){
      return{
        isShowDialog: false
      }
    },
    methods: {
      showDialog(){
        this.isShowDialog = true;
      }
    }
})
</script>

<style>
    .content {
  position: absolute;
  top: 61px;
  left: 221px;
  width: calc(100% - 253px);
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
