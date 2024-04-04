import "reflect-metadata";
import cors from "cors";
import express, { Request, Response, NextFunction } from 'express';
import { AppDataSource } from "./database/data-source"

import "./container/index";

import "express-async-errors";
import { AppError } from "./errors/AppError";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { router } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", ("*"));

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    app.use(cors());

    next();
});

app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

AppDataSource.initialize().then(async () => {
    console.log("Connected database!");

    app.listen(port, () => console.log(`Server started on http://localhost:${port}/`));
});