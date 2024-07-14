# Plan de Pruebas

## Introducción

Este plan de pruebas tiene como objetivo asegurar que el sistema desarrollado cumpla con los requisitos funcionales y no funcionales especificados. Se cubrirán las historias de usuario relacionadas con la transcripción de texto en español a Braille y viceversa, la selección del tamaño de letra, la impresión de textos transcritos, la usabilidad, el rendimiento y la compatibilidad.

## Alcance

Las pruebas se llevarán a cabo en las siguientes áreas:

- Transcripción de texto en español a Braille
- Transcripción de texto en Braille a español
- Selección del tamaño de letra del texto transcrito
- Impresión de textos transcritos
- Visualización espejo
- Usabilidad del sistema
- Rendimiento del sistema
- Compatibilidad en múltiples plataformas

## Historia de Usuario 1: Transcribir Texto en Español a Braille

**Objetivo:** Verificar que el sistema permite transcribir texto en español a Braille correctamente y cumple con los criterios de aceptación.

**Criterios de Aceptación:**

### Entrada de Texto

- **Prueba 1.1:** Ingresar texto en español en el campo de texto y verificar que el sistema acepta el texto sin errores.
- **Prueba 1.2:** Ingresar textos que incluyan números, abecedario, vocales acentuadas y signos básicos (interrogación).

### Conversión a Braille

- **Prueba 2.1:** Verificar que el texto ingresado se convierte a su equivalente en Braille.
- **Prueba 2.2:** Medir el tiempo de transcripción y asegurar que se complete en menos de 3 segundos.
- **Prueba 2.3:** Confirmar que el proceso de transcripción ocurre en paralelo al ingreso de texto del usuario.

### Salida de Texto en Braille

- **Prueba 3.1:** Verificar que el texto transcrito en Braille se muestra en un campo de texto separado.
- **Prueba 3.2:** Confirmar que el texto en Braille es claro y legible.

## Historia de Usuario 2: Transcribir Texto en Braille a Español

**Objetivo:** Verificar que el sistema permite transcribir texto en Braille a español correctamente y cumple con los criterios de aceptación.

**Criterios de Aceptación:**

### Entrada de Texto en Braille

- **Prueba 1.1:** Ingresar texto en Braille en el campo de texto y verificar que el sistema acepta el texto sin errores.

### Conversión a Español

- **Prueba 2.1:** Verificar que el texto en Braille se convierte a su equivalente en español.
- **Prueba 2.2:** Medir el tiempo de transcripción y asegurar que se complete en menos de 2 segundos.

### Salida de Texto en Español

- **Prueba 3.1:** Verificar que el texto transcrito en español se muestra en un campo de texto separado.
- **Prueba 3.2:** Confirmar que el texto en español es claro y legible.

## Historia de Usuario 3: Seleccionar Tamaño de Letra del Texto Transcrito para Imprimir

**Objetivo:** Verificar que el sistema permite seleccionar el tamaño de letra del texto transcrito y cumple con los criterios de aceptación.

**Criterios de Aceptación:**

### Selección de Tamaño de Letra

- **Prueba 1.1:** Probar que el sistema proporciona opciones para seleccionar el tamaño de letra (pequeña, mediana, grande).
- **Prueba 1.2:** Verificar que el usuario puede cambiar el tamaño de letra en cualquier momento.

### Previsualización del Texto

- **Prueba 2.1:** Verificar que el sistema muestra una previsualización del texto transcrito con el tamaño de letra seleccionado.
- **Prueba 2.2:** Confirmar que la previsualización se actualiza inmediatamente después de cambiar el tamaño de letra.

## Historia de Usuario 4: Imprimir Texto Transcrito

**Objetivo:** Verificar que el sistema permite imprimir los textos transcritos y cumple con los criterios de aceptación.

**Criterios de Aceptación:**

### Comando de Impresión

- **Prueba 1.1:** Verificar que el sistema tiene una opción de impresión accesible desde la interfaz de usuario.
- **Prueba 1.2:** Probar que el usuario puede seleccionar la impresora y las configuraciones de impresión.

### Envío a la Impresora

- **Prueba 2.1:** Confirmar que al dar el comando de impresión, el sistema envía el texto transcrito a la impresora seleccionada.
- **Prueba 2.2:** Verificar que el documento impreso coincide con el texto transcrito mostrado en pantalla.

### Generar Impresión en Espejo de Textos Braille para Escritura Manual

- **Prueba 3.1:** Verificar que el sistema proporciona una opción para generar una impresión en espejo del texto Braille.
- **Prueba 3.2:** Confirmar que el texto en Braille se imprime en modo espejo correctamente.

## Historia de Usuario 5: Usabilidad

**Objetivo:** Verificar que el sistema es intuitivo y fácil de usar, cumpliendo con los criterios de aceptación.

**Criterios de Aceptación:**

### Interfaz Intuitiva

- **Prueba 1.1:** Verificar que el sistema tiene una interfaz de usuario clara y bien organizada.
- **Prueba 1.2:** Confirmar que las funciones principales son accesibles con un mínimo de clics.

### Guía de Usuario

- **Prueba 2.1:** Verificar que el sistema incluye una guía de usuario detallada.
- **Prueba 2.2:** Confirmar que la guía de usuario está accesible desde la interfaz del sistema y cubre todas las funcionalidades principales.

## Historia de Usuario 6: Rendimiento

**Objetivo:** Verificar que el sistema es rápido y eficiente, cumpliendo con los criterios de aceptación.

**Criterios de Aceptación:**

### Tiempo de Respuesta

- **Prueba 1.1:** Medir el tiempo de respuesta del sistema para la transcripción de textos y confirmar que se completa en menos de 2 segundos.
- **Prueba 1.2:** Realizar pruebas de rendimiento bajo diferentes cargas de trabajo para asegurar que el tiempo de respuesta cumple con este criterio.

## Historia de Usuario 7: Compatibilidad

**Objetivo:** Verificar que el sistema funciona en múltiples plataformas, cumpliendo con los criterios de aceptación.

**Criterios de Aceptación:**

### Compatibilidad con Windows

- **Prueba 1.1:** Verificar que el sistema funciona correctamente en Windows.
- **Prueba 1.2:** Confirmar que todas las funcionalidades están disponibles y operan sin errores en este sistema operativo.

### Compatibilidad con macOS

- **Prueba 2.1:** Verificar que el sistema funciona correctamente en macOS.
- **Prueba 2.2:** Confirmar que todas las funcionalidades están disponibles y operan sin errores en este sistema operativo.

### Compatibilidad con Linux

- **Prueba 3.1:** Verificar que el sistema funciona correctamente en Linux.
- **Prueba 3.2:** Confirmar que todas las funcionalidades están disponibles y operan sin errores en este sistema operativo.

## Historia de Usuario 8: Visualizar e Imprimir Texto en Braille en Modo Espejo

**Objetivo:** Verificar que el texto en Braille se muestra automáticamente en modo espejo y cumple con los criterios de aceptación.

**Criterios de Aceptación:**

### Conversión Automática a Modo Espejo

- **Prueba 1.1:** Verificar que el sistema convierte automáticamente el texto en español ingresado a Braille y lo muestra en modo espejo.
- **Prueba 1.2:** Confirmar que no se requiere ninguna acción adicional por parte del usuario para activar el modo espejo.

### Visualización en Modo Espejo

- **Prueba 2.1:** Verificar que el texto transcrito en Braille se muestra en un campo de texto separado en modo espejo.
- **Prueba 2.2:** Confirmar que la visualización del texto en modo espejo es clara y legible.

### Comando de Impresión

- **Prueba 3.1:** Verificar que el sistema tiene una opción de impresión accesible desde la interfaz de usuario.
- **Prueba 3.2:** Confirmar que al dar el comando de impresión, el sistema envía el texto en Braille en modo espejo a la impresora seleccionada.
- **Prueba 3.3:** Verificar que el documento impreso coincide con la visualización del texto en Braille en modo espejo mostrado en pantalla.

## Cronograma de Pruebas

Las pruebas se realizarán en el siguiente orden:

1. Pruebas Funcionales (Historias de Usuario 1 a 4)
2. Pruebas de Usabilidad (Historia de Usuario 5)
3. Pruebas de Rendimiento (Historia de Usuario 6)
4. Pruebas de Compatibilidad (Historia de Usuario 7 a 9)

## Recursos Necesarios

- Equipos con sistemas operativos Windows, macOS y Linux.
- Herramientas de medición de rendimiento.
- Guía de usuario y documentación del sistema.

## Conclusión

Este plan de pruebas tiene como objetivo garantizar que el sistema cumpla con todos los requisitos especificados, proporcionando una solución robusta y eficiente para la transcripción de textos entre español y Braille. Se llevará a cabo una serie de pruebas detalladas para validar la funcionalidad, usabilidad, rendimiento y compatibilidad del sistema.

