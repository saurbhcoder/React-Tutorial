// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Light Mode');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (msg, type) => {
    setAlert({
      type : type,
      msg  : msg
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const changeMode = () => {
    console.log('call');
    if(mode === 'light'){
      setMode('dark');
      setTitle('light');
      showAlert('Light mode is enabled', "success");
    }else{
      setMode('light');
      setTitle('dark')
      showAlert('Dark mode is enabled', "danger");
    }
  }
  return (
    <>
      <Navbar title={title} mode = {mode} changeMode = {changeMode}/>
      <Alert alertText={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} />
      </div>
      <About/>
    </>
  );
}

export default App;
