<template>
    <tbody class="custom-tbody" id="employeeTable">
        <tr v-for="(items, index) in employeeData" :key="index"  @dblclick="selectedItem(items), $store.commit('FormStateEdit')">
            <td><input type="checkbox" id="" name="" class="checkedValue" value=""></td>
            <td>{{index + 1 }}</td>
            <td>{{ items.EmployeeCode }}</td>
            <td>{{ items.FullName }}</td>
            <td>{{ formatGrender(items.Gender) }}</td>
            <td>{{ items.DateOfBirth }}</td>
            <td>{{ items.PhoneNumber }}</td>
            <td>{{ items.Email }}</td>
            <td>{{ items.PositionId }}</td>
            <td>{{ items.DepartmentId }}</td> 
            <td>{{ items.Salary }}</td>
            <td>{{ formatWorkStatus(items.WorkStatus) }}</td>
        </tr>

    </tbody>
</template>

<script>
import enumeration from '../../../../js/common/enumeration'
import resource from '../../../../js/common/resource.js'

export default({
    data(){
        return {
            employeeData: {},
            isReload: this.$store.state.isReload, 
        }
    },
    
    created() {
        this.getData();
    },
    methods: {
        formatWorkStatus(wStatus){
            let textStatus = ""

          switch (wStatus){
            case enumeration.WorkStatus.Probation:
                textStatus = resource.WorkStatus.Probation;
              break;
            case enumeration.WorkStatus.Working:
                textStatus = resource.WorkStatus.Working;
                break;
            case enumeration.WorkStatus.Retired: 
                textStatus = resource.WorkStatus.Retired;
                break;
          }  

          return textStatus;
        },
        formatGrender(grender){
            let textGrender = ""

          switch (grender){
            case enumeration.Grender.Female:
                textGrender = resource.Grender.Female;
              break;
            case enumeration.Grender.Male:
                textGrender = resource.Grender.Male;
                break;
            case enumeration.Grender.Other: 
                textGrender = resource.Grender.Other;
                break;
          }  

          return textGrender;
        },
        selectedItem(items) {
            let employeeId = items.EmployeeId;
            this.$emit('showDialogEdit', employeeId);
        },
        getDataContentTable(){
            this.getData();
        },
        getData() {
            /**
             * get data form api
             */
            var me = this;
            this.axios.get('http://cukcuk.manhnv.net/v1/employees').then((response) => {
                me.employeeData = response.data
                /**
                 * enable reload UI
                 */
                //debugger  // eslint-disable-line no-debugger
                this.stateChange();
            })
        },
        stateChange() {
            this.$store.commit('EnableLoading')
            let timerId= setInterval(() => this.$store.commit('DisableLoading'), 1000);
        }
    },
    watch: {
        isReload(){
            if(this.$store.state.isReload) {
                this.getData();
            }
            this.$store.commit('DisableReloading')
        }
    }
})
</script>

<style>
    @import "../../../../assets/css/grid.css";
 
</style>
