import React from "react";
import "./Home.css";
import Product from "./Product";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/HGT/GW/3000X1200._CB630896464_.jpg"
          alt=""
        />
        <div className="home__row_One">
          <Product
            id="12"
            title="The Rudest Book Ever Paperback"
            price={208.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51S2+4UEWKL.jpg"
            rating={4}
          />
          <Product
            id="123"
            title="Nike The 10 Air Jordan 1 Nike x OFF-White"
            price={80000.0}
            image="https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_781ddd83-4315-4d9c-9c04-566ce543308d_1296x.jpg?v=1656288326"
            rating={3}
          />
          <Product
            id="19087"
            title="SofaArchitect Wooden Moris 5 Seater 3-1-1 Sofa Set (Grey)"
            price={33000.0}
            image="https://m.media-amazon.com/images/I/81RW6wqZSkL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1237654"
            title="Samsung Galaxy Watch5 Bluetooth (44 mm, Graphite, Compatible with Android only)"
            price={40900.0}
            image="https://m.media-amazon.com/images/I/61O5Xjb9uEL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="1237654"
            title="Dell Gaming G15 5525, AMD R7-6800H, 16GB, 512GB SSD, NVIDIA"
            price={33900.0}
            image="https://m.media-amazon.com/images/I/61K9AyvhgmL._SL1080_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234"
            title="OnePlus Nord 2T 5G"
            price={33900.0}
            image="https://m.media-amazon.com/images/I/61ahn9N38zL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1235"
            title="Tygatec G281, 8.5 inch All Terrain SUV Off-Road Hoverboard"
            price={29899.0}
            image="https://m.media-amazon.com/images/I/61piNhxOKtL._SL1100_.jpg"
            rating={5}
          />
          <Product
            id="1236"
            title="Introducing Echo Show 8"
            price={5999.0}
            image="https://m.media-amazon.com/images/I/61cinYAB+WS._SL1000_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="1237"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED"
            price={99999.0}
            image="https://m.media-amazon.com/images/I/81L7xr3NeHL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1237"
            title="CRADIAC - ALPHA LITE | 29 MTB | 6061 ALLOY FRAME | 21 SPEED SHIMANO ALTUS | LIGHT WEIGHT FRAME | DUAL DISC BRAKE | DOUBLE WALL ALLOY RIM "
            price={20999.0}
            image="https://m.media-amazon.com/images/I/71XL3Fh5-IL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
