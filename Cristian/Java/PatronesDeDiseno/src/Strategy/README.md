Patrón Strategy

¿Cuál es su intención?

Definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacerlos intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo usan.


¿Qué problema específico resuelve?

Evita incluir mucha lógica condicional en una clase. Esto genera problema al ir escalando y hace que el código cada vez sea más complejo y un pequeño cambio en el código puede generar muchos problemas.


¿Cómo funciona la idea general del patrón?

En general, la función de Strategy es separar el código de manera que si hay distintas formas de realizar una acción, cada una de estas distintas formas vaya en una clase separada y que el cliente elija en ejecución cual de estaas estrategias usar
De esta forma se reduce en gran medida el uso de condicionales innecesarios y hace el código mucho más escalable, de forma que al cambiar, añadir o quitar estrategias no se vean afectada las demás.

Cabe aclarar que la clase de contexto no sabe que estrategia está usando, no le interesa. Solo ejecuta y cada estrategia hace lo suyo.


