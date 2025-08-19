//========================================================//
//event hendlers
//developer.mozila.org atribut event lebih lengkap

var name = 'fauzan' //Function Scope, bukan Block Scope
//Artinya kalau kamu bikin variabel var di dalam if, for, atau { }, variabel itu masih bisa diakses di luar
//Kalau pakai var, kamu bisa bikin variabel dengan nama yang sama berkali-kali tanpa error

function validasiInput(){
    var inputNilai = document.form1.inputName.value;//harus sesuai dengan yang di html

    if(inputNilai !== ""){
        alert('formulir berhasil di kirim')
        return true;
    } else {
        alert('formulir tidak boleh kosong')
        return false;
    }
}