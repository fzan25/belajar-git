// . → class
// # → id
// '' → nama elemen atau syntak html




function setColor(){
    let a = document.querySelector('.text');
    a.style.color = 'blue';
}

function setText(){
    let aa = document.querySelector('.text');
    aa.innerHTML = 'text ini telah di ubah';
}

function setBorder(){
    let aaa = document.querySelector('.text');
    aaa.style.border = '2px solid black'
}

function offBorder(){
    let aaaa = document.querySelector('.text')
    aaaa.style.border = 'none'
}

let b = document.querySelector('#btn');
b.addEventListener('click', setColor);
b.addEventListener('click', setText);
b.addEventListener('mouseover', setBorder)
b.addEventListener('mouseout', offBorder)