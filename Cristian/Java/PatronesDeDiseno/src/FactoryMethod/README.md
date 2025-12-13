Factory Method


¿Cuál es su intención?

La intención de Factory Method es proporcionar una interfaz para crear objetos en una superclase, pero permitiendo que las subclases alteren el tipo de objetos que se crearán. Es decir, delegar la lógica de creación a las clases hijas.


¿Qué problema específico resuelve?

Resuelve el problema del acoplamiento rígido.
El acoplamiento rígido sucede cuando dos o más partes del código o de una clase están tan enlazadas que no pueden ser modificadas o ampliadas sin afectar a las demás. Esto ocasiona un gran problema y hace que sea muy difícil escalar el código para agregar nuevos productos similares.
Ya que al no haber posibilidad de reutilizar el código, se debe volver a escribir.


¿Cómo funciona la idea general del patrón?

En términos generales, Factory Method funciona al dejar que los hijos manejen parte de la lógica de creación de un objeto.
La clase padre solo necesita saber que se va a crear un objeto, no interesa si es de un hijo o de otro, eso lo define la clase hija.
Los hijos deben tener una interface en común y de tal forma permite que se cree un objeto de la clase padre que interactúe con acciones propias de algún hijo.



Imagen: Al ingresar a la carpeta FactoryMethod puede ver una imágen de un diagrama de clases que explica Factory Method

.
.
.

