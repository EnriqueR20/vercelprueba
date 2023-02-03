import express, { type Application } from "express";
import { restauranteRouter, usuarioRouter} from "./components/index";
import cors from "cors";


const app: Application = express();

//middlewares
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/usuario", usuarioRouter);
app.use("/restaurante", restauranteRouter);

export default app;