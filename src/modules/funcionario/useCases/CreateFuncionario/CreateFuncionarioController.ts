import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFuncionarioUseCase } from "./CreateFuncionarioUseCase";

class CreateFuncionarioController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { cpf, nome, email, telefones, funcao, usuario_idUsuario } = request.body;

        const createFuncionarioUseCase = container.resolve(CreateFuncionarioUseCase);

        try {

            const funcionario = await createFuncionarioUseCase.execute({
                cpf, 
                nome, 
                email, 
                telefones, 
                funcao, 
                usuario_idUsuario
            });
            
            return response.status(201).json(funcionario);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}

export { CreateFuncionarioController };