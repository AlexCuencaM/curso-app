import React, { useContext, useEffect, useState } from 'react'

import { getCursos } from '../../services/curso-service'
import { CursoContext } from '../../state/CursoContext'
import { types } from '../../state/types'
import { SearchCurso } from '../UI/SearchCurso'
// import { getAllCourses } from '../../state/selectors/getAllCourses'
import { AddCurso } from './AddCurso'
import { CursoList } from './CursoList'

export const CursoScreen = () => {
    // const cursos = useSelector(state => state.cursos);
    const [cursos, setCursos] = useState([]);
    const {state, dispatch} = useContext(CursoContext);
    useEffect(() => {
        getCursos()
            .then(response =>{
                dispatch({
                    type:types.results,
                    payload: response.data,
                })
                // setCursos(response.data)
            })
            .catch(console.log)

    }, [dispatch])
    useEffect(() => {
        console.log(state);
        setCursos(state);
    }, [state])
    return (
        <div className="container-flex">
            <AddCurso/>
            <CursoList cursos={ cursos }/>
            <SearchCurso/>
        </div>
    )
}
