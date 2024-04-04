import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNivelAcessoUseCase } from "./CreateNivelAcessoUseCase";


class CreateNivelAcessoController {

    async handle(request: Request, response: Response): Promise<Response> {

        // Utilizaremos os dados que vem da requisição
        const { nome, nivel } = request.body;

        // Aqui injetamos a nossa classe CriarNivelAcessoCasoUso dentro do nosso controller para que possamos utilizar o método que implementamos nela.
        const createNivelAcessoUseCase = container.resolve(CreateNivelAcessoUseCase);

        try {
            // Utilização do método .execute(), utilizando os dados da requisição, para criar um novo registro no banco de dados.
            const nivelAcesso = await createNivelAcessoUseCase.execute({
                nome,
                nivel,
            });
    
            // disponibilizamos o objeto criado nivelAcesso em resposta a requisição, que nesse caso, o recurso utilzado foi um POST, como método HTTP, que possibilita esses envios de requisição e respostas.
            return response.status(201).json(nivelAcesso);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

}

export { CreateNivelAcessoController };