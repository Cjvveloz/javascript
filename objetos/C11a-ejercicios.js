//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

 /* 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.*/


/*Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.


*/


let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular){
       for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].titularCuenta == titular) {
             return banco.clientes[i];
         }
       }
    },
    deposito: function (titular, depo) {
        total =0;
        for (let i = 0; i < arrayCuentas.length; i++) {
            if (arrayCuentas[i].titularCuenta == titular) {
                total = depo + arrayCuentas[i].saldoEnPesos;
                arrayCuentas[i].saldoEnPesos = total;
                  return banco.clientes[i];
             }
           }
        },
        /*Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”*/
        extraccion: function (titular, monto) {
            for (let i = 0; i < arrayCuentas.length; i++) {
                ext = 0;
                if (arrayCuentas[i].titularCuenta == titular && monto < arrayCuentas[i].saldoEnPesos ) {
                    ext = arrayCuentas[i].saldoEnPesos- monto;
                    arrayCuentas[i].saldoEnPesos = ext;
                      return banco.clientes[i];
                 } else{
                    return console.log('Fondos insuficientes');
                 }
               }
        }
    }


let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

let depositoTotal = banco.deposito("Jarret Lafuente", 1000);
console.log(depositoTotal);

let retiro = banco.extraccion("Abigael Natte", 2000);
console.log(retiro);

console.log(banco.clientes);
