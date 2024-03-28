import './css/style.css'
import { useState } from 'react';

export default function App() {
  const [discList, setDiscList] = useState([
    new Disc("Bat Out of Hell", "img/bat_out_of_hell.jpg", "123", "Популярное"),
    new Disc("Greatest Hits", "img/greatest_hits.jpg", "123", "Популярное"),
    new Disc( "The Woman in Me", "img/the-woman-in-me.png", "123", "Популярное"),
    new Disc( "Born in the U.S.A.", "img/born-in-the-usa.jpg", "123", "Популярное"),
    new Disc( "Чайковский. На все времена", "img/chaykovsky.jpeg", "123", "Классическая музыка"),
    new Disc( "Моцарт. 46 симфоний", "img/mozart.jpeg", "123", "Классическая музыка"),
    new Disc( "Vivaldi. Concerti per violino Violoncello e Archi", "img/vivaldi.jpg", "123", "Классическая музыка"),
    new Disc( "The Best of Chopin", "img/chopin.jpg", "123", "Классическая музыка"),
    new Disc( "Mojo Helden", "img/mojo_helden.jpg", "123", "Блюз"),
    new Disc( "Bottleneck Sessions", "img/bottleneck_sessions.jpg", "123", "Блюз"),
    new Disc( "Talkin' That Talk", "img/talkin-that-talk.jpg", "123", "Блюз"),
    new Disc( "Two Pines", "img/two-pines.jpg", "123", "Блюз"),
    new Disc( "Fly or Die Fly or Die Fly or Die", "img/fly-or-die.png", "123", "Джаз"),
    new Disc( "Urban Jazzscape", "img/urban-jazzscape.jpg", "123", "Джаз"),
    new Disc( "My Sixties in Jazz", "img/my-sixties-in-jazz.jpg", "123", "Джаз"),
    new Disc( "Late Night Improvs", "img/late-night-improvs.jpg", "123", "Джаз"),
    new Disc( "Burning Castles", "img/burning-castles.jpg", "123", "Рок-музыка"),
    new Disc( "Recurring", "img/recurring.jpg", "123", "Рок-музыка"),
    new Disc( "Severance", "img/severance.jpg", "123", "Рок-музыка"),
    new Disc( "Electric Sounds", "img/electric-sounds.jpg", "123", "Рок-музыка"),
    new Disc( "IDENTITY", "img/identity.jpg", "123", "Металл"),
    new Disc( "A Dark Euphony", "img/a-dark-euphony.jpg", "123", "Металл"),
    new Disc( "Everfrost", "img/everfrost.jpg", "123", "Металл"),
    new Disc( "Imperium", "img/imperium.jpg", "123", "Металл"),
    new Disc( "Midlife Crisis", "img/midlife-crisis.jpg", "123", "Хип-хоп"),
    new Disc( "BasketCase", "img/basket-case.jpg", "123", "Хип-хоп"),
    new Disc( "Pulingo", "img/pulingo.jpg", "123", "Хип-хоп"),
    new Disc( "Ringue da Vida", "img/ringua.jpg", "123", "Хип-хоп"),
    new Disc( "Step by Step", "img/step-by-step.jpg", "123", "Кантри"),
    new Disc( "The Moment", "img/the-moment.jpg", "123", "Кантри"),
    new Disc( "Melbourne Sentimental", "img/melbourne-sentimental.jpg", "123", "Кантри"),
    new Disc( "Jeans On", "img/jeans-on.jpg", "123", "Кантри")
  ]);
  const [discSet, setDiscSet] = useState(new Set());
  return (<>
    <Header discSet={discSet} setDiscSet={setDiscSet}/>
    <Main discList={discList} addToCart={AddDiscToCart}/>
  </>
  );

  function AddDiscToCart(Disc){
    let newDiscSet = new Set(discSet);
    newDiscSet.add(Disc);
    setDiscSet(newDiscSet);
  }
}
//todo - при нажатии на кнопку, вкорзину добавляется диск
function DiscItem({name, imgPath, price, addToCart}){
  return(
    <li className="disc-item">
      <a href="#" className="about-disc-link">
        <h3 className="disc-name">{name}</h3>
        <img src={imgPath} alt={'Обложка диска ' + name} className="disc-cover" width={200} height={200}/>
      </a>
      <p className="price">
        <span className="price-title">Цена:</span>
        <span className="price-value">{price}</span>
      </p>
      <button className="to-cart" onClick={addToCart}>В корзину</button>
    </li>
  )
}

function Genre({genreName, discList, addToCart}){
  let discs = discList.map((disc, key) => <DiscItem name={disc.name} imgPath={disc.imgPath} price={disc.price} addToCart={()=>addToCart(disc)} key={key}/>)
  return(
    <section className="genre">
        <h2 className="genre-name">{genreName}</h2>
        <ul className="disc-list">
          {discs}
        </ul>
    </section>
  )
}

function Main({discList, addToCart}){
  let genreList = GenerateGenreMap(discList);
  let genres = [];
  let key = 0;
  for (let [genreName, genreDiskList] of genreList){
    genres.push(<Genre genreName={genreName} discList={genreDiskList} addToCart={addToCart} key={key++}/>)
  }

  return(<main className='page-main'>
    {genres}
  </main>)
  function GenerateGenreMap(discList){
    let genreSet = new Set();
    let genres = new Map();
    for (let i = 0; i < discList.length; i++){
      let disc = discList[i];
      genreSet.add(disc.genreName);
    }
    for (let genreName of genreSet){
      genres.set(genreName, []);
    }
    for (let i = 0; i < discList.length; i++){
      let disc = discList[i];
      genres.get(disc.genreName).push(disc);
    }
    return genres;
  }
}

class Disc{
  constructor(name, imgPath, price, genreName){
    this.name=name;
    this.imgPath=imgPath;
    this.price=price;
    this.genreName = genreName;
  }
}

function Header({discSet, setDiscSet}){
  const [isCartHidden, setIsCartHidden] = useState(true);
  return(
  <header className="page-header">
      <a href="#"><img src="img/logo.svg" alt="Логотип магазина" className="logo" width="70" height="70"/></a>
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
    <CartPushUp discSet={discSet} setDiscSet={setDiscSet} isHidden={isCartHidden}/>
  </header>);
}

function CartPushUp({discSet, setDiscSet, isHidden}){
  let itemList = []
  let key = 0;
  for (let disc of discSet){
    itemList.push(<CartPushUpItem discName={disc.name} removeFromCart={() => DeleteDisc(disc)} key={key++}/>);
  }
  let result;
  if (discSet.size != 0) result = (<>
    <ul>
      {itemList}
    </ul>
    <button onClick={() => setDiscSet(new Set())}>Очистить корзину</button>
  </>
  );
  else result = <p>Корзина пуста</p>;
  return(<div className={'cart-pushup' + (isHidden ? " hidden" : "")}>
    {result}
  </div>)

  function DeleteDisc(discName){
    let newDiscSet = new Set(discSet);
    newDiscSet.delete(discName);
    setDiscSet(newDiscSet);
  }
}

function CartPushUpItem({discName, removeFromCart}){
  return(<li>
    <span>{discName}</span>
    <button onClick={removeFromCart}>Удалить</button>
  </li>)
}