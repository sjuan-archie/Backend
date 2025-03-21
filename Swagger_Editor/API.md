openapi: 3.0.0
info:
  title: SJ CUSTOMS API
  version: 1.0.0
  description: API para la gestión de tuneo y personalización de coches
servers:
  - url: http://localhost:5000
    description: Servidor de desarrollo
paths:
  /api/auth/register:
    post:
      summary: Registra un nuevo usuario
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                username:
                  type: string
                email:
                  type: string
                password:
                  type: string
      responses:
        '201':
          description: Usuario registrado exitosamente
        '500':
          description: Error al registrar usuario
  /api/auth/login:
    post:
      summary: Inicia sesión de un usuario
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                password:
                  type: string
      responses:
        '200':
          description: Inicio de sesión exitoso
        '401':
          description: Credenciales incorrectas
        '500':
          description: Error al iniciar sesión
  /api/auth/forgot-password:
    post:
      summary: Envía un correo de recuperación de contraseña
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  example: usuario@email.com
      responses:
        '200':
          description: Correo de recuperación enviado
        '404':
          description: Usuario no encontrado
        '500':
          description: Error al enviar el correo
  /api/auth/reset-password:
    post:
      summary: Restablece la contraseña del usuario
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  example: usuario@email.com
                newPassword:
                  type: string
                  example: NuevaContraseña123
      responses:
        '200':
          description: Contraseña restablecida con éxito
        '404':
          description: Usuario no encontrado
        '500':
          description: Error al restablecer la contraseña
  /api/car:
    get:
      summary: Obtiene todos los coches
      tags:
        - Car
      responses:
        '200':
          description: Lista de coches
    post:
      summary: Agrega un nuevo coche
      tags:
        - Car
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                brand:
                  type: string
                price:
                  type: number
                engineOptions:
                  type: array
                  items:
                    type: string
                imageUrl:
                  type: string
      responses:
        '201':
          description: Coche agregado
  /api/car/{id}:
    get:
      summary: Obtiene un coche por ID
      tags:
        - Car
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Coche encontrado
        '404':
          description: Coche no encontrado
    put:
      summary: Actualiza un coche por ID
      tags:
        - Car
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                brand:
                  type: string
                price:
                  type: number
                engineOptions:
                  type: array
                  items:
                    type: string
                imageUrl:
                  type: string
      responses:
        '200':
          description: Coche actualizado
    delete:
      summary: Elimina un coche por ID
      tags:
        - Car
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Coche eliminado
  /api/compare:
    post:
      summary: Compara coches
      tags:
        - Compare
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                cars:
                  type: array
                  items:
                    type: string
      responses:
        '200':
          description: Comparación realizada
  /api/config:
    get:
      summary: Obtiene opciones de configuración de coches
      tags:
        - Config
      responses:
        '200':
          description: Opciones de configuración
    post:
      summary: Guarda la configuración de un coche
      tags:
        - Config
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                car:
                  type: string
                color:
                  type: string
                interior:
                  type: string
                extras:
                  type: array
                  items:
                    type: string
                engine:
                  type: string
      responses:
        '200':
          description: Configuración guardada
  /api/contact:
    post:
      summary: Envía un mensaje de contacto
      tags:
        - Contact
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                email:
                  type: string
                message:
                  type: string
      responses:
        '200':
          description: Mensaje enviado con éxito
        '400':
          description: Datos faltantes
        '500':
          description: Error en el servidor
  /api/likes/{carId}:
    post:
      summary: Agrega un coche a favoritos
      tags:
        - Likes
      parameters:
        - in: path
          name: carId
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Coche agregado a favoritos
    delete:
      summary: Elimina un coche de favoritos
      tags:
        - Likes
      parameters:
        - in: path
          name: carId
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Coche eliminado de favoritos
  /api/likes:
    get:
      summary: Obtiene los coches favoritos del usuario
      tags:
        - Likes
      responses:
        '200':
          description: Lista de coches favoritos
  /api/orders:
    get:
      summary: Obtiene todos los pedidos
      tags:
        - Order
      responses:
        '200':
          description: Lista de pedidos
    post:
      summary: Crea un nuevo pedido
      tags:
        - Order
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                user:
                  type: string
                car:
                  type: string
                config:
                  type: string
                totalPrice:
                  type: number
                paymentType:
                  type: string
      responses:
        '201':
          description: Pedido creado
  /api/payments/options:
    get:
      summary: Obtiene opciones de pago
      tags:
        - Payment
      responses:
        '200':
          description: Opciones de pago
  /api/payments/pay:
    post:
      summary: Procesa un pago
      tags:
        - Payment
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                order:
                  type: string
                amount:
                  type: number
      responses:
        '200':
          description: Pago procesado con éxito
  /api/users/profile:
    get:
      summary: Obtiene el perfil del usuario
      tags:
        - User
      responses:
        '200':
          description: Perfil del usuario
    put:
      summary: Actualiza el perfil del usuario
      tags:
        - User
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                username:
                  type: string
                email:
                  type: string
      responses:
        '200':
          description: Perfil actualizado
components: {}
tags: []
