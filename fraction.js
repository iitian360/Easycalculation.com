let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let inp3 = document.getElementById('inp3')
let inp4 = document.getElementById('inp4')


let solve1 = document.getElementById('solve1');

solve1.addEventListener('click', () => {
    let inp5 = document.getElementById('inp5')
    let inp6 = document.getElementById('inp6')
    let opt = document.getElementById('sign');
    let A = inp1.value;
    let B = inp2.value;
    let C = inp3.value;
    let D = inp4.value;
    if (opt.value == "plus") {
        let x = (A * D) + (B * C);
        let y = B * D;
        inp5.value = x;
        inp6.value = y;
    }

    else if (opt.value == "minus") {
        let x = (A * D) - (B * C);
        let y = B * D;
        inp5.value = x;
        inp6.value = y;
    }

    else if (opt.value == "multi") {
        let x = A * C;
        let y = B * D;
        inp5.value = x;
        inp6.value = y;
    }

    else {
        let x = A * D;
        let y = B * C;
        inp5.value = x;
        inp6.value = y;

    }


})

let clear1=document.getElementById('clear1');
let calculation_form=document.getElementsByClassName('calculator_fr1');


let solve2 = document.getElementById('solve2');
solve2.addEventListener('click',()=>{
    
})

let inp10=document.getElementById('inp10')
let inp11=document.getElementById('inp11')
let inp12=document.getElementById('inp12')
let solve3=document.getElementById('solve3');
solve3.addEventListener('click',()=>{
  let A=inp10.value;
  let B=inp11.value;
  let x=(A/B);
  inp12.value=x;

})



let A = inp1.value;
let B = inp2.value;
let C = inp3.value;
let D = inp4.value;



function plus() {
    let x = (A * D) + (B * C);
    let y = B * D;
}
function minus() {
    let x = (A * D) - (B * D);
    let y = B * D;
}
function multiply() {
    let x = A * C;
    let y = B * D;
}
function plus() {
    let x = A * D;
    let y = B * C;
}


