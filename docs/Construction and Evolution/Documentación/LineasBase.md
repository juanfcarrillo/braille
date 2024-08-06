# Líneas base del Proyecto: Traductor de Braille a Español

## Integrantes:
- Juan Carrillo
- Max Carrión
- Jhon Meza
- Christian Nazate
- Victor Rodriguez

## Índice
1. [Línea Base Funcional](#línea-base-funcional)
2. [Línea Base de Diseño](#línea-base-de-diseño)
3. [Línea Base del Producto](#línea-base-del-producto)
4. [Detalles de los Requisitos del Proyecto](#detalles-de-los-requisitos-del-proyecto)
5. [Especificaciones Técnicas](#especificaciones-técnicas)
6. [Archivos Entregables](#archivos-entregables)

## Línea Base Funcional

### Fases
1. *Project Start-up*
2. *Requirements Analysis*

### Salidas
1. Project Plan, SCM Plan, Standards, etc.
2. RDD (Requisitos del Documento de Definición)

### Personas Involucradas
1. Project Leader, SCM Manager, QA Team Rep., etc.
2. System Analysts and users

---

## Línea Base de Diseño

### Fases
1. *System Analysis*
2. *System Design*

### Salidas
1. SAD (System Analysis Document)
2. HLD (High-Level Design), STS (System Test Specifications), STP (System Test Plan), LLD (Low-Level Design), UTS (Unit Test Specifications), UTP (Unit Test Plan)

### Personas Involucradas
1. System Analysts
2. System Designers

---

## Línea Base del Producto

### Fases
1. *Coding & Unit Testing*
2. *System Testing*
3. *Acceptance Testing*

### Salidas
1. Programs, Documentation, Test results, etc.
2. Test Results, Defect logs, etc.
3. Test Reports

### Personas Involucradas
1. Programmers, Testers, QA Team, etc.
2. Testers, QA Team, Development team, etc.
3. Client, Testers, QA team, Development team

---

## Detalles de los Requisitos del Proyecto

1. *Transcripción de textos de español a braille*:
   - Incluyendo números, abecedario, vocales acentuadas y signos básicos.

2. *Transcripción de textos de Braille a español*.

3. *Generar señalética braille a partir de textos en español*.

4. *Generar impresión en espejo de textos braille para escritura manual*:
   - La escritura braille es de derecha a izquierda, por lo que se requiere imprimir en espejo la hoja guía. Para la escritura manual se utiliza un punzón con el que se perfora el papel y una regleta para sostener el papel.

### Funcionalidades Adicionales:

1. Entrada de texto por Voz.
2. Comportamiento responsive.
3. Traducción de símbolos especiales.
4. Navegación por teclado.
5. Modo oscuro.
6. Contraste de colores.
7. Deshabilitación de campos de entrada.
8. Uso de teclado virtual braille.
9. Comandos de voz para ingreso.
10. Texto a audio para salida.
11. Opción de zoom in-zoom out.
12. PDF para punzar de 40 caracteres braille por línea y 25 líneas.

---

## Especificaciones Técnicas

1. *Entrada de Texto*:
   - Implementar entrada de texto por voz utilizando APIs de reconocimiento de voz.
   - Soporte para texto escrito a mano y teclado virtual braille.

2. *Traducción de Texto*:
   - Algoritmos de traducción para convertir texto en español a braille y viceversa.
   - Soporte para traducción de símbolos especiales y signos de puntuación.

3. *Impresión en Espejo*:
   - Funcionalidad para generar documentos braille en formato espejo para escritura manual.
   - Crear PDFs con configuraciones específicas para punzado de papel.

4. *Interfaz de Usuario*:
   - Diseño responsive para diferentes dispositivos.
   - Modo oscuro y opciones de contraste alto.
   - Navegación por teclado para accesibilidad.
   - Opciones de zoom in-zoom out para mejorar la legibilidad.

5. *Comandos de Voz y Salida de Audio*:
   - Implementar comandos de voz para facilitar la navegación y entrada de datos.
   - Conversión de texto a audio para salida de datos.

---

## Archivos Entregables

- *Documentación*:
  - Documentos de análisis de sistemas (SAD).
  - Documentos de diseño de sistemas (HLD, LLD).
  - Planes de prueba (STS, STP, UTS, UTP).
  - Informes de pruebas y resultados.

- *Código Fuente*:
  - Programas de traducción y transcripción.
  - Algoritmos de impresión en espejo.
  - Interfaces de usuario y funcionalidades adicionales.

- *Reportes y Solicitudes*:
  - Reporte de problemas encontrados (PR Formato).
  - Solicitudes de cambio (CR Formato).

---

> **Advertencia**: Este documento contiene la estructura y planificación de las líneas base funcional, de diseño y del producto para el proyecto de traductor de Braille a Español, detallando las fases, salidas y personas involucradas, así como los requisitos específicos y funcionalidades adicionales del sistema.