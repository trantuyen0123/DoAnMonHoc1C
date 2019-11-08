
var dataList = [];
var STT = 1;
var MaCV = 1;

function btnSave() {
    STT++;
    MaCV++;
    //var machucvu = document.getElementById('idMaChucVu').value;
    var tenchucvu = document.getElementById('idTenChucVu').value;
    var mota = document.getElementById('idMoTa').value;

    var dataListTag = document.getElementById('dataList');
    dataListTag.innerHTML += "<tr id='idtr'>" +
        "<td class='center ctd'>" + STT + "</td>" +
        "<td>" + "CV" + MaCV + "</td>" +
        "<td>" + tenchucvu + "</td>" +
        "<td>" + document.getElementById("select").value + "</td>" +
        "<td class='center'><input type='checkbox' name='namekichhoat'></input> </td>" +
        "<td>" + mota + "</td>" +
        "<td>" + "" + "</td>" +
        "</tr>";

        //kt();
}

function btnXoa() {
    var table = document.getElementById('dataList');
    var check = document.getElementsByName("namekichhoat");
    for (var i = 0; i <= check.length; i++) {
        if (check[i].checked) {
            table.deleteRow(i);
        }  
    }  
}

function kt(){
    var tenchucvu = document.getElementById('idTenChucVu').value;
    if(tenchucvu=="")
    {
        alert("Không được để trống");
    }
    // var check = document.getElementsByName("namekichhoat");
    // check.addEventListener('',function(){
    //     if (check.checked) {
    //         //
    //     }
    // })   
}  

