import Main from './components/Main/Main'
import ListContextProvider from "./components/Contexts/ListContext";

function App() {
  return (
    <ListContextProvider>
      <Main />
    </ListContextProvider>
  );
}

export default App;
