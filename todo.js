const btnAdd = document.getElementById('btnAdd');
const textSquare = document.getElementById('textSquare');
const getDiv =  document.getElementById('newDiv');
const btnDeleteAll = document.getElementById('btnDeleteAll').onclick = () => {document.location.reload()};

let btnRemove = document.getElementById("btnRemove");


let pTest = document.getElementById('pTest');
let c = 0;

btnAdd.onclick = (e) => {

    e.preventDefault(); 
    
    c++;
    pTest.innerHTML = `5/${c}`;

    if(c >= 5){
        btnAdd.style.display = "none";
    }

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
        btnAdd.style.display = "inline-block";
        c -= 1;
        pTest.innerHTML = `5/${c}`;
    }
    //###############################

    textSquare.appendChild(newDiv);
    textSquare.appendChild(btnRemove); 


}



