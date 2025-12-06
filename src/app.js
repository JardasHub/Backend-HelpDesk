import "dotenv/config";
import express from "express";
import cors from "cors";
import { database, connectDatabase } from "./config/db.js";

import "./models/index.js";

import authRoutes from "./routes/authRotes.js";
import chamadosRoutes from "./routes/r_chamados.js";
import usuariosRoutes from "./routes/r_usuarios.js";

const app = express();
app.use(cors({ origin: "http://localhost:3000",
    "https://frontend-help-desk-lilac.vercel.app" }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/chamados", chamadosRoutes);
app.use("/usuarios", usuariosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await connectDatabase();
    await database.sync();
    console.log("Conectado ao banco de dados com sucesso!");
    console.log(`Servidor na porta ${PORT}`);
  } catch (error) {
    console.error(
      "Erro ao iniciar o servidor ou sincronizar as tabelas:",
      error
    );
  }
});
