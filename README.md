# BRAKES

**Mobile Brake Service**

BRAKES es una empresa de servicio móvil especializada en mantenimiento y reparación de sistemas de frenos.

Nuestra propuesta es simple:

> **Nosotros vamos hasta el cliente.**

En lugar de llevar el vehículo a un taller y esperar por el servicio, el cliente puede solicitar una cita con BRAKES para recibir servicio de frenos directamente en su ubicación.

---

## 🚗 ¿Qué es BRAKES?

BRAKES nace con el objetivo de modernizar la experiencia tradicional de reparación de frenos mediante un modelo **mobile-first**.

El cliente podrá:

* Seleccionar su vehículo.
* Indicar qué servicio necesita.
* Obtener un estimado.
* Elegir su ubicación.
* Seleccionar fecha y hora.
* Reservar el servicio.
* Realizar el pago.
* Recibir actualizaciones del técnico.
* Consultar el historial de servicios.

---

## 🔧 Servicios

La plataforma estará preparada inicialmente para ofrecer servicios como:

* Inspección del sistema de frenos.
* Cambio de pastillas de freno.
* Cambio de discos/rotores.
* Pastillas + rotores.
* Diagnóstico de problemas de frenado.
* Reemplazo de componentes relacionados con el sistema de frenos.
* Mantenimiento preventivo.

Los servicios disponibles podrán variar según el vehículo, ubicación y diagnóstico.

---

## 🎯 Misión

Hacer que el mantenimiento de frenos sea **más conveniente, transparente y accesible**, llevando un servicio profesional directamente hasta el cliente.

---

## 👁️ Visión

Construir una plataforma tecnológica de servicio automotriz móvil que permita solicitar mantenimiento del vehículo de una manera tan sencilla como pedir cualquier otro servicio desde el teléfono.

BRAKES comenzará especializándose en sistemas de frenos, con la posibilidad de ampliar sus servicios automotrices en el futuro.

---

## 💡 Propuesta de valor

### Conveniencia

El cliente no necesita perder tiempo llevando su vehículo a un taller.

### Transparencia

El cliente conoce los servicios solicitados, precios, piezas y detalles de la reparación.

### Servicio móvil

El técnico se desplaza hasta la ubicación del vehículo.

### Tecnología

Reservas, pagos, comunicación y seguimiento del servicio se administran digitalmente.

### Especialización

BRAKES comienza concentrándose en una categoría específica: **sistemas de frenos**.

---

## 👤 Experiencia del cliente

El flujo inicial será:

**Cliente → Vehículo → Servicio → Precio → Ubicación → Fecha/Hora → Reserva → Técnico → Servicio → Pago → Recibo**

### 1. Seleccionar vehículo

El cliente introduce información como:

* Año
* Marca
* Modelo
* Versión / trim cuando sea necesario

En versiones futuras podrá utilizarse VIN para identificar el vehículo con mayor precisión.

### 2. Seleccionar servicio

BRAKES mostrará los servicios compatibles con ese vehículo.

### 3. Obtener precio

El sistema calculará el estimado utilizando factores como:

* Vehículo
* Piezas
* Mano de obra
* Tipo de servicio
* Ubicación
* Impuestos y cargos aplicables

### 4. Introducir ubicación

El cliente seleccionará dónde desea recibir el servicio.

### 5. Reservar

El cliente seleccionará una fecha y horario disponible.

### 6. Asignación

BRAKES asignará un técnico disponible y preparado para realizar el trabajo.

### 7. Servicio

El técnico llegará a la ubicación, verificará el vehículo y realizará el servicio autorizado.

### 8. Finalización

Al terminar:

* Se registra el trabajo realizado.
* Se procesa o confirma el pago.
* Se genera un recibo.
* El servicio queda guardado en el historial del cliente.

---

## 🧑‍🔧 Plataforma del técnico

Los técnicos necesitarán herramientas para:

* Ver trabajos asignados.
* Consultar información del vehículo.
* Navegar hasta el cliente.
* Actualizar el estado del servicio.
* Registrar inspecciones.
* Añadir fotografías.
* Registrar piezas utilizadas.
* Solicitar autorización para trabajos adicionales.
* Completar el servicio.
* Registrar notas técnicas.

Estados posibles de una orden:

`REQUESTED`

`CONFIRMED`

`ASSIGNED`

`TECH_EN_ROUTE`

`ARRIVED`

`INSPECTION`

`IN_PROGRESS`

`AWAITING_APPROVAL`

`COMPLETED`

`CANCELLED`

---

## 🖥️ Panel administrativo

BRAKES necesitará un sistema interno para administrar:

* Clientes
* Vehículos
* Técnicos
* Reservas
* Órdenes de trabajo
* Servicios
* Catálogo de piezas
* Inventario
* Precios
* Pagos
* Reembolsos
* Áreas de servicio
* Disponibilidad
* Promociones
* Reportes
* Soporte al cliente

---

## 🏗️ Arquitectura inicial

El proyecto podrá dividirse en:

```text
BRAKES
│
├── customer
│   ├── website
│   └── mobile-app
│
├── technician
│   └── technician-app
│
├── admin
│   └── dashboard
│
├── backend
│   ├── api
│   ├── authentication
│   ├── bookings
│   ├── customers
│   ├── vehicles
│   ├── technicians
│   ├── services
│   ├── pricing
│   ├── payments
│   ├── inventory
│   └── notifications
│
└── database
```

---

## 🗃️ Entidades principales

La primera versión del sistema probablemente necesitará:

```text
User
Customer
Address
Vehicle
Technician
Service
ServiceArea
Booking
WorkOrder
Inspection
Part
Inventory
Price
Payment
Refund
Invoice
Notification
Promotion
Review
```

---

## 💳 Pagos

La arquitectura deberá permitir:

* Tarjetas.
* Autorización de pagos.
* Captura del pago.
* Reembolsos.
* Recibos.
* Impuestos.
* Descuentos.
* Propinas, si se decide habilitarlas.

Nunca se deberán almacenar directamente números completos de tarjetas dentro de la infraestructura de BRAKES.

---

## 📍 Ubicación

La ubicación será una parte fundamental del producto.

El sistema deberá poder determinar:

* Dirección del cliente.
* Área de cobertura.
* Distancia.
* Disponibilidad de técnicos.
* Tiempo estimado de llegada.
* Zonas donde el servicio puede realizarse.

---

## 🔐 Seguridad

Desde el inicio, BRAKES deberá diseñarse siguiendo principios como:

* Autenticación segura.
* Autorización basada en roles.
* Cifrado de información sensible.
* Validación de datos.
* Protección de endpoints.
* Registro de acciones importantes.
* Manejo seguro de pagos.
* Backups.
* Gestión segura de secretos y credenciales.

Roles iniciales:

```text
CUSTOMER
TECHNICIAN
DISPATCHER
ADMIN
OWNER
```

---

## 📱 MVP

La primera versión no necesita implementar toda la visión.

El **MVP de BRAKES** debe demostrar que un cliente puede reservar un servicio móvil de frenos de principio a fin.

### Cliente

```text
Crear cuenta
      ↓
Agregar vehículo
      ↓
Seleccionar servicio
      ↓
Ver precio
      ↓
Agregar dirección
      ↓
Seleccionar horario
      ↓
Reservar
      ↓
Pagar
      ↓
Recibir confirmación
```

### Operaciones

```text
Nueva reserva
      ↓
Asignar técnico
      ↓
Técnico en camino
      ↓
Inspeccionar vehículo
      ↓
Realizar servicio
      ↓
Completar orden
      ↓
Cerrar pago
```

---

## 🚀 Roadmap

### Fase 0 — Empresa

Definir:

* Modelo de negocio.
* Mercado inicial.
* Servicios.
* Precios.
* Costos.
* Márgenes.
* Operaciones.
* Requisitos legales.
* Seguros.

### Fase 1 — MVP

Construir:

* Landing page.
* Registro/login.
* Vehículos.
* Catálogo de servicios.
* Cotización.
* Reservas.
* Pagos.
* Panel administrativo básico.

### Fase 2 — Operaciones

Añadir:

* Aplicación para técnicos.
* Dispatch.
* Disponibilidad.
* Estados en tiempo real.
* Fotografías.
* Inspecciones.
* Órdenes de trabajo.
* Inventario.

### Fase 3 — Escala

Añadir:

* Automatización de precios.
* Optimización de rutas.
* Nuevas ciudades.
* Gestión avanzada de técnicos.
* Analítica.
* Programas de mantenimiento.
* Flotas comerciales.

---

## 📊 Métricas principales

BRAKES deberá medir desde el lanzamiento:

* Reservas.
* Reservas completadas.
* Tasa de conversión.
* Ticket promedio.
* Costo de piezas.
* Costo de mano de obra.
* Margen bruto por trabajo.
* Tiempo promedio por servicio.
* Cancelaciones.
* Clientes recurrentes.
* Costo de adquisición de clientes.
* Valor de vida del cliente.
* Calificación del servicio.

---

## 🧭 Principio del producto

Cada decisión de BRAKES debe intentar responder una pregunta:

**¿Cómo hacemos que reparar los frenos sea más fácil para el cliente sin sacrificar seguridad, calidad ni rentabilidad?**

---

## Estado del proyecto

**Versión:** `0.0.1`

**Estado:** `Planning / Pre-MVP`

**Nombre provisional:** `BRAKES`

**Modelo:** `Mobile Brake Service`

---

## Próximo paso

Definir el **MVP técnico de BRAKES** y seleccionar el stack tecnológico antes de comenzar a escribir código.
