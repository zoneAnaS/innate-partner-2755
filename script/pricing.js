let monthbtn=document.getElementById("monthlybtn");
let annualbtn=document.getElementById("annualbtn");
let pro=document.querySelector("#pricepro")
let pre=document.querySelector("#pricepre")
let ent=document.querySelector("#priceent")
let rupee=document.querySelector("#rupeebtn");
let dollar=document.querySelector("#dollarbtn");
let euro=document.querySelector("#eurobtn");
let enquire=JSON.parse(localStorage.getItem("enquiry")) || [];

    let prorp=560.00;
    let prerp=800.00;
    let entrp=1600.00;

annualbtn.addEventListener("click",()=>{
    dollar.classList.remove("activee")
    dollar.classList.add("inactive")
    euro.classList.remove("activee")
    euro.classList.add("inactive")
    rupee.classList.remove("inactive")
    rupee.classList.add("activee")
    monthbtn.classList.remove("activee")
    monthbtn.classList.add("inactive")
    annualbtn.classList.remove("inactive")
    annualbtn.classList.add("activee")
    pro.innerText="₹513.33";
    pre.innerText="₹733.33";
    ent.innerText="₹1466.67";
    prorp=513.33;
    prerp=733.33;
    entrp=1466.67;
    


})

monthbtn.addEventListener("click",()=>{
    dollar.classList.remove("activee")
    dollar.classList.add("inactive")
    euro.classList.remove("activee")
    euro.classList.add("inactive")
    rupee.classList.remove("inactive")
    rupee.classList.add("activee")
    annualbtn.classList.remove("activee")
    annualbtn.classList.add("inactive")
    monthbtn.classList.remove("inactive")
    monthbtn.classList.add("activee")
    pro.innerText="₹560.00";
    pre.innerText="₹800.00";
    ent.innerText="₹1600.00";
    prorp=560;
    prerp=800;
    entrp=1600;
})


rupee.addEventListener("click",()=>{
    dollar.classList.remove("activee")
    dollar.classList.add("inactive")
    euro.classList.remove("activee")
    euro.classList.add("inactive")
    rupee.classList.remove("inactive")
    rupee.classList.add("activee")
    pro.innerText="₹"+prorp;
    pre.innerText="₹"+prerp;
    ent.innerText="₹"+entrp;
})
dollar.addEventListener("click",()=>{
    dollar.classList.add("activee")
    dollar.classList.remove("inactive")
    euro.classList.remove("activee")
    euro.classList.add("inactive")
    rupee.classList.add("inactive")
    rupee.classList.remove("activee")
    pro.innerText="$"+parseFloat(prorp/80).toFixed(2);
    pre.innerText="$"+parseFloat(prerp/80).toFixed(2);
    ent.innerText="$"+parseFloat(entrp/80).toFixed(2);
})
euro.addEventListener("click",()=>{
    dollar.classList.remove("activee")
    dollar.classList.add("inactive")
    euro.classList.add("activee")
    euro.classList.remove("inactive")
    rupee.classList.add("inactive")
    rupee.classList.remove("activee")
    pro.innerText="€"+parseFloat(prorp/83).toFixed(2);
    pre.innerText="€"+parseFloat(prerp/83).toFixed(2);
    ent.innerText="€"+parseFloat(entrp/83).toFixed(2);
})

// triggering form

let trigger=document.getElementById("formtrigger")
let formbg=document.getElementById("prdformback")
let formpr=document.getElementById("prdformpar");

trigger.addEventListener("click",()=>{
    formbg.classList.remove("none")
    formbg.classList.add("flex")
    setTimeout(()=>{
        formpr.style="margin-top:50px"
    },100)
    
    let close=document.querySelector("#toppr>span");
    close.addEventListener("click",()=>{
        
        formpr.style="margin-top:0px"
        setTimeout(()=>{formbg.classList.add("none")
        formbg.classList.remove("flex")},500)
        
    })
})


// for functionalities
let form=document.getElementById("prform")
let email=document.getElementById("premail")
let number=document.getElementById("prnum")
let member=document.getElementById("prmem")
let message=document.querySelector(".prmessage")
form.addEventListener("submit",(e)=>{
    let flag=false;
    for(let i=0;i<enquire.length;i++){
        if(email.value==enquire[i].email){
            flag=true;
            break
        }
    }
    if(!flag){
        let obj={};
        obj.email=email.value;
        obj.number=number.value;
        obj.member=member.value;
        message.classList.remove("hide")
        message.classList.add("hide")
        enquire.push(obj);
        localStorage.setItem("enquiry",JSON.stringify(enquire))
    }
    else{
        message.classList.remove("hide")
        e.preventDefault()
    }
    
})

