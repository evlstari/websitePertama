var selectedRow = null;

function onFormSubmit(){
    
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["born"] = new Date(document.getElementById("born").value).toLocaleDateString("id-ID", {day: "numeric", month: "long" , year: "numeric"});
    formData["gender"] = document.querySelector('input[name="gender"]:checked').value
    formData["pesan"] = document.getElementById("pesan").value;
    return formData;

}



function insertNewRecord(data){
    var table = document.getElementById("datatabel").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.born;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pesan;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a><button>Klik Disini</button></a>';
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = '<a onClick="onDelete(this)"><button>Delete</button></a>';

}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("born").value = "";
    document.querySelector('input[name="gender"]:checked').value= "";
    document.getElementById("pesan").value = "";
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("datatabel").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
