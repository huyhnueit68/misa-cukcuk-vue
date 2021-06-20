<template>
    <tbody class="custom-tbody" id="employeeTable" ref="tbody">
        <tr v-for="(items, index) in employeeData" :key="index"  
        @dblclick="selectedItem(items), $store.commit('FormStateEdit')"
        @click.ctrl="multiSelect(index)"
        @click.exact="selectedOnlyRow(index)"
        :employeeID="items.EmployeeId"
        :class="{ 'selected-row': selectedRow(index) }"
        >
            <td><input type="checkbox" id="" name="" class="checkedValue" value=""></td>
            <td>{{index + 1 }}</td>
            <td>{{ items.EmployeeCode }}</td>
            <td>{{ items.FullName }}</td>
            <td>{{ formatGrender(items.Gender) }}</td>
            <td>{{ formatDate(items.DateOfBirth) }}</td>
            <td>{{ items.PhoneNumber }}</td>
            <td>{{ items.Email }}</td>
            <td>{{ items.PositionId }}</td>
            <td>{{ items.DepartmentCode }}</td> 
            <td class="align-right">{{ formatSalary(items.Salary) }}</td>
            <td>{{ formatWorkStatus(items.WorkStatus) }}</td>
        </tr>
    </tbody>
</template>

<script>
import enumeration from '../../../../js/common/enumeration'
import resource from '../../../../js/common/resource.js'
import moment from "moment";
const Swal = require('sweetalert2')

export default({
    data(){
        return {
            employeeData: {},
            isReload: this.$store.state.isReload, 
            saveSelectedRow: [],
        }
    }, 
    created() {
        this.getData();
        /**
         * is enable show mass delete
         */
        this.setEnableShowMassDelete();
    },
    methods: {
        /**
         * access mass delete
         * PQ Huy 20.06.2021
         */
        async accessMassDelete(){
            let rows = this.$refs.tbody.querySelectorAll('.selected-row'),
                countSuccess = 0;
                
            // get list id and delete
            await rows.forEach(element => {
                this.deleteEmployeebyId(element.getAttribute("employeeID")) ? countSuccess ++ : countSuccess += 0;
            });
            this.successNotification(countSuccess);

            // close form and refresh data
            this.$emit('successMassDelete');
        },
        /**
         * show popup notification success
         * PQ Huy 17.06.2021
         */
        successNotification(countSuccess){
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            customClass: "popup-success",
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Xóa thành công ' + countSuccess.toString() + ' bản ghi !'
        })
        },
        /**
         * function delete employee by id
         * PQ Huy 20.06.2021
         */
        async deleteEmployeebyId(employeeID){
            await this.axios.delete('http://cukcuk.manhnv.net/v1/employees/'+employeeID).then((response) => {
                this.$emit('accessDeleteRecord')
                if(response.status == 200) {
                    this.successNotification();
                    return true;
                } else {
                    this.errorNotification();
                    return false;
                }
            }).catch((error) => {
                console.log(error);
                return false;
            })
        },
        /**
         * set enable btn delete
         * PQ Huy 20.06.2021
         */
        setEnableShowMassDelete(){
            if(this.getLenghtSelectedRow() <= 0) {
                this.$store.commit('DisableMassDelete')
                this.$store.state.isMassDeleteRow
            } else {
                this.$store.commit('EnableMassDelete')
            }
        },
        /**
         * get length selected row
         * PQ Huy 20.06.2021
         */
        getLenghtSelectedRow(){
            if(this.saveSelectedRow) {
                return this.saveSelectedRow.length;
            } else {
                return 0;
            }
        },
        /**
         * fun ction set selected row
         * PQ Huy 20.06.2021
         */
        selectedOnlyRow(index){
            this.saveSelectedRow = [];
            this.saveSelectedRow.push(index);
            this.setEnableShowMassDelete();
            this.$store.state.totalMassDelete = this.getLenghtSelectedRow();            
        },
        /**
         * check selected row
         * PQ Huy 20.06.2021
         */
        selectedRow(index) {
            this.setEnableShowMassDelete();
            return this.saveSelectedRow.includes(index);
        },
        /**
         * set multi selected row
         * PQ Huy 20.06.2021
         */
        multiSelect(index){
            this.setEnableShowMassDelete();
            this.saveSelectedRow.push(index);
            this.$store.state.totalMassDelete = this.getLenghtSelectedRow();            
        },
        /**
         * set selected item
         */
        setSelectItems(){

        },
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
            setInterval(() => this.$store.commit('DisableLoading'), 1000);
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
