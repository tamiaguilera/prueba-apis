import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MiApi } from './components/MiApi';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <MiApi></MiApi>
     <Footer></Footer>
    </div>
  )
}

export default App;
