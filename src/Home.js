import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-halloween-movies-1570051353.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
        alt=""
      />

      {/* Product Comp */}
      {/* id, title,price, rating, image */}
      <div className="home__row">
        <Product
          id={12321341}
          title="Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future"
          price={11.96}
          rating={5}
          image="https://www.amazon.in/images/I/91CyhdaumeL.jpg"
        />
        <Product
          id={12321341}
          title="My Easy Art- Lake under Sunset Wall Art Decor Bird flying Over the Pier in Tropical Island Canvas Pictures Artwork Nature Nautical Landscape 24x24 inch Painting Prints for Home Bathroom"
          price={36.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51JspS-CkVL._AC_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={12321341}
          title="Apple AirPods Pro"
          price={329}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
        />
        <Product
          id={12321341}
          title="CeraVe Daily Moisturizing Lotion, Face, Body & Hands Lotion for Dry Skin with Hyaluronic Acid, Suitable for Sensitive Skin, Fragrance-Free, Verified Product by CeraVe, 473 mL"
          price={17.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/717eK%2BvRVAL._AC_SL1500_.jpg"
        />
        <Product
          id={12321341}
          title="MACBOOK PRO 2019 TOUCHBAR 16 i9-9880H 16 1TB SSD 5500M FPR SILVER MVVM2LL"
          price={3045.77}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71uedAhaSFL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12321341}
          title="ocelo Light Duty Scrub Sponge, 6-Sponges/Pk, 6-Packs (36 Sponges Total)"
          price={42.51}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91DTUy16C1L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
