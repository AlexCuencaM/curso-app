import { postCurso } from "../../services/curso-service";
import { types } from "../types/types";
export const postCourse = (course) =>{
    return dispatch =>{
        postCurso(course)
            .then(res => dispatch(curso(course)))
            .catch(error=> dispatch(emptyCourse()))
        
    }
}

export const curso = (course) => ({
    type:types.cursoAdd,
    payload: course,
})

export const emptyCourse = () =>({
    type: types.courseEmpty,
    payload: "Is empty",
})