import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindFuncionarioByEmailUseCase } from "./FindFuncionarioByEmailUseCase";

class FindFuncionarioByEmailController {

    async handle(request: Request, response: Response): Promise<Response> {

        const email = request.params.email;

        const findFuncionarioByEmailUseCase = container.resolve(FindFuncionarioByEmailUseCase);

        try { 
            const loginFuncionarioFound = await findFuncionarioByEmailUseCase.execute(email);
            return response.status(200).json(loginFuncionarioFound);
        } catch (error) {
            return response.status(400).json(error);
        }
    }

}

export { FindFuncionarioByEmailController }