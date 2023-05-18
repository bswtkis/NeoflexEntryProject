import { Header } from './components/Header';
import { headerData } from './data/data';
import './assets/Styles/reset.min.sass';
import './assets/Styles/base.sass'
function App() {
  return(
    <Header headerData={headerData} />
  )
}

export default App;
