<template>
    <!-- pop up detail -->
    <div class="m-dialog dialog-detail" title="Thông tin nhân viên" id="modalAction">
        <div class="dialog-content" ShowForm="true">
            <div class="dialog-body">
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
                                <div class="m-control"><input id="txtEmployeeCode" fieldName="EmployeeCode" required class="input-required" type="text" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Họ và tên (<span class="label-required">*</span>)</div>
                                <div class="m-control">
                                    <input id="txtFullName" fieldName="FullName" class="input-required" type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <!-- create date picker -->
                            <div class="m-flex-1">
                                <div class="m-label">Ngày sinh</div>
                                <input type="date" id="DateOfBirth" name="birthday" fieldName="DateOfBirth" DataType="Date">
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Giới tính</div>
                                <select id="cbxGender" FieldName="Gender" DataType="Enum" EnumName="Gender" >
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                    <option value="2">Khác</option>
                                </select>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label" title="Số chứng minh thư nhân dân hoặc căn cước công dân">Số CMTND/ Căn cước (<span class="label-required">*</span>)</div>
                                <div class="m-control"><input id="txtIdentityNumber" fieldName="IdentityNumber" type="text" required /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Ngày cấp</div>
                                <input type="date" id="dateOfIndentity" name="indentityDate" fieldName="IdentityDate" DataType="Date">
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Nơi cấp</div>
                                <div class="m-control"><input id="txtIdentityPlace" fieldName="IdentityPlace" class="input-required" type="text" /></div>
                            </div>
                            <div class="m-flex-1">
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-col m-flex-1">
                                <div class="m-label">Email (<span class="label-required">*</span>)</div>
                                <div class="m-control"><input id="txtEmail" fieldName="Email" DataType="Email" type="email" required placeholder="example@domain.com" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Số điện thoại (<span class="label-required">*</span>)</div>
                                <div class="m-control">
                                    <input id="txtPhoneNumber" fieldName="PhoneNumber" DataType="PhoneNumber" maxlength="100" class="input-required" type="text" required />
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
                                <select id="cbxPosition" fieldName="PositionCode" fieldValue="CustomerGroupId" api="" class="m-control">
                                    <option value="0">Giám đốc</option>
                                    <option value="1">Nhân viên</option>
                                </select>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Phòng ban</div>
                                <select id="cbnDepartment" fieldName="DepartmentCode" fieldValue="CustomerGroupId" api="" class="m-control">
                                    <option value="0">Phòng nhân sự</option>
                                    <option value="1">Phòng đào tạo</option>
                                </select>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Mã số thuế cá nhân</div>
                                <div class="m-control"><input id="txtAddress" fieldName="Address" type="text" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Mức lương cơ bản</div>
                                <div class="m-control"><input id="txtSalary" fieldName="Salary" DataType="Number" type="text" style="text-align:right; padding-right: 56px" /><span class="currency-for-input">(VNĐ)</span></div>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label">Ngày gia nhập</div>
                                <input type="date" id="dtDateJoin" name="birthdaytime" DataType="Date" fieldName="CreatedDate">
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Tình trạng công việc</div>
                                <select id="cboWorkStatus" fieldName="WorkStatus" fieldValue="CustomerGroupId" api="" class="m-control">
                                    <option value="1">Đang làm việc</option>
                                    <option value="0">Đang thử việc</option>
                                    <option value="2">Nghỉ việc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- button action form -->
            <div class="dialog-footer">
                <button id="btnCancel" class="m-btn m-btn-default m-btn-cancel action-form" Command="Cancel" data-toggle="tooltip" data-placement="top" title="Hủy tiến trình">Hủy</button>
                <button id="btnDelete" class="m-btn-del m-btn-delete action-form" Command="Delete" data-toggle="tooltip" data-placement="top" title="Xóa thông tin bản ghi này"><i class="fa fa-minus-circle"></i><span
                        class="btn-text">Xóa</span></button>
                <button id="btnSave" class="m-btn m-btn-default action-form" Command="Save" data-toggle="tooltip" data-placement="top" title="Lưu lại thông tin"><i class="far fa-save"></i><span class="btn-text">Lưu</span></button>
            </div>
        </div>
        <div class="field-import" hidden="hidden">
            <input id="fileImportInput" type="file" />
        </div>
    </div>
</template>

<style>
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

.cancel-content .content-body .body-info {
  padding: 24px 0 24px 0;
  font-size: 13px;
  color: #000000;
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

.delete-content .content-body .body-info {
  padding: 24px 0 24px 0;
  font-size: 13px;
  color: #000000;
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
  position: fixed;
    top: 50%;
    border: 2px solid red;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>