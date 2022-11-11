let collapsable=document.getElementsByClassName("colapcont");

for(let i=0;i<collapsable.length;i++){
    collapsable[i].addEventListener("click",()=>{
        collapsable[i].classList.toggle('active');
    })
}

