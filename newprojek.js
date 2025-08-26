//mendapatkan element yang akan menagani perubahan thema

const icons = document.getElementById('iconss')

//membuat event headler untuk mengubah tema

function isDarkMode() {
    const getElementBody = document.body;
    if (getElementBody.className === 'dark-thame') {
        getElementBody.className = ''
        icons.src = 'download (4).jpg'
        
    } else{
        getElementBody.className = 'dark-thame';
        icons.src = 'logoluffy.png';
        
    }
}
//menjalankan event headler

icons.addEventListener('click', isDarkMode);

const list = document.getElementById('icon-list')
const menuList = document.getElementById('menu-list')

function sembunyi(){
    menuList.classList.toggle('hidden')
}

list.addEventListener('click', sembunyi)

