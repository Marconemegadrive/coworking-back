import { Request, Response } from "express";
import { ClientePF } from "../models/clientePF";
import { Endereco } from "../models/endereco";
import { Contrato } from "../models/contrato";
import { Email } from "../models/email";
import { Telefone } from "../models/telefone";
import clientePFRepository from "../repositories/clientePF.repository";
import telefoneRepository from "../repositories/telefone.repository";
import emailRepository from "../repositories/email.repository";



export default class ClientePFController {
  
  async create(req: Request, res: Response) {
    if (!req.body.nome) {
        res.status(400).send({
            message: "Não pode ser vazio o ClientePF!"
        });
        return;
    }
    try {
      const clientePF: ClientePF = req.body;
      const emailPrc: Email | null = await emailRepository.retrieveById(parseInt(req.body.emails[0]));
      if (emailPrc !== null) {
        clientePF.emails[0] = emailPrc;
      }
      const emailSgd: Email | null = await emailRepository.retrieveById(parseInt(req.body.emails[1]));
      if (emailSgd !== null) {
        clientePF.emails[1] = emailSgd;
      }
      const telefonePrc: Telefone | null = await telefoneRepository.retrieveById(parseInt(req.body.telefones[0]));
      if (telefonePrc !== null) {
        clientePF.telefones[0] = telefonePrc;
      }
      const telefoneSgd: Telefone | null = await telefoneRepository.retrieveById(parseInt(req.body.telefones[1]));
      if (telefoneSgd !== null) {
        clientePF.telefones[1] = telefoneSgd;
      }
      const savedclientePF = await clientePFRepository.save(clientePF);
      res.status(201).send(savedclientePF);
  } catch (err) {
      res.status(500).send({
          message: "Erro ao tentar salvar um ClientePF."
      });
  }
}

async findAll(req: Request, res: Response) {
  try {
      const clientesPF = await clientePFRepository.retrieveAll();
      res.status(200).send(clientesPF);
  } catch (err) {
      res.status(500).send({
          message: "Erro encontrado quando estava se fazendo a busca por todos os Clientes."
      });
  }
}

async findOne(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const clientePF = await clientePFRepository.retrieveById(id);
      if (clientePF) res.status(200).send(clientePF);
      else
          res.status(404).send({
              message: `Não foi encontrado nenhum ClientePF com esse id=${id}.`
          });
  } catch (err) {
      res.status(500).send({
          message: `Error não foi possível retornar o ClientePF com id=${id}.`
      });
  }
}

async update(req: Request, res: Response) {
  let clientePF: ClientePF = req.body;
  clientePF.id = parseInt(req.params.id);
  try {
      const num = await clientePFRepository.update(clientePF);
      if (num == 1) {
          res.send({
              message: "ClientePF foi atualizado com sucesso."
          });
      } else {
          res.send({
              message: `Não foi possível ataulizar o ClientePF com o id=${clientePF.id}. O ClientePF não foi encontrado, ou ele está vazio!`
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `Error ao atualizar o ClientePF com id=${clientePF.id}.`
      });
  }
}

async delete(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const num = await clientePFRepository.delete(id);
      if (num == 1) {
          res.send({
              message: "ClientePF deletado com sucesso!"
          });
      } else {
          res.send({
              message: `Não foi possível deletar o ClientePF com id=${id}. Talvez o ClientePF não tenha sido encontrado.`,
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `O ClientePF com id==${id}, não pode ser deletado.`
      });
  }
}

async deleteAll(req: Request, res: Response) {
  try {
      const num = await clientePFRepository.deleteAll();
      res.send({ message: `${num} ClientesPF foram deletados com sucesso!` });
  } catch (err) {
      res.status(500).send({
          message: "Algum erro ocorreu enquato deletava todos os ClientesPF."
      });
  }
}

}
  /*async create(req: Request, res: Response) {
    try {
      const { idCliente, endereco, contrato, cpf, nome, email, telefones } =
        req.body;

      const clientePF = new ClientePF(
        idCliente,
        email ? [new Email(email)] : [],
        telefones ? telefones.map((telefone: any) => new Telefone(telefone)) : [],
        endereco ? new Endereco(endereco) : undefined,
        contrato ? new Contrato(contrato) : undefined,
        // status,
        // dataCadastro, 
        // dataAlteracao,
        cpf,
        nome
      );

      const savedClientePF = await clientePFRepository.save(clientePF);

      res.status(201).send(savedClientePF);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "Erro ao tentar criar um cliente PF.",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const clientesPF = await clientePFRepository.retrieveAll();
      res.status(200).send(clientesPF);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "Erro ao buscar clientes PF.",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const idCliente = parseInt(req.params.id);
      const clientePF = await clientePFRepository.retrieveById(idCliente);

      if (clientePF) {
        res.status(200).send(clientePF);
      } else {
        res.status(404).send({
          message: `Cliente PF com id ${idCliente} não encontrado.`,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "Erro ao buscar cliente PF.",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const idCliente = parseInt(req.params.id);
      const { cpf, nome, endereco, contrato, email, telefones } = req.body;

      const clientePF = new ClientePF(
        idCliente,
        email ? [new Email(email)] : [],
        telefones ? telefones.map((telefone: any) => new Telefone(telefone)) : [],
        endereco ? new Endereco(endereco) : undefined,
        contrato ? new Contrato(contrato) : undefined,
        cpf,
        nome
      );

      const num = await clientePFRepository.update(clientePF);

      if (num === 1) {
        res.status(200).send({
          message: "Cliente PF atualizado com sucesso.",
        });
      } else {
        res.status(404).send({
          message: `Cliente PF com id ${idCliente} não encontrado.`,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "Erro ao atualizar cliente PF.",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const idCliente = parseInt(req.params.id);
      const num = await clientePFRepository.delete(idCliente);

      if (num === 1) {
        res.status(200).send({
          message: "Cliente PF deletado com sucesso.",
        });
      } else {
        res.status(404).send({
          message: `Cliente PF com id ${idCliente} não encontrado.`,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "Erro ao deletar cliente PF.",
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const num = await clientePFRepository.deleteAll();
      res.status(200).send({
        message: `${num} clientes PF foram deletados com sucesso.`,
      });
    } catch (err) {
      console
*/