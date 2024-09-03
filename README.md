# Quiz App 
- Quiero realizar una navegación cuando se le marque las diferentes respuestas a este para así hacer el juego mas didactico.

- plantear un estado centralizado con Redux el cual pueda acceder a realizar las diferentes tareas sea como eleigir
la opcion correcta o sumar puntos del score de la respuesta correcta.

- Utilizar Reac-Router-Dom para moverse entre navegadores y así poder realizar las siguientes preguntas hasta llegar a la pagina donde este el resultado

## Revisiones o cosas a consultar 

- Como voy a realizar el puntaje?
- Como voy a realizar la comparación de la respuesta
correcta?
- Como voy a realizar la navegación por paginas?

### respuestas

el puntaje lo voy a realizar con un estado el cual me permita sumarse solo si la opción es correcta

Realizare una comparación entre la opción y la propia respuesta que genere, dando sea el caso de uno de las opciones a poner, y si no es correcta, diga invalido o algo así

Tendre que usar un identificador para poder diferenciar el contenido de la pagina y el objeto el cual vaya a recorrer segun la pregunta 

### puntos

Ya avance en la pagina, ya recorri los datos establecidos, me falta seleccionarlos por id y darles un avances con respecto a este, para así poder ejecutarse y dar su funcionalidad.

Ya cree las paginas establecidas, ahora me pregunto como realizar el tema del id, el cual no se si recorrer un
objeto sea lo correcto

Aprender mas adelante el nuevo React-router-dom mas adelante con sus nuevas funcionalidades y usos

### cosas que podria hacer o que se pueden realizar 

- realizar las opciones como botones para que al dar click pueda darse como respuesta correcta, y así poder sumar el puntaje.

- en Cambio si no es correcta no se le suma el puntaje

esto se podria realizar con un manejador de eventos el cual accione eso 

## Resolver el problema

- Una solucion al tema del id es recorrer el objeto del initial state como por partes [0,1,2,3,4] el cual me permitira irle sumando el id progresivamente, a su vez que cada que se sume el id se le sume +1 al arreglo para así poder cambiar de pregunta y opciones de este mismo, mediante un evento que me permita cambiarlo  