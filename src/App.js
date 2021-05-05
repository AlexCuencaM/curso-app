import { useReducer } from "react";
import { CursoContext } from "./state/CursoContext";
import { cursoReducer } from "./state/reducers/cursoReducer";
import { CursoScreen } from "./components/curso/CursoScreen";
import "./sass/styles.scss";

function App() {
    const [state, dispatch] = useReducer(cursoReducer, []);
    return (
        <>
            <CursoContext.Provider value={{ state, dispatch }}>
                <CursoScreen />
            </CursoContext.Provider>
        </>
    );
}

export default App;
