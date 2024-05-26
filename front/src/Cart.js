export function Cart({cartList, setCartList, isHidden}){
    if (cartList == 0) {
        return (
            <div className={'cart-pushup' + (isHidden ? " hidden" : "")}>
                <p>Корзина пуста</p>
            </div>
        )
    }
    else return(
        <div className={'cart-pushup' + (isHidden ? " hidden" : "")}>
            <ul>
                {cartList.map(disc => <CartItem disc={disc} removeFromCart={removeFromCart}/>)}
            </ul>
            <button onClick={clearCart}>Очистить корзину</button>
        </div>
    )
  
    function removeFromCart(id){
        fetch('/cart?discId='+id, {method:'DELETE'})
        .then((r) => {
            if (r.ok) {
                setCartList(cartList.filter(disc => disc.id != id))
            } else {
                alert('Ошибка')
            }
        })
    }

    function clearCart() {
        fetch('/cart/clear', {method:'DELETE'})
        .then(r => {
            if (r.ok) {
                setCartList([])
            } else {
                alert('Ошибка')
            }
        })
    }
  }

  function CartItem({disc, removeFromCart}){
    return(<li>
      <span>{disc.name}</span>
      <button onClick={() => removeFromCart(disc.id)}>Удалить</button>
    </li>)
  }