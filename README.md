# Pokédex
Prueba Técnica: Construye una Pokédex con Vue.js

## Instrucciones para ejecutar la aplicación.

Acceder al directorio del proyecto:

    cd pokedex

Instalar las dependencias:

    npm install

### Ejecución en Modo Desarrollo

    npm run dev

### Vista Previa de Producción

    npm run build
    npm run preview


## Desafíos encontrados y cómo se resolvieron.

El primer desafío fue modelar la solución mientras aprendía Vue, ya que no lo había utilizado antes. Tuve que buscar información sobre cómo funciona y cómo crear un proyecto con esta herramienta. Esto no fue tan complicado, ya que había trabajado anteriormente con herramientas como TypeScript y React. Para buscar información, me apoyé en material visual de YouTube, en herramientas de IA como ChatGPT, entre otras. Al inicio, fue un poco complicado entender los componentes de Vue, pero una vez que comprendí las distintas partes y métodos de un componente, el desarrollo se volvió mucho más sencillo.

Otro desafío fue implementar la funcionalidad para ver los detalles de un Pokémon. Inicialmente pensé en crear un endpoint que recibiera el nombre del Pokémon, pero luego me di cuenta de que esto separaría la lógica de la aplicación y requeriría múltiples llamadas a la PokeAPI. Finalmente, decidí guardar la información obtenida de la API en una `ref` de la aplicación principal y luego alternar entre renderizar la lista o los detalles de un Pokémon según si se seleccionó alguno. 
