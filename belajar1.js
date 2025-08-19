

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
//function sayHello(nama){
 //  document.write(`<h1>hello ${nama}, selamat datang</h1>`);}
//sayHello('fauzan');

//return


function ideal(tinggibadan, pengurangan){
   let total = tinggibadan - pengurangan;
   return total;
}
let resault = ideal(5,5);
console.log(resault);

//Cakpukan function

let variabelGlobal = 'ini variable global';

function myFungtion(){
   let variableLokal = 'ini variable lokal';

   console.log(variabelGlobal)
   console.log(variableLokal)
}

myFungtion()

// function expresi 

let addNumbers = function(a, b){
   let total = a + b;
   return total;
}

let resaul = addNumbers(5,9);
console.log(resaul)

//arow function lebih simpel

let gokil = (a, b) => {return a + b; };

let resau = gokil(5,10);
console.log(resau);
//return bisa di hilangkan dengan fungction ini

//aray konstruktor

const arya = new Array('fauzan', 1,'najmi','artansayh');
console.log(arya);

//menggantu array
let fruit = ['mangga', 'pisang', 'jeruk']

fruit[2] = 'alpukat';
console.log(fruit);

//properti 

console.log(`jumlah buah ada ${fruit.length}`);

//properti untuk menambahkan

fruit.push('rambutan');//unshift menambahkan di awal / push di akhir
console.log(fruit);

for(let i = 0; i < fruit.length; i++) {
    // Anda bisa menambahkan kode di sini, misal:
    console.log(fruit[i]);
}

//properti pop untuk menghapus aray akhir

fruit.pop();//properti shift untuk menghpus yang awal
console.log(fruit)

//concat untuk menggabungkan beberapa aray
 let mobil = ['toyota', 'daihatsu','nisan']

 let allaray = fruit.concat(mobil);
 console.log(allaray)

 //indexOf untuk mendapaktan nilai index yang ada di aray
let index = mobil.indexOf('toyota')
console.log(index)//hasil akan 0 karna array di mulai dari 0

//slice untuk mengambil aray dan menjadikan array baru
let newMobil = mobil.slice(0,2);
console.log(newMobil)

//objek pada javasript dia masuknya variable

const animals = { 
   names : 'gtr',
   color : 'white',
   sound : 'brum',
};

console.log(animals.names);
console.log(animals.color);
console.log(animals.sound);
//menggantik nilai objek
animals.names = 'lambo';
animals.sound = 'stutu';

console.log(animals)

//menambahkan obje baru

animals.plat = 'A 2503 UYE';
//untuk menghaous 
delete animals.color
console.log(animals)


// metode 
 const animalss = { 
   names : 'gtr',
   color : 'white',
   sound : 'brum',
   suaraMobil : function(){
      console.log(`suara ${this.names} adalah ${this.sound}`);
   }
};

animalss.suaraMobil();




