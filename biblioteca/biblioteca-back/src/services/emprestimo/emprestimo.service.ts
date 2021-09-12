import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Emprestimo } from "./emprestimo.class";
import createModel from "../../models/emprestimo.model";
import hooks from "./emprestimo.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    emprestimo: Emprestimo & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/emprestimo", new Emprestimo(options, app));

  const service = app.service("emprestimo");

  service.hooks(hooks);
}
