<template>
    <div class="paging-bar">
        <div class="paging-record-info">
            Hiển thị <b>1-{{this.pageSize}}/{{this.$store.totalRecord}}</b> nhân viên
        </div>
        <div class="paging-option">
            <div class="btn-select-page m-btn-firstpage" @click="firstPage"></div>
            <div class="btn-select-page m-btn-prev-page" @click="prevPage"></div>
            <div class="icon-more" v-show="morePageLeft"></div>
            <div class="m-btn-list-page" v-for="index in countPageDisplay" :key="index">
                <button class="btn-pagenumber"
                :class="{ 'btn-pagenumber-selected': isActive(index) }"
                :pageNumber="index"
                @click="changePageByIndex(index), setActive(index)">{{index}}</button>
            </div>
            <div class="icon-more" v-show="morePageRight"></div>
            <div class="btn-select-page m-btn-next-page" @click="nextPage"></div>
            <div class="btn-select-page m-btn-lastpage" @click="lastPage"></div>
        </div>
        <div class="paging-record-option">
            <b>{{this.pageSize}}</b> nhân viên/trang
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
  created() {
    this.getNumberRecord();
  },
  data(){
    return{
      morePageLeft: false,
      morePageRight: false,
      pageSize: 2,
      totalPageNumber: 1,
      activeItem: 1,
    }
  },
  computed: {
    countPageDisplay(){
      let pageDisplay = [],
          currentPage = this.$store.state.pageNumber;

      // set number page display
      if(this.totalPageNumber < 4) {
        pageDisplay = [1];
      } else {
        if(currentPage <= 2) {
          pageDisplay = [1, 2, 3];
          this.morePageRight = true;
        } else {
          this.morePageLeft = false;
        }
        if(currentPage > 2 && currentPage < this.totalPageNumber) {
          pageDisplay = [currentPage - 1 , currentPage, currentPage + 1];
          this.morePageLeft = true;
          this.morePageRight = true;
        } else {
          this.morePageLeft = false;
        }
        if(currentPage >= this.totalPageNumber - 1) {
          pageDisplay = [this.totalPageNumber - 2 , this.totalPageNumber - 1, this.totalPageNumber];
          this.morePageRight = false;
          this.morePageLeft = true;
        }
      }
debugger
      return pageDisplay;
    },
  },
  methods: {
    /**
     * redirect last page
     * PQ Huy 21.06.2021
     */
    lastPage(){
      if(this.$store.state.pageNumber != this.totalPageNumber){
        this.changePage(this.totalPageNumber);
        this.setActive(this.totalPageNumber)
      }
    },
    /**
     * redirect first page
     * PQ Huy 21.06.2021
     */
    firstPage(){
      if(this.$store.state.pageNumber != 1){
        this.changePage(1);
        this.setActive(1)
      }
    },
    /**
     * set prev page
     * PQ Huy 21.06.2021
     */   
    prevPage(){
      // set change page
      if(this.$store.state.pageNumber != 1){
        this.changePage(--this.$store.state.pageNumber);
        this.setActive(this.$store.state.pageNumber)
      }
    },
    /**
     * set next page
     * PQ Huy 21.06.2021
     */   
    nextPage(){
      // set change page
      if(this.$store.state.pageNumber != this.totalPageNumber){
        this.changePage(++this.$store.state.pageNumber);
        this.setActive(this.$store.state.pageNumber);
      }
    },
    /**
     * check active menu
     * PQ Huy 21.06.2021
     */
    isActive: function (pageNumber) {
        return this.activeItem === pageNumber
    },
    /**
     * set active menu
     * PQ Huy 21.06.2021
     */
    setActive: function (pageNumber) {
        this.activeItem = pageNumber
    },
    /**
     * function query data
     * PQ Huy 21.06.2021
     */
    getAllData(){
      
    },
    /**
     * check decimal number
     * PQ Huy 21.06.2021
     */
    hasDecimal (num) {
      return !!(num % 1);
    },
    /**
     * get total number recode
     * PQ Huy 21.06.2021
     */
    async getNumberRecord(){
      // get data size
      let data = [],
        totalPage = 1;

      await this.axios.get('http://cukcuk.manhnv.net/v1/employees').then((response) => {
        data = response.data.length;
      }).catch((error) => {
        console.log(error);
      });
      debugger
      if(data <= this.pageSize) {
        return totalPage;
      } else {
        totalPage = data / this.pageSize;
        if(this.hasDecimal(totalPage)) {
          totalPage++;
        }
        debugger
      }
      this.totalPageNumber = parseInt(totalPage);
    },
    changePage(pageNumber){
      this.$emit('changePage', pageNumber);
      this.$store.commit('EnablePaging');
      this.$store.state.pageNumber = pageNumber;
    },
    changePageByIndex(pageNumber){
      if(pageNumber != this.$store.state.pageNumber) {
        this.changePage(pageNumber);
      }
    }
  }
})
</script>

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

.icon-more {
  padding-top: 0px;
  margin-top: 10px;
  margin-right: 8px;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../../../../public/content/icon/more.png")
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