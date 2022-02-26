

let val1 = document.getElementById('val1')
let val2 = document.getElementById('val2')
let val3 = document.getElementById('val3')

let result = document.getElementById('result');
let clear = document.getElementById('delete');



result.addEventListener('click', (e) => {


    let input1 = val1.value;
    let input2 = val2.value;
    let solve = (input1 * input2) / 100;
    val3.classList.add('bg-green')
    val3.value = solve;
    e.preventDefault();
})

clear.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.reload();
})


// logic for second & third tab//
let val4 = document.getElementById('val4')
let val5 = document.getElementById('val5')
let val6 = document.getElementById('val6')

let result2=document.getElementById('result2');
let clear2=document.getElementById('delete2');
// let copy2=document.getElementById('copy2');

result2.addEventListener('click',(e)=>{
    let input1=val4.value;
    let input2=val5.value;
    let solve=(input1*100)/input2;
    val6.classList.add('bg-green');
    val6.value=solve;
  
    e.preventDefault();

})
clear2.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.reload();
})

// copy2.addEventListener('click',()=>{
//     let copyTxt=val6.select();
//     alert("Copied the text: " + copyTxt);
//     console.log(copyTxt);
    
// })


let result3=document.getElementById('result3');
let clear3=document.getElementById('delete3');
let val7 = document.getElementById('val7')
let val8 = document.getElementById('val8')
let val9 = document.getElementById('val9')

result3.addEventListener('click',(e)=>{
    let input1=val7.value;
    let input2=val8.value;
    let solve=(input1*100)/input2;
    val9.classList.add('bg-green');
    val9.value=solve;
  
    e.preventDefault();

})
clear3.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.reload();
})


// ajax/////

let article=document.getElementById('article');
let material=document.getElementById('material');
article.addEventListener('click',show_blog);

function show_blog(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET','/readable doc/percentage.txt',true);

    xhr.onload=function(){
       material.innerText=xhr.responseText;
        
    }
    xhr.send();

}






