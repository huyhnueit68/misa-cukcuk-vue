<template>
    <!-- pop up detail -->
    <div class="box-dialog" data-app>
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
                                <div class="m-label">Mã nhân viên (<span class="label-required">*</span>)
                                </div>
                                <div class="m-control m-tooltip">
                                  <span class="tooltiptext" v-show="enableNullCode">Vui lòng điền thông tin</span>
                                  <span class="tooltiptext" v-show="enableDupliCode">Trùng mã nhân viên</span>
                                  <input v-model="employee.EmployeeCode"
                                  :class="applyInputStyle(employee.EmployeeCode)"
                                  id="txtEmployeeCode" 
                                  @focus="isShowCode"
                                  @blur="isShowCodeBlur"
                                  class="input-required"
                                  ref="employeeCodeRequest"
                                  tabindex="0"
                                  type="text">
                                  </div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Họ và tên (<span class="label-required">*</span>)
                                </div>
                                <div class="m-control m-tooltip">
                                    <span class="tooltiptext" v-show="enableNullName">Vui lòng điền thông tin</span>
                                    <input id="txtFullName" 
                                    v-model="employee.FullName"
                                    fieldName="FullName"
                                    @focus="isShowName"
                                    @blur="isShowNameBlur"
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
                                <!-- date time picker -->
                                <date-picker class="custom-date-picker" 
                                v-model="employee.DateOfBirth" 
                                :formatter="momentFormat" 
                                ref="dateOfBirth"></date-picker>
                            </div>

                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Giới tính</div>
                                <v-autocomplete
                                  id="cbxGrender"
                                  v-model="employee.Gender"
                                  placeholder="Chọn/Nhập giới tính"
                                  class="cbo-detail m-custom-cbo"
                                  dense
                                  outlined
                                  :items="grender"
                                  item-text="value"
                                  item-value="key"
                                  clearable
                                >
                                <template #item="{item}">
                                  <v-list>
                                    <v-list-item class="custom-selected">
                                      <v-list-item-icon>
                                        <v-icon class="m-icon-check" v-text="item.icon"></v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        {{item.text}}
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                </template>
                                </v-autocomplete> 
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label" title="Số chứng minh thư nhân dân hoặc căn cước công dân">Số CMTND/ Căn cước (<span class="label-required">*</span>)
                                </div>
                                <div class="m-control m-tooltip">
                                  <span class="tooltiptext" v-show="enableNullIdentity">Vui lòng điền thông tin</span>
                                  <input v-model="employee.IdentityNumber"
                                  id="txtIdentityNumber"
                                  @focus="isShowIdentity"
                                  @blur="isShowIdentityBlur"
                                  :class="applyInputStyle(employee.IdentityNumber)"
                                  class="success-input input-required"
                                  ref="employeeIdentityRequest"
                                  fieldName="IdentityNumber" type="text" required />
                                  </div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Ngày cấp</div>
                                <date-picker class="custom-date-picker" v-model="employee.IdentityDate" :formatter="momentFormat" ref="dateOfBirth"></date-picker>
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
                                <div class="m-label">Email (<span class="label-required">*</span>)
                                </div>
                                <div class="m-control m-tooltip">
                                  <span class="tooltiptext" v-show="enableNullEmail">Vui lòng điền thông tin</span>
                                  <span class="tooltiptext" v-if="showValidateEmail">Vui lòng điền đúng email</span>
                                  <input v-model="employee.Email" 
                                  id="txtEmail"
                                  @focus="isShowEmail"
                                  @blur="isShowEmailBlur"
                                  class="success-input input-required"
                                  type="email"
                                  ref="employeeEmailRequest"
                                  :class="applyInputStyle(employee.Email)"
                                  required placeholder="example@domain.com" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Số điện thoại (<span class="label-required">*</span>)
                                </div>
                                <div class="m-control m-tooltip" @click="triggerEmployeePhoneRequest">
                                    <span class="tooltiptext" v-show="enableNullPhone">Vui lòng điền thông tin</span>
                                    <span class="tooltiptext" v-if="enablePhoneFormat">Không đúng số điện thoại</span>
                                    <input v-model="employee.PhoneNumber" 
                                    id="txtPhoneNumber"
                                    @focus="isShowPhone"
                                    @blur="isShowPhoneBlur"
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
                                <v-autocomplete
                                  id="cbxPosition"
                                  v-model="employee.PositionCode"
                                  placeholder="Chọn/Nhập vị trí"
                                  class="cbo-detail"
                                  dense
                                  outlined
                                  :items="position"
                                  item-text="value"
                                  item-value="key"
                                  clearable
                                >
                                <template #item="{item}">
                                  <v-list>
                                    <v-list-item class="custom-selected">
                                      <v-list-item-icon>
                                        <v-icon class="m-icon-check" v-text="item.icon"></v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        {{item.text}}
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                </template>
                                </v-autocomplete> 
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Phòng ban</div>
                                <v-autocomplete
                                  id="cbnDepartment"
                                  v-model="employee.DepartmentCode"
                                  placeholder="Chọn/Nhập phòng ban"
                                  class="cbo-detail"
                                  dense
                                  outlined
                                  :items="department"
                                  item-text="value"
                                  item-value="key"
                                  clearable
                                >
                                <template #item="{item}">
                                  <v-list>
                                    <v-list-item class="custom-selected">
                                      <v-list-item-icon>
                                        <v-icon class="m-icon-check" v-text="item.icon"></v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        {{item.text}}
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                </template>
                                </v-autocomplete>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Mã số thuế cá nhân</div>
                                <div class="m-control"><input v-model="employee.IdentityId" 
                                id="txtAddress" 
                                fieldName="Address"
                                class="success-input input-required"
                                type="text" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px" @click="triggerEmployeeSalaryRequest">
                                <div class="m-label">Mức lương cơ bản
                                <span class="label-required" v-if="enableSalaryFormat">&nbsp&nbsp Không đúng số lương</span>
                                </div>
                                <div class="m-control salary-custom">
                                  <input v-model="formatSalary"  
                                    id="txtSalary" 
                                    fieldName="Salary"
                                    @keyup="formatMoney"
                                    class="success-input input-required"
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
                                 <!-- date time picker -->
                                <date-picker class="custom-date-picker" 
                                v-model="employee.JoinDate"
                                :formatter="momentFormat" 
                                ref="dateOfBirth"></date-picker>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Tình trạng công việc</div>
                                <v-autocomplete
                                  id="cboWorkStatus"
                                  v-model="employee.WorkStatus"
                                  placeholder="Chọn/Nhập trạng thái làm việc"
                                  class="cbo-detail"
                                  dense
                                  outlined
                                  :items="workStatus"
                                  item-text="value"
                                  item-value="key"
                                  clearable
                                >
                                <template #item="{item}">
                                  <v-list>
                                    <v-list-item class="custom-selected">
                                      <v-list-item-icon>
                                        <v-icon class="m-icon-check" v-text="item.icon"></v-icon>
                                      </v-list-item-icon>
                                      <v-list-item-content>
                                        {{item.text}}
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                </template>
                                </v-autocomplete>
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
                <BtnDelete v-if="showBtnDelete" @deleteRecord = "deleteRecord" :title="titleDel"/>
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
import DatePicker from 'vue2-datepicker';
const Swal = require('sweetalert2')
import 'vue2-datepicker/index.css';
import Datepicker from 'vuejs-datepicker';
import resource from '../../js/common/resource.js'
import enumeration from '../../js/common/enumeration.js'
// import Vue from 'vue'
/**
 * define status responses
 */
const RESPONSES_SUCCESS = 200;
const RESPONSES_CREATED = 201;
const RESPONSES_ACCEPTED = 202;

export default {
  components: {
    DialogCancel,
    DialogDelete,
    BtnDelete,
    DatePicker,
    Datepicker
  },
  props:
  {
     employeeId: String
  },
  created() {
    this.getEmployeeById(this.employeeId)
    this.enableBtnDelete();
    this.getAllData();
  },
  mounted() {
    this.forcusInput();
    this.formatMoneyBefore();
    this.formatDate();
  },
  data(){
    return{
      titleDel: "Xóa",
      employee: {},
      showDialogCancel: false,
      showDialogDelete: false,
      showBtnDelete: false,
      formMode: null,
      dataTable: {},
      formatSalary: 0,
      enableNull: true,
      /**
       * define validate
       */
      enableNullCode: false,
      enableNullName: false,
      enableDupliCode: false,
      enableNullEmail: false,
      enableNullIdentity: false,
      enableNullPhone: false,
      showValidateEmail: false,
      enablePhoneFormat: false,
      enableSalaryFormat: false,
      oldEmployeeCode: "",
      grender: [
        {
          text: resource.Grender.Male, icon: 'mdi-check',
          key: enumeration.Grender.Male,
          value: resource.Grender.Male
        },
        {
          text: resource.Grender.Female, icon: 'mdi-check',
          key: enumeration.Grender.Female,
          value: resource.Grender.Female
        },
        {
          text: resource.Grender.Other, icon: 'mdi-check',
          key: enumeration.Grender.Other,
          value: resource.Grender.Other
        },
      ],
      position: [
        {
          text: resource.Position.Manager, icon: 'mdi-check',
          key: enumeration.Position.Manager,
          value: resource.Position.Manager
        },
        {
          text: resource.Position.Cashier, icon: 'mdi-check',
          key: enumeration.Position.Cashier,
          value: resource.Position.Cashier
        },
        {
          text: resource.Position.Marketer, icon: 'mdi-check',
          key: enumeration.Position.Marketer,
          value: resource.Position.Marketer
        },
        {
          text: resource.Position.ITer, icon: 'mdi-check',
          key: enumeration.Position.ITer,
          value: resource.Position.ITer
        },
      ],
      department: [
        {
          text: "Văn phòng tổng công ty", icon: 'mdi-check',
          key: 0,
          value: "Văn phòng tổng công ty"
        },
        {
          text: "Phòng đào tạo công nghệ", icon: 'mdi-check',
          key: 1,
          value: "Phòng đào tạo công nghệ"
        },
        {
          text: "Phòng nhân sự", icon: 'mdi-check',
          key: 2,
          value: "Phòng nhân sự"
        },
      ],
      workStatus: [
        {
          text: resource.WorkStatus.Probation, icon: 'mdi-check',
          key: enumeration.WorkStatus.Probation,
          value: resource.WorkStatus.Probation
        },
        {
          text: resource.WorkStatus.Working, icon: 'mdi-check',
          key: enumeration.WorkStatus.Working,
          value: resource.WorkStatus.Working
        },
        {
          text: resource.WorkStatus.Retired, icon: 'mdi-check',
          key: enumeration.WorkStatus.Retired,
          value: resource.WorkStatus.Retired
        },
      ],
      momentFormat: {
        stringify: (date) => {
          return date ? moment(String(date)).format("DD/MM/YYYY") : ''
        },
        parse: (value) => {
          return value ? moment(value, 'LL').toDate() : null
        },
      },
      optionsCheckNull: {
          content: "Vui lòng điền thông tin",
          autoHide: true,
          show: true,
          classes: 'tooltip-checknull'
      },
    }
  },
  methods: {
    getAllData(){
      this.axios.get('http://cukcuk.manhnv.net/v1/employees').then((response) => {
          this.dataTable = response.data
      }).catch((error) => {
        this.$swal({
          title: error,
          text: "Vui lòng thử lại sau!",
          icon: "error",
        });
      })
    },
    /**
     * is blur tooltip
     * PQ Huy 21.06.2021
     */
    isShowPhoneBlur(){
      if(this.$refs.employeePhoneRequest.value != "") {
        this.enableNullPhone = false;
        if(this.validateNumber()) {
          this.enablePhoneFormat = false;
        }
      } else {
        this.enableNullPhone = true;
        this.enablePhoneFormat = true;
      }
    },
    /**
     * is show tooltip
     * PQ Huy 21.06.2021
     */
    isShowPhone(){
      this.enableNullPhone = false;
      this.enablePhoneFormat = false;
    },
    /**
     * is blur tooltip
     * PQ Huy 21.06.2021
     */
    isShowEmailBlur(){
      if(this.$refs.employeeEmailRequest.value != "") {
        this.enableNullEmail = false;
        if(this.validateEmail()) {
          this.showValidateEmail = false;
        }
      } else {
        this.enableNullEmail = true;
        this.showValidateEmail = true;
      }
    },
    /**
     * is show tooltip
     * PQ Huy 21.06.2021
     */
    isShowEmail(){
      this.enableNullEmail = false;
      this.showValidateEmail = false;
    },
    /**
     * is blur tooltip
     * PQ Huy 21.06.2021
     */
    isShowIdentityBlur(){
      if(this.$refs.employeeIdentityRequest.value != "") {
        this.enableNullIdentity = false;
      } else {
        this.enableNullIdentity = true;
      }
    },
    /**
     * is show tooltip
     * PQ Huy 21.06.2021
     */
    isShowIdentity(){
      this.enableNullIdentity = false;
    },
    /**
     * is blur tooltip
     * PQ Huy 21.06.2021
     */
    isShowNameBlur(){
      if(this.$refs.employeeNameRequest.value != "") {
        this.enableNullName = false;
      } else {
        this.enableNullName = true;
      }
    },
    /**
     * is show tooltip
     * PQ Huy 21.06.2021
     */
    isShowName(){
      this.enableNullName = false;
    },
    /**
     * is blur tooltip
     * PQ Huy 21.06.2021
     */
    isShowCodeBlur(){
      if(this.$refs.employeeCodeRequest.value != "") {
        this.enableNullCode = false;
        if(this.validateEmployeeCode()) {
          this.enableDupliCode = false;
        }
      } else {
        this.enableNullCode = true;
      }
    },
    /**
     * is show tooltip
     * PQ Huy 21.06.2021
     */
    isShowCode(){
      this.enableNullCode = false;
      this.enableDupliCode = false;
    },
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
      let valueDateOfBirth = this.employee.DateOfBirth;
      if(valueDateOfBirth) {
        this.employee.DateOfBirth = valueDateOfBirth ? new Date(moment(String(valueDateOfBirth)).format("YYYY-MM-DD")) : '';
      }
      /**
       * format Identity Date
       */
      let valueIdentityDate = this.employee.IdentityDate;
      if(valueIdentityDate) {
        this.employee.IdentityDate = valueIdentityDate ? new Date(moment(String(valueIdentityDate)).format("YYYY-MM-DD")) : '';
      }
      /**
       * format Created Date
       */
      let valueCreateDate = this.employee.JoinDate;
      if(valueCreateDate) {
        this.employee.JoinDate = valueCreateDate ? new Date(moment(String(valueCreateDate)).format("YYYY-MM-DD")) : '';
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
    triggerEmployeeEmailRequest(){
      this.$refs.employeeEmailRequest.className = this.$refs.employeeEmailRequest.className.replace("error-warning", "")
    },
    /**
     * set class warning
     * PQ Huy 16.06.2021
     */
    triggerEmployeePhoneRequest(){
      this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className.replace("error-warning", "")
    },
    /**
     * set class warning
     * PQ Huy 16.06.2021
     */
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
    getOldEmployeeCode(employeeId){
      this.axios.get('http://cukcuk.manhnv.net/v1/employees/'+ employeeId).then((response) => {
        this.oldEmployeeCode = response.data.EmployeeCode
        return response.data.EmployeeCode;
      }).catch((error) => {
        this.$swal({
          title: error,
          text: "Vui lòng thử lại sau!",
          icon: "error",
        });
        return null;
      })
    },
    /**
     * get employee id
     * PQ Huy 16.06.2021
     */
    async getEmployeeById(employeeId){
       var me = this;
      if(employeeId) {
        /**
         * get by id
         */
        await this.axios.get('http://cukcuk.manhnv.net/v1/employees/'+ employeeId).then((response) => {
            me.employee = response.data;
            this.oldEmployeeCode = response.data.EmployeeCode;
            this.forcusInput();
            this.formatMoneyBefore();
            this.formatDate();
          }).catch((error) => {
            this.$swal({
              title: error,
              text: "Vui lòng thử lại sau!",
              icon: "error",
            });
          })
      } else {
        /**
         * binding new code
         */
        await this.axios.get('http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode').then((response) => {
            me.employee.EmployeeCode = response.data;
            this.$refs.employeeCodeRequest.value = response.data;
            this.forcusInput();
          }).catch((error) => {
            this.$swal({
              title: error,
              text: "Vui lòng thử lại sau!",
              icon: "error",
            });
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
      // format date
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
          /**
           * format date before save
           */
          this.formatDateBeforeSave();
          if(isUpdate) {
          await this.axios.put('http://cukcuk.manhnv.net/v1/employees/'+this.employeeId, this.employee).then((response) => {
            if(response.status == RESPONSES_SUCCESS || response.status == RESPONSES_CREATED || response.status == RESPONSES_ACCEPTED) {
              this.successNotification();
            } else {
              this.errorNotification();
            }
          })
        } else {
          await this.axios.post('http://cukcuk.manhnv.net/v1/employees', this.employee).then((response) => {
            if(response.status == RESPONSES_SUCCESS || response.status == RESPONSES_CREATED || response.status == RESPONSES_ACCEPTED) {
              this.successNotification();
            } else {
              this.errorNotification();
            }
          })
        }
        } catch(error) {
          console.log(this.employee);
            this.$swal({
              title: error,
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
     * format date before save
     * PQ Huy 18.06.2021
     */
    formatDateBeforeSave(){
      if(this.employee.DateOfBirth) {
        this.employee.DateOfBirth = moment(String( this.employee.DateOfBirth)).format("YYYY-MM-DD");
      }
      if(this.employee.IdentityDate) {
        this.employee.IdentityDate = moment(String( this.employee.IdentityDate)).format("YYYY-MM-DD");
      }
      if(this.employee.JoinDate) {
        this.employee.JoinDate = moment(String( this.employee.JoinDate)).format("YYYY-MM-DD");
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
      debugger
      if(!this.validateNotNull()){
        return false;
      }
      /**
       * validate employee code
       */
      debugger
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
        this.showValidateEmail = true;
        this.$refs.employeeEmailRequest.className = Array.from(new Set(this.$refs.employeeEmailRequest.className.split(','))).toString();
        return false;
      } else {
        this.showValidateEmail = false;
        this.$refs.employeeEmailRequest.className = this.$refs.employeeEmailRequest.className.replace("error-warning", "")
        return true;
      }
    },
    /**
     * validate duplicate code
     * PQ Huy 13.06.2021
     */
    validateEmployeeCode(){
      let checked = true,
          employeeCode = this.$refs.employeeCodeRequest.value;
      if(!this.$store.state.formMode) {
        checked = this.validateAddNewRecord(employeeCode, this.dataTable);
      } else {
        if(this.oldEmployeeCode) {
          if(employeeCode != this.oldEmployeeCode) {
            checked = this.validateAddNewRecord(employeeCode, this.dataTable);
          }
        }
      }

      if(!checked) {
        this.enableDupliCode = true;
        checked = false;
      } else {
        this.enableDupliCode = false;
      }
      
      return checked;
    },
    /**
     * validate add new record
     * PQ Huy 22.06.2021
     */
    validateAddNewRecord(employeeCode, data){
      let checked = true;
      if(data.length > 0) {
        data.filter(val => {
          if(val.EmployeeCode == employeeCode) {
            checked = false
          }
        });
      }
    
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
          this.enableNullCode = true;
          checked = false;
        } else {
          this.enableNullCode = false;
        }

        if(!this.employee.FullName) {
          this.$refs.employeeNameRequest.className = this.$refs.employeeNameRequest.className + " error-warning";
          this.enableNullName = true;
          checked = false;
        } else {
          this.enableNullName = false;
        }

        if(!this.employee.IdentityNumber) {
          this.$refs.employeeIdentityRequest.className = this.$refs.employeeIdentityRequest.className + " error-warning";
          this.enableNullIdentity = true;
          checked = false;
        } else {
          this.enableNullIdentity = false;
        }

        if(!this.employee.Email) {
          this.$refs.employeeEmailRequest.className = this.$refs.employeeEmailRequest.className + " error-warning";
          this.enableNullEmail = true;
          checked = false;
        } else {
          this.enableNullEmail = false;
        }

        if(!this.employee.PhoneNumber) {
          this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className + " error-warning";
          this.enableNullPhone = true;
          checked = false;
        } else {
          this.enableNullPhone = false;
        }

        if(!checked) {
          // alert("Điền đẩy đủ thông tin");
        }
        return checked;
    },
    /**
     * validate number
     * PQ Huy 07.06.2021
     */
    validateNumber(){
      if(!/^[0-9,.]*$/.test(this.employee.PhoneNumber)) {
        this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className + " error-warning";
        this.$refs.employeePhoneRequest.className = Array.from(new Set(this.$refs.employeePhoneRequest.className.split(','))).toString();
        this.enablePhoneFormat = true;
        return false;
      } else {
        this.$refs.employeePhoneRequest.className = this.$refs.employeePhoneRequest.className.replace("error-warning", "")
        this.enablePhoneFormat = false;
      }

      let salary =  this.$refs.employeeSalaryRequest.value;

      salary = salary.replaceAll(".", "")
      if(!/^[0-9,.]*$/.test(salary)) {
        this.$refs.employeeSalaryRequest.className = this.$refs.employeeSalaryRequest.className + " error-warning";
        this.$refs.employeeSalaryRequest.className = Array.from(new Set(this.$refs.employeeSalaryRequest.className.split(','))).toString();
        this.enableSalaryFormat = true;
        return false;
      } else {
        this.$refs.employeeSalaryRequest.className = this.$refs.employeeSalaryRequest.className.replace("error-warning", "")
        this.enableSalaryFormat = false;
      }

      return true;
    },
  },
}
</script>

<style>

.cbo-detail .v-input__control .v-input__slot {
  border: 1px solid #bbb;
}

.v-list-item__icon {
  padding-right: 8px;
}

.cbo-detail .v-input__control .v-input__slot fieldset{
  border: none;
}

.input-required {
  border: 1px solid #bbb;
  border-radius: 4px;
}

.custom-date-picker {
  width: 100%;
  height: 40px;
}
.custom-date-picker .mx-input-wrapper{
  width: 100% !important;
  height: 100% !important;
}

.custom-date-picker .mx-input-wrapper .mx-input{
  height: 100%;
  color: #000 !important;
}

.mx-datepicker-popup .mx-datepicker-content .active{
  background-color: #019160 !important;
}

.custom-date-picker .mx-input-wrapper .mx-input:hover,
.custom-date-picker .mx-input-wrapper .mx-input:focus {
  border: 1px solid #019160;
}

/** 
  custom tool tip
*/

.m-tooltip {
  position: relative;
}

.m-tooltip .tooltiptext {
  visibility: visible;
  width: 150px;
  background-color: #eb5757;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 113%;
  left: 50%;
  margin-left: -60px;
}

.m-tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #eb5757 transparent transparent transparent;
}

@import "../../assets/css/grid.css";
@import "../../assets/css/dialogDetail.css";

</style>