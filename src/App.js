import Header from './components/Header';
import styles from './styles.scss';
import { Modal } from './components/Modal';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import axios from 'axios';

// const arr = [
//   {
//     title: 'SNEAKERSY Adidas Model X white/pink',
//     price: 80,
//     img: './imgItems/1.jpg',
//   },
//   { title: 'SNEAKERSY Salomon GOAT SE05', price: 120, img: './imgItems/2.jpg' },
//   {
//     title: 'SNEAKERSY CALVIN KLEIN JEANS',
//     price: 299,
//     img: './imgItems/3.jpg',
//   },
//   { title: 'SNEAKERSY KARL LAGERFELD', price: 699, img: './imgItems/4.jpg' },
//   { title: 'SNEAKERSY LOVE MOSCHINO V8', price: 300, img: './imgItems/5.jpg' },
//   {
//     title: 'SNEAKERSY CALVIN KLEIN JEANS',
//     price: 410,
//     img: './imgItems/6.jpg',
//   },
//   { title: 'SNEAKERSY LOVE MOSCHINO V99', price: 999, img: './imgItems/7.jpg' },
//   {
//     title: 'BUTY REEBOK Zig Kinetica 2.5 Plus GX0482 Mix',
//     price: 150,
//     img: './imgItems/8.jpg',
//   },
// ];



function App() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [removeCartItems, setRemoveCartItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://6410743cbe7258e1452a6a4a.mockapi.io/items')
      .then((res) => setItems(res.data));
    axios
      .get('https://6410743cbe7258e1452a6a4a.mockapi.io/cart')
      .then((res) => setcartItems(res.data));
  }, []);

  const addToCart = (p) => {
    axios.post('https://6410743cbe7258e1452a6a4a.mockapi.io/cart', p);
    setcartItems([...cartItems, p]);
  };

  const removeFromCart = (id) => {
    axios.delete(`https://6410743cbe7258e1452a6a4a.mockapi.io/cart/${id}`);
    setcartItems((prev)=> prev.filter((item)=> item.id !==id))
   
  }

  return (
    <div className="wrapper">
      <div className="container">
        {modal && <Modal x={setModal} items={cartItems} removeFromCart={removeFromCart}/>}
        <Header x={setModal} />
        <main>
          <div className="search">
            {input ? <h2>Search for:{input}</h2> : <h2>All products:</h2>}
            <input
              type="text"
              placeholder="search...."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="cards">
            {items
              .filter((word) => word.title.toLowerCase().includes(input))
              .map((el, index) => {
                return <Card product={el} key={index} addToCart={addToCart} />;
              })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
