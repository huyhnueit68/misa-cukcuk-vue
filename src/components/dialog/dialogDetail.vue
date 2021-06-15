<template>
    <!-- pop up detail -->
    <div class="box-dialog">
      <!-- pop up detail -->
      <div class="m-dialog dialog-detail" title="" id="modalAction">
        <div class="dialog-content" ShowForm="true">
            <div class="dialog-body">
              <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle custom-header-dialog">
                <span id="ui-id-1" class="ui-dialog-title custom-title">THÔNG TIN NHÂN VIÊN</span>
              </div>
                <div class="m-row m-flex">
                    <div class="m-col el-avatar-employee m-flex-1">
                        <div class="el-avatar"></div>
                        <div class="el-avatar-note text-align-center">
                            (Vui lòng chọn ảnh có định dạng <br><b>.jpg, .jpeg, .png, .gif. </b>)
                        </div>
                    </div>
                    <div class="m-col el-left  m-flex-4">
                        <div class="group-label-info">
                            A. Thông tin chung:
                        </div>
                        <hr class="hr-group-label" />
                        <div class="m-row mg-top-0 m-flex">
                            <div class="m-col m-flex-1">
                                <div class="m-label">Mã nhân viên (<span class="label-required">*</span>)</div>
                                <div class="m-control">
                                  <input v-model="employee.EmployeeCode" 
                                  :class="[
                                    applyInputStyle(employee.EmployeeCode)
                                  ]" 
                                  id="txtEmployeeCode" required 
                                  class="input-required"
                                  ref="employeeCodeRequest"
                                  tabindex="0"
                                  type="text" />
                                  </div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Họ và tên (<span class="label-required">*</span>)</div>
                                <div class="m-control">
                                    <input id="txtFullName" 
                                    v-model="employee.FullName" 
                                    fieldName="FullName" 
                                    @keyup="capitalizeFirstLetter"
                                    :class="applyInputStyle(employee.FullName)" 
                                    ref="employeeNameRequest"
                                    class="input-required"
                                    type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Ngày sinh</div>
                                <input type="date" 
                                id="DateOfBirth" 
                                class="success-input"
                                :formatter="momentFormat"
                                v-model="employee.DateOfBirth" 
                                name="birthday"
                                fieldName="DateOfBirth" DataType="Date">
                            </div>
                            <!-- date time picker -->
                            <datepicker :formatter="momentFormat"
                                v-model="employee.DateOfBirth" name="uniquename">
                            </datepicker>

                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Giới tính</div>
                                <select id="cbxGender"
                                 FieldName="Gender"
                                 class="success-input"
                                 DataType="Enum" EnumName="Gender" v-model="employee.Gender">
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                    <option value="2">Khác</option>
                                </select>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label" title="Số chứng minh thư nhân dân hoặc căn cước công dân">Số CMTND/ Căn cước (<span class="label-required">*</span>)</div>
                                <div class="m-control"><input v-model="employee.IdentityNumber" 
                                id="txtIdentityNumber"
                                :class="applyInputStyle(employee.IdentityNumber)"
                                class="success-input"
                                ref="employeeIdentityRequest"
                                fieldName="IdentityNumber" type="text" required /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Ngày cấp</div>
                                <input type="date" 
                                id="dateOfIndentity" 
                                class="success-input"
                                v-model="employee.IdentityDate"
                                name="indentityDate" 
                                fieldName="IdentityDate" DataType="Date">
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Nơi cấp</div>
                                <div class="m-control"><input v-model="employee.IdentityPlace"  
                                id="txtIdentityPlace"
                                fieldName="IdentityPlace" 
                                class="input-required success-input" 
                                type="text" /></div>
                            </div>
                            <div class="m-flex-1">
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-col m-flex-1">
                                <div class="m-label">Email (<span class="label-required">*</span>)</div>
                                <div class="m-control"><input v-model="employee.Email" 
                                id="txtEmail" 
                                fieldName="Email"
                                class="success-input"
                                type="email" 
                                ref="employeeEmailRequest"
                                :class="applyInputStyle(employee.Email)" 
                                required placeholder="example@domain.com" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Số điện thoại (<span class="label-required">*</span>)</div>
                                <div class="m-control" @click="triggerEmployeePhoneRequest">
                                    <input v-model="employee.PhoneNumber" 
                                    id="txtPhoneNumber" 
                                    fieldName="PhoneNumber" 
                                    DataType="PhoneNumber" 
                                    maxlength="100"
                                    class="input-required"
                                    ref="employeePhoneRequest"
                                    :class="applyInputStyle(employee.PhoneNumber)" 
                                    type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="group-label-info" style="margin-top:30px">
                            B. Thông tin công việc:
                        </div>
                        <hr class="hr-group-label" />
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Vị trí</div>
                                <select v-model="employee.PositionCode" 
                                id="cbxPosition" fieldName="PositionCode" 
                                fieldValue="CustomerGroupId"
                                api="" 
                                class="m-control success-input">
                                    <option value="0">Giám đốc</option>
                                    <option value="1">Nhân viên</option>
                                </select>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Phòng ban</div>
                                <select v-model="employee.DepartmentId" 
                                id="cbnDepartment" 
                                fieldName="DepartmentCode"
                                fieldValue="CustomerGroupId"
                                api="" 
                                class="m-control success-input">
                                    <option value="0">Phòng nhân sự</option>
                                    <option value="1">Phòng đào tạo</option>
                                </select>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Mã số thuế cá nhân</div>
                                <div class="m-control"><input v-model="employee.IdentityId" 
                                id="txtAddress" 
                                fieldName="Address"
                                class="success-input"
                                type="text" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px" @click="triggerEmployeeSalaryRequest">
                                <div class="m-label">Mức lương cơ bản</div>
                                <div class="m-control"><input v-model="employee.Salary"  
                                id="txtSalary" 
                                fieldName="Salary"
                                @keyup="formatMoney"
                                class="success-input"
                                ref="employeeSalaryRequest"
                                DataType="Number"
                                type="text" 
                                style="text-align:right; padding-right: 56px" /><span class="currency-for-input">(VNĐ)</span></div>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Ngày gia nhập</div>
                                <input v-model="employee.CreatedDate"  
                                type="date" 
                                id="dtDateJoin" 
                                name="birthdaytime"
                                class="success-input"
                                 DataType="Date" 
                                 fieldName="CreatedDate">
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Tình trạng công việc</div>
                                <select  v-model="employee.WorkStatus" 
                                id="cboWorkStatus" fieldName="WorkStatus" 
                                fieldValue="CustomerGroupId"
                                api="" 
                                class="m-control success-input">
                                    <option value="1">Đang làm việc</option>
                                    <option value="0">Đang thử việc</option>
                                    <option value="2">Nghỉ việc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <button id="btnCancel" 
                  @click="disableClickDialog" 
                  class="m-btn m-btn-default m-btn-cancel action-form" 
                  Command="Cancel" 
                  data-toggle="tooltip"  
                  data-placement="top" 
                  title="Hủy tiến trình">Hủy
                </button>
                <button id="btnDelete" 
                  class="m-btn-del m-btn-delete action-form" 
                  Command="Delete" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  @click="deleteRecord"
                  title="Xóa thông tin bản ghi này">
                  <i class="fa fa-minus-circle"></i>
                  <span class="btn-text">Xóa</span>
                </button>
                <button @click="save"
                  id="btnSave"
                  class="m-btn m-btn-default action-form"
                  Command="Save"
                  data-toggle="tooltip" 
                  data-placement="top" 
                  title="Lưu lại thông tin">
                  <i class="far fa-save"></i>
                  <span class="btn-text">Lưu</span>
                </button>
            </div>
        </div>
        <div class="field-import" hidden="hidden">
            <input id="fileImportInput" type="file" />
        </div>
      </div>
      <!-- dialog cancel -->
      <DialogCancel v-if="showDialogCancel" @closeForm="closeForm" @closeAllForm="closeAllForm"/>
      <!-- dialog delete -->
      <DialogDelete v-if="showDialogDelete" @closeDeleteForm="closeDeleteForm" @accessDeleteRecord="accessDeleteRecord"/>
    </div>
</template>

<script>
import DialogCancel from './dialogCancel.vue'
import DialogDelete from './dialogDelete.vue'
import moment from "moment";
import Datepicker from 'vuejs-datepicker';

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default {
  components: {
    DialogCancel,
    DialogDelete,
    Datepicker
  },
  props:
  {
     employeeId: String
  },
  created() {
    this.getEmployeeById(this.employeeId)
    this.formatDate()
  },
  data(){
    components: {
      
    }
    return{
      employee: {},
      showDialogCancel: false,
      showDialogDelete: false,
      momentFormat: {
        // Date to String
        stringify: (date) => {
          return date ? moment(String(date)).format("YYYY/MM/DD") : ''
        },
        //[optional]  String to Date
        parse: (value) => {
          return value ? moment(value, 'LL').toDate() : null
        },
      }
    }
  },
  mounted() {
    this.forcusInput()
  },
  methods: {
    formatMoney() {
      let valueMoney = this.$refs.employeeSalaryRequest.value
      this.$refs.employeeSalaryRequest.value = valueMoney.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
    capitalizeFirstLetter() {
      let words = this.$refs.employeeNameRequest.value.split(' ');  
      let CapitalizedWords = [];  
      words.forEach(element => {  
          CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
      });
      this.$refs.employeeNameRequest.value = CapitalizedWords.join(' ');
    },
    formatDate(){
      /**
       * format date of birthday
       */
      let value = this.employee.DateOfBirth;
      if(value) {
        this.employee.DateOfBirth = value ? moment(String(value)).format("YYYY-MM-DD") : '';
      }
      /**
       * format Identity Date
       */
      value = this.employee.IdentityDate;
      if(value) {
        this.employee.IdentityDate = value ? moment(String(value)).format("YYYY-MM-DD") : '';
      }
      /**
       * format Created Date
       */
      value = this.employee.CreatedDate;
      if(value) {
        this.employee.CreatedDate = value ? moment(String(value)).format("YYYY-MM-DD") : '';
      }
    },
    deleteRecord(){
      this.showDialogDelete = true;
    },
    accessDeleteRecord(){
      this.closeDeleteForm();
    },
    closeDeleteForm(){
      /**
       * close form required
       */
      this.showDialogDelete = false;
      /**
       * action delete record
       */
    },
    closeAllForm(){
      this.closeForm();
      this.$emit('disableDialog');
    },
    closeForm(){
      this.showDialogCancel = false;
    },
    triggerEmployeePhoneRequest(){
      this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className.replace("error-warning", "")
    },
    triggerEmployeeSalaryRequest(){
      this.$refs.employeeSalaryRequest.className = this.$refs.employeeSalaryRequest.className.replace("error-warning", "")
    },
    /**
     * function check length of input 
     */
    applyInputStyle(targetInput) { 
      if(targetInput && targetInput.length > 0){
        return ['success-input']
      }else{
        return ['error-input']
      }
    },
    /**
     * function close dialog
     */
    disableClickDialog(){
      /**
       * show dialog cancel
       */
      this.showDialogCancel = true;
    },
    getEmployeeById(employeeId){
      if(employeeId) {
        /**
         * get by id
         */
        this.employee = {
          "EmployeeId": "1ec2f9e3-c9c5-11eb-94eb-42010a8c0002",
          "EmployeeCode": "2",
          "FirstName": null,
          "LastName": null,
          "FullName": "VIET NAM VO DICH",
          "Gender": 2,
          "DateOfBirth": "2021-06-17T00:00:00",
          "PhoneNumber": "12323132",
          "Email": "55@gmail.com",
          "Address": "",
          "IdentityNumber": "7777",
          "IdentityDate": "2021-06-15T00:00:00",
          "IdentityPlace": "Tỉnh Bắc Giang",
          "JoinDate": null,
          "MartialStatus": null,
          "EducationalBackground": null,
          "QualificationId": null,
          "DepartmentId": 1,
          "PositionId": 1,
          "WorkStatus": 1,
          "PersonalTaxCode": null,
          "Salary": 1000000,
          "PositionCode": 1,
          "PositionName": null,
          "DepartmentCode": null,
          "DepartmentName": null,
          "QualificationName": null,
          "GenderName": "Không xác định",
          "EducationalBackgroundName": null,
          "MartialStatusName": null,
          "CreatedDate": "2021-06-10T08:23:22",
          "CreatedBy": null,
          "ModifiedDate": null,
          "ModifiedBy": null
        }

      } else {
        this.employee = {}
      }
    },
    forcusInput(){
      this.$refs.employeeCodeRequest.focus()
    },
    /**
     * save function
     * PQ Huy 13.06.2021
     */
    save(){

      /**
       * save data to file json
       */
      if(this.validateData()){
        /**
         * close form
         */
        this.$emit('disableDialog');

        /**
         * reload data
         */
        this.$emit('reloadData')
      } else {
          // show log error
          alert("Error");
      }
    },
    /**
     * validate data
     * PQ Huy 13.06.2021
     */
    validateData(){
      let checked = true;
      /**
       * validate not null
       */
      if(!this.validateNotNull()){
        return false;
      }
      /**
       * validate employee code
       */
      if(!this.validateEmployeeCode()){
        return false;
      }
      /**
       * validate email
       */
      if(!this.validateEmail()){
        return false;
      }
      /**
       * validate number
       */
      if(!this.validateNumber()){
        return false;
      }

      return checked;
    },
    /**
     * validate fomat email
     */
    validateEmail(){
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.employee.Email)) {
        this.$refs.employeeEmailRequest.className = this.$refs.employeeEmailRequest.className + " error-warning";
        alert("Vui lòng điền đúng email")
        return false;
      }
      return true;
    },
    /**
     * validate duplicate code
     * PQ Huy 13.06.2021
     */
    validateEmployeeCode(){
      let checked = true;
      return checked;
    },
    /**
     * function validate not null
     * PQ Huy 13.06.2021
     */
    validateNotNull(){
      let checked = true;

        if(!this.employee.EmployeeCode) {
          this.$refs.employeeCodeRequest.className = this.$refs.employeeCodeRequest.className + " error-warning";
          checked = false;
        }

        if(!this.employee.FullName) {
          this.$refs.employeeNameRequest.className = this.$refs.employeeNameRequest.className + " error-warning";
          checked = false;
        }

        if(!this.employee.IdentityNumber) {
          this.$refs.employeeIdentityRequest.className = this.$refs.employeeIdentityRequest.className + " error-warning";
          checked = false;
        }

        if(!this.employee.Email) {
          this.$refs.employeeEmailRequest.className = this.$refs.employeeEmailRequest.className + " error-warning";
          checked = false;
        }

        if(!this.employee.PhoneNumber) {
          this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className + " error-warning";
          checked = false;
        }

        if(!checked) {
          alert("Điền đẩy đủ thông tin");
        }

        return checked;
    },
    validateNumber(){
      if(!/^[0-9,.]*$/.test(this.employee.PhoneNumber)) {
        this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className + " error-warning";
        alert("Vui lòng điền đúng số điện thoại");
        return false;
      }
      if(!/^[0-9,.]*$/.test(this.employee.Salary)) {
        this.$refs.employeeSalaryRequest.className = this.$refs.employeeSalaryRequest.className + " error-warning";
        alert("Vùi lòng nhận đúng số lương");
        return false;
      } else {
        this.$refs.employeeSalaryRequest.className = this.$refs.employeeSalaryRequest.className.replace("error-warning", "")
      }
      return true;
    },
  },
}
</script>

<style>


.error-warning{
  outline: none;
  border: 1px solid #F65454;
}

.error-input:focus{
  outline: none;
  border: 1px solid #F65454;
}

.success-input:focus{
  outline: none;
  border: 1px solid #019160;
}

.custom-title{
  font-size: 22px;
  font-weight: bold;
}

.custom-header-dialog{
  padding: 24px 24px 0 24px;
  text-align: left;
}

.box-dialog {
  width: 100%;
  height: 100%;
  background-color: rgb(104 102 102 / 63%);
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
}
#modalAction {
  width: 800px;
}
.m-dialog .dialog-modal {
  /* quy định độ trong suốt của nền màu nào đó. */
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  z-index: 999;
}

.m-dialog .dialog-content {
  background-color: #ffffff;
  z-index: 1000;
  border-radius: 5px;
}

.m-dialog .dialog-header {
  display: flex;
  padding: 24px 24px 0px 24px;
  cursor: move;
}

.m-dialog .dialog-header .dialog-header-close {
  position: absolute;
  right: 0;
  top: 0;
}

.m-dialog .dialog-header .dialog-header-close:hover {
  border-radius: 5px;
}

.m-dialog .dialog-header .dialog-header-close button {
  width: 40px;
  height: 40px;
  border-radius: 0 5px 0 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  background-image: url("../../../public/content/icon/x.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  opacity: 0.7;
}

.m-dialog .dialog-header .dialog-header-close button:hover {
  background-color: #ccc;
}

/*Tiêu đề của dialog*/

.m-dialog .dialog-header .dialog-header-title {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.dialog-content .dialog-body {
  padding: 0px 24px 24px;
}

.dialog-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  box-sizing: border-box;
}

.dialog-footer button {
  margin-left: 16px;
}

.notValidControl {
  border: 2px solid red !important;
}

/* 
  dialog cancel
*/
.cancel-dialog-custom .ui-dialog-titlebar {
  padding: 24px !important;
  font-size: 15px !important;
  color: #000000 !important;
}

.dialog-cancel .cancel-content {
  background-color: #ffffff;
  z-index: 1000;
  border-radius: 5px;
}

.cancel-content .content-body {
  display: flex;
  align-items: center;
}

.cancel-content .content-body .icon-notification {
  background-image: url(../../../public/content/img/warning.png);
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 10px 0 24px;
}

.m-label{
  text-align: left;
}

.hr-group-label{
  margin-bottom: 12px;
}

.content-footer #cancel-btn-form,
.content-footer #ctn-btn-form {
  height: 40px;
  padding: 0 24px 0 24px;
}

.content-footer #ctn-btn-form {
  background-color: #e9ebee;
  border: none;
  color: #000000;
}

.content-footer #ctn-btn-form:hover {
  background-color: #bbbbbb;
  border-radius: 4px;
  cursor: pointer;
}

.content-footer #cancel-btn-form {
  margin: 10px 24px 10px 16px;
  background-color: #019160;
  border-radius: 4px;
  color: #ffffff;
  outline: none;
  border: none;
}

.content-footer #cancel-btn-form:hover {
  cursor: pointer;
  background-color: #2fbe8e;
}

.dialog-cancel .cancel-content .content-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}

/* 
  dialog delete
*/
.delete-dialog-custom .ui-dialog-titlebar {
  padding: 24px !important;
  font-size: 15px !important;
  color: #000000 !important;
}

.dialog-delete .delete-content {
  background-color: #ffffff;
  z-index: 1000;
  border-radius: 5px;
}

.delete-content .content-body {
  display: flex;
  align-items: center;
}

.delete-content .content-body .icon-notification {
  background-image: url(../../../public/content/img/icons8-error-64.png);
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 10px 0 24px;
}

.content-footer #delete-btn-form,
.content-footer #btn-delete-cancel {
  height: 40px;
  padding: 0 24px 0 24px;
}

.content-footer #btn-delete-cancel {
  background-color: #e9ebee;
  border: none;
  color: #000000;
}

.content-footer #btn-delete-cancel:hover {
  background-color: #bbbbbb;
  border-radius: 4px;
  cursor: pointer;
}

.content-footer #delete-btn-form {
  margin: 10px 24px 10px 16px;
  background-color: #f65454;
  border-radius: 4px;
  color: #ffffff;
  outline: none;
  border: none;
}

.content-footer #delete-btn-form:hover {
  cursor: pointer;
  background-color: #e97878;
}

.dialog-delete {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dialog-delete .delete-content .content-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}

/* confix dialog*/

.m-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.el-avatar-employee {
    padding-top: 16px;
    padding-right: 16px;
}

.el-left {
    width: calc(100% - 180px);
}

.el-avatar-employee .el-avatar {
    border: 1px solid #ccc;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    border-radius: 50%;
    cursor: pointer;
    background-image: url("../../../public/content/img/default-avatar.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.el-avatar-note {
    font-size: 12px;
}

.filter-left {
    display: flex;
}

.filter-left select {
    margin-left: 10px;
    margin-right: 10px;
}

.currency-for-input {
    position: absolute;
    right: 40px;
    line-height: 40px;
    font-style: italic;
}

#txtSearchEmployee {
    min-width: 300px;
}


/*
  custom combobox
*/

.pn-demo {
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.container .m-cbo {
    width: 240px;
    border: 1px solid #bbbbbb;
    outline: none;
    text-overflow: ellipsis;
}

.container .input-field {
    position: relative;
}

.container .input-field .arrow {
    position: absolute;
    top: 1px;
    width: 10px;
    right: 1px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-image: url("../../../public/content/icon/arrow-down.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
    margin-top: 14px;

}

.container .input-field .h-line {
    border-left: 1px #bbbbbb solid;
    position: absolute;
    top: 0px;
    right: 34px;
    bottom: 1px;
    width: 1px;
    height: 40px;
}


/* item clear text */

.container .input-field .btn-clear {
    position: absolute;
    top: 13px;
    right: 50px;
    cursor: pointer;
    color: #bbbbbb;
}

.container .input-field .btn-clear:hover {
    color: #000000;
}


/* Drop down */

.container .drop-down {
    position: absolute;
    top: 40px;
    width: 239px;
    left: 0px;
    z-index: 1000;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px -9px #000000;
}

.container .drop-down .dr-item {
    height: 40px;
    display: flex;
    cursor: pointer;
}

.container .input-field .down {
    transform: rotate(180deg);
}

.drop-down .dr-item .icon {
    align-items: center;
    justify-content: center;
    padding: 12px 10px 12px 10px;
}

.drop-down .dr-item .text {
    align-items: center;
    padding-top: 12px;
    padding-left: 10px;
    text-align: left;
}

.container .drop-down .dr-item:hover {
    background-color: #e9ebee;
}

.container .drop-down .dr-item.active {
    background-color: #019160;
    color: #ffffff;
}

.container .drop-down .dr-item .icon {
    padding: 12px 15px;
    color: transparent;
}

.container .drop-down .dr-item.active .icon {
    color: #ffffff;
}

.container .drop-down .dr-item .text {
    flex: 1;
}

input::placeholder {
    font-size: 11px !important;
    color: #bbbbbb;
}

.m-btn {
  display: flex;
  align-items: center;
  background-color: #019160;
  border-radius: 4px;
  height: 40px;
  font-size: 13px;
  color: #ffffff;
  font-family: GoogleSans-Regular;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 100px;
  justify-content: center;
}

.m-btn-del {
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 40px;
  font-size: 13px;
  color: #ffffff;
  font-family: GoogleSans-Regular;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 100px;
  justify-content: center;
}

.m-btn-delete {
  background-color: #f04a4a;
}

.m-btn:hover,
.m-btn:focus {
  background-color: #2fbe8e;
}

.m-btn .m-btn-icon {
  background-position: center;
}

.m-btn .btn-text {
  margin-left: 8px;
}

.m-second-button {
  border: 1px solid #bbbbbb;
  background-color: #ffffff;
  border-radius: 4px;
  height: 40px;
  color: #000000;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  outline: none;
  cursor: pointer;
}

.m-second-button:hover {
  background-color: #e9ebee;
}

.m-btn-refresh {
  background-image: url("../../../public/content/icon/refresh.png");
  background-repeat: no-repeat;
  width: 40px;
  background-position: center;
  margin: 0 5px 0 5px;
}

.m-mass-delete {
  background-image: url("../../../public/content/icon/delete.png");
  background-repeat: no-repeat;
  width: 40px;
  background-position: center;
  background-size: center;
}

.m-btn-import {
  background-image: url("../../../public/content/icon/import.png");
  background-repeat: no-repeat;
  width: 40px;
  background-position: center;
  background-size: 20px;
}

.m-btn-cancel {
  color: #000000;
  background-color: transparent;
}

.m-btn-cancel:hover,
.m-btn-cancel:focus {
  background-color: #bbbbbb;
}

.m-btn-delete:hover {
  background-color: rgb(243, 127, 127);
}

.btn-pagenumber {
  width: 30px;
  height: 30px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #e9ebee;
  cursor: pointer !important;
}

.btn-pagenumber:hover {
  background-color: #ffffff;
}

.btn-pagenumber.btn-pagenumber-selected,
.btn-pagenumber-selected:hover {
  background-color: #019160;
  color: #ffffff;
}

.btn-select-page {
  opacity: 0.7;
  margin: 0 4px;
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
}
.btn-select-page:hover {
  opacity: 1;
  background-color: #ffffff;
  border: 1px solid #ccc;
}

.m-btn-firstpage {
  background-image: url("../../../public/content/icon/btn-firstpage.svg");
}

.m-btn-prev-page {
  background-image: url("../../../public/content/icon/btn-prev-page.svg");
}

.m-btn-next-page {
  background-image: url("../../../public/content/icon/btn-next-page.svg");
}

.m-btn-lastpage {
  background-image: url("../../../public/content/icon/btn-lastpage.svg");
}


@import "../../assets/css/grid.css";


</style>