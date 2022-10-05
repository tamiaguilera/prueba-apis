import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MiApi } from './components/MiApi';

function App() {

  const [api, setApi] = useState([]);
  const [rows, setRows] = useState([]);
  const [orden, setOrden] = useState('');

  useEffect(() => {
    llamarServicio();
  }, [])

  useEffect(() => {
    ordenarDatos();
  }, [orden])

  const llamarServicio = () => {
    fetch('/index.php/ws/getLocalesTurnos')
    .then(res => res.json())
    .then(res => {
      setApi(res);
      setRows(res);
    });
  }

  const ordenarDatos = () => {
    const filas = [...rows];
    let resultado = [];
    if(orden === 'asc'){
      resultado = filas.sort( (a, b) => a.comuna_nombre.toLowerCase().localeCompare(b.comuna_nombre.toLowerCase()));
    }else{
      resultado = filas.sort( (a, b) => b.comuna_nombre.toLowerCase().localeCompare(a.comuna_nombre.toLowerCase()));
    }
    setRows(resultado);
  }

  const handleBuscar = (e) => {
    const buscar = e.target.value.toLowerCase();
    const filtrar = api.filter( (row) => {
      const comuna = row.comuna_nombre.toLowerCase();
      return comuna.includes(buscar);
    })
    setRows(filtrar);
  }

  const handleOrdenar = (e) => {
    setOrden(e.target.value);
  }

  return (
    <div className="App">
     <Header
      handleBuscar={handleBuscar}
      orden={orden}
      handleOrdenar={handleOrdenar}></Header>
     <MiApi rows={rows}/>
     <Footer></Footer>
    </div>
  )
}

export default App;
