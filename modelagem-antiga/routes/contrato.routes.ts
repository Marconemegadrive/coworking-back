import { Router } from "express";
import ContratoController from "../controllers/contrato.controller";


class ContratoRoutes {
  router = Router();
  controller = new ContratoController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo contrato.
    this.router.post("/contrato", this.controller.create);

    // Retornar os contratos já cadastrados.
    this.router.get("/contratos", this.controller.findAll);

     // Retorna um contrato específico pelo seu id
     this.router.get("/contrato/:id", this.controller.findOne);

     // Atualizar um contrato pelo seu id
     this.router.put("/contrato/:id", this.controller.update);
 
     // Deleta um contrato pelo seu id
     this.router.delete("/contrato/:id", this.controller.delete);
 
     // Deleta todos os contratos
     this.router.delete("/contratos/", this.controller.deleteAll);
  }
}

export default new ContratoRoutes().router;