
const IMAGEN_PERRO = "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/perritos_0.jpg";
let numeroIngresado = 9;


function verificar () {
    numeroIngresado = document.querySelector('#cant_repeticiones').value;
    document.querySelector(`#mensaje_resultado`).innerHTML= `  
        
        
        `;
    for(let i = 0 ; i < numeroIngresado ; i ++){
        document.querySelector(`#mensaje_resultado`).innerHTML+= `  
        <img width="400px" src=${IMAGEN_PERRO} alt="imagen perro">
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