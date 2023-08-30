/*Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/



function mostrar(num) { 
    
    for ( i = num + 1; i < num + 11; i++) {
        console.log("numero: "+ i);
        
    }
    
}
mostrar(5);

/*2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/
function imprimir(num1) { 
    
    for ( i = num1  ; i <= 20; i++) {
        i += 3;
        console.log("numero: "+ i);
        
    }
    
}
imprimir(5);

/*3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100*/

function suma() { 
    let sum=0;
    for ( i = 0  ; i <= 100; i++) {
        sum += i;
               
          
    }
    console.log("numero: "+ sum);
    
}
suma();

/*4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.*/

function gaby(numero){
    let mul = 1;
    for (let i = 1; i <= numero; i++) {
        mul *= i;
        
    }
    console.log("numero: " + mul)
}

gaby(5);

/*5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.*/

function fibonacci(numero){
    
    let n1 = 1;
    let n2 = 1;
    let r = 0;
    for (let i = 0; i < numero ; i++) {
        
        r=n1+n2;
        n1=n2;
        n2=r;
            console.log(r);
            
        
    }

}
fibonacci(10);

