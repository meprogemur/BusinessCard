import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState({
    view: true
  });

  const changeMode = () => {
    console.log(mode.view)
    setMode({
      view: !mode.view
    });
  }

  return (
    <div className="container" onClick={changeMode}>
      <Profile />
      <Main view={mode.view} />
      <Footer view={mode.view} />
    </div>
  );
}

export default App;
