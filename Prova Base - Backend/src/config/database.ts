import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://topicos:topicos@clustertopicosavancados.oec7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao banco de dados!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o banco: ${error}`);
  });

export { mongoose };
