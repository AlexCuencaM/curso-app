import React from 'react'
import { CursoItem } from './CursoItem';

export const CursoList = (props) => {
    const {cursos} = props;
    return (
        <div className="curso__list">
            {cursos.map(curso => (
                <CursoItem key={curso.id} name={curso.name} id={curso.id}/>

            ))}
        </div>
    )
}
