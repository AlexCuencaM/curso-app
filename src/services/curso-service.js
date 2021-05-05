import { get, post } from "axios";

export const getCursos = () => new Promise((resolves, reject) =>{
    get('http://localhost:4000/api/cursos')
        .then((response) => resolves(response))
        .catch((response) => reject(response));
})

export const postCurso = (form) => new Promise((resolves, reject) =>{
    post('http://localhost:4000/api/cursos',form)
        .then((response) => resolves(response))
        .catch((response) => reject(response));
})