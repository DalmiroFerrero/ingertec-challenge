# Challenge Ingertec

Este proyecto es un challenge para la empresa Ingertec y consiste en desarrollar una página web utilizando React en TypeScript que cumpla con ciertos requisitos establecidos. A continuación se detallan las pruebas a realizar:

## Pruebas a Realizar

- Desarrollar una página utilizando React en TypeScript que utilice Bootstrap 4 o 5.
- La página debe ser responsive, adaptándose correctamente a diferentes dimensiones de pantalla.
- La apariencia de la página debe ser atractiva y cuidada, no solo se busca funcionalidad, sino también un diseño estético.
- La página debe incluir los siguientes elementos:
  - Título.
  - 5 imágenes dispuestas en una misma fila.
  - 5 descripciones debajo de cada imagen.
  - 5 contadores de visitas con un ícono asociado debajo de cada imagen.
  - Al hacer clic en las imágenes pares, se debe abrir un modal que muestre la imagen en un tamaño más grande. Además, se debe incrementar el contador de visitas correspondiente a esa imagen.
  - Al hacer clic en las imágenes impares, se debe abrir un popup (utilizando `window.open`) con las dimensiones 800px de ancho y 400px de alto. En el popup se debe mostrar la imagen ocupando todo el espacio disponible. Si se redimensiona el popup, la imagen también debe redimensionarse. El popup debe contener dos botones: "OK" y "Cerrar". Al hacer clic en "OK", se debe actualizar el contador de visitas de la imagen en la página anterior sin cerrar el popup. Al hacer clic en "Cerrar", se cierra el popup.
  - Debajo de todas las imágenes, se debe agregar un botón "Cargar Texto" y un área de texto (textarea). Al hacer clic en el botón, se debe realizar una llamada AJAX para cargar en el textarea el valor de la variable "texto" del siguiente JSON:
    ```
    {
      "pagina": "home",
      "texto": "este es el texto que debe aparecer en el textarea luego de hacer la llamada ajax"
    }
    ```
    El JSON puede ser obtenido desde un archivo llamado "home.json".

- Crear una base de datos en MySQL en la máquina local con el nombre "miPrimerNombre" + "yyyyMMdd". Se deben guardar los scripts utilizados para crear las tablas.
- La base de datos debe contener las siguientes tablas:
  - `tresource_type`:
    - `idResourceType` int autoincrement PK
    - `created` datetime
    - `descrip` varchar(200)
  - `tresource`:
    - `idResource` int autoincrement PK
    - `created` datetime
    - `descrip` varchar(200)
    - `idResourceType` int FK

- La tabla `tresource_type` debe tener los siguientes valores (se deben guardar los scripts utilizados para poblar la tabla):
  - Vídeo
  - PDF Documentación
  - PDF Enunciado
  - PDF Solución

- Se deben crear al menos 6 registros en la tabla `tresource` y deben estar clasificados según los datos de la tabla `tresource_type` (se deben guardar los scripts utilizados para poblar la tabla).

- Se debe realizar una query que cuente cuántos registros hay por tipo de recurso (se debe guardar la query utilizada).
