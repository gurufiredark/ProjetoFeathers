import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const visitantes = sequelizeClient.define(
    "visitantes",
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      datanascimento: {
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
  (visitantes as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return visitantes;
}
