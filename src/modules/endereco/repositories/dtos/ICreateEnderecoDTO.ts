
interface ICreateEnderecoDTO {

    uf: string;
    cep: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    obs?: string;
    cliente_idCliente: number;
}

export { ICreateEnderecoDTO };