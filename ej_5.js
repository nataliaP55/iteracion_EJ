
let numeroIngresado = "numero por def";


function generar () {
    numeroIngresado = document.querySelector('#cant_repeticiones').value;
    document.querySelector(`#lista_suscripciones`).innerHTML= `  
        
        
        `;
    for(let i = 0 ; i < numeroIngresado ; i ++){
        document.querySelector(`#lista_suscripciones`).innerHTML+= `  
        <option>Opcion ${i}</option>
        
        `;
        
         
    }
}
