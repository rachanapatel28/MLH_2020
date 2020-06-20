const ctn = document.getElementById('btn-4E');
const ed = document.getElementsByClassName('ED');
const  er= document.getElementsByClassName('4E');

ctn.addEventListener('click',()=>{
    console.log('clicking Daaa');
    er.style.display='none';
    ed.style.display='block';
});