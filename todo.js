const btnAdd = document.getElementById('btnAdd');
const textSquare = document.getElementById('textSquare');
const getDiv =  document.getElementById('newDiv');
const btnDeleteAll = document.getElementById('btnDeleteAll').onclick = () => {document.location.reload()};

btnAdd.onclick = (e) => {

    e.preventDefault();

    let newDiv = document.createElement('input');
    newDiv.id = 'newDiv';
    newDiv.type = 'text';
    newDiv.placeholder = 'Digite aqui...';

    // Delete button
    let btnRemove = document.createElement('button');
    btnRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnRemove.id = 'btnRemove';

    btnRemove.onclick = () =>{
        newDiv.remove();
        btnRemove.remove();
    }
    //###############################

    textSquare.appendChild(newDiv);
    textSquare.appendChild(btnRemove);  
}



