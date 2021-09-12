function getAlunosList() {
    return fetch("http://localhost:3030/alunos").then((r) => r.json());
}

function getAluno(id) {
    return fetch(`http://localhost:3030/alunos/${id}`).then((r) => r.json());
}

function createAluno(novoAluno) {
    return fetch("http://localhost:3030/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoAluno),
    }).then((r) => r.json());
}

function editAluno(editarAluno, id) {
    return fetch(`http://localhost:3030/alunos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editarAluno),
    }).then((r) => r.json());
}

function excluirAluno(id) {
    return fetch(`http://localhost:3030/alunos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
}

function getLivrosList() {
    return fetch("http://localhost:3030/livros").then((r) => r.json());
}
function getLivros(id) {
    return fetch(`http://localhost:3030/livros/${id}`).then((r) => r.json());
}
function createLivros(novoLivro) {
    return fetch("http://localhost:3030/livros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoLivro),
    }).then((r) => r.json());
}
function excluirLivros(id) {
    return fetch(`http://localhost:3030/livros/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
}
function editLivros(editarLivros, id) {
    return fetch(`http://localhost:3030/livros/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editarLivros),
    }).then((r) => r.json());
}

function getVisitantesList() {
    return fetch("http://localhost:3030/visitantes").then((r) => r.json());
}

function getVisitantes(id) {
    return fetch(`http://localhost:3030/visitantes/${id}`).then((r) => r.json());
}

function createVisitantes(novoVisitantes) {
    return fetch("http://localhost:3030/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoVisitantes),
    }).then((r) => r.json());
}

function editVisitantes(editarVisitantes, id) {
    return fetch(`http://localhost:3030/visitantes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editarVisitantes),
    }).then((r) => r.json());
}

function excluirVisitantes(id) {
    return fetch(`http://localhost:3030/visitantes/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
}

function getEmprestimoList() {
    return fetch("http://localhost:3030/emprestimo").then((r) => r.json());
}
function getEmprestimo(id) {
    return fetch(`http://localhost:3030/emprestimo/${id}`).then((r) => r.json());
}
function createEmprestimo(novoEmprestimo) {
    return fetch("http://localhost:3030/emprestimo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoEmprestimo),
    }).then((r) => r.json());
}
function excluirEmprestimo(id) {
    return fetch(`http://localhost:3030/emprestimo/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
}
function editEmprestimo(editarEmprestimo, id) {
    return fetch(`http://localhost:3030/emprestimo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editarEmprestimo),
    }).then((r) => r.json());
}

export default {
    editAluno, getAlunosList, getAluno, createAluno, excluirAluno,
    getLivrosList, createLivros, editLivros, getLivros, excluirLivros,
    getVisitantesList, getVisitantes, createVisitantes, editVisitantes, excluirVisitantes,
    getEmprestimoList, getEmprestimo, createEmprestimo, excluirEmprestimo, editEmprestimo
};