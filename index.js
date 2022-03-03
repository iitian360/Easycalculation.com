
let screen=document.getElementById('screen');
buttons=document.getElementsByClassName('btn_grp');

let screenValue="";


for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonTxt=e.target.innerText;
        

        if(buttonTxt=='X'){
            buttonTxt='*';
            screenValue+=buttonTxt;
            screen.value=screenValue;
        }

        else if(buttonTxt=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        // else if(buttonTxt=="del"){
        //     screenValue-=buttonTxt;
        //     screen.value=screenValue;
        // }

        else if(buttonTxt=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonTxt;
            screen.value=screenValue;
        }
        
    })
}




// dropdown

let tools=document.getElementById('tools');
let dropdowns=document.getElementById('dropdown');
let exit=document.getElementById('cancel');
dropdowns.classList.add('none')


tools.addEventListener('click',()=>{
    dropdowns.classList.remove('none')
    
})
exit.addEventListener('click',()=>{
    dropdowns.classList.add('none')
    
})
//  time element//

let time=document.getElementById('time');
let date_zone=document.getElementById('date');

function show_time(){
    let date=new Date();
    let res_date=date.toDateString('en-US');
    let res_time=date.toLocaleTimeString('en-US');
   time.innerText=res_time;
   date_zone.innerText=res_date;
    
}

setInterval(show_time,1000);

// all location formatting//







// ******************down bar**********
let down_bar=document.getElementById('down_bar');

    down_bar.addEventListener('click',()=>{
        
        let navbar=document.getElementById('nav_br');
        let navbox=document.getElementById('navbox');
    let nav_form=document.getElementById('nav_form');
    navbox.classList.toggle('v-resp')
    nav_form.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp')
    down_bar.classList.toggle('top')
})





 