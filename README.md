# Documento de Requisitos del Sistema (SRS)

## 1. Introducción

### 1.1 Propósito
El propósito de este documento es definir todos los requisitos del sistema para el desarrollo de un software de traducción de Braille. Este documento servirá como referencia para los desarrolladores, testers y stakeholders durante el ciclo de vida del proyecto.

### 1.2 Alcance
El sistema permitirá transcribir textos en español a Braille y viceversa. Está diseñado para mejorar la accesibilidad de personas ciegas o con discapacidad visual, permitiendo la producción de señalética y rotulación en Braille.

### 1.3 Definiciones, Acrónimos y Abreviaturas
- **Braille**: Sistema de escritura táctil utilizado por personas ciegas o con discapacidad visual.
- **Usuario**: Persona que utiliza el software para transcribir textos.
- **SRS**: Documento de Requisitos del Sistema (System Requirements Specification).

### 1.4 Referencias
- Manual de Usuario del Sistema de Traducción de Braille.
- Documento de Casos de Uso para el Sistema de Traducción de Braille.

## 2. Descripción General

### 2.1 Perspectiva del Producto
El sistema de traducción de Braille es una aplicación autónoma que proporciona funcionalidades de transcripción de texto entre español y Braille. El sistema interactúa con el usuario a través de una interfaz gráfica accesible y amigable.

### 2.2 Funcionalidades del Producto
- Transcripción de textos de español a Braille.
- Transcripción de textos de Braille a español.
- Impresión de textos transcritos.
- Configuración de opciones de tamaño de texto.

### 2.3 Características del Usuario
El sistema está diseñado para ser utilizado por:
- Personas sin discapacidad que deseen producir señalética o rotulación en Braille.

### 2.4 Restricciones del Sistema
- El sistema debe ser accesible para personas con discapacidad visual.
- Debe cumplir con las normativas de accesibilidad vigentes.

## 3. Requisitos Específicos

### 3.1 Requisitos Funcionales

#### 3.1.1 Transcribir Texto en Español a Braille
- **Descripción**: El sistema debe permitir la transcripción de texto en español a Braille.
- **Entrada**: Texto en español ingresado por el usuario.
- **Proceso**: Conversión del texto en español a su equivalente en Braille utilizando las reglas de transcripción del sistema Braille.
- **Salida**: Texto en Braille.

#### 3.1.2 Transcribir Texto en Braille a Español
- **Descripción**: El sistema debe permitir la transcripción de texto en Braille a español.
- **Entrada**: Texto en Braille ingresado por el usuario.
- **Proceso**: Conversión del texto en Braille a su equivalente en español.
- **Salida**: Texto en español.

#### 3.1.3 Seleccionar tamaño de letra de texto transcrito
- **Descripción**: El sistema debe permitir a los usuarios seleccionar el tamaño de letra del texto transcrito.
- **Entrada**: Selección del usuario.
- **Proceso**: Selección de letra “pequeña”, “mediana”, “grande” del texto transcrito.
- **Salida**: Previsualización del texto.

#### 3.1.4 Imprimir Texto Transcrito
- **Descripción**: El sistema debe permitir la impresión de los textos transcritos.
- **Entrada**: Comando de impresión del usuario.
- **Proceso**: Enviar el texto transcrito a la impresora seleccionada.
- **Salida**: Documento impreso.

### 3.2 Requisitos No Funcionales

#### 3.2.1 Usabilidad
- **Descripción**: El sistema debe ser intuitivo y fácil de usar para personas con distintos niveles de habilidad técnica.
- **Criterio de Aceptación**: Debe incluir una guía de usuario.

#### 3.2.2 Rendimiento
- **Descripción**: El sistema debe ser rápido y eficiente.
- **Criterio de Aceptación**: Tiempo de respuesta menor a 2 segundos para transcripciones de textos.

#### 3.2.3 Compatibilidad
- **Descripción**: El sistema debe funcionar en múltiples plataformas.
- **Criterio de Aceptación**: Compatibilidad con Windows, macOS y Linux.

## 4. Casos de Uso
Referirse al Documento de Casos de Uso para una descripción detallada de los casos de uso del sistema.

## 5. Restricciones
- El sistema debe ser accesible para personas con discapacidad visual.
- Debe cumplir con las normativas de accesibilidad vigentes.
- El desarrollo debe completarse dentro de los plazos y presupuesto definidos.
