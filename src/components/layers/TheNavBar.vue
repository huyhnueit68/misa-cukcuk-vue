<template>
    <div class="m-navbar">
        <div class="logo-site">
            <div class="logo-box">
                <div class="toggle-icon"></div>
                <router-link to="/" class="custom-router"><div class="amis-logo"></div></router-link>
            </div>
        </div>
        <div class="navbar-content">
            <a class="nav-item">
                <div class="nav-item-icon nav-item-dashboard"></div>
                <div class="nav-item-text">Tổng quan</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-report"></div>
                <div class="nav-item-text">Báo cáo</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-dashboard"></div>
                <div class="nav-item-text">Mua hàng</div>
            </a>
            <router-link to="/employee">
                <a class="nav-item">
                    <div class="nav-item-icon nav-item-dic"></div>
                    <div class="nav-item-text">Danh mục nhân viên</div> 
                </a>
            </router-link>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-dic"></div>
                <div class="nav-item-text">Danh mục khách hàng</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-setting"></div>
                <div class="nav-item-text">Thiết lập hệ thống</div>
            </a>

        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
    .m-navbar {
        float: left;
        width: 220px;
        height: 100vh;
        background-color: #ffffff;
        border-right: 1px solid #bbbbbb;
    }

    .m-navbar .logo-site {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
    }
    .m-navbar .logo-box {
        display: flex;
        width: 100%;
        cursor: pointer;
        padding-left: 24px;
    }

    /*Logo page*/
    .m-navbar .logo-box .toggle-icon {
        width: 30px;
        height: 30px;
        background-image: url(../../../public/content/img/toggle.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .m-navbar .logo-box .amis-logo {
    width: 100%;
    height: 30px;
    margin-left: 10px;
    background-image: url("../../../public/content/img/cukcuk-logo.png");
    background-position: 0 center;
    background-size: contain;
    background-repeat: no-repeat;
    }

    .m-navbar .navbar-content {
    width: 100%;
    }

    .m-navbar .navbar-content .nav-item {
    display: flex;
    padding-left: 24px;
    height: 44px;
    cursor: pointer;
    line-height: 44px;
    }

    .m-navbar .navbar-content .nav-item:hover {
    background-color: #e5e5e5;
    color: #000000;
    }

    .m-navbar .navbar-content .nav-item:focus {
    background-color: #019160;
    }

    .m-navbar .navbar-content .nav-item:active {
    background-color: #019160;
    color: #ffffff;
    }

    .custom-router{
        width: 100%;
    }

    .nav-item .nav-item-icon {
    width: 20px;
    height: 20px;
    align-self: center;
    margin-right: 10px;
    background-size: contain;
    }

    /*Tổng quan*/
    .nav-item-dashboard {
    background-image: url("../../../public//content/icon/dashboard.png");
    }

    /*Báo cáo*/
    .nav-item-report {
    background-image: url("../../../public/content/icon/report.png");
    }

    /*Cài đặt hệ thống*/
    .nav-item-setting {
    background-image: url("../../../public/content/icon/setting.png");
    }

    /*Danh mục*/
    .nav-item-dic {
        background-image: url("../../../public/content/icon/dic-employee.png");
    }

    .selected-sub-menu {
    background-color: #019160;
    color: #ffffff;
    }

</style>