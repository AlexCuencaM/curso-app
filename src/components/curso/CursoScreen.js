import React, { useEffect } from 'react'
import { getCursos } from '../../services/curso-service'
import { AddCurso } from './AddCurso'
import { CursoList } from './CursoList'
import { useSelector, useDispatch } from "react-redux";
// const cursos2 = [
//     {
//         id:1,
//         name:"Docker",

//     },
//     {
//         id:2,
//         name:"Javascript",

//     },

// ]
export const CursoScreen = () => {
    const cursos = useSelector(state => state.cursos);
    // useEffect(() => {
    //     getCursos()
    //         .then(response =>{
    //             setCursos(response);
    //         })
    //         .catch(console.log)
    // }, [cursos])
    return (
        <div>
            <AddCurso/>
            <CursoList cursos={ cursos }/>
        </div>
    )
}
