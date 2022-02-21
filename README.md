# Iniciar Backend 
- Para arrancar el servidor ir a la carpeta `server`
- Ejecutar los comandos
    ```
    - cp .env.template .env
    - cp defaultUsers.json.template defaultUsers.json
    - npm install
    # Para el hot reload, ejecutar
    - npm run dev
    # Para el modo productivo ejecutar
    - npm start
    ```
- Para levantar el panel de administracion hay que ingresar a `localhost:PORT/admin`, esto nos va a pedir un email y una contraseña
    - El mail y la contraseña por defecto estan en el archivo `defaultUsers.json`

