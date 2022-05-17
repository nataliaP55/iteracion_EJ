
let numeroIngresado = 9;


function verificar () {
    numeroIngresado = document.querySelector('#cant_repeticiones').value;
    document.querySelector(`#mensaje_resultado`).innerHTML= `  
        
        
        `;
    for(let i = 0 ; i < numeroIngresado ; i ++){
        document.querySelector(`#mensaje_resultado`).innerHTML+= `  
        <h1> Mensaje ${numeroIngresado} </h1>
        
        `;
        
         
    }
}

/* const ITERACIONES_MAX = 30; 

for(let i = 0 ; i < numeroIngresado ; i ++){
    document.querySelector(`#mensaje_resultado`).innerHTML+= `  
    <h1> Mensaje ${numeroIngresado} </h1>
    
    `;
    
     
}
*/