/**
 * create file resource
 * PQ Huy 02.06.2021
 */
var resource = resource || {};

// Data type in grid
resource.DataTypeColumn = {
    Number: "Number",
    Date: "Date",
    Enum: "Enum"
}

// Model action with api
resource.Method = {
    Get: "Get",
    Post: "Post",
    Put: "Put",
    Delete: "Delete"
}

// Grender
resource.Grender = {
    Female: "Nữ",
    Male: "Nam",
    Other: "Khác"
}

// Position
resource.Position = {
    Manager: "Giám đốc",
    Cashier: "Thu ngân",
    Marketer: "Nhân viên marketing",
    ITer: "Nhân viên IT",
}

resource.WorkStatus = {
    Probation: "Đang thử việc",
    Working: "Đang làm việc",
    Retired: "Đã nghỉ hưu"
}

// Command type
resource.CommandType = {
    Add: "Add",
    Edit: "Edit",
    Delete: "Delete",
    Refresh: "Refresh",
    MassDelete: "MassDelete",
    Import: "Import",
    Export: "Export"
}

// Command form
resource.CommandForm = {
    Save: "Save",
    Cancel: "Cancel",
    Delete: "Delete",
}

export default resource;