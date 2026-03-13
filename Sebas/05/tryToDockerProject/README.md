<!-- Buenísimas tardes, a continuación está lo que debe hacer para correr el back, front y db

Por cierto, voy a dar por hecho que ya tiene docker instalado y configurado con permisos para ejecutar usando el comando "docker"

También se da por nhecho que ya bajó el back y el front 


Nota: Se pueden cambiar los nombres de todo aquello que inicie por "sebas" pero si se hace ese cambio tiene que tener también presente cambiarlo en las partes donde se use el nombre de ejemplo-->


<!-- Nota: Los contenedores a crear se prenden manualmente, así que cada vez que los quieras correr debes escribir

docker start nombre_contenedor


Si quiere que se prendan solos al iniciar el sistema entonces al crear los contenedores debe poner

-d

en el código

ejemplo: docker run -d --name sebas-back ... -->

# PASO 1: CREACIÓN DE NETWORKS

docker network create sebas-back
docker network create sebas-front

*Revisar si se crearon*
docker network ls





# PASO 2: CREACIÓN DE LA DB

*Creamos un volume (para persistencia de los datos)*
docker volume create sebasDB

*Revisar si se creó*
docker volume ls


*Ahora creamos el contendor de la db (puede cambiar el puerto de host si así lo desea en caso de que el 3305 genere conflictos, el del contenedor sí se deja en 3306) *
docker run \
--name sebasDB-Container \
--network sebas-back \
-e MYSQL_ROOT_PASSWORD=123 \
-p 3305:3306 \
-v sebasDB:/var/lib/mysql \
mysql:8

*Verificamos que se creó*
docker ps

*Si no aparece activo entonces*
docker ps -a

*Si no se creó hay un problema, resuelva. Si aparece al hacer ps -a pero no al hacer ps es que está apagado entonces lo encendemos con el siguiente comando*
docker start sebasDB-Container

*Probamos de nuevo y ya debe estar prendido*
docker ps



*IMPORTANTE*

*Para el correcto funcionamiento se debe crear la db con sus tablas*

*Para ingresar al contenedor de la db se pone el siguiente comando (Cuando pida la contraseña está será 123 a menos que la haya cambiado al crear el contenedor)*
docker exec -it sebasDB-Container mysql -u root -p


*Estando dentro del contenedor creamos la db*
create database sebasDB1;

*Usamos la db*
use sebasDB1;

*Creamos la tabla*
create table car (id int primary key auto_increment, name varchar(20), year int);

*(Opcional) Agregagmos un dato a la tabla*
insert into car (name, year) values ("Toyota Corolla", 2022);


*Para salir del contenedor escribimos*
exit





# PASO 3: CREAR LA IMAGEN DEL BACKEND

*Nos ubicamos en la carpeta raíz del backend del proyecto y escribimos lo siguiente en la terminal*
docker build -t sebas-backend .

*Verificar la imagen creada*
docker images




# PASO 4: CREAR EL CONTENEDOR DEL BACKEND

*Una vez creada la imagen, podemos crear el contenedor usando la imagen creada (puede cambiar el puerto de host si así lo desea en caso de que el 8080 genere conflictos, el del contenedor sí se deja en 8080)*
docker run --name sebas-backend --network sebas-back -p 8080:8080 sebas-backend


*También lo añadimos a la network de front*
docker network connect sebas-front sebas-backend


*Ahora prendemos el contenedor*
docker start sebas-backend

*Verificamos que quede prendido (Si no sale el contenedor al ejecutar el comando entonces resuelva)*
docker ps





# PASO 5: CREAR LA IMAGEN DEL FRONTEND

*Nos ubicamos en la carpeta raíz del frontend del proyecto y escribimos lo siguiente en la terminal*
docker build -t sebas-frontend .

*Verificar la imagen creada*
docker images



# PASO 6: CREAR EL CONTENEDOR DEL FRONTEND

*Una vez creada la imagen, podemos crear el contenedor usando la imagen creada (puede cambiar el puerto de host si así lo desea en caso de que el 4200 genere conflictos, el del contenedor sí se deja en 80)*
docker run --name sebas-frontend --network sebas-front -p 4200:80 sebas-frontend


*Ahora prendemos el contenedor*
docker start sebas-frontend

*Verificamos que quede prendido (Si no sale el contenedor al ejecutar el comando entonces resuelva)*
docker ps




# PASO 7: PROBAR RESULTADO

*En este momento todo debe estar funcionando correctamente*

*Para probar, abrimos el navegador e ingresamos la siguiente url*
http://localhost:4200/

*Se nos debería mostrar el carro que insertamos al crear la db o si se saltó ese paso entonces puede crear uno directamente desde el front*

*Ingresa un nombre con menos de 20 caracteres y un año válido*
*Esto debería mostrar inmediatamente el nuevo carro en panrtalla*

*Si llegaste hasta acá suscribete*

*Si no le sirve, pregúntele a Sebas*




<!-- Nota final:  Algunas de las imágenes usadas no son las más ligeras, ya que en algunos casos se optó por una con mayor compatibilidad, si desea puede investigar más acerca de las imágenes y elegir la de su preferencia siempre y cuando sea compatible con el proyecto



FINNN -->
