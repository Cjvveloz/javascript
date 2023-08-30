const prompt = require ("prompt-sync")({sigint: true})
//AGREGA CAMBIOS
let edad=15 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas) 
if(edad < 0 ) { 
console.log("Error de edad favor ingrese un numero valido") 
}
else if(edad < 18 && edad % 2 != 0 ){ 
    console.log("No puedes pasar al bar.") 
    console.log("Sabias que tu edad es impar") 
    }
else if(edad < 18 ){ 
    console.log("No puedes pasar al bar.") 
} 

else if(edad % 2 != 0 && edad >= 21){ 
        console.log("felicidades puedes pasar al bar.") 
        console.log("Sabias que tu edad es impar") 
        } 
else if(edad >= 21 ){ 
console.log("felicidades puedes pasar al bar.") 
} 



