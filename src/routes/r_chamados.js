import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createChamado,
  getAllChamados,
  getChamadoById,
  updateChamado,
  deleteChamado,
} from "../controllers/c_chamados.js";

const chamadosRoutes = Router();

chamadosRoutes.use(authMiddleware);
chamadosRoutes.post("/", createChamado);
chamadosRoutes.get("/all", getAllChamados);
chamadosRoutes.get("/", getChamadoById);
chamadosRoutes.put("/:id", updateChamado);
chamadosRoutes.delete("/:id", deleteChamado);


export default chamadosRoutes;
