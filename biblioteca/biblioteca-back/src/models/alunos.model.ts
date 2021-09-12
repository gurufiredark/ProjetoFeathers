import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const alunos = sequelizeClient.define(
    "alunos",
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nascimento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      ra: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dpto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      curso: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cep: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      complemento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      uf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (alunos as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return alunos;
}
