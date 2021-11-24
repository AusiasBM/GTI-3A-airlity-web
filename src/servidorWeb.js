/**
 * 
 * @Autor Ausias Bañuls Mahiques
 * 
 */

const express = require('express')
const app = express()
const port = 3000

app.use( express.json() )

app.set("name", "Servidor Web Airlity");
app.set("port", port ); // Si el servidor asigna un purto se queda, sino le ponemos 3500

// Mostramos la página web inicial
app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${app.get("port")}`)
  console.log("nombre de la app", app.get("name"));
})
