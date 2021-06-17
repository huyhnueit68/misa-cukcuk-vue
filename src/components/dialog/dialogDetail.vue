<template>
    <!-- pop up detail -->
    <div class="box-dialog">
      <!-- pop up detail -->
      <div class="m-dialog dialog-detail" title="" id="modalAction">
        <div class="dialog-content" ShowForm="true">
            <div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle custom-header-dialog">
              <span id="ui-id-1" class="ui-dialog-title custom-title">THÔNG TIN NHÂN VIÊN</span>
            </div>
            <div class="dialog-body">
                <div class="m-row m-flex content-form-detail">
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
                                <!-- date time picker -->
                                <!-- <date-picker v-model="employee.DateOfBirth" :formatter="momentFormat" ref="dateOfBirth"></date-picker> -->
                            </div>

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
                                <div class="m-control salary-custom">
                                  <input v-model="formatSalary"  
                                    id="txtSalary" 
                                    fieldName="Salary"
                                    @keyup="formatMoney"
                                    class="success-input"
                                    ref="employeeSalaryRequest"
                                    DataType="Number"
                                    type="text" 
                                    style="text-align:right; padding-right: 56px" />
                                    <span class="currency-for-input">(VNĐ)</span>
                                </div>
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
                <BtnDelete v-if="showBtnDelete" @deleteRecord = "deleteRecord"/>
                <button @click="save"
                  id="btnSave"
                  class="m-btn m-btn-default action-form"
                  Command="Save"
                  data-toggle="tooltip" 
                  data-placement="top" 
                  title="Lưu lại thông tin">
                  <i class="save-icon-form"></i>
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
      <DialogDelete v-if="showDialogDelete" @closeDeleteForm="closeDeleteForm" @accessDeleteRecord="accessDeleteRecord" :employeeId="employeeId"/>
      <!-- dialog question -->
    </div>
</template>

<script>
import DialogCancel from './DialogCancel.vue'
import DialogDelete from './DialogDelete.vue'
import BtnDelete from '../layers/contents/buttonFeature/BtnDelete.vue'
import moment from "moment";
// import DatePicker from 'vue2-datepicker';
const Swal = require('sweetalert2')
// import 'vue2-datepicker/index.css';
// import Vue from 'vue'

export default {
  components: {
    DialogCancel,
    DialogDelete,
    BtnDelete
  },
  props:
  {
     employeeId: String
  },
  created() {
    this.getEmployeeById(this.employeeId)
    this.enableBtnDelete();
  },
  mounted() {
    this.forcusInput();
    this.formatMoneyBefore();
    this.formatDate();
  },
  data(){
    return{
      employee: {},
      showDialogCancel: false,
      showDialogDelete: false,
      showBtnDelete: false,
      formMode: null,
      formatSalary: 0,
      momentFormat: {
        // Date to String
        stringify: (date) => {
          return date ? moment(String(date)).format("DD/MM/YYYY") : ''
        },
        //[optional]  String to Date
        parse: (value) => {
          return value ? moment(value, 'LL').toDate() : null
        },
      }
    }
  },
  methods: {
    /**
     * enable btn delete
     * PQ Huy 16.06.2021
     */
    enableBtnDelete(){
      this.getFormMode() ? this.showBtnDelete = true : this.showBtnDelete = false 
    },
    /**
     * format money show form
     * PQ Huy 14.06.2021
     */
    formatMoneyBefore(){
      let salary = this.employee.Salary;
      if(salary) {
        this.$refs.employeeSalaryRequest.value = salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        this.formatSalary = this.$refs.employeeSalaryRequest.value; 
      }
      return this.formatSalary
    },
    /**
     * format when press key
     * PQ Huy 16.06.2021
     */
    formatMoney() {
        let valueMoney = this.$refs.employeeSalaryRequest.value;
        valueMoney = valueMoney.replaceAll(".", "").replaceAll(",", "").trim();
        this.$refs.employeeSalaryRequest.value = valueMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    /**
     * upper case full name
     * PQ Huy 16.06.2021
     */
    capitalizeFirstLetter() {
      let words = this.$refs.employeeNameRequest.value.split(' ');  
      let CapitalizedWords = [];
      words.forEach(element => {  
          CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
      });
      this.$refs.employeeNameRequest.value = CapitalizedWords.join(' ');
    },
    /**
     * format date
     * PQ Huy 16.06.2021
     */
    formatDate(){
      /**
       * format date of birthday
       */
      let value = this.employee.DateOfBirth;
      if(value) {
        this.employee.DateOfBirth = value ? moment(String(value)).format("YYYY-MM-DD") : '';
        console.log(this.employee.DateOfBirth)
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
    /**
     * enable delete record
     * PQ Huy 16.06.2021
     */
    deleteRecord(){
      this.showDialogDelete = true; 
    },
    /**
     * access delete record
     * PQ Huy 16.06.2021
     */
    accessDeleteRecord(){
      /**
       * close form
       */
      this.closeDeleteForm();
      /**
       * close form
       */
      this.$emit('disableDialog');

      /**
       * reload data
       */
      this.$emit('reloadData')
    },
    /**
     * close delete form
     * PQ Huy 16.06.2021
     */
    closeDeleteForm(){
      /**
       * close form required
       */
      this.showDialogDelete = false;
    },
    /**
     * close all form
     * PQ Huy 16.06.2021
     */
    closeAllForm(){
      this.closeForm();
      this.$emit('disableDialog');
    },
    /**
     * close form
     */
    closeForm(){
      this.showDialogCancel = false;
    },
    /**
     * set class warning
     * PQ Huy 16.06.2021
     */
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
    /**
     * get employee id
     * PQ Huy 16.06.2021
     */
    getEmployeeById(employeeId){
      if(employeeId) {
        /**
         * get by id
         */
        var me = this;
        this.axios.get('http://cukcuk.manhnv.net/v1/employees/'+employeeId).then((response) => {
          me.employee = response.data;
          this.forcusInput();
          this.formatMoneyBefore();
          this.formatDate();
        })

      }
    },
    /**
     * set forcus input
     * PQ Huy 16.06.2021
     */
    forcusInput(){
      this.$refs.employeeCodeRequest.focus()
    },
    /**
     * get form model
     * PQ Huy 16.06.2021
     */
    getFormMode(){
      return this.formMode = this.$store.state.formMode;
    },
    /**
     * save function
     * PQ Huy 13.06.2021
     */
    async save(){
      // format salary
      this.employee.salary = this.$refs.employeeSalaryRequest.value.replaceAll(".", "");
      if(this.validateData()){
        /**
         * save data by api
         * convert data salary 
         */
        // format salary
        this.employee.salary = this.$refs.employeeSalaryRequest.value.replaceAll(".", "");
        // check form mode
        let isUpdate = this.getFormMode();
        
        try{
          if(isUpdate) {
          await this.axios.put('http://cukcuk.manhnv.net/v1/employees/'+this.employeeId, this.employee).then((response) => {
            
            if(response.status == 200) {
              this.successNotification();
            } else {
              this.errorNotification();
            }
          })
        } else {
          await this.axios.post('http://cukcuk.manhnv.net/v1/employees', this.employee).then((response) => {
            
            if(response.status == 200) {
              this.successNotification();
            } else {
              this.errorNotification();
            }    
          })
        }
        } catch(error) {
            console.log(error);
            this.$swal({
              title: "Thất bại!",
              text: "Vui lòng thử lại sau!",
              icon: "error",
            });
        }

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
          
      }
    },
    /**
     * show popup notification success
     * PQ Huy 17.06.2021
     */
    successNotification(){
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
        title: 'Lưu dữ liệu thành công!'
      })
    },
    /**
     * show popup notification error
     * PQ Huy 17.06.2021
     */
    errorNotification(){
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        customClass: "popup-error",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Lưu dữ liệu thất bại!'
      })
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
      let salary =  this.$refs.employeeSalaryRequest.value;
      salary = salary.replaceAll(".", "")
      if(!/^[0-9,.]*$/.test(salary)) {
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
@import "../../assets/css/Grid.css";
@import "../../assets/css/DialogDetail.css";

</style>