<template>
    <div class="content-feature btn-name" id="toolBarEmployee">
        <button id="btnAdd" CommandType="Add" class="m-btn m-btn-default" data-toggle="tooltip" data-placement="top" title="Thêm thông tin">
            <div class="m-btn-icon icon-add"></div>
            <div class="btn-text" @click="showDialogDetail">{{ titleBtn }}</div>
        </button>
    </div>
</template>

<script>
export default {
  props: {
    titleBtn: String
  },
  setup() {
    
  },
  methods: {
    showDialogDetail(){
      this.$emit('enableDialog')
    }
  }
}
</script>

<style scoped>
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

.icon-add {
  width: 16px;
  height: 16px;
  background-image: url("../../../../../public/content/icon/add.png");
}
</style>