import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './Components/User/User';

function App() {
  const[familiar,setFamiliar]=useState(false);
  return (
    <div className="App">
      <h2>Is familiar:{familiar.toString()}</h2>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle friend</button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
