const btnAdd = document.getElementById('btnAdd');
const btnTheme = document.getElementById('btnTheme');
const bodyT = document.getElementById('bodyT');
const textSquare = document.getElementById('textSquare');
const getDiv =  document.getElementById('newDiv');
const container = document.getElementById('container');


//let btnRemove = document.getElementById("btnRemove");

btnTheme.onclick = () => {

    bodyT.classList.toggle('active');
    container.classList.toggle('active');
}

let pTest = document.getElementById('pTest');
let c = 0;

btnAdd.onclick = (e) => {

    e.preventDefault(); 
    
    c++;
    pTest.innerHTML = `5/${c}`;

    if(c >= 5){
        //btnAdd.style.display = "none";
        btnAdd.disabled = true;
        btnAdd.style.backgroundColor = '#d471c7';
        btnAdd.style.color = 'whitesmoke';
    }

    let newDiv = document.createElement('input');
    newDiv.id = 'newDiv';
    newDiv.type = 'text';
    newDiv.placeholder = 'Digite aqui...';
    newDiv.autocomplete = 'off';

    // Delete button
    let btnRemove = document.createElement('button');
    btnRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnRemove.id = 'btnRemove';

    btnRemove.onclick = () =>{
        newDiv.remove();
        btnRemove.remove();
        //btnAdd.style.display = "inline-block";
        c -= 1;
        pTest.innerHTML = `5/${c}`;
        btnAdd.disabled = false;
        btnAdd.style.backgroundColor = '#ca00af';
        btnAdd.style.color = 'rgb(255, 255, 255)';
    }
    //###############################

    textSquare.appendChild(newDiv);
    textSquare.appendChild(btnRemove); 


}
const btnDeleteAll = document.getElementById('btnDeleteAll').onclick = () => {
    document.location.reload()
    //btnRemove.remove();
};



