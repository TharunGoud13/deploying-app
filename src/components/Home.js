const Home = (props) => {
  console.log("props", props);
  return (
    <div>
      <div className="cartImage">
        <span className="count">{props.data.length}</span>
        <img
          src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
          className="img"
          alt=""
        />
        <h1>Home Component</h1>
      </div>
      <div className="item-container">
        <img
          src="https://www.91-img.com/gallery_images_uploads/a/5/a50823d7920249ee4e5d41bd3bdae345706be44b.jpg?tr=h-630,c-at_max,q-80"
          className="item"
          alt="phone"
        />
        <p>Iqoo 7</p>
        <div>
          <button
            onClick={() => {
              props.addToCartHandler({ phone: "Iqoo7", price: 30000 });
            }}
          >
            Add To Cart
          </button>
          <br />
          <button
            onClick={() => {
              props.removeFromCartHandler();
            }}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
