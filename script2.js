
console.log("sandip bhande");


document.getElementById("btn").addEventListener("click" , function(){
    const btn3  = document.getElementById("btn2").value
    const para5 = document.getElementById("para2");
  
  
    
    const p = document.createElement("p");
    p.innerText = btn3;
    
    document.getElementById("parl").innerHTML = `<p>${btn3}</p>
                                              <button id="bt6"> remove </button>`;
    


    para5.appendChild(p);


    console.log(para6);

    const btn4 = document.getElementById("bt2");
    


    
    btn4.addEventListener("click" , () => {
        const line = document.createElement("p")
        line.innerHTML = para5;
        para5.style.textDecoration = "line-through";



    


        
    })

    
   

    document.getElementById("btn5").addEventListener("click" , () => {

        para5.remove();
        document.getElementById("")


        
       

    

    })
  


    


    
    



















     


})

