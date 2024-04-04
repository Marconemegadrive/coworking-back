// Os DTOs (Data Transfer Object) são normalmente utilizados para representar quais dados e em que formatos uma determinada camada aceita, ou seja, a nossa Interface (INivelAcessoRepository). Então é comum por exemplo que você use DTOs para validar se o POST enviado para alguma url segue os parâmetros esperados, seus tipos e se seus valores estão dentro das regras de aceite da validação.

interface ICreateNivelAcessoDTO {
    nome: string;
    nivel: number;
}

export { ICreateNivelAcessoDTO };