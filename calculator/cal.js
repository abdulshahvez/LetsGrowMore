let string="";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
     if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('.bar').value=string;
     }
     else if(e.target.innerHTML == 'C'){
        string='';
        document.querySelector('.bar').value=string;
     }
     else if(e.target.innerHTML == 'X'){
        string=string.substring(0,string.length-1);
        document.querySelector('.bar').value=string;
     }
        else{
            console.log(e.target)
        string= string+ e.target.innerHTML;
        document.querySelector('.bar').value=string;
        }
    })

})