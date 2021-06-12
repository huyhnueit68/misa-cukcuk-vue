<template>
    <tbody class="custom-tbody" id="employeeTable">
        <tr v-for="(items, index) in employeeData" :key="index" @dblclick="selectedItem(items)">
            <td><input type="checkbox" id="" name="" class="checkedValue" value="f7d2047f-c9c4-11eb-94eb-42010a8c0002"></td>
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

console.log("huy  "+ employeeData)

export default({
    setup() {
        
    },
    data(){
        return {
            employeeData: employeeData
        }
    },
    create() {
        this.getData();
    },
    methods: {
        selectedItem(e) {
            let employeeId = e.EmployeeId;
            this.$emit('showDialogEdit', employeeId);
        }
    },
    getData(){
        /**
         * get data form api
         */
    }
})
</script>

<style>
    @import "../../../../assets/css/grid.css";
 
</style>
