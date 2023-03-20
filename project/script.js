let string="";
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{
        if(e.target.innerHTML=="C"){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="++"){
            string=eval(string)+1;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="x^2"){
            string=string*string;
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string; 
        }
    }
    catch(err){
        document.querySelector('input').value="Enter a valid input";
        setInterval(async function(){
            document.querySelector('input').value="";
        },2000)
    }
    
    })
})