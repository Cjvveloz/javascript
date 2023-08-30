/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

function encontrarMultiplos(num1, num2) {
    let arreglo =[];
    for (let i = num1; i < num2; i++) {
        if (i % num1 == 0 ) {
            arreglo.push(i);
        }
        
    }
    return arreglo;
}

console.log(encontrarMultiplos(5, 50));



/* 
Punto 2: Arreglos y Objetos
 Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes
let arreglo2 = [
    {
        nombre: "juan",
        notas: [70, 85, 100, 65],
        aprobado: function () {
            let suma = 0;
            this.notas.map(x => suma += x );
             return suma / this.notas.length >= 70;
                    
                
            }
        }
    
]

console.log(arreglo2[0].aprobado());
console.log(arreglo2.map(x => x.aprobado()))
// Función para calcular el promedio de notas


// Función para determinar si el estudiante aprobó


// Calcular si los estudiantes aprobaron o no


// Imprimir estado de aprobación de los estudiantes



/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO

let arreglo3 = [1, 4, 6, 8, 7, 11, 21];
    let total =0;
   for (let i = 0; i < arreglo3.length; i++) {
    if (arreglo3[i] % 2 == 0) {
        total += arreglo3[i];
        
    }
    
}
console.log(total);

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO
let arreglo4 = [1, 4, 6, 8, 7, 11, 21];
let pro = 1;
function producto(array) {
    for( x of array){
        if (x % 2 != 0) {
            pro *= x;
        }
    }
    return pro;
}

console.log(producto(arreglo4));




/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

let vehiculo = {
    marca: "toyota",
    modelo: "rav",
    anio: 2020,
    precio: 30000,
    impuesto: 0,
    metodo: function () {
        let imp = 0 ;
        if (this.anio < 2010) {
            imp = this.precio * 0.1
            this.impuesto = imp;
        } else{
            imp = this.precio * 0.5;
            this.impuesto = imp;
        }
        return imp
    } 
}

console.log(vehiculo.metodo());
console.log(vehiculo);
