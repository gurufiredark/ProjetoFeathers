import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Visitantes } from "./visitantes.class";
import createModel from "../../models/visitantes.model";
import hooks from "./visitantes.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    visitantes: Visitantes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/visitantes", new Visitantes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("visitantes");

  service.hooks(hooks);
}
