<template>
    <div class="paging-bar">
        <div class="paging-record-info">
            Hiển thị <b>1-10/1000</b> nhân viên
        </div>
        <div class="paging-option">
            <div class="btn-select-page m-btn-firstpage"></div>
            <div class="btn-select-page m-btn-prev-page"></div>
            <div class="m-btn-list-page">
                <button class="btn-pagenumber btn-pagenumber-selected">1</button>
                <button class="btn-pagenumber">2</button>
                <button class="btn-pagenumber">3</button>
                <button class="btn-pagenumber">4</button>
            </div>
            <div class="btn-select-page m-btn-next-page"></div>
            <div class="btn-select-page m-btn-lastpage"></div>
        </div>
        <div class="paging-record-option">
            <b>10</b> nhân viên/trang
        </div>
    </div>
</template>

<style>

/* Paging */
.content .paging-bar {
  height: 56px;
}

.paging-bar {
  border-top: 2px solid #bbbbbb;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}
.paging-bar .paging-record-info {
  position: absolute;
  left: 16px;
}

.paging-bar .paging-record-option {
  position: absolute;
  right: 16px;
}

.paging-bar .paging-option button {
  outline: none;
  cursor: pointer;
}
.paging-bar .paging-option {
  display: flex;
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
  background-image: url("../../../../public/content/icon/btn-firstpage.svg");
}

.m-btn-prev-page {
  background-image: url("../../../../public/content/icon/btn-prev-page.svg");
}

.m-btn-next-page {
  background-image: url("../../../../public/content/icon/btn-next-page.svg");
}

.m-btn-lastpage {
  background-image: url("../../../../public/content/icon/btn-lastpage.svg");
}


</style>