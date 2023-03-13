import Header from './components/Header';
import styles from './styles.scss';
import { Modal } from './components/Modal';
import { useState } from 'react';
import { Card } from './components/Card';

const arr = [
  {
    title: 'SNEAKERSY Adidas Model X white/pink',
    price: 80,
    img: './imgItems/1.jpg',
  },
  { title: 'SNEAKERSY Salomon GOAT SE05', price: 120, img: './imgItems/2.jpg' },
  {
    title: 'SNEAKERSY CALVIN KLEIN JEANS',
    price: 299,
    img: './imgItems/3.jpg',
  },
  { title: 'SNEAKERSY KARL LAGERFELD', price: 699, img: './imgItems/4.jpg' },
  { title: 'SNEAKERSY LOVE MOSCHINO V8', price: 300, img: './imgItems/5.jpg' },
  {
    title: 'SNEAKERSY CALVIN KLEIN JEANS',
    price: 410,
    img: './imgItems/6.jpg',
  },
  { title: 'SNEAKERSY LOVE MOSCHINO V99', price: 999, img: './imgItems/7.jpg' },
  {
    title: 'BUTY REEBOK Zig Kinetica 2.5 Plus GX0482 Mix',
    price: 150,
    img: './imgItems/8.jpg',
  },
];

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="wrapper">
      <div className="container">
        {modal && <Modal x={setModal} />}
        <Header x={setModal} />
        <main>
          <div className="search">
            <h2>All products:</h2>
            <input type="text" placeholder="search...." />
          </div>
          <div className="cards">
            {arr.map((el) => {
              return <Card x={el} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
