<template>
    <tbody class="custom-tbody" id="employeeTable">
        <tr v-for="(items, index) in employeeData" :key="index" @dblclick="selectedItem(items)">
            <td><input type="checkbox" id="" name="" class="checkedValue" value=""></td>
            <td>{{index + 1 }}</td>
            <td>{{ items.EmployeeCode }}</td>
            <td>{{ items.FullName }}</td>
            <td>{{ items.Gender }}</td>
            <td>{{ items.DateOfBirth }}</td>
            <td>{{ items.PhoneNumber }}</td>
            <td>{{ items.Email }}</td>
            <td>{{ items.PositionId }}</td>
            <td>{{ items.DepartmentId }}</td> 
            <td>{{ items.Salary }}</td>
            <td>{{ items.WorkStatus }}</td>
        </tr>

    </tbody>
</template>

<script>
import employeeData from "../../../../js/data/employeeData.js";

export default({
    setup() {
        
    },
    data(){
        return {
            employeeData: employeeData
        }
    },
    created() {
        this.getData(); 
    },
    methods: {
        selectedItem(items) {
            let employeeId = items.EmployeeId;
            this.$emit('showDialogEdit', employeeId);
        },
        getData() {
            /**
             * get data form api
             */
            // debugger  // eslint-disable-line no-debugger
            var me = this;
            this.axios.get('http://cukcuk.manhnv.net/v1/employees').then((response) => {
                me.employeeData = response.data
            })
        }
    },
    
})
</script>

<style>
    @import "../../../../assets/css/grid.css";
 
</style>
