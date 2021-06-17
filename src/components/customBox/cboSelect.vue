<template>
    <div class="pn-demo"> 
        <div class="container content-control">
            <div class="input-field" >
                <input type="text" 
                    class="m-cbo" 
                    id="cbbPosition"
                    ref="setChangeText"
                    @click="ShowDropDownArrow" 
                    placeholder="Chọn/Nhập thông tin">
                <div class="h-line"></div>
                <div class="arrow" 
                    @click="ShowDropDownArrow"
                    :class="{down: isShowDropDown}">
                </div>
                <div class="btn-clear" v-if="selectedIndex != defauleValue" @click="setDefault"></div>
            </div>
            <div class="drop-down"
                v-click-outside="clickOutSide"
                v-if="isShowDropDown">
                <div class="dr-item"
                    v-for="(items, index) in listSelectPosition" :key="index" 
                    @click="setSelected(items, index)" :class="{active: selectedIndex == index}">
                    <div class="icon-selected" :class="{activeOpacity: selectedIndex == index}"></div>
                    <div class="text">{{ items }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import action js for combobox
import '../../js/common/customCbo.js'

export default({
    props: {
        listSelectPosition: Object
    },
    data(){
        return {
            defauleValue: -1,
            isShowDropDown: false,
            SelectedItem: false,
            selectedIndex: -1
        }
    },
    methods: {
        /**
         * set selected item
         * PQ Huy 16.06.2021
         */
        setSelected(items, index){
            // set select 
            this.selectedIndex = index;
            // set text default
            this.$refs.setChangeText.value = items;
            // close form
            this.ShowDropDownArrow();

        },

        /**
         * click down disable
         * PQ Huy 16.06.2021
         */
        clickOutSide(){
            this.isShowDropDown = false;
        },

        /**
         * allow drop down arrow
         * PQ Huy 16.06.2021
         */
        ShowDropDownArrow(){
            // show drop down
            this.isShowDropDown = !this.isShowDropDown;
        },
        
        /**
         * reset default
         * PQ Huy 16.06.2021
         */
        setDefault(){
            // set default value
            this.selectedIndex = this.defauleValue
            // clearn text
            this.$refs.setChangeText.value = "";
            // close drop down
            this.isShowDropDown = false;
        }
    }

})
</script>

<style>
    @import "../../assets/css/customCbo.css";
</style>
