import { Cart } from './Cart';
import { DiscItem } from './Disc';
import { Genre } from './Genre';
import './css/style.css'
import { useEffect, useState } from 'react';

export default function App() {
  const [discList, setDiscList] = useState([]);

  const [cartList, setCartList1] = useState([]);
  function setCartList(newCart) {
    setCartList1(newCart)
  }

  useEffect(() => {
    fetch('/disc')
    .then(r => {
      if (r.ok) {
        r.json()
        .then(json => {
          setDiscList(json)
        })
      } else {
        alert('Ошибка загрузки дисков')
      }
    })
    fetch('cart')
    .then(async r => {
      setCartList(await r.json())
    })
  }, [])

  return (<>
    <Header cartList={cartList} setCartList={setCartList}/>
    <Main discList={discList} addToCart={AddDiscToCart}/>
  </>
  );

  function AddDiscToCart(disc){
    if (cartList.every(d => d.id != disc.id)) {
      fetch('/cart?discId='+disc.id, {
        method:'POST'
      }).then(r => {
        if (r.ok) {
          setCartList([...cartList, disc]);
        } else {
          alert('Ошибка')
        }
      })
    }
  }
}

function Header({cartList, setCartList}){
  const [isCartHidden, setIsCartHidden] = useState(true);
  return(
  <header className="page-header">
      <a href="#"><img src="img/logo.svg" alt="Логотип Магазина" className="logo" width="70" height="70"/></a>
      <nav className="main-nav">
          <ul className="nav-list">
              <li className="nav-item"><a href="#">Главная</a></li>
              <li className="nav-item"><a href="#">Поиск</a></li>
              <li className="nav-item"><a href="#">Детям</a></li>
              <li className="nav-item"><a href="#">Аудиокниги</a></li>
              <li className="nav-item"><a href="#">О нас</a></li>
          </ul>
      </nav>
      <button href="#" className="cart" onClick={() => setIsCartHidden(!isCartHidden)}><img src="img/cart.svg" alt="Корзина"/></button>
      <a href="#" className="login">Войти</a>
    <Cart cartList={cartList} setCartList={setCartList} isHidden={isCartHidden}/>
  </header>);
}

function Main({discList, addToCart}){
  let genreList = discList.map(disc => disc.genre)
  genreList = [...new Set(genreList)]

  return(<main className='page-main'>
    {genreList.map(genre => <Genre discList={discList} genre={genre} addToCart={addToCart} />)}
  </main>)
}

