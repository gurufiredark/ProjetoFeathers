import { Application } from "../declarations";
import users from "./users/users.service";
import alunos from "./alunos/alunos.service";
import livros from "./livros/livros.service";
import visitantes from "./visitantes/visitantes.service";
import emprestimo from "./emprestimo/emprestimo.service";

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(alunos);
  app.configure(livros);
  app.configure(visitantes);
  app.configure(emprestimo);
}
