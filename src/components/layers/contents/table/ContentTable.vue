<template>
    <tbody class="custom-tbody" id="employeeTable">
        <tr v-for="(items, index) in employeeData" :key="index"  @dblclick="selectedItem(items), $store.commit('FormStateEdit')">
            <td><input type="checkbox" id="" name="" class="checkedValue" value=""></td>
            <td>{{index + 1 }}</td>
            <td>{{ items.EmployeeCode }}</td>
            <td>{{ items.FullName }}</td>
            <td>{{ formatGrender(items.Gender) }}</td>
            <td>{{ formatDate(items.DateOfBirth) }}</td>
            <td>{{ items.PhoneNumber }}</td>
            <td>{{ items.Email }}</td>
            <td>{{ items.PositionId }}</td>
            <td>{{ items.DepartmentId }}</td> 
            <td class="align-right">{{ formatSalary(items.Salary) }}</td>
            <td>{{ formatWorkStatus(items.WorkStatus) }}</td>
        </tr>

    </tbody>
</template>

<script>
import enumeration from '../../../../js/common/enumeration'
import resource from '../../../../js/common/resource.js'
import moment from "moment";

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
        /**
         * get data filter
         * PQ Huy 18.06.2021
         */
        getDataFilter(employeeDataFilter){
            if(employeeDataFilter) {
                if(employeeDataFilter.length) {
                    this.employeeData = employeeDataFilter
                }
            } else {
                /**
                 * no record select
                 */
                this.employeeData = {}
                /**
                 * alert notification for client
                 */
                this.$swal({
                    title: "Thông báo",
                    text: "Không tồn tại bản ghi nào!",
                    icon: "info",
                });
                /**
                 * reload data
                 */
                this.$emit('reloadData');
            }
        },
        /**
         * format salary
         * PQ Huy 17.06.2021
         */
        formatSalary(item){
            if(item) {
                item = item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
            return item;
        },
        /**
         * format date
         * PQ Huy 17.06.2021
         */
        formatDate(value){
            return value ? moment(String(value)).format("DD/MM/YYYY") : ''
        },
        /**
         * format work status
         * PQ Huy 17.06.2021
         */
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
        /**
         * format grender
         */
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
        /**
         * select items function
         * PQ Huy 17.06.2021
         */
        selectedItem(items) {
            let employeeId = items.EmployeeId;
            this.$emit('showDialogEdit', employeeId);
        },
        /**
         * get data table 
         * PQ Huy 17.06.2021
         */
        getDataContentTable(){
            this.getData();
        },
        /**
         * get new data form api
         * PQ Huy 17.06.2021
         */
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
        /**
         * set enable loading
         * PQ Huy 17.06.2021
         */
        stateChange() {
            this.$store.commit('EnableLoading')
            let timerId = setInterval(() => this.$store.commit('DisableLoading'), 1000);
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
    .align-right {
        text-align: right;
        padding-right: 24px;
    }
</style>
