import { Request, Response } from "express";
import { Funcionario } from "../models/funcionario";
import funcionarioRepository from "../repositories/funcionario.repository";
import { Telefone } from "../models/telefone";
import { Email } from "../models/email";
import telefoneRepository from "../repositories/telefone.repository";
import emailRepository from "../repositories/email.repository";

export default class FuncionarioController {
  
  async create(req: Request, res: Response) {
    if (!req.body.nome) {
        res.status(400).send({
            message: "Não pode ser vazio o funcionario!"
        });
        return;
    }
    try {
      const funcionario: Funcionario = req.body;
      const emailPrc: Email | null = await emailRepository.retrieveById(parseInt(req.body.emails[0]));
      if (emailPrc !== null) {
        funcionario.emails[0] = emailPrc;
      }
      const emailSgd: Email | null = await emailRepository.retrieveById(parseInt(req.body.emails[1]));
      if (emailSgd !== null) {
        funcionario.emails[1] = emailSgd;
      }
      const telefonePrc: Telefone | null = await telefoneRepository.retrieveById(parseInt(req.body.telefones[0]));
      if (telefonePrc !== null) {
        funcionario.telefones[0] = telefonePrc;
      }
      const telefoneSgd: Telefone | null = await telefoneRepository.retrieveById(parseInt(req.body.telefones[1]));
      if (telefoneSgd !== null) {
        funcionario.telefones[1] = telefoneSgd;
      }
      const savedfuncionario = await funcionarioRepository.save(funcionario);
      res.status(201).send(savedfuncionario);
  } catch (err) {
      res.status(500).send({
          message: "Erro ao tentar salvar um funcionario."
      });
  }
}

async findAll(req: Request, res: Response) {
  try {
      const funcionarios = await funcionarioRepository.retrieveAll();
      res.status(200).send(funcionarios);
  } catch (err) {
      res.status(500).send({
          message: "Erro encontrado quando estava se fazendo a busca por todos os funcionarios."
      });
  }
}

async findOne(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const funcionario = await funcionarioRepository.retrieveById(id);
      if (funcionario) res.status(200).send(funcionario);
      else
          res.status(404).send({
              message: `Não foi encontrado nenhum funcionario com esse id=${id}.`
          });
  } catch (err) {
      res.status(500).send({
          message: `Error não foi possível retornar o funcionario com id=${id}.`
      });
  }
}

async update(req: Request, res: Response) {
  let funcionario: Funcionario = req.body;
  funcionario.id = parseInt(req.params.id);
  try {
      const num = await funcionarioRepository.update(funcionario);
      if (num == 1) {
          res.send({
              message: "funcionario foi atualizado com sucesso."
          });
      } else {
          res.send({
              message: `Não foi possível ataulizar o funcionario com o id=${funcionario.id}. O funcionario não foi encontrado, ou ele está vazio!`
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `Error ao atualizar o funcionario com id=${funcionario.id}.`
      });
  }
}

async delete(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const num = await funcionarioRepository.delete(id);
      if (num == 1) {
          res.send({
              message: "funcionario deletado com sucesso!"
          });
      } else {
          res.send({
              message: `Não foi possível deletar o funcionario com id=${id}. Talvez o funcionario não tenha sido encontrado.`,
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `O funcionario com id==${id}, não pode ser deletado.`
      });
  }
}

async deleteAll(req: Request, res: Response) {
  try {
      const num = await funcionarioRepository.deleteAll();
      res.send({ message: `${num} funcionarios foram deletados com sucesso!` });
  } catch (err) {
      res.status(500).send({
          message: "Algum erro ocorreu enquato deletava todos os funcionarios."
      });
  }
}

}
