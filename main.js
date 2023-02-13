const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const numberInput=document.querySelector('#phone');


function submitHandler(e){

    e.preventDefault();
    
    const name=nameInput.value;
    const email=emailInput.value;
    const number=numberInput.value;
    console.log(name);
    console.log(email);
    console.log(number);

    const arr=[name,email,number];
    localStorage.setItem(email,arr);
}