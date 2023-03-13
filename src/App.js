import Header from './components/Header';
import styles from './styles.scss'
import Main from './components/Main';
import { Modal } from './components/Modal';
import { useState } from 'react';




function App() {

  const[modal, setModal] = useState(false)
  


  return (
    <div className="wrapper">
      <div className="container">
      {modal && <Modal x={setModal} />}
      <Header x={setModal} />
      <Main />
      </div>
     
    </div>
  );
}

export default App;
