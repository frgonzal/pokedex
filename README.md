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

El primer desafío fue modelar la solución mientras aprendía Vue, ya que no lo había utilizado antes. Tuve que buscar información sobre cómo funciona y cómo crear un proyecto con esta herramienta. Esto no fue tan complicado, ya que había trabajado anteriormente con herramientas como TypeScript y React. Para buscar información, me apoyé en material visual de YouTube y en herramientas de IA como ChatGPT. 

Otro desafío fue implementar la funcionalidad para ver los detalles de un Pokémon. Para ello, pensé en crear un endpoint que recibiera el nombre del Pokémon. Utilicé un router que permitiera trabajar con una vista para la página principal y otra para los detalles de un Pokémon. Luego, al cargar los detalles de un Pokémon, el nombre se obtiene del parámetro en la URL. El proyecto está estructurado teniendo en cuenta las diferentes vistas disponibles.

El resto de las funcionalidades fueron bastante directas, por lo que no hubo mayores complicaciones al implementarlas.