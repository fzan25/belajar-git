//menympan elemen yang sedang di-drag
let draggedBox = null;

//membuat event hendler untuk menjalankan operasi drag and drop
function handleDragStart(event){
    draggedBox = event.target;
}

function handleDragEnd(event){
    event.preventDefault();
}

function handleDragOver(event){
    event.preventDefault();
    const targetBoxId = event.target.id;
    const targetBox = document.getElementById(targetBoxId);

    if(targetBox){
        targetBox.style.backgroundColor = '#f9f9f9';
    }
}

function handleDragLeave(event){
    event.preventDefault();

    const targetBoxId = event.target.id
    const targetBox = document.getElementById(targetBoxId);
    
    if (targetBox){
        targetBox.style.backgroundColor = 'transparent';
    }
}

function handleDrop(event){
    event.preventDefault();
    event.target.appendChild(draggedBox);
    const targetBoxId = event.target.id;
    const targetBox = document.getElementById(targetBoxId);
    if(targetBox){
        targetBox.style.backgroundColor = 'transparent';
    }
}

//mendapatkan event hendler ke event listener 

function setupBoxEvents(box){
    box.addEventListener('dragstart', handleDragStart)
    box.addEventListener('dragend', handleDragEnd)
    box.addEventListener('dragover', handleDragOver)
    box.addEventListener('dragleave', handleDragLeave)
    box.addEventListener('drop', handleDrop)
}

//menambahkan event listener ke setiap box
let boxTodo = document.getElementById('box-todo');
setupBoxEvents(boxTodo)

let boxonProgress = document.getElementById('box-onprogress');
setupBoxEvents(boxonProgress)

let boxDone = document.getElementById('box-done');
setupBoxEvents(boxDone)