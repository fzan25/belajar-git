let nama = document.getElementById('first');
console.log(nama);//lihatnya di inspect html

let panjang = document.getElementsByTagName('h1')//ngabilnya sintak di html
 for(let i = 0 ; i <= panjang.length; i++){
    console.log(panjang[i])
 }
let clas = document.getElementsByClassName('title')//mengambil dari classname
for (let i = 0; i < clas.length; i++){
   console.log(clas[i]);
}

//berdasarkan selektor
let a = document.querySelector('h1')
let aa = document.querySelector('#secondry')
let aaa = document.querySelector('title')

console.log(a);
console.log(aa);
console.log(aaa);

//semua selektor class

let b = document.querySelectorAll('.title')
console.log(b)

// . → class
// # → id
// '' → nama elemen atau syntak html

//================================================
//properti untuk mengubah html

let bb = document.querySelectorAll('h1')//h1 di file dom.html kosong 1
bb[3].innerHTML = 'judul ke empat'//menggunakan .innerHTML untuk menambahkan
//bisa untuk mengubah juga 
let bbb = document.getElementById('second')
bbb.innerHTML ='ini adalah judul ke dua'

//mengubah atribut dari javasript atribut itu seperti class,id,dll

let c = document.getElementById('second')
c.className = 'new title'
c.id = 'gear-second'//disini pengubahan dilakukan

let cc = document.querySelectorAll('#gear-second')
console.log(cc
)

//menambahkan atribut di h1 ke empat yang belum ada
let d = document.querySelectorAll('h1')
d[3].setAttribute('class', 'title')
d[3].setAttribute('id', 'gear-four')
//munculkan semua
 let dd = document.querySelectorAll('h1')

for(i = 0; i < dd.length; i++){
   console.log(dd[i]);
}

//mengubah style element html
let e = document.querySelectorAll('h1')
e[0].style.color = 'grey';
e[1].style.backgroundColor= 'blue';
e[2].style.color = 'red';
e[3].style.backgroundColor = 'snow';

//menambahkan dan menghapus elemen html

let h = document.createElement('p') //membuat elemen baru
h.innerHTML = ' halo nama saya fauzan'

//menambahkan element baru ke perent (div)
let hh = document.querySelector('div');
hh.appendChild(h)//maksudnya variable atau elemen h di tambahkan ke hh

//ada beberapa metode
//document.createElement(newElement) untuk membuat element baru
//document.removeChild(element) untuk menghapus element
//document.appendChild(element) untuk menambahkan element baru ke element yang di targetkan
//document.replaceChild(new,old) untuk menggantuk element lama dengan yang baru

alert('halooo')
