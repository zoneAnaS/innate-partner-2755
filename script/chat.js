let chatbtn=document.querySelector("#chatbtn");
let chatbox=document.querySelector("#chatbox");
let chatboxbtn=document.querySelector("#chatbox>button");
let input=document.querySelector("#chatbox>input");
let user=document.querySelector("#userchat");
setTimeout(()=>{
        chatbtn.classList.remove("none")
        chatbtn.classList.add("flex")
},5000);


chatbtn.addEventListener("click",()=>{
    user.innerHTML=""
    let close=document.querySelector("#topchat>span")
    chatbtn.classList.remove("flex")
    chatbtn.classList.add("none")
    chatbox.classList.remove("none")
    chatbox.classList.add("block")
    setTimeout(()=>{
        chatboxbtn.classList.remove("none")
        chatboxbtn.classList.add("block")
    },2000);
    input.addEventListener("keypress",(e)=>{
        if(e.keyCode == 13){
            let val=input.value.trim();
            if(val){
                let p=document.createElement('p');
        p.innerText=val
        user.append(p)
        input.value=""
            }
        
        }
        
    });
    close.addEventListener("click",()=>{
        chatbtn.classList.add("flex")
    chatbtn.classList.remove("none")
    chatbox.classList.add("none")
    chatbox.classList.remove("block")
    chatboxbtn.classList.add("none")
        chatboxbtn.classList.remove("block")
    })
})