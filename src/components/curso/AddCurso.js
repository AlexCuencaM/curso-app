import React from "react";
import { useForm } from "../../hooks/useForm";
import { postCourse } from "../../redux/actions/curso";
import { useDispatch } from "react-redux";

export const AddCurso = () => {
    const dispatch = useDispatch();
    const [form, handleChange] = useForm({
        name:"",
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(postCourse(form));
    }
    return (
        <>
            <h1>Agregar un curso</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Ej: Docker"/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
};
