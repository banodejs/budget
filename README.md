## Budget.js

Repositorio que lleva registros de los montos utilizados por cada meetup, detalles de en qué fueron gastados e integrado con TravisCI.

En el directorio "events" se encuentran los archivos con el budget de cada meetup, se itera sobre la lista de archivos y se hace una suma. Si el saldo total es mayor o igual a cero, entonces el build es exitoso. De lo contario, si el saldo es menor a cero entonces el build falla.
