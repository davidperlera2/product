# 1. Crear el directorio del proyecto e inicializar npm
mkdir sequelize-crud && cd sequelize-crud
npm init -y

# 2. Instalar dependencias necesarias
npm install express sequelize mysql2 express-validator

# 3. Instalar Sequelize CLI para configuraciones y migraciones
npm install --save-dev sequelize-cli

# 4. Inicializar la estructura base de Sequelize
npx sequelize-cli init

# 5. Configurar la base de datos
# Modificar el archivo `config/config.json` para incluir las credenciales de tu base de datos:
# {
#   "development": {
#     "username": "root",
#     "password": "tu_contraseña",
#     "database": "sequelize_crud_db",
#     "host": "127.0.0.1",
#     "dialect": "mysql"
#   }
# }

# 6. Crear la base de datos
npx sequelize-cli db:create

# 7. Generar el modelo y migración para la tabla `Products`
npx sequelize-cli model:generate --name Product --attributes nombre:string,descripcion:text,precio:decimal,stock:integer

# 8. Ejecutar la migración para crear la tabla `Products`
npx sequelize-cli db:migrate

# 9. Iniciar el servidor (después de escribir tu código en `index.js`)
node index.js
