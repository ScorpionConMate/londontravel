# Introducción

A fin de poder desplegar el proyecto de una forma fácil se crearon estos archivos. Para este fin utilizaremos los Docker y Docker Compose.

Con estos archivos desplegamos 4 contenedores, son los siguientes:

- mongo-londontravel <- levanta una instancia de mongo DB en su versión 5.0.6
- node-backend <- Desplega el Backend utilizando PM2
- fe-app <- Despliega el Frontened usando Nginx 
- ingress <- Un nginx que actuá como proxy reverso para centralizar el acceso a la aplicación.

# Requerimientos

- Acceso al repositorio para poder descargar los archivos
- Docker en su versión 20.10.12 o superior- Docker en su versión 20.10.12 o superior
- Docker Compose en su versión 1.28.6 o superior

# Instalación

Nos descargamos el repositorio con el comando: 

```
$ git clone https://github.com/ScorpionConMate/londontravel.git 
```

Ahora nos dirigimos al directorio con los archivos que necesitamos:

```
$ cd  londontravel/Dockerfiles
```

Antes de desplegar el entorno debemos crear nuestro archivo de configuración, para esto ejecutamos: 

```
$ cp .env.template .env
```

Este archivo cuenta con múltiples parámetro a configura, entre los cuales encontraremos las credenciales de acceso a la DB, URL del backend o Puertos donde escucharan nuestros servicios entre otras opciones. Al editarlo veremos algunos datos que sin completar que debemos rellenar o editar para que todo funcione.

Un dato relevante de esta configuración es que luego de configurar 'MONGO_INITDB_ROOT_USERNAME' y 'MONGO_INITDB_ROOT_PASSWORD' deberemos editar el parámetro 'SERVER_MONGO_URI' a fin de agregar las credenciales y que se pueda conectar.

Una vez que tengamos listo este archivo ya podremos desplegar el entorno usando el comando:

```
$ docker-compose up -d 
Creating network "dockerfiles_default" with the default driver
Pulling mongo (mongo:5)...

<output ommited>

Creating mongo-londontravel ... done
Creating fe-app             ... done
Creating node-backend       ... done
Creating ingress            ... done

```

Podemos validar que todo levanto como corresponde podemos ejecutar el comando:

```
$ docker-compose ps
       Name                     Command               State                                      Ports                                    
------------------------------------------------------------------------------------------------------------------------------------------
fe-app               /docker-entrypoint.sh ngin ...   Up      127.0.0.1:4000->80/tcp                                       
ingress              /docker-entrypoint.sh ngin ...   Up      0.0.0.0:4443->443/tcp,:::4443->443/tcp, 0.0.0.0:8000->80/tcp,:::8000->80/tcp
mongo-londontravel   docker-entrypoint.sh mongod      Up      127.0.0.1:27017->27017/tcp                                                  
node-backend         docker-entrypoint.sh pm2-r ...   Up      127.0.0.1:3000->3000/tcp  
```

Listo, para podemos acceder a las siguientes url para acceder a las diferentes:

- Base de datos: 127.0.0.1:27017
- Backend: http://127.0.0.1:8000/api
- Admin: http://127.0.0.1:8000/admin
- Frontend: http://127.0.0.1:8000/
