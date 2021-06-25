import { Router } from "express";
import { ClasseController } from "../controllers/ClasseController";

const router = Router();
const classeController = new ClasseController();

router.post("/livro/cadastrar", classeController.cadastrar);
router.get("/livro/listar", classeController.listar);

export { router };
