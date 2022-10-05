import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MiApi } from './components/MiApi';

function App() {


  return (
    <div className="App">
     <Header></Header>
     <MiApi/>
     <Footer></Footer>
    </div>
  )
}

export default App;
