import React from 'react'
import { CursoItem } from './CursoItem';

export const CursoList = (props) => {
    const {cursos} = props;
    return (
        <div className="curso__list">
            {cursos.map(curso => (
                <CursoItem key={curso._id} name={curso.name} id={curso._id}/>

            ))}
        </div>
    )
}
