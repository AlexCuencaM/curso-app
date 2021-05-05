import { useReducer } from "react";
import { CursoContext } from "./state/CursoContext";
import { cursoReducer } from "./state/reducers/cursoReducer";
import { CursoScreen } from "./components/curso/CursoScreen";


function App() {
    const [state, dispatch] = useReducer(cursoReducer, []);
    return (
        <>
            <h1>Curso APP</h1>
            <CursoContext.Provider value={{ state, dispatch }}>
                <CursoScreen />
            </CursoContext.Provider>
        </>
    );
}

export default App;
