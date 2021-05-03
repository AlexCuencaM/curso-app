import { CursoScreen } from "./components/curso/CursoScreen";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  return (
    <Provider store={store}>
      <h1>Curso APP</h1>
      <CursoScreen/>
    </Provider>
  );
}

export default App;
