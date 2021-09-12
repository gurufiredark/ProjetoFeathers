import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Livros } from "./livros.class";
import createModel from "../../models/livros.model";
import hooks from "./livros.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    livros: Livros & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/livros", new Livros(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("livros");

  service.hooks(hooks);
}
