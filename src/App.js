import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

function App() {
  let [storage, setStorage] = useState([])
  return (
    <Main storage={storage} setStorage={setStorage}></Main>
  );
}

export default App;
