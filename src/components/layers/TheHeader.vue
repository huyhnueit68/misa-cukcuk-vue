<template>
    <div class="header">
        <div class="department-info">
            <!-- select department -->
            <select>
                <option>Nhà hàng Biển Đông</option>
                <option>Nhà hàng Hải Dương</option>
                <option>Nhà hàng Đội Cấn</option>
                <option>Nhà hàng Cầu Giấy</option>
            </select>
        </div>
        <!-- admin menu -->
        <div class="account-info">
            <div class="account-avatar"></div>
            <div class="account-name">Phạm Quang Huy</div>
            <div class="account-option icon-option-default-16" 
            data-toggle="tooltip" 
            data-placement="bottom"
            v-tooltip.bottom="optionsInfo"
            title="Thông tin người dùng"></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data(){
      return {
        optionsInfo: {
          content: 'Thông tin người dùng',
          autoHide: false,
          show: false,
          classes: 'tooltip-info-account'
        }
      }
    }
})
</script>


<style>
.account-option:hover{
  cursor: pointer;
}

.tooltip-info-account .tooltip-inner {
    background: #515252;
    color: white;
    height: 20px;
}

.tooltip-info-account .tooltip-arrow {
    border-color: #515252;
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 221px);
  height: 60px;
  border-bottom: 1px solid #bbbbbb;
}

.header { 
  font-family: GoogleSans-Regular;
  font-size: 13px;
}

.header .department-info {
  padding: 16px;
  font-size: 16px;
}

.header .department-info select {
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}

.header .department-info option {
  cursor: pointer;
}

.header .account-info {
  position: absolute;
  right: 24px;
  display: flex;
  align-items: center;
}

.header .account-info .account-avatar {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-image: url("../../../public/content/icon/avatar-default.png");
  background-size: contain;
}

.icon-option-default-16 {
  width: 16px;
  height: 16px;
  background-image: url("../../../public/content/icon/option.png");
  background-position: center;
  background-repeat: no-repeat;
}

.header .account-info .account-name {
  padding: 10px;
  color: #000000;
}

.header .account-info .account-option {
  height: 16px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #000000;
}

input,
select {
  padding: 10px 16px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #bbbbbb;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
}

</style>