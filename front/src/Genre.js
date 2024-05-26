export function Genre({genre, discList, addToCart}){
    return(
      <section className="genre">
          <h2 className="genre-name">{genre}</h2>
          <ul className="disc-list">
            {discList.filter (disc => disc.genre == genre)
            .map((disc, key) => <DiscItem disc={disc} addToCart={addToCart} key={key}/>)}
          </ul>
      </section>
    )
  }
  
   function DiscItem({disc, addToCart}){
    return(
      <li className="disc-item">
        <a href="#" className="about-disc-link">
          <h3 className="disc-name">{disc.name}</h3>
          <img src={disc.coverPath} alt={'Обложка диска ' + disc.name} className="disc-cover" width={200} height={200}/>
        </a>
        <p className="price">
          <span className="price-title">Цена:</span>
          <span className="price-value">{disc.price}</span>
        </p>
        <button className="to-cart" onClick={() => addToCart(disc)}>В корзину</button>
      </li>
    )
  }