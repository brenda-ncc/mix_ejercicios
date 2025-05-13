// Ejercicios
// Ejercicio 1
// Filtrar Números Pares
// Crear una función que reciba un array de números y devuelva un nuevo array que
// contenga solo los números pares.

let numeros = [];  // Variable global para almacenar los números

// funcion generacion de numeros al azar 
function generarNumeros() {
    numeros = []; // Vaciar antes de generar nuevos
    for (let i = 0; i < 6; i++) {
        const numero = Math.floor(Math.random() * 50) + 1;
        numeros.push(numero);
    }
    // mostrar numeros en html
    document.getElementById('numerosArray').textContent = 'El array de números es: ' + numeros.join(', ');
}

// filtrar pares
function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

// muestra los pares
function mostrarPares() {
    const pares = filtrarPares(numeros);
    document.getElementById('pares').textContent = 'Los números pares son: ' + pares.join(', ');
}


// Ejercicio 2
// Calcular Promedio
// Escribir una función que tome un array de números y calcule el promedio.

// notas al azar
function generarNotas() {
    const notas = [];
    
    // Generamos notas aleatorias
    for (let i = 0; i < 5; i++) {
        const nota = Math.floor(Math.random() * 10) + 1;  
        notas.push(nota);
    }
    
    return notas;
}

// calcular promedio y mostrar resultados
function calcularPromedio() {
    const notas = generarNotas(); 

    // mostrar array de notas
    document.getElementById('notasArray').textContent = 'Notas: ' + notas.join(', ');

    // promedio con reduce
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = suma / notas.length;

    // mostrar promeido
    document.getElementById('promedio').textContent = 'El promedio es: ' + promedio.toFixed(2);  
}

// Ejercicio 3
// Imprimir con Retraso
// Usar una función flecha y setTimeout para imprimir cada elemento de un array
// con un retraso de 1 segundo por elemento.

function imprimirConRetraso() {
    const elementos = ['A', 'B', 'C', 'D', 'E'];
    document.getElementById('array3').textContent = ''; 
  
    elementos.forEach((elemento, index) => {
      setTimeout(() => {
        const salida = document.getElementById('array3');
        salida.textContent += elemento + ' ';
      }, 1000 * index);
    });
  }


// Ejercicio 4
// Operación con Callback
// Crear una función que reciba un callback y dos números, aplique el callback y
// devuelva el resultado. Implementar al menos dos callbacks diferentes.

// Ejercicio 5
// Botón que muestra un mensaje
// Crear una página con un botón. Al hacer click, debe aparecer un mensaje debajo
// (como un saludo o bienvenida). El mensaje debe estar oculto inicialmente.

// Ejercicio 6
// Cambiar color de fondo
// Hacer una página con un botón que, al hacer click, cambie el color de fondo del
// body. Debe rotar entre varios colores (mínimo 3).

// Ejercicio 7
// Contador con Botones
// Crear un botón para incrementar y otro para decrementar un contador mostrado en
// un elemento div. Actualizar el texto del div al hacer click.

// Ejercicio 8
// Cambiar Texto de Párrafos
// Seleccionar todos los elementos p de la página y cambiar su texto al hacer
// click en un botón.

// Ejercicio 9
// Mostrar/Ocultar texto
// Incluir un párrafo visible y un botón que permita ocultarlo o mostrarlo según su
// estado actual. El texto del botón debe cambiar entre “Mostrar” y “Ocultar”.

// Ejercicio 10
// Actualizar título en tiempo real
// Crear un campo de texto y un título (<h2>). A medida que el usuario escribe, el
// texto del título debe actualizarse en tiempo real.

// Ejercicio 11
// Aplicar estilos a varios elementos
// Agregar varios párrafos con una clase compartida. Al presionar un botón, debe
// cambiar el fondo de esos elementos (resaltarlos visualmente).

// Ejercicio 12
// Validación de formulario simple
// Crear un pequeño formulario con nombre y correo. Al hacer click en enviar, debe
// validar que ambos campos estén completos. Muestra un mensaje de error o éxito
// según el caso.

// Ejercicio 13
// Generador de lista de tareas
// Crear una lista de tareas con un input y botón. Cada tarea debe incluir un botón
// para marcarla como completada (tachada).

// Ejercicio 14
// Mostrar longitud de texto ingresado
// Incluir un input de texto y, mientras el usuario escribe, muestra la cantidad de
// caracteres ingresados.

// Ejercicio 15
// Cambiar imagen con botón
// Mostrar una imagen en pantalla. Al hacer click en un botón, debe cambiar por otra
// imagen (usa 2 o más imágenes disponibles).

// Ejercicio 16
// Contador automático
// Hacer que un número aumente automáticamente cada segundo al iniciar. Incluir un
// botón para iniciar/detener.

// Ejercicio 17
// Lista con selección destacada
// Crear una lista de ítems. Al hacer click en un ítem, este se destaca (por ejemplo,
// con fondo amarillo) y se deseleccionan los demás.

// Ejercicio 18
// Conversor de temperaturas
// Crear un input para ingresar grados Celsius y muestra automáticamente la
// conversión a Fahrenheit.

// Ejercicio 19
// Simulación de semáforo
// Diseñar un semáforo con tres círculos (rojo, amarillo, verde) y un botón que
// cambia el estado entre luces al hacer click.

// Ejercicio 20
// Mover un elemento con botones
// Colocar un cuadrado en pantalla. Con botones (arriba, abajo, izquierda, derecha),
// el usuario puede moverlo dentro del contenedor.

// Ejercicio 21
// Cambiar tema claro/oscuro
// Agregar un botón que alterne entre tema claro y tema oscuro para toda la página.

// Ejercicio 22
// Lista de productos con filtro
// Crear una lista de productos. Agrega un input para filtrar los elementos en tiempo
// real por nombre.

// Ejercicio 23
// Temporizador (countdown)
// Permitir ingresar un número de segundos, y al presionar iniciar, comienza una
// cuenta regresiva hasta cero.

// Ejercicio 24
// Mostrar fecha y hora actual
// Al cargar la página, mostrar la fecha y hora actual en un párrafo. Incluir un
// botón para actualizar manualmente.

// Ejercicio 25
// Notificación al copiar texto
// Cuando el usuario copia texto desde un input, mostrar un mensaje como “Texto
// copiado”.

// Ejercicio 26
// Formulario que muestra resumen
// Al llenar un pequeño formulario (nombre y edad) y enviarlo, mostrar un resumen
// debajo con los datos ingresados.

// Ejercicio 27
// Contador de clicks por segundo
// Hacer que cada click en una caja sume puntos. El usuario tiene solo 5 segundos
// para hacer tantos clicks como pueda. Muestra el resultado al final.

// Ejercicio 28
// Mostrar precio total (cantidad x precio unitario)
// Agregar dos campos: uno para cantidad y otro para precio unitario. Mostrar
// automáticamente el total (cantidad × precio).

// Ejercicio 29
// Selector de color personalizado
// Agregar un <input type="color"> que permiteaal usuario cambiar el color de fondo
// de un bloque de contenido.

// Ejercicio 31
// Lista desplegable con contenido dinámico
// Según lo que el usuario seleccione en un select, mostrar contenido diferente
// debajo (ej. descripción de un producto, ciudad, etc.).

// Ejercicio 32
// Agregar Elementos a una Lista
// Crear una lista desordenada vacía y un botón. Al hacer click en el botón,
// agregar un nuevo elemento a la lista con un número que se incremente
// automáticamente.

// Ejercicio 33
// Eliminar Elementos de una Lista
// Modificar el ejercicio anterior para que cada elemento generado tenga un botón
// de "Eliminar" que borre solo ese elemento de la lista.

// Ejercicio 34
// Tabla dinámica con filas agregables
// Crear una tabla donde el usuario pueda agregar filas nuevas con información
// (nombre, edad, país). Cada fila debe tener un botón para eliminarla.

// Ejercicio 35
// Juego simple: adivinar número
// El sistema genera un número aleatorio del 1 al 100. El usuario intenta adivinarlo
// escribiendo un número. Muestra pistas: “muy alto”, “muy bajo” o “correcto”. Limita
// a 10 intentos.