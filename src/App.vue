<template>
  <div id="app">
    <NavBar/>
    <Header/>
    <Content/>   
  </div>
</template>
 
<script>
import NavBar from './components/layers/TheNavBar.vue'
import Header from './components/layers/TheHeader.vue'
import Content from './components/layers/contents/TheContent.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Header,
    Content
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: GoogleSans-Regular;
}
* {
  margin: 0;
}
@font-face {
  font-family: "GoogleSans-Regular";
  src: url("../public/content/font/GoogleSans-Regular.otf") format("opentype");
}
@font-face {
  font-family: "GoogleSans-Bold";
  src: url("../public/content/font/GoogleSans-Bold.otf") format("opentype");
}
@font-face {
  font-family: "GoogleSans-Italic";
  src: url("../public/content/font/GoogleSans-Italic.otf") format("opentype");
}
@font-face {
  font-family: "GoogleSans-Light";
  src: url("../public/content/font/GoogleSans-Light.otf") format("opentype");
}
@font-face {
  font-family: "GoogleSans-Thin";
  src: url("../public/content/font/GoogleSans-Thin.otf") format("opentype");
}
@font-face {
  font-family: "GoogleSans-Black";
  src: url("../public/content/font/GoogleSans-Black.otf") format("opentype");
}
body {
  margin: 0;
  font-family: GoogleSans-Regular;
  font-size: 13px;
}
/*
  create loading icon      
*/
.icon-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(255 251 251 / 52%);
}
.icon-loader .loader {
  position: fixed;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
::-webkit-scrollbar {
  width: 5px !important;
  height: 5px !important;
  z-index: 1231232123421;
}
::-webkit-scrollbar-track {
  width: 6px;
  background-color: #bbb;
}
::-webkit-scrollbar-thumb {
  background-color: #808080;
  border-radius: 8px;
}
.text-align-right {
  text-align: right;
}
.text-align-center {
  text-align: center;
}
.m-row {
  margin-top: 16px;
}
.m-flex-1 {
  flex: 1;
}
.m-flex-2 {
  flex: 2;
}
.m-flex-3 {
  flex: 3;
}
.m-flex-4 {
  flex: 4;
}
.m-flex-5 {
  flex: 5;
}
.m-flex-6 {
  flex: 6;
}
.m-label {
  margin-bottom: 4px;
}
.m-flex {
  display: flex;
}
.mg-left-10px {
  margin-left: 10px;
}
.mg-left-20px {
  margin-left: 20px;
}
.mg-top-0 {
  margin-top: 0px;
}
.label-required {
  color: #ff0000;
}
.notice-required {
  display: none;
  position: absolute;
  background-color: #ff4747;
  color: #ffffff;
  top: 0;
  padding: 5px;
  border-radius: 5px;
}
.notice-required-abow {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: #ff4747;
  transform: rotate(45deg);
  left: 50%;
}
input[required]::after {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: #ff4747;
  transform: rotate(45deg);
  left: 50%;
  content: "Thông tin";
}
input.border-red {
  border: 1px solid #ff4747;
}
.m-loading {
  display: block;
}
.loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 999;
}
.loading-icon {
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  border: 2px solid #4cff00;
  border-bottom: none;
  animation: spin 2s linear infinite;
}
.row-selected {
  background-color: #01916026 !important;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.box-toast-msg {
  display: none;
  position: fixed;
  background-color: #ffffff;
  padding: 24px;
  color: #019160;
  font-size: 20px;
  bottom: 24px;
  text-align: center;
  right: 24px;
  border: 1px solid #ccc;
}
.group-label-info {
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 5px;
}
.hr-group-label {
  width: 70px;
  margin-left: 0;
  border: 2px solid #019160;
}
.dialog-header{
  position: absolute;
  top: 1px;
}
@import "assets/css/grid.css";
@import "assets/css/dialog.css";
</style>