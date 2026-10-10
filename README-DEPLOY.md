# Despliegue del laboratorio 08 - API JWT

1. Ejecutar npm install y configurar .env local a partir de .env.example.
2. Crear repositorio GitHub para este proyecto (distinto del CRUD de la Tarea 1).
3. Crear Render Web Service: nombre express-auth-Saldana, npm install, npm start.
4. En Render Environment establecer MONGODB_URI y JWT_SECRET (no subir .env).
5. Opcional: ADMIN_SEED_EMAIL y ADMIN_SEED_PASSWORD para crear una cuenta admin inicial segura.
6. En GitHub Actions secret RENDER_DEPLOY_HOOK_URL establecer el Deploy Hook de ESTE servicio JWT.
7. Realizar push a main y comprobar Actions, Render y endpoints /health y /signIn.

Nota: desactivar Auto-Deploy de Render por push si se usa Deploy Hook para evitar despliegues duplicados.
Nota: si alguna credencial real se subió antes a GitHub, rotarla. Ignorar .env no borra su historial.
