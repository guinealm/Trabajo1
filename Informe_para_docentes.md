Perfecto.
Te preparo un **modelo de redacción técnica formal**, listo para incluir (adaptándolo mínimamente) en el informe del Trabajo 1, alineado con:

* Novedades CSS3 del manual 
* Requisito de uso de efectos de sombreado y bordes curvos 

Puedes copiarlo prácticamente tal cual.

---

# 📄 MODELO DE REDACCIÓN – INFORME TÉCNICO

## Aplicación de propiedades CSS3 en el portal web

---

## 1. Introducción

Con el objetivo de mejorar la presentación visual y la experiencia de usuario del portal web de la Asociación de Comerciantes, se han incorporado diversas propiedades avanzadas de CSS3 incluidas en el temario del curso (Parte 2: Novedades CSS3) .

Estas mejoras se han aplicado de forma progresiva y controlada, manteniendo la estructura semántica HTML5 y sin alterar el modelo de maquetación existente.

---

## 2. Bordes curvos y sombras en bloques (border-radius y box-shadow)

Se han aplicado bordes redondeados y sombras en bloques a los siguientes elementos:

* Noticias (`.noticia`)
* Comercios (`.card`)
* Eventos (`.evento`)
* Tarjetas de servicios y actividades (`.qh-card`)

### Objetivo técnico

* Mejorar jerarquía visual
* Separar visualmente cada bloque
* Cumplir con el requisito del ejercicio relativo a efectos de sombreado 

### Justificación

El uso de `border-radius` suaviza la interfaz y elimina rigidez visual.
El uso de `box-shadow` aporta profundidad y efecto “tarjeta”, común en diseños actuales.

---

## 3. Sombras y contorno en textos (text-shadow y text-stroke)

Se han aplicado sombras en los títulos principales (`.panel-head h2`) y en el título del hero.

### Objetivo técnico

* Mejorar legibilidad sobre fondos complejos
* Aumentar contraste sin modificar tamaño tipográfico

### Justificación

`text-shadow` mejora la percepción del texto cuando se sitúa sobre gradientes o imágenes.
En casos puntuales se ha aplicado `-webkit-text-stroke` para reforzar contraste.

---

## 4. Uso de colores RGBA y HSLA

Se han utilizado colores con transparencia en:

* Fondo del menú principal (`rgba`)
* Botones y estados hover (`hsla`)

### Objetivo técnico

* Permitir superposición controlada
* Gestionar variaciones tonales de forma coherente

### Justificación

El uso de RGBA permite introducir transparencia sin afectar al contenido interno.
HSLA facilita la modificación de luminosidad manteniendo el mismo tono cromático.

---

## 5. Gradientes (linear-gradient)

Se ha aplicado un gradiente lineal en la sección `#hero` y en el pie de página.

### Objetivo técnico

* Sustituir fondos planos
* Evitar imágenes pesadas innecesarias
* Aportar dinamismo visual

### Justificación

Los gradientes CSS3 reducen carga de recursos frente a imágenes rasterizadas y mejoran la integración cromática.

---

## 6. Contorno de bloques y accesibilidad (outline)

Se ha implementado `outline` en estados `:focus-visible` para:

* Enlaces
* Botones
* Inputs del formulario

### Objetivo técnico

* Mejorar accesibilidad
* Facilitar navegación mediante teclado

### Justificación

El contorno no altera el modelo de caja (box model) y permite una señal visual clara para usuarios con navegación asistida.

---

## 7. Transformaciones 2D (transform)

Se han incorporado transformaciones en estado `:hover` en tarjetas y botones.

### Objetivo técnico

* Aumentar interactividad
* Mejorar respuesta visual

### Justificación

El uso de `transform: translateY()` y `scale()` aporta dinamismo sin necesidad de JavaScript y mantiene eficiencia en rendimiento.

---

## 8. Conclusión

Las mejoras introducidas mediante CSS3 permiten:

* Cumplir los requisitos del ejercicio
* Mejorar experiencia visual
* Aumentar claridad estructural
* Introducir interactividad ligera sin scripts
* Mantener separación contenido/presentación

Las propiedades aplicadas pertenecen a las novedades recogidas en el temario oficial del curso  y han sido implementadas de forma modular y documentada.

---

# 🎯 Opcional (si quieres subir nivel)

Puedes añadir un pequeño apartado final:

## 9. Metodología de implementación

Las mejoras se implementaron mediante control de versiones, realizando commits independientes por cada grupo funcional, lo que permitió:

* Verificar estabilidad tras cada modificación
* Facilitar posible reversión de cambios
* Mantener trazabilidad técnica

---

Si quieres ahora puedo:

1️⃣ Adaptar esta redacción a un tono más académico (más formal aún)
2️⃣ Hacer una versión más breve
3️⃣ Añadir una pequeña sección sobre “criterios de diseño adoptados”
4️⃣ Integrarlo en una plantilla completa de informe (portada + índice + estructura)

Tú decides el nivel que quieres para la entrega.
