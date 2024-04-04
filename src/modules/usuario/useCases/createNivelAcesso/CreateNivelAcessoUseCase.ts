import { inject, injectable } from "tsyringe";
import { NivelAcesso } from "../../entities/NivelAcesso";
import { ICreateNivelAcessoDTO } from "../../repositories/dtos/ICreateNivelAcessoDTO";
import { INivelAcessoRepository } from "../../repositories/interfaces/INivelAcessoRepository";

// Nessa clase é onde ficará toda a implementação da REGRA DE NEGÓCIO, nesse caso específico, é onde manipula-se a criação de um Nivel de Acesso.

// A annotation @injectable() é um recurso da biblioteca TSyringe, que facilita a aplicação do conceito de injeção de dependência, que é um padrão de projeto utilizado para diminuir o acoplamento entre as classes de um sistema. Em outras palavras, é uma forma de estruturar o código para que as classes dependam de abstrações, em vez de dependerem diretamente de outras classes concretas.
@injectable()
class CreateNivelAcessoUseCase {

    // Podemos ver que utilizamos a interface INivelAcessoRepository e não a implementação NivelAcessoRepository, demostrando um pouco dos conceitos que já foram abordados.
    constructor(
        @inject("NivelAcessoRepository")
        private nivelAcessoRepository: INivelAcessoRepository
    ) {}

    async execute({ nome, nivel }: ICreateNivelAcessoDTO): Promise<NivelAcesso> {

        // Aqui chamamos o método .criar() do NivelAcessoRepository para criarmos um novo registro dentro do banco de dados.
        const nivelAcesso = await this.nivelAcessoRepository.create({
            nome,
            nivel,
        });

        // Após criar e salvar o registro, podemos disponibilizá-lo para posteriores manipulações.
        return nivelAcesso;
    }
}

export { CreateNivelAcessoUseCase };