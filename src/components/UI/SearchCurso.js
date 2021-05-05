import React, { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { CursoContext } from '../../state/CursoContext';
import { getCourseByName } from '../../state/selectors/getCourseByName';
import { CursoItem } from '../curso/CursoItem';

export const SearchCurso = () => {
    const {state: courses} = useContext(CursoContext);
    const [form, handleChange] = useForm({
        name:"",
    })
    // const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])
    const handleSubmit = (e) =>{
        setResults(getCourseByName(courses, form.name))
        e.preventDefault();

    }
    return (
        <>
            <h1>Buscar un curso</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Ej: Docker"/>
                <input type="submit" value="Search"/>
            </form>
            {results.length > 0 ? 
                results.map(result => 
                <CursoItem id={result._id} name={result.name}/>
                )
                : <p>No hay resultados :c</p>
            }
        </>
    );
}
