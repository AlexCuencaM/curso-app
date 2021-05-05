import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { getCursos, postCurso } from "../../services/curso-service";
import { CursoContext } from "../../state/CursoContext";
import { types } from "../../state/types";

export const AddCurso = () => {
    const {dispatch} = useContext(CursoContext);

    const [form, handleChange] = useForm({
        name:"",
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        postCurso(form)
        .then(e =>{
            getCursos()
            .then(response =>{
                console.log("hey")
                dispatch({
                    type:types.results,
                    payload: response.data,
                })
            })
            .catch(console.log)
            })
            .catch(e =>{
                console.log(e)
            })
        // dispatch(postCourse(form));
    }
    return (
        <>
            <h1>Agregar un curso</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Ej: Docker"/>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
        </>
    );
};
