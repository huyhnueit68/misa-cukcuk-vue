<template>
    <thead class="custom-header">
        <tr class="custom-color" >
            <th>
                <input type="checkbox" id="checkall" class="custom-input" name="checkall" value="checkall" onchange="setCheckedAll()">
            </th>
            <th>
                STT
            </th>
            <th v-for="(item, index) in header" :key="index">
                {{ item.text }}
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    setup() {
        
    },
    data(){
        return  {
            header: [
                {text: "Mã nhân viên"},
                {text: "Họ tên"},
                {text: "Giới tính"},
                {text: "Ngày sinh"},
                {text: "Số điện thoại"},
                {text: "Email"},
                {text: "Chức vụ"},
                {text: "Phòng ban"},
                {text: "Mức lương cơ bản"},
                {text: "Tình trạng công việc"},
            ],
        }
    }
}
</script>

<style scoped>
    .custom-color,
    .theader-table {
        width: 100%;
    }
    
    .custom-input,
    .checkedValue {
    margin: 0;
    width: 50px;
    height: 16px;
    }

    .custom-header .custom-color {
    text-align: justify;
    }

    .custom-header .custom-color > :first-child {
    width: 42px;
    }

    .custom-header .custom-color .custom-input {
    margin: 2px 10px 0 16px;
    }

</style>