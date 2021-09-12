import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Alunos } from "./alunos.class";
import createModel from "../../models/alunos.model";
import hooks from "./alunos.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    alunos: Alunos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/alunos", new Alunos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("alunos");

  service.hooks(hooks);
}
