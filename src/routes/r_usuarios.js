import { Router } from "express";
import { createUsuario } from "../controllers/c_usuarios.js";

const usuariosRoutes = Router();

usuariosRoutes.post("/", createUsuario);

export default usuariosRoutes;
