# Proyecto Node

Este proyecto es una base minima en Node.js creada como parte de una tarea para practicar el uso de Codex.

## Objetivo

El proyecto contiene tres funciones de ejemplo:

- `reverseString(text)`
- `countVowels(text)`
- `isPalindrome(text)`

Estas funciones fueron implementadas de manera erronea a proposito. La idea es que exista una diferencia entre el comportamiento esperado y el comportamiento real, para luego validarlo con tests automatizados.

## Estructura

- `src/index.js`: punto de entrada del proyecto.
- `src/string-utils.js`: contiene las tres funciones.
- `__tests__/string-utils.test.js`: tests con Jest que validan el comportamiento correcto esperado.

## Funciones incluidas

### `reverseString(text)`

Deberia regresar el texto invertido.

Ejemplo esperado:

```js
reverseString("hola"); // "aloh"
```

Actualmente esta mal implementada a proposito.

### `countVowels(text)`

Deberia contar cuantas vocales tiene un texto.

Ejemplo esperado:

```js
countVowels("murcielago"); // 5
```

Actualmente esta mal implementada a proposito.

### `isPalindrome(text)`

Deberia indicar si una palabra se lee igual de izquierda a derecha y de derecha a izquierda.

Ejemplo esperado:

```js
isPalindrome("reconocer"); // true
```

Actualmente esta mal implementada a proposito.

## Scripts

- `npm start`: ejecuta el archivo principal una vez.
- `npm run dev`: ejecuta el proyecto en modo watch.
- `npm run check`: valida la sintaxis de los archivos.
- `npm test`: ejecuta la suite de tests con Jest.

## Como correr el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar el archivo principal:

```bash
npm start
```

## Como correr los tests

Para ejecutar todos los tests:

```bash
npm test
```

Los tests estan escritos correctamente y validan el comportamiento esperado real de las funciones. Por eso, mientras las funciones sigan incorrectas a proposito, la suite debe fallar.

## Nota para la entrega

Este repositorio esta preparado para mostrar un flujo simple de trabajo con Codex:

1. Crear la base del proyecto Node.
2. Agregar funciones de ejemplo.
3. Dejar las funciones mal implementadas de forma intencional.
4. Crear tests correctos con Jest que detecten esos errores.

En otras palabras, que los tests fallen en este estado no significa que Jest este mal configurado; significa que los tests estan encontrando correctamente los errores sembrados a proposito en la implementacion.
