export const CursoItem = (props) => {
    const { name, id } = props;
    return (
        // JSX
        <div className="curso__item">
            <h3>Curso: {name} </h3>
            <hr/>
            <p>Id: {id}</p>
        </div>
    )
}
