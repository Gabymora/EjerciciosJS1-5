/*.................EJERCICIO 1 ..................*/
/*  1. Inicio.
	2. Leer dos numeros n1 y n2
	3. Realizar la suma de n1 y n2. Guardarlo en respuesta
	4. Escribir el resultado respuesta
	5. Fin
*/ 
//para hacer una suma
var n1 = prompt ("Ingresa Primer Numero");
var n2 = prompt ("Ingresa segundo Numero");
var respuesta = (parseInt(n1)+parseInt(n2));
alert("la suma de los numeros es = " + respuesta)

/*................EJERCICIO 2 ......................*/
/*	1. Inicio.
	2. Leer 3 numeros A B y C
	3. Hacer la suma de A B y C y dividir entre 3. Guardarlo en P
	4. Escribir el resultado P
	5. Fin */
alert("Vamos a promediar 3 numeros")
var a = prompt ("Ingresa Primer Numero Entero");
var b = prompt ("Ingresa Segundo Numero Entero");
var c = prompt ("Ingresa Tercer Numero Entero");
var p = ((parseInt(a)+parseInt(b)+parseInt(c))/3)
alert("El promedio de los numeros ingresados es: " + p)

/*................EJERCICIO 3 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver
	3. Leer 2 numeros base y altura
	4. Sumar base y altura, divirlo entre dos. Guardarlo en Area
	5. Escribir el resultado Area
	6. Fin
*/
alert ("Sacar el area de un triangulo, solo numeros enteros")
var base = prompt ("Ingresa la medida de la base del triangulo");
var altura = prompt ("Ingresa la medida de la altura del triangulo");
var area = ((parseInt (base) + parseInt (altura))/2)
alert("El area del triangulo es= " + area)

/*................EJERCICIO 4 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver
	3. Leer 1 numero Produccion en litros.
	4. Realizar la operacion de cambio a galones y guardarlo en galon
	5. Leer 1 numero Precio del galon.
	6. Realizar la operacion de precio por galon y guardarlo en ganancia.
	7. Escribir el resultado de Ganancia.
	8. Fin
*/

alert ("Ganancia de los galones vendidos en un dia de produccion")
var produccion = prompt ("Ingresa tu produccion en litros")
var galon = (parseFloat(produccion)/3.785)
var precio = prompt ("Introduce el precio por galon del dia")
var ganancia = (parseFloat(galon)*parseFloat(precio))
alert ("Tu ganancia por galones vendidos es de $" + ganancia + " pesos")


/*................EJERCICIO 5 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver e instrucciones
	3. Leer h1,h2,h3,h4,h5,h6,h7 horas de trabajo por dia.
	4. Leer Pago, que es el pago fijo por hora.
	5. Realizar la operacion de horas por pago.Guardar en Sueldo.
	6. Escribir el resultado de Sueldo.
	7.Fin
*/
alert ("Pago por semana")
alert("Si algun dia no trabajaste solo ingresa 0")
var h1 = prompt ("Ingresa las horas que trabajaste el lunes")
var h2 = prompt ("Ingresa las horas que trabajaste el martes")
var h3 = prompt ("Ingresa las horas que trabajaste el miercoles")
var h4 = prompt ("Ingresa las horas que trabajaste el jueves")
var h5 = prompt ("Ingresa las horas que trabajaste el viernes")
var h6 = prompt ("Ingresa las horas que trabajaste el sabado")
var h7 = prompt ("Ingresa las horas que trabajaste el domingo")
var pago = prompt("Cuanto ganas por hora?")
var sueldo = ( (parseFloat(h1) + parseFloat(h2) + parseFloat(h3) + parseFloat(h4) + parseFloat(h5) + parseFloat(h6) + parseFloat(h7))*pago)
alert("Tu sueldo de esta semana es= $" + sueldo + " pesos")
