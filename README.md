# Spotiapp

Creado con Angular.

Se conecta con Spotify y permite buscar por artistas y ver previews de las canciones 

Para que funcione es necesario agregar el Bearer en spotify.service.ts donde dice : 

const headers = new HttpHeaders({
    Authorization: 'Bearer',  // completarlo
  });
