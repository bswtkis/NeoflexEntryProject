import { Header } from "./components/Header";
import { headerData } from "./data/data";
import { HeaderContext } from "./context/HeaderContext";
import './assets/Styles/reset.min.sass';
function App() {
  return(
    <HeaderContext.Provider value={headerData}>
      <Header />
    </HeaderContext.Provider>
  )
}

export default App;
