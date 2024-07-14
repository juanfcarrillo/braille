# Historias de Usuario

## Historia de Usuario 1: Transcribir Texto en Español a Braille

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 1                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Transcribir Texto en Español a Braille |
| Prioridad en negocio: | Alta                     |Riesgo en desarrollo: | Baja |
| Puntos estimados:     | 2                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero poder transcribir texto en español a Braille para facilitar la lectura a personas con discapacidad visual y personas que no tengan esta discapacidad. |


### Criterios de Aceptación

| Criterios de Aceptación   |                          |
|---------------------------|--------------------------|
| **Entrada de Texto**      |                          |
| Prueba 1.1                | El sistema debe permitir al usuario ingresar texto en español en un campo de texto. |
| Prueba 1.2                | El sistema debe incluir números, abecedario, vocales acentuadas y signos básicos (interrogación). |
| **Conversión a Braille**  |                          |
| Prueba 2.1                | El sistema debe convertir el texto en español a su equivalente en Braille utilizando las reglas de transcripción del sistema Braille. |
| Prueba 2.2                | El proceso de transcripción debe completarse en menos de 3 segundos y debe ir en paralelo al ingreso de texto del usuario. |
| **Salida de Texto en Braille** |                          |
| Prueba 3.1                | El sistema debe mostrar el texto transcrito en Braille en un campo de texto separado. |
| Prueba 3.2                | El texto en Braille debe ser claro y legible. |

---

## Historia de Usuario 2: Transcribir Texto en Braille a Español

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 2                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Transcribir Texto en Braille a Español |
| Prioridad en negocio: | Alta                     |Riesgo en desarrollo: | Baja |
| Puntos estimados:     | 2                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero poder transcribir texto en Braille a español para facilitar la lectura a personas que no leen Braille. |


### Criterios de Aceptación

| Criterios de Aceptación       |                          |
|-------------------------------|--------------------------|
| **Entrada de Texto en Braille**|                          |
| Prueba 1.1                    | El sistema debe permitir al usuario ingresar texto en Braille en un campo de texto. |
| **Conversión a Español**      |                          |
| Prueba 2.1                    | El sistema debe convertir el texto en Braille a su equivalente en español. |
| Prueba 2.2                    | El proceso de transcripción debe completarse en menos de 2 segundos. |
| **Salida de Texto en Español**|                          |
| Prueba 3.1                    | El sistema debe mostrar el texto transcrito en español en un campo de texto separado. |
| Prueba 3.2                    | El texto en español debe ser claro y legible. |

---

## Historia de Usuario 3: Seleccionar Tamaño de Letra del Texto Transcrito para Imprimir

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 3                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Seleccionar Tamaño de Letra del Texto Transcrito para Imprimir |
| Prioridad en negocio: | Media                    |Riesgo en desarrollo: | Baja |
| Puntos estimados:     | 2                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero poder seleccionar el tamaño de letra del texto transcrito para ajustarlo a mis necesidades de lectura. |


### Criterios de Aceptación

| Criterios de Aceptación        |                          |
|-------------------------------|--------------------------|
| **Selección de Tamaño de Letra**|                          |
| Prueba 1.1                    | El sistema debe proporcionar opciones para seleccionar el tamaño de letra del texto transcrito (pequeña, mediana, grande). |
| Prueba 1.2                    | El usuario debe poder cambiar el tamaño de letra en cualquier momento. |
| **Previsualización del Texto**|                          |
| Prueba 2.1                    | El sistema debe mostrar una previsualización del texto transcrito con el tamaño de letra seleccionado. |
| Prueba 2.2                    | La previsualización debe actualizarse inmediatamente después de cambiar el tamaño de letra. |

---

## Historia de Usuario 4: Imprimir Texto Transcrito

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 4                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Imprimir Texto Transcrito |
| Prioridad en negocio: | Alta                     |Riesgo en desarrollo: | Media |
| Puntos estimados:     | 3                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero poder imprimir los textos transcritos para tener una copia física de ellos. |


### Criterios de Aceptación

| Criterios de Aceptación        |                          |
|-------------------------------|--------------------------|
| **Comando de Impresión**      |                          |
| Prueba 1.1                    | El sistema debe tener una opción de impresión accesible desde la interfaz de usuario. |
| Prueba 1.2                    | El usuario debe poder seleccionar la impresora y las configuraciones de impresión. |
| **Envío a la Impresora**      |                          |
| Prueba 2.1                    | Al dar el comando de impresión, el sistema debe enviar el texto transcrito a la impresora seleccionada. |
| Prueba 2.2                    | El documento impreso debe coincidir con el texto transcrito mostrado en pantalla. |
| **Generar Impresión en Espejo de Textos Braille para Escritura Manual** |                          |
| Prueba 3.1                    | El sistema debe proporcionar una opción para generar una impresión en espejo del texto Braille. |
| Prueba 3.2                    | El texto en Braille se imprime en modo espejo correctamente. |

---

## Historia de Usuario 5: Usabilidad

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 5                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Usabilidad               |
| Prioridad en negocio: | Alta                     |Riesgo en desarrollo: | Baja |
| Puntos estimados:     | 2                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero que el sistema sea intuitivo y fácil de usar para que personas con distintos niveles de habilidad técnica puedan utilizarlo sin dificultad. |


### Criterios de Aceptación

| Criterios de Aceptación        |                          |
|-------------------------------|--------------------------|
| **Interfaz Intuitiva**        |                          |
| Prueba 1.1                    | El sistema debe tener una interfaz de usuario clara y bien organizada. |
| Prueba 1.2                    | Las funciones principales deben ser accesibles con un mínimo de clics. |
| **Guía de Usuario**           |                          |
| Prueba 2.1                    | El sistema debe incluir una guía de usuario detallada. |
| Prueba 2.2                    | La guía de usuario debe estar accesible desde la interfaz del sistema y cubrir todas las funcionalidades principales. |

---

## Historia de Usuario 6: Rendimiento

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 6                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Rendimiento              |
| Prioridad en negocio: | Media                    |Riesgo en desarrollo: | Media |
| Puntos estimados:     | 3                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero que el sistema sea rápido y eficiente para no experimentar demoras durante las transcripciones. |


### Criterios de Aceptación

| Criterios de Aceptación        |                          |
|-------------------------------|--------------------------|
| **Tiempo de Respuesta**       |                          |
| Prueba 1.1                    | El sistema debe completar la transcripción de textos en menos de 2 segundos. |
| Prueba 1.2                    | Las pruebas de rendimiento deben confirmar que el tiempo de respuesta cumple con este criterio bajo diferentes cargas de trabajo. |

---

## Historia de Usuario 7: Compatibilidad

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
| ID:               | 7                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Compatibilidad           |
| Prioridad en negocio: | Alta                     |Riesgo en desarrollo: | Media |
| Puntos estimados:     | 3                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero que el sistema funcione en múltiples plataformas para poder usarlo independientemente del sistema operativo que tenga. |


### Criterios de Aceptación

| Criterios de Aceptación        |                          |
|-------------------------------|--------------------------|
| **Compatibilidad con Windows**|                          |
| Prueba 1.1                    | El sistema debe funcionar correctamente en Windows. |
| Prueba 1.2                    | Todas las funcionalidades deben estar disponibles y operar sin errores en este sistema operativo. |
| **Compatibilidad con macOS**  |                          |
| Prueba 2.1                    | El sistema debe funcionar correctamente en macOS. |
| Prueba 2.2                    | Todas las funcionalidades deben estar disponibles y operar sin errores en este sistema operativo. |
| **Compatibilidad con Linux**  |                          |
| Prueba 3.1                    | El sistema debe funcionar correctamente en Linux. |
| Prueba 3.2                    | Todas las funcionalidades deben estar disponibles y operar sin errores en este sistema operativo. |

---

## Historia de Usuario 8: Visualizar e Imprimir Texto en Braille en Modo Espejo

| Historia de Usuario   |                          |
|-----------------------|--------------------------|
|ID:               | 8                        |
| Versión:              | 1.1                      |
| Nombre historia:      | Visualizar e Imprimir Texto en Braille en Modo Espejo |
| Prioridad en negocio: | Media                    |Riesgo en desarrollo: | Media |
| Puntos estimados:     | 3                        | Iteración asignada:  | 1    |
| Descripción:          | Como usuario quiero que el texto en Braille se muestre automáticamente en modo espejo para facilitar la escritura manual del Braille. |


### Criterios de Aceptación

| Criterios de Aceptación        |                          |
|-------------------------------|--------------------------|
| **Conversión Automática a Modo Espejo**|                          |
| Prueba 1.1                    | El sistema debe convertir automáticamente el texto en español ingresado a Braille y mostrarlo en modo espejo. |
| Prueba 1.2                    | No se requiere que el usuario active ninguna opción adicional para visualizar el texto en modo espejo. |
| **Visualización en Modo Espejo**|                          |
| Prueba 2.1                    | El sistema debe mostrar el texto transcrito en Braille en un campo de texto separado en modo espejo. |
| Prueba 2.2                    | La visualización del texto en modo espejo debe ser clara y legible. |
| **Comando de Impresión**      |                          |
| Prueba 3.1                    | El sistema debe tener una opción de impresión accesible desde la interfaz de usuario. |
| Prueba 3.2                    | Al dar el comando de impresión, el sistema debe enviar el texto en Braille en modo espejo a la impresora seleccionada. |
| Prueba 3.3                    | El documento impreso debe coincidir con la visualización del texto en Braille en modo espejo mostrado en pantalla. |
