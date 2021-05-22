let btn = document.querySelectorAll("button.num");
let btnclac = document.querySelectorAll("button.Calculation");
let inp = document.getElementById("inp");
let history = document.querySelector(".history");
let reset = document.querySelector(".reset");
let equal = document.querySelector('.equal');
let toggle = document.querySelector(".contai");

//reset function
reset.onclick = () =>{
    inp.value = '';
    history.innerHTML = '';
}

//type number function
for (var i =0 ; i < btn.length; i++){
    btn[i].onclick = (e) => {
        inp.value += e.target.dataset.number;
    }
}
//type Calculation function
for (var i =0 ; i < btnclac.length; i++){
    btnclac[i].onclick = (e) => {
        let id = inp.value;
        //(id.substr(id.length - 1) == last of type
        if(id.substr(id.length - 1) !== e.target.dataset.number){
            inp.value += e.target.dataset.number;
        }else{
            console.log("false")
        }
    }
}
// delete function
document.querySelector(".del").onclick = () =>{
    inp.value = inp.value.slice(0, -1);
    inp.focus();
}
//calculation function
equal.onclick = ()=>{
    if(inp.value == ''){
        inp.value = 'Nothing';
    }
    history.innerHTML = inp.value;
    let ev = eval(inp.value);
    inp.value = ev;
}

//toggel themes
toggle.addEventListener("click", (e) => {
    let setP = document.documentElement.style;
    let point = document.getElementById("nnie");
    
        if(point.classList.contains("point")){

            point.classList.add("marg-auto");
            point.classList.remove("point");
            setP.setProperty('--main--color' , 'hsl(0, 0%, 90%)');
            setP.setProperty('--kt--color' , 'hsl(0, 5%, 81%)');
            setP.setProperty('--screen--color' , 'hsl(0, 0%, 93%)');
            setP.setProperty('--krdB--color' , 'hsl(185, 42%, 37%)');
            setP.setProperty('--ksh--color' , 'hsl(185, 58%, 25%)');
            setP.setProperty('--kBT--color' , 'hsl(25, 98%, 40%)');
            setP.setProperty('--kesh--color' , 'hsl(25, 99%, 27%)');
            setP.setProperty('--kB--color' , 'hsl(45, 7%, 89%)');
            setP.setProperty('--kNsh--color' , 'hsl(35, 11%, 61%)');
            setP.setProperty('--kN--color' , '(60, 10%, 19%)');
            setP.setProperty('--color' , 'hsl(60, 10%, 19%)');
            
            
        }else if(point.classList.contains("marg-auto")){
            
            point.classList.remove("marg-auto");
            
            point.classList.add("marg-left");

            setP.setProperty('--main--color' , '#000');
            setP.setProperty('--kt--color' , '#906700');
            setP.setProperty('--screen--color' , '#9067009f');
            setP.setProperty('--krdB--color' , '#b8860b');
            setP.setProperty('--ksh--color' , '#b8870b73');
            setP.setProperty('--kBT--color' , '#c0c0c0');
            setP.setProperty('--kesh--color' , '#c0c0c098');
            setP.setProperty('--kB--color' , '#ffd700');
            setP.setProperty('--kNsh--color' , '#ffd900aa');
            setP.setProperty('--kN--color' , '#000');
            setP.setProperty('--color' , '#ffd700');
            setP.setProperty('--bta3' , '#000');
            
    
        }else{
            point.classList.remove("marg-left");

            point.classList.add("point");

            setP.setProperty('--main--color' , 'hsl(222, 26%, 31%)');
            setP.setProperty('--kt--color' , 'hsl(223, 31%, 20%)');
            setP.setProperty('--screen--color' , 'hsl(224, 36%, 15%)');
            setP.setProperty('--krdB--color' , 'hsl(225, 21%, 49%)');
            setP.setProperty('--ksh--color' , 'hsl(224, 28%, 35%)');
            setP.setProperty('--kBT--color' , 'hsl(6, 63%, 50%)');
            setP.setProperty('--kesh--color' , 'hsl(6, 70%, 34%)');
            setP.setProperty('--kB--color' , 'hsl(30, 25%, 89%)');
            setP.setProperty('--kNsh--color' , 'hsl(28, 16%, 65%)');
            setP.setProperty('--kN--color' , 'hsl(221, 14%, 31%)');
            setP.setProperty('--color' , 'hsl(0, 0%, 100%)');
            setP.setProperty('--bta3' , '#fff');
        }
});


/*
//switch color
const colorsLi = document.querySelectorAll(".colors-list li");
//loop on list items
colorsLi.forEach(li => {
    //onclick no list items
    li.addEventListener("click" , (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main--color' , e.target.dataset.color);
        document.documentElement.style.setProperty('--main--overlay' , e.target.dataset.overlay);
        document.documentElement.style.setProperty('--main--span' , e.target.dataset.span);
        // remove activ class 
        e.target.parentElement.querySelectorAll(".activee").forEach(Element => {
            Element.classList.remove("activee");
        });
        // add activ class 
        e.target.setAttribute("class" , "activee");
    });
});*/