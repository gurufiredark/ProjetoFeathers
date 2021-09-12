import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";
import alunos from "./alunos.model";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const emprestimo = sequelizeClient.define(
    "emprestimo",
    {
      alunoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        field: "aluno_id",
      },
      livroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "livro_id",
      },
      dataInicio: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "data_inicio",
      },
      dataFim: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "data_fim",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.NOW,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.NOW,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.NOW,
        field: "deleted_at",
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  (emprestimo as any).associate = function (models: any): void {
    models.alunos.hasMany(emprestimo, { as: "emprestimos" });
    emprestimo.belongsTo(models.alunos, { as: "aluno" });

    models.livros.hasMany(emprestimo, { as: "emprestimos" });
    emprestimo.belongsTo(models.livros, { as: "livro" });
  };

  return emprestimo;
}
