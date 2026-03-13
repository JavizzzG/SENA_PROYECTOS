Te lo reorganicé para que quede **mucho más limpio, profesional y fácil de seguir en GitHub**.
Usé **Markdown bien estructurado**, bloques de código y advertencias claras.

---

# 🚀 Guía para ejecutar el proyecto (Backend + Frontend + Base de datos)

Buenas tardes.
A continuación encontrarás las instrucciones para ejecutar **el backend, el frontend y la base de datos utilizando Docker**.

## 📋 Requisitos previos

Antes de comenzar se asume que:

* Ya tienes **Docker instalado y funcionando**.
* Tienes permisos para ejecutar comandos usando `docker`.
* Ya descargaste el **backend** y el **frontend** del proyecto.

⚠️ **Nota:**
Los nombres que empiezan con `sebas` pueden cambiarse.
Si decides cambiarlos, recuerda modificar **todas las referencias donde aparezcan esos nombres**.

---

# ⚠️ Importante sobre los contenedores

Los contenedores se **inician manualmente**.

Para iniciarlos debes usar:

```bash
docker start nombre_contenedor
```

Si prefieres que el contenedor se ejecute **en segundo plano automáticamente**, debes usar la opción `-d` al crearlo.

Ejemplo:

```bash
docker run -d --name sebas-back ...
```

---

# 1️⃣ Crear las redes Docker

Primero creamos las redes que permitirán la comunicación entre contenedores.

```bash
docker network create sebas-back
docker network create sebas-front
```

Verificar que se crearon:

```bash
docker network ls
```

---

# 2️⃣ Crear la base de datos

## Crear volumen (persistencia de datos)

```bash
docker volume create sebasDB
```

Verificar volumen:

```bash
docker volume ls
```

---

## Crear contenedor de MySQL

Puedes cambiar el **puerto del host (3305)** si tienes conflictos.
El **puerto del contenedor siempre debe ser 3306**.

```bash
docker run \
--name sebasDB-Container \
--network sebas-back \
-e MYSQL_ROOT_PASSWORD=123 \
-p 3305:3306 \
-v sebasDB:/var/lib/mysql \
mysql:8
```

---

## Verificar contenedor

Contenedores activos:

```bash
docker ps
```

Si no aparece:

```bash
docker ps -a
```

Si aparece apagado:

```bash
docker start sebasDB-Container
```

Volver a verificar:

```bash
docker ps
```

---

## Crear base de datos y tabla

Entrar al contenedor:

```bash
docker exec -it sebasDB-Container mysql -u root -p
```

Contraseña:

```
123
```

---

### Crear base de datos

```sql
create database sebasDB1;
```

Usarla:

```sql
use sebasDB1;
```

Crear tabla:

```sql
create table car (
id int primary key auto_increment,
name varchar(20),
year int
);
```

Insertar dato de prueba (opcional):

```sql
insert into car (name, year)
values ("Toyota Corolla", 2022);
```

Salir:

```sql
exit
```

---

# 3️⃣ Crear imagen del backend

Ubícate en la **carpeta raíz del backend**.

```bash
docker build -t sebas-backend .
```

Verificar imagen:

```bash
docker images
```

---

# 4️⃣ Crear contenedor del backend

Puedes cambiar el **puerto 8080 del host** si tienes conflictos.

```bash
docker run \
--name sebas-backend \
--network sebas-back \
-p 8080:8080 \
sebas-backend
```

Conectar también a la red del frontend:

```bash
docker network connect sebas-front sebas-backend
```

Iniciar contenedor:

```bash
docker start sebas-backend
```

Verificar:

```bash
docker ps
```

---

# 5️⃣ Crear imagen del frontend

Ubícate en la **carpeta raíz del frontend**.

```bash
docker build -t sebas-frontend .
```

Verificar imagen:

```bash
docker images
```

---

# 6️⃣ Crear contenedor del frontend

Puedes cambiar el **puerto 4200 del host** si tienes conflictos.
El contenedor utiliza el **puerto 80**.

```bash
docker run \
--name sebas-frontend \
--network sebas-front \
-p 4200:80 \
sebas-frontend
```

Iniciar contenedor:

```bash
docker start sebas-frontend
```

Verificar:

```bash
docker ps
```

---

# 7️⃣ Probar el sistema

Si todo salió bien, abre tu navegador en:

```
http://localhost:4200/
```

Deberías ver el **carro que insertamos en la base de datos**.

Si no insertaste uno antes, puedes crearlo desde el frontend.

### Reglas

* Nombre: **menos de 20 caracteres**
* Año: **válido**

El nuevo carro debería aparecer inmediatamente en pantalla.

---

# 📌 Notas finales

Algunas imágenes Docker utilizadas **no son las más ligeras**, ya que se priorizó **compatibilidad y estabilidad**.

Si lo deseas, puedes investigar otras imágenes más ligeras, siempre que sean **compatibles con el proyecto**.

---

# 🎉 Fin

Si llegaste hasta aquí...

**Suscríbete.**

Si algo no funciona:

**pregúntale a Sebas.** 😄

---

Si quieres, también puedo **mejorarte aún más el README** para que quede **nivel proyecto open-source**, agregando:

* badges
* tabla de arquitectura
* diagrama de redes Docker
* sección de troubleshooting
* versión con **docker-compose (mucho más simple)**.
