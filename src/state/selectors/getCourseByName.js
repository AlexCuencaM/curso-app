export const getCourseByName = (courses, name) =>{
    return courses.filter(course => course.name === name);
}