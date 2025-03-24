import { Router } from "express";
import ClientController from "./controller/clientController.js";
import { isClient } from "./middlewares/isClient.js";

export const routes = Router();

routes.post("/client", isClient, (req, res, next) => {
  console.log(`Criando cliente: ${req.body.name} ${req.body.lastName}`);
  next();
}, ClientController.create);

routes.get("/client", ClientController.readClients)
