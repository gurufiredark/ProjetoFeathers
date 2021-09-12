import { Service, SequelizeServiceOptions } from "feathers-sequelize";
import { Application } from "../../declarations";
import { Params } from "@feathersjs/feathers";

export interface IEmprestimo {
  alunoId: string;
  livroId: string;
  dataInicio: string;
  dataFim: string;
}
export class Emprestimo extends Service<any> {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }

  async find(params: Params) {
    return super.find({
      ...params,
      sequelize: {
        include: ["aluno", "livro"],
        raw: false,
      },
    });
  }
}
