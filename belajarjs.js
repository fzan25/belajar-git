

 let tinggi = 180
 let kurang = 110

 let hasil = ideal(tinggi, kurang)

 console.log(`berat badan ideal mu adalah ${hasil}`)

 let number1 = 6;
 let number2= 2;

 console.log(number1 < 1 && number2 < 4);
 console.log(number1 > 3 || number2 > 3);
 console.log(!(number1 < 1 && number2 < 3));

 let cuaca = 'hujan';
 switch(cuaca){
    case 'hujan':
        console.log("cuaca sedang hujan saat ini")
        break;
    case 'cerah':
        console.log("cuaca sangat cerah saat ini")
        break;
    case 'berawan' :
        console.log('hari ini sedang berawan')
        break;
    default:
        console.log('hati hati cuaca saat ini tidak jelas')
        break;
 }

 //ternary operator lebih ringkas dari if-else

 let usia = 17
 let nilai = (usia >= 15) ? "anda berhak mendapatkan sim":'anda tidak berhak mendapatkan sim';

 console.log(nilai);

 //for

 for(let i = 1; i <= 10; i++){
    console.log(`pengulangan ke - ${i}`);
 }

 //for-in
const person = {
    fulname:'fauzan',
    age:18,
    job:'developer'
 };

 for (let key in person){
    console.log(`${key} : ${person[key]}`);
 }

 //for-of

 let animal = ['kucing', 'anjing','babi','singa'];
for(let animals of animal){
    console.log(animals);
}

//while
let angka = 1;
while(angka <=5){
    console.log(`perulangan ke ${angka}`)
    angka ++;
}

//do=while
let unger = 6;
do{
    console.log(`pengulanhan yang ke ${unger}`);
    unger ++;
}while(unger <= 5);

//function
function sapa(){
    console.log('halo semuanya nama aku fauzan')
};
sapa();

//muncul di web
function sayHello(nama){
    document.write(`<h1>hello ${nama}, selamat datang</h1>`);
}
sayHello('fauzan');

//return


function ideal(tinggibadan, pengurangan){
    let total = tinggibadan - pengurangan;
    return total;
}
let resault = ideal(5,5);
console.log(resault);

